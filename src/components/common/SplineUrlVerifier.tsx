import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface SplineUrlVerifierProps {
  url: string;
}

const SplineUrlVerifier: React.FC<SplineUrlVerifierProps> = ({ url }) => {
  const [status, setStatus] = useState<'valid' | 'invalid'>('valid');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Quick URL format check without loading states
    if (!url.includes('spline.design')) {
      setStatus('invalid');
      setMessage('URL must be a Spline.design URL');
      return;
    }

    if (url.includes('/edit/') || url.includes('/file/')) {
      setStatus('invalid');
      setMessage('This appears to be an editor URL. Please use the public share URL from Spline');
      return;
    }

    if (url.startsWith('http://') && window.location.protocol === 'https:') {
      setStatus('invalid');
      setMessage('HTTPS required: Change http:// to https:// in your Spline URL');
      return;
    }

    // If all checks pass, mark as valid
    setStatus('valid');
    setMessage('URL format appears correct');
  }, [url]);

  return (
    <div className={`p-4 rounded-lg border ${
      status === 'valid' ? 'bg-green-50 border-green-200' :
      'bg-red-50 border-red-200'
    }`}>
      <div className="flex items-center gap-3">
        {status === 'valid' && <CheckCircle className="w-5 h-5 text-green-500" />}
        {status === 'invalid' && <AlertCircle className="w-5 h-5 text-red-500" />}
        
        <div>
          <p className="font-medium">Spline URL Verification</p>
          <p className="text-sm text-gray-600">{message}</p>
          <p className="text-xs text-gray-500 mt-1 font-mono break-all">{url}</p>
        </div>
      </div>
      
      {status === 'invalid' && (
        <div className="mt-3 text-sm text-gray-700">
          <p className="font-medium mb-1">How to get the correct URL:</p>
          <ol className="list-decimal list-inside space-y-1 text-xs">
            <li>Open your project in Spline editor</li>
            <li>Click "Share" button in top right</li>
            <li>Toggle "Public" to ON</li>
            <li>Copy the "Viewer Link" (not the editor link)</li>
            <li>The URL should look like: https://prod.spline.design/XXXXX/scene.splinecode</li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default SplineUrlVerifier;