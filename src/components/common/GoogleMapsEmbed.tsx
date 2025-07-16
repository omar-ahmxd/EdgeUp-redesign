import React, { useState, useEffect } from 'react';
import { MapPin, ExternalLink, AlertCircle } from 'lucide-react';

interface GoogleMapsEmbedProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  location?: string;
  zoom?: number;
  showFallback?: boolean;
}

const GoogleMapsEmbed: React.FC<GoogleMapsEmbedProps> = ({
  width = "100%",
  height = 300,
  className = "",
  location = "EdgeUp, Chennai",
  zoom = 15,
  showFallback = true
}) => {
  const [mapError, setMapError] = useState(false);

  // EdgeUp location coordinates (Chennai)
  const coordinates = "13.0603399902862,80.24673147573892";
  
  // Multiple embed URL options for better compatibility
  const embedUrls = [
    // Primary embed URL (existing)
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8290740215574!2d80.24673147573892!3d13.0603399902862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267376515b75f%3A0x4afd61c7c0de4f78!2sEdgeUp!5e0!3m2!1sen!2sin!4v1710850058953!5m2!1sen!2sin",
    
    // Alternative embed URL with place ID
    `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(location)}&zoom=${zoom}`,
    
    // Fallback to search query
    `https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=${encodeURIComponent(location)}`
  ];

  const handleMapError = () => {
    setMapError(true);
  };


  const ErrorState = () => (
    <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
      <div className="text-center p-6">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Map Unavailable</h3>
        <p className="text-gray-600 mb-4">Unable to load the map. Please try the link below.</p>
        <a
          href={`https://maps.google.com/maps?q=${encodeURIComponent(location)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Open in Google Maps
        </a>
      </div>
    </div>
  );

  const FallbackMap = () => (
    <div className="relative h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">EdgeUp Location</h3>
          <p className="text-gray-600 mb-4">Chennai, Tamil Nadu, India</p>
          <div className="space-y-2">
            <a
              href={`https://maps.google.com/maps?q=${encodeURIComponent(location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-2"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in Google Maps
            </a>
            <a
              href={`https://maps.apple.com/?q=${encodeURIComponent(location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in Apple Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  if (mapError && showFallback) {
    return (
      <div className={className} style={{ width, height }}>
        <ErrorState />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <iframe
        src={embedUrls[0]}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onError={handleMapError}
        title="EdgeUp Location Map"
        allow="geolocation"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
      
      {mapError && !showFallback && (
        <div className="absolute inset-0">
          <FallbackMap />
        </div>
      )}
    </div>
  );
};

export default GoogleMapsEmbed;