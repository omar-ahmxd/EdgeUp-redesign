import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Brain, AlertCircle } from 'lucide-react';

// Force dynamic import with error handling
const Spline = lazy(() => 
  import('@splinetool/react-spline').then(module => {
    console.log('Spline module loaded successfully');
    return module;
  }).catch(error => {
    console.error('Failed to load Spline module:', error);
    throw error;
  })
);

interface SplineViewerProps {
  sceneUrl: string;
  className?: string;
  height?: string;
  fallbackContent?: React.ReactNode;
  onSceneReady?: (app: unknown) => void;
  debugMode?: boolean;
  cameraControls?: boolean;
  autoRotate?: boolean;
  interactionPrompt?: boolean;
  loadingTimeout?: number;
}

const SplineViewer: React.FC<SplineViewerProps> = ({
  sceneUrl,
  className = '',
  height = '600px',
  fallbackContent,
  onSceneReady,
  debugMode = false,
  cameraControls = true,
  autoRotate = false,
  interactionPrompt = true,
  loadingTimeout = 30000 // 30 seconds for slower connections
}) => {
  const [loadingState, setLoadingState] = useState<'loading' | 'loaded' | 'error'>('loaded');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [retryCount, setRetryCount] = useState(0);
  const [showInteractionPrompt, setShowInteractionPrompt] = useState(true);
  const [splineApp, setSplineApp] = useState<unknown>(null);
  const maxRetries = 3;

  useEffect(() => {
    setLoadingState('loaded');
    setErrorMessage('');
  }, [sceneUrl]);

  useEffect(() => {
    // Set loading timeout for error state only
    const errorTimeout = setTimeout(() => {
      if (loadingState === 'loading') {
        console.error(`Spline loading timeout after ${loadingTimeout}ms`);
        handleError(new Error(`Loading timeout: Scene took too long to load (${loadingTimeout}ms)`));
      }
    }, loadingTimeout);
    
    return () => clearTimeout(errorTimeout);
  }, [loadingState, loadingTimeout]);

  const handleLoad = (app: unknown) => {
    console.log('Spline onLoad callback triggered');
    setSplineApp(app);
    
    if (debugMode) {
      console.log('Spline scene loaded:', app);
      console.log('Scene URL:', sceneUrl);
      
      if (app && typeof app === 'object' && 'findObjectByName' in app) {
        const allObjects = (app as any).getAllObjects?.() || [];
        console.log('All objects in scene:', allObjects);
      }
    }
    
    // Configure camera controls
    if (app && typeof app === 'object') {
      const splineApp = app as any;
      // Enable/disable camera controls
      if (!cameraControls && splineApp.setZoom) {
        splineApp.setZoom(false);
      }
      
      // Setup auto-rotation if enabled
      if (autoRotate && splineApp.emitEvent) {
        setInterval(() => {
          const camera = splineApp.findObjectByName('Camera');
          if (camera) {
            camera.rotation.y += 0.01;
          }
        }, 50);
      }
    }
    
    // Force loading state to loaded
    console.log('Setting loading state to loaded');
    setLoadingState('loaded');
    setRetryCount(0);
    
    // Hide interaction prompt after first interaction
    if (interactionPrompt) {
      setTimeout(() => {
        setShowInteractionPrompt(false);
      }, 5000);
    }
    
    if (onSceneReady) {
      onSceneReady(app);
    }
  };

  const handleError = (error: unknown) => {
    console.error('Spline loading error:', error);
    
    // Enhanced error analysis for deployment issues
    let errorMsg = error instanceof Error ? error.message : String(error) || 'Failed to load 3D scene';
    
    // Check for common deployment issues
    if (errorMsg.includes('Failed to fetch') || errorMsg.includes('NetworkError')) {
      errorMsg = 'Network error: Check if Spline URL is accessible and CORS is configured';
    } else if (errorMsg.includes('timeout')) {
      errorMsg = 'Loading timeout: The 3D scene is taking too long to load. This might be due to slow connection or large file size';
    } else if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
      errorMsg = 'HTTPS required: Spline scenes require HTTPS on live sites';
    }
    
    setErrorMessage(errorMsg);
    
    // Log additional debugging info
    if (debugMode) {
      console.log('Debug info:', {
        url: sceneUrl,
        protocol: window.location.protocol,
        hostname: window.location.hostname,
        retryCount,
        error: error
      });
    }
    
    if (retryCount < maxRetries) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setLoadingState('loaded');
      }, 2000);
    } else {
      setLoadingState('error');
    }
  };

  const _renderFallback = () => {
    if (fallbackContent) {
      return <>{fallbackContent}</>;
    }

    return (
      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <Brain className="w-24 h-24 text-purple-400 mx-auto mb-4" />
          <p className="text-purple-600 font-medium">AI-Powered Learning</p>
        </div>
      </div>
    );
  };


  const renderErrorState = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Failed to Load 3D Content
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {errorMessage}
        </p>
        <button
          onClick={() => {
            setRetryCount(0);
            setLoadingState('loaded');
          }}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  // Ensure HTTPS for production
  const secureUrl = sceneUrl.startsWith('http://') && window.location.protocol === 'https:' 
    ? sceneUrl.replace('http://', 'https://') 
    : sceneUrl;

  return (
    <div className={`relative ${className}`} style={{ height, willChange: 'transform', transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden', contain: 'layout style paint' }}>
      <Suspense fallback={<div></div>}>
        {loadingState !== 'error' && (
          <div className="absolute inset-0 z-0" style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}>
            <Spline
              key={`${secureUrl}-${retryCount}`}
              scene={secureUrl}
              onLoad={handleLoad}
              onError={handleError}
              style={{
                width: '100%',
                height: '100%',
                background: 'transparent',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
                willChange: 'transform',
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                contain: 'layout style paint'
              }}
              // Add iframe permissions for better compatibility
              {...(window.location.hostname !== 'localhost' && {
                sandbox: 'allow-same-origin allow-scripts allow-popups allow-forms',
                allow: 'autoplay; fullscreen; xr-spatial-tracking'
              })}
            />
          </div>
        )}
      </Suspense>

      {loadingState === 'error' && renderErrorState()}
      
      
      
      {debugMode && (
        <div className="absolute bottom-4 left-4 bg-black/75 text-white p-2 rounded text-xs">
          <div>Status: {loadingState}</div>
          <div>Retries: {retryCount}/{maxRetries}</div>
          {errorMessage && <div>Error: {errorMessage}</div>}
          {splineApp && (
            <>
              <div>Camera Controls: {cameraControls ? 'Enabled' : 'Disabled'}</div>
              <div>Auto Rotate: {autoRotate ? 'Enabled' : 'Disabled'}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SplineViewer;