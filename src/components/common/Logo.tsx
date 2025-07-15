import React from 'react';
import { useCMS } from '../../context/CMSContext';

const Logo: React.FC = () => {
  const { siteSettings } = useCMS();
  
  // Use the new EdgeUp logo
  const logoUrl = "/Screenshot 2025-06-18 174133.png";
  const siteName = siteSettings?.siteName || "EdgeUp";
  
  return (
    <div className="flex items-center">
      <img 
        src={logoUrl}
        alt={siteName}
        className="h-10"
      />
    </div>
  );
};

export default Logo;