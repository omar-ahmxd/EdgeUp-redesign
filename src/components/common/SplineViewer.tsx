import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Brain, Loader2, AlertCircle } from 'lucide-react';

const Spline = lazy(() => import('@splinetool/react-spline'));

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
  interactionPrompt = true
}) => {
  const [loadingState, setLoadingState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [retryCount, setRetryCount] = useState(0);
  const [showInteractionPrompt, setShowInteractionPrompt] = useState(true);
  const [splineApp, setSplineApp] = useState<unknown>(null);
  const maxRetries = 3;

  useEffect(() => {
    setLoadingState('loading');
    setErrorMessage('');
  }, [sceneUrl]);

  const handleLoad = (app: unknown) => {
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
    const errorMsg = error instanceof Error ? error.message : String(error) || 'Failed to load 3D scene';
    setErrorMessage(errorMsg);
    
    if (retryCount < maxRetries) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setLoadingState('loading');
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

  const renderLoadingState = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50 backdrop-blur-sm">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-purple-400 animate-spin mx-auto mb-4" />
        <p className="text-purple-600 font-medium">Loading 3D Scene...</p>
        {retryCount > 0 && (
          <p className="text-sm text-gray-600 mt-2">
            Retry attempt {retryCount} of {maxRetries}
          </p>
        )}
      </div>
    </div>
  );

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
            setLoadingState('loading');
          }}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  return (
    <div className={`relative ${className}`} style={{ height }}>
      <Suspense fallback={renderLoadingState()}>
        {loadingState !== 'error' && (
          <Spline
            key={`${sceneUrl}-${retryCount}`}
            scene={sceneUrl}
            onLoad={handleLoad}
            onError={handleError}
            style={{
              width: '100%',
              height: '100%',
              background: 'transparent',
            }}
          />
        )}
      </Suspense>

      {loadingState === 'loading' && renderLoadingState()}
      {loadingState === 'error' && renderErrorState()}
      
      {/* Interaction Prompt */}
      {loadingState === 'loaded' && interactionPrompt && showInteractionPrompt && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/75 text-white px-4 py-2 rounded-lg text-sm animate-pulse">
          <p>Click and drag to rotate • Scroll to zoom</p>
        </div>
      )}
      
      {/* Camera Controls */}
      {loadingState === 'loaded' && cameraControls && splineApp && (
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={() => {
              if (splineApp && typeof splineApp === 'object' && 'emitEvent' in splineApp) {
                (splineApp as any).emitEvent('mouseDown', 'Reset Camera');
              }
            }}
            className="bg-white/90 hover:bg-white p-2 rounded-lg shadow-lg transition-colors"
            title="Reset Camera"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      )}
      
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