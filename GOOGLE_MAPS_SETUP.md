# Google Maps API Setup Guide

## Current Issue
Google Maps embeds work on localhost but fail on the live site due to domain restrictions in the Google Cloud Console.

## Solution Steps

### 1. Google Cloud Console Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** → **Credentials**
3. Find your existing API key (or create a new one)
4. Click **Edit** on the API key

### 2. Configure Domain Restrictions
Add these domains to **HTTP referrers (web sites)**:
```
https://edgeup.in/*
https://www.edgeup.in/*
https://edgeup-redesign.netlify.app/*
https://*.netlify.app/*
http://localhost:*
```

### 3. Required APIs
Ensure these APIs are enabled:
- **Maps JavaScript API**
- **Maps Embed API**
- **Geocoding API** (optional, for address lookup)

### 4. Billing Setup
Google Maps requires a billing account even for free tier usage:
1. Go to **Billing** in Google Cloud Console
2. Set up a billing account
3. Link it to your project

## Alternative: Using Embed without API Key

The current implementation uses the Maps Embed API which doesn't require an API key for basic functionality. The embed URL format is:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3...
```

## Implementation Features

### Enhanced GoogleMapsEmbed Component
- **Error handling**: Shows fallback if map fails to load
- **Loading states**: Displays spinner while map loads
- **Fallback links**: Direct links to Google Maps and Apple Maps
- **Responsive design**: Works on mobile and desktop
- **CSP compliance**: Proper Content Security Policy headers

### Fallback Options
1. **Error state**: Shows "Map Unavailable" with external links
2. **Static fallback**: Beautiful placeholder with location info
3. **Direct links**: Opens Google Maps or Apple Maps apps

## Testing
1. Test on localhost (should work)
2. Test on live site (should now work with proper domain configuration)
3. Check browser console for any errors
4. Verify fallback behavior when map fails

## Troubleshooting

### Common Issues:
1. **"This page can't load Google Maps correctly"**
   - Solution: Check API key restrictions and billing setup

2. **Map shows but is grayed out**
   - Solution: Enable Maps JavaScript API and add billing account

3. **"For development purposes only" watermark**
   - Solution: Set up billing account in Google Cloud Console

4. **CORS errors**
   - Solution: Add your domain to API key restrictions

### Emergency Fallback
If maps completely fail, the component will show:
- Location icon
- "EdgeUp Location" text
- "Chennai, Tamil Nadu, India"
- Direct links to Google Maps and Apple Maps

## Current Configuration
- **Location**: EdgeUp, Chennai
- **Coordinates**: 13.0603399902862, 80.24673147573892
- **Zoom level**: 15
- **Error handling**: Enabled
- **Fallback**: Enabled

## Next Steps
1. Update Google Cloud Console with live domain
2. Verify billing account is set up
3. Test on live site
4. Monitor for any console errors