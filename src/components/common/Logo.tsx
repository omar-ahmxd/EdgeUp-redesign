import React from 'react';
import { useCMS } from '../../context/CMSContext';

const Logo: React.FC = () => {
  const { siteSettings } = useCMS();
  
  // Use the new EdgeUp logo
  const logoUrl = "/edgeup-logo.png";
  const siteName = siteSettings?.siteName || "EdgeUp";
  
  return (
    <div className="flex items-center justify-start h-10 w-36 overflow-hidden rounded-lg">
      <img 
        src={logoUrl}
        alt={siteName}
        className="h-full w-full object-cover object-left"
        style={{ transform: 'scale(1.8) translateX(-25%)', transformOrigin: 'left center' }}
      />
    </div>
  );
};

export default Logo;