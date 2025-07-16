import React from 'react';
import SplineViewer from './SplineViewer';

interface SplineAnimationProps {
  sceneUrl?: string;
  className?: string;
  height?: string;
}

const SplineAnimation: React.FC<SplineAnimationProps> = ({
  sceneUrl = 'https://prod.spline.design/rMylZE0LtWz1dT3B/scene.splinecode',
  className = '',
  height = '100%'
}) => {
  return (
    <SplineViewer
      sceneUrl={sceneUrl}
      className={className}
      height={height}
      debugMode={false}
      cameraControls={true}
      autoRotate={false}
      interactionPrompt={false}
    />
  );
};

export default SplineAnimation;