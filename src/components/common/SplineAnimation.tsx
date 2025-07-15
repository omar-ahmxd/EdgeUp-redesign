import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const SplineAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/D7RnQq8HaP1fQXcb/scene.splinecode')
        .catch(error => {
          console.error('Failed to load Spline scene:', error);
        });

      // Cleanup function
      return () => {
        if (app) {
          app.dispose?.();
        }
      };
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        id="canvas3d"
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

export default SplineAnimation;