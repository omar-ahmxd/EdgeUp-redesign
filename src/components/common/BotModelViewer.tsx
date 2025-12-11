import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { AlertTriangle } from 'lucide-react';

const botObjUrl = new URL(
  '../../../8403962d-ebac-4d09-a242-7c2322a5e11f/base.obj',
  import.meta.url
).href;

const botTextureDiffuse = new URL(
  '../../../8403962d-ebac-4d09-a242-7c2322a5e11f/texture_diffuse.png',
  import.meta.url
).href;

const botTextureNormal = new URL(
  '../../../8403962d-ebac-4d09-a242-7c2322a5e11f/texture_normal.png',
  import.meta.url
).href;

const botTextureRoughness = new URL(
  '../../../8403962d-ebac-4d09-a242-7c2322a5e11f/texture_roughness.png',
  import.meta.url
).href;

const botTextureMetallic = new URL(
  '../../../8403962d-ebac-4d09-a242-7c2322a5e11f/texture_metallic.png',
  import.meta.url
).href;

const preloadImage = (url: string) =>
  new Promise<void>(resolve => {
    if (typeof window === 'undefined') return resolve();
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = url;
  });

const preloadAssets =
  typeof window !== 'undefined'
    ? Promise.all([
        preloadImage(botTextureDiffuse),
        preloadImage(botTextureNormal),
        preloadImage(botTextureRoughness),
        preloadImage(botTextureMetallic)
      ]).catch(() => {})
    : Promise.resolve();

interface BotModelViewerProps {
  className?: string;
  height?: string;
  autoRotate?: boolean;
  onError?: () => void;
}

const BotModelViewer: React.FC<BotModelViewerProps> = ({
  className = '',
  height = '100%',
  autoRotate = true,
  onError
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadState, setLoadState] = useState<'loaded' | 'error'>('loaded');
  const [errorMessage, setErrorMessage] = useState('');
  const pointerTarget = useRef({ x: 0, y: 0 });
  const pointerActive = useRef(false);
  const lastPointerMove = useRef(0);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const baseRotation = useRef({ x: -0.02, y: 0, z: 0 }); // face camera head-on
  const animationEnabledRef = useRef(true);
  const prefersStaticRef = useRef(false);
  const lastFrameRef = useRef(0);
  const frameInterval = 1000 / 45; // cap render loop to ~45fps

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mounted = true;
    let animationFrame: number | null = null;
    const texturesToDispose: THREE.Texture[] = [];
    let model: THREE.Object3D | null = null;

    const scene = new THREE.Scene();
    scene.background = null;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = false; // shadows not needed for hero, keep it light
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0.6, 1.0, 4.2);
    camera.lookAt(0, 0.25, 0);

    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambient);

    const hemi = new THREE.HemisphereLight(0xffffff, 0xeeeeee, 0.6);
    scene.add(hemi);

    const key = new THREE.DirectionalLight(0xffffff, 1.2);
    key.position.set(5, 6, 8);
    scene.add(key);

    const rim = new THREE.DirectionalLight(0xffffff, 0.9);
    rim.position.set(-4, 2, -6);
    scene.add(rim);

    const fill = new THREE.PointLight(0xffffff, 0.8, 12);
    fill.position.set(0, 1.5, 2.6);
    scene.add(fill);

    const warm = new THREE.PointLight(0xffffff, 0.5, 10);
    warm.position.set(2.2, 1.1, -2.2);
    scene.add(warm);

    // Side lights to brighten the sides
    const leftSide = new THREE.DirectionalLight(0xffffff, 0.7);
    leftSide.position.set(-5, 1, 0);
    scene.add(leftSide);

    const rightSide = new THREE.DirectionalLight(0xffffff, 0.7);
    rightSide.position.set(5, 1, 0);
    scene.add(rightSide);

    const handlePointerMove = (event: PointerEvent) => {
      if (prefersStaticRef.current) return;
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      const x = (event.clientX / w) * 2 - 1;
      const y = (event.clientY / h) * 2 - 1;
      pointerTarget.current = {
        x: THREE.MathUtils.clamp(x, -1, 1),
        y: THREE.MathUtils.clamp(y, -1, 1)
      };
      pointerActive.current = true;
      lastPointerMove.current = performance.now();
    };

    const handlePointerLeave = () => {
      pointerActive.current = false;
      pointerTarget.current = { x: 0, y: 0 };
    };

    const handleResize = () => {
      if (!container) return;
      const { clientWidth, clientHeight } = container;
      if (clientWidth === 0 || clientHeight === 0) return;

      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('blur', handlePointerLeave);

    const renderFrame = (now: number) => {
      if (!mounted) return;
      if (!animationEnabledRef.current) return;

      const delta = now - lastFrameRef.current;
      if (delta < frameInterval) {
        animationFrame = requestAnimationFrame(renderFrame);
        return;
      }
      lastFrameRef.current = now;

      const isActive = pointerActive.current && now - lastPointerMove.current < 1200;
      const allowMotion = animationEnabledRef.current;
      const idleYaw = allowMotion && autoRotate ? Math.sin(now * 0.00035) * 0.08 : 0;
      const idlePitch = allowMotion && autoRotate ? Math.cos(now * 0.00042) * 0.03 : 0;

      const targetYaw = isActive ? pointerTarget.current.x * 1.1 : idleYaw;
      const targetPitch = isActive ? pointerTarget.current.y * 0.45 : idlePitch;

      if (modelRef.current) {
        const clampedYaw = THREE.MathUtils.clamp(targetYaw, -1.05, 1.05);
        const clampedPitch = THREE.MathUtils.clamp(targetPitch, -0.5, 0.5);
        const euler = new THREE.Euler(
          baseRotation.current.x + clampedPitch,
          baseRotation.current.y + clampedYaw,
          baseRotation.current.z,
          'YXZ'
        );
        const targetQuat = new THREE.Quaternion().setFromEuler(euler);
        modelRef.current.quaternion.slerp(targetQuat, 0.24);
      }

      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(renderFrame);
    };
    const startAnimation = () => {
      if (!animationEnabledRef.current) return;
      if (animationFrame === null) {
        animationFrame = requestAnimationFrame(renderFrame);
      }
    };

    const stopAnimation = () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    };

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      stopAnimation();
      setErrorMessage('3D preview paused. Please reload or re-open this section.');
      setLoadState('error');
    };
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        if (animationEnabledRef.current) startAnimation();
      } else {
        stopAnimation();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePerformanceMode = () => {
      const forceStatic = motionQuery.matches;
      prefersStaticRef.current = forceStatic;
      animationEnabledRef.current = !forceStatic;
      if (animationEnabledRef.current) {
        startAnimation();
      } else {
        stopAnimation();
        renderer.render(scene, camera);
      }
    };

    updatePerformanceMode();
    motionQuery.addEventListener('change', updatePerformanceMode);

    const loadModel = async () => {
      try {
        await preloadAssets;

        const manager = new THREE.LoadingManager();
        const textureLoader = new THREE.TextureLoader(manager);

        const loadTexture = async (url: string, useSRGB = false) => {
          const tex = await textureLoader.loadAsync(url);
          if (useSRGB) {
            tex.colorSpace = THREE.SRGBColorSpace;
          }
          texturesToDispose.push(tex);
          return tex;
        };

        const [colorMap, normalMap, roughnessMap, metalnessMap] = await Promise.all([
          loadTexture(botTextureDiffuse, true),
          loadTexture(botTextureNormal),
          loadTexture(botTextureRoughness),
          loadTexture(botTextureMetallic)
        ]);

        const material = new THREE.MeshStandardMaterial({
          map: colorMap,
          normalMap,
          roughnessMap,
          metalnessMap,
          metalness: 0.3,
          roughness: 0.5,
          envMapIntensity: 1.2
        });

        const objLoader = new OBJLoader(manager);
        const obj = await objLoader.loadAsync(botObjUrl);

        obj.traverse(child => {
          const mesh = child as THREE.Mesh;
          if ((mesh as any).isMesh) {
            mesh.material = material;
            mesh.castShadow = false;
            mesh.receiveShadow = false;
          }
        });

        const box = new THREE.Box3().setFromObject(obj);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);

        obj.position.sub(center);
        const maxAxis = Math.max(size.x, size.y, size.z);
        const scale = 1.6 / maxAxis;
        obj.scale.setScalar(scale);
        obj.position.y += 0.36;
        obj.rotation.set(baseRotation.current.x, baseRotation.current.y, baseRotation.current.z);

        const coolSpot = new THREE.SpotLight(0xffffff, 0.8, 10, Math.PI / 4.5, 0.5, 1.3);
        coolSpot.position.set(-1.6, 2.6, 2.6);
        scene.add(coolSpot);

        const softSpot = new THREE.SpotLight(0xffffff, 0.8, 10, Math.PI / 5.5, 0.5, 1.1);
        softSpot.position.set(1.8, 2.2, 2.2);
        scene.add(softSpot);

        const frontFill = new THREE.PointLight(0xffffff, 1.0, 6);
        frontFill.position.set(0.4, 1.3, 2.2);
        scene.add(frontFill);

        scene.add(obj);
        model = obj;
        modelRef.current = obj;
        setLoadState('loaded');
        if (!animationEnabledRef.current) {
          renderer.render(scene, camera);
        }
      } catch (err) {
        console.error('Bot model load error:', err);
        if (!mounted) return;
        setErrorMessage('Unable to load the 3D bot right now. Please refresh or try again.');
        setLoadState('error');
        onError?.();
      }
    };

    loadModel();

    return () => {
      mounted = false;
      stopAnimation();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('blur', handlePointerLeave);
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      motionQuery.removeEventListener('change', updatePerformanceMode);
      renderer.dispose();

      texturesToDispose.forEach(tex => tex.dispose());

      if (model) {
        model.traverse(child => {
          const mesh = child as THREE.Mesh;
          if ((mesh as any).isMesh) {
            const material = mesh.material as THREE.Material | THREE.Material[];
            if (Array.isArray(material)) {
              material.forEach(mat => mat.dispose());
            } else if (material) {
              material.dispose();
            }
            if (mesh.geometry) {
              mesh.geometry.dispose();
            }
          }
        });
        scene.remove(model);
      }

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [autoRotate, onError]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{ height }}
    >
      {loadState === 'error' && errorMessage && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-white/85 backdrop-blur-lg rounded-xl px-4 py-3 text-sm text-gray-800 flex items-center gap-2 shadow-lg">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>{errorMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BotModelViewer;
