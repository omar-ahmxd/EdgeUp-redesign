import React, { useState } from 'react';
import SplineViewer from '../components/common/SplineViewer';
import SplineUrlVerifier from '../components/common/SplineUrlVerifier';

const SplineDebug: React.FC = () => {
  const [sceneInfo, setSceneInfo] = useState<Record<string, unknown> | null>(null);
  const [cameraControls, setCameraControls] = useState(true);
  const [autoRotate, setAutoRotate] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const splineUrl = "https://prod.spline.design/rMylZE0LtWz1dT3B/scene.splinecode";

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Spline Robot Debug</h1>
      
      {/* URL Verification */}
      <div className="mb-6">
        <SplineUrlVerifier url={splineUrl} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Viewport Controls:</h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-sm font-medium">Camera Controls</span>
              <input 
                type="checkbox" 
                checked={cameraControls} 
                onChange={(e) => setCameraControls(e.target.checked)}
                className="w-4 h-4 text-purple-600"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm font-medium">Auto Rotate</span>
              <input 
                type="checkbox" 
                checked={autoRotate} 
                onChange={(e) => setAutoRotate(e.target.checked)}
                className="w-4 h-4 text-purple-600"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm font-medium">Interaction Prompt</span>
              <input 
                type="checkbox" 
                checked={showPrompt} 
                onChange={(e) => setShowPrompt(e.target.checked)}
                className="w-4 h-4 text-purple-600"
              />
            </label>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Scene Information:</h2>
          <p className="text-sm text-gray-600 mb-2">URL: {splineUrl}</p>
          {sceneInfo && (
            <div className="mt-4 p-4 bg-gray-50 rounded max-h-48 overflow-y-auto">
              <h3 className="font-semibold mb-2">Detected Objects:</h3>
              <pre className="text-xs overflow-auto">{JSON.stringify(sceneInfo, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">3D Model View</h2>
        <SplineViewer
          sceneUrl={splineUrl}
          height="600px"
          debugMode={true}
          cameraControls={cameraControls}
          autoRotate={autoRotate}
          interactionPrompt={showPrompt}
          onSceneReady={(splineApp) => {
            console.log('Scene ready, analyzing objects...');
            
            const objectInfo: Record<string, unknown> = {
              foundObjects: [],
              robotParts: {}
            };
            
            // Try to find specific objects - expanded eye search
            const objectNames = [
              'Robot', 'Eyes', 'Eye', 'Body', 'Head', 'Arm',
              'Eye_Left', 'Eye_Right', 'LeftEye', 'RightEye',
              'eye', 'eyes', 'Pupils', 'Pupil', 'Iris'
            ];
            
            const app = splineApp as any;
            const foundObjects: string[] = [];
            const robotParts: Record<string, unknown> = {};
            
            objectNames.forEach(name => {
              const obj = app.findObjectByName?.(name);
              if (obj) {
                foundObjects.push(name);
                robotParts[name] = {
                  name: obj.name,
                  type: obj.type,
                  visible: obj.visible,
                  position: obj.position,
                  scale: obj.scale
                };
              }
            });
            
            objectInfo.foundObjects = foundObjects;
            objectInfo.robotParts = robotParts;
            
            // Try to get all objects if method exists
            if (app.getAllObjects) {
              const allObjects = app.getAllObjects();
              objectInfo.totalObjects = allObjects.length;
              objectInfo.allObjectNames = allObjects.map((obj: { name: string }) => obj.name);
              
              // Deep search for eye-related objects
              const eyeRelatedObjects = allObjects.filter((obj: any) => {
                const nameLower = obj.name?.toLowerCase() || '';
                return nameLower.includes('eye') || 
                       nameLower.includes('pupil') || 
                       nameLower.includes('iris') ||
                       nameLower.includes('ocular');
              });
              
              if (eyeRelatedObjects.length > 0) {
                objectInfo.eyeSpecificObjects = eyeRelatedObjects.map((obj: any) => ({
                  name: obj.name,
                  visible: obj.visible,
                  position: obj.position,
                  scale: obj.scale,
                  parent: obj.parent?.name
                }));
              }
            }
            
            setSceneInfo(objectInfo);
          }}
        />
        
        <div className="mt-4 p-4 bg-gray-50 rounded">
          <h3 className="font-semibold mb-2">Debug Instructions:</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Check browser console for object names and properties</li>
            <li>Look for any eyes-related objects in the scene hierarchy</li>
            <li>Try rotating the model to see all angles</li>
            <li>Check if eyes are hidden behind other geometry</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SplineDebug;