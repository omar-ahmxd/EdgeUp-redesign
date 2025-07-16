# Spline Robot Eyes Debug Guide

## Testing Steps

1. **Visit `/spline-debug` on your live site**
2. **Check the Scene Information panel** for:
   - Total number of objects
   - Any eye-related object names
   - The new "eyeSpecificObjects" section

## If Eyes Are Not Found

### Option 1: Check the Spline Editor
- Visit: https://app.spline.design/
- Open your scene: https://prod.spline.design/rMylZE0LtWz1dT3B/scene.splinecode
- Check if eyes exist in the scene hierarchy
- Ensure eyes are:
  - Not hidden (eye icon visible)
  - Not on a hidden layer
  - Have proper materials assigned

### Option 2: Try Alternative Spline URL
The old URL in SplineAnimation.tsx was:
```
https://prod.spline.design/D7RnQq8HaP1fQXcb/scene.splinecode
```

You could test if this model has visible eyes.

### Option 3: Camera/Viewport Issues
Eyes might be visible but:
- Behind the head geometry
- Too small to see
- Only visible from specific angles
- Need different lighting

### Option 4: Export Settings
In Spline editor:
1. Check export settings
2. Ensure "Include all objects" is selected
3. Re-export and update the URL

## Quick Fix Attempts

1. **Force Show All Objects** (add to SplineViewer):
```javascript
// After scene loads
const allObjects = app.getAllObjects();
allObjects.forEach(obj => {
  if (obj.name.toLowerCase().includes('eye')) {
    obj.visible = true;
    obj.scale = { x: 1.5, y: 1.5, z: 1.5 }; // Make bigger
  }
});
```

2. **Adjust Camera Position**:
- The eyes might be visible from a different angle
- Try zooming in on the head area

## Report Back

After testing, please share:
1. What objects appear in the debug panel
2. Any console errors
3. Whether eyes appear in the Spline editor
4. Screenshots of the debug page output