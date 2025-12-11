import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCMS } from '../../context/CMSContext';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminSidebar from '../../components/admin/AdminSidebar';

// Fixed ID for the single site settings row
const SETTINGS_ID = 'main-site-settings';

const AdminSettings: React.FC = () => {
  const { currentUser } = useAuth();
  const { siteSettings, updateSiteSettings } = useCMS();
  
  const [settings, setSettings] = useState({
    id: SETTINGS_ID,
    siteName: '',
    logo: 'https://edgeup.in/wp-content/uploads/2024/03/edgeup-logo.png',
    favicon: '',
    contactInfo: {
      email: 'info@edgeup.in',
      phone: '044 4500 2700',
      address: 'No 14, Tank Bund Rd, Lake Area, Nungambakkam, Chennai, Tamil Nadu 600032',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/company/edgeup-zan/',
        twitter: '',
        facebook: '',
        instagram: 'https://www.instagram.com/edgeup_zan/'
      }
    },
    seoDefaults: {
      title: 'EdgeUp - AI-Powered Learning Platform for Institutions',
      description: 'India\'s first AI-driven learning companion tailored for institutions preparing students for UPSC, state exams, and other competitive tests.',
      keywords: [
        'AI learning platform India',
        'adaptive learning for UPSC', 
        'psychometric EdTech', 
        'institutional learning intelligence'
      ]
    }
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    loadSettings();
  }, [siteSettings]);

  const loadSettings = () => {
    if (siteSettings) {
      setSettings({
        id: SETTINGS_ID,
        siteName: siteSettings.siteName || '',
        logo: siteSettings.logo || 'https://edgeup.in/wp-content/uploads/2024/03/edgeup-logo.png',
        favicon: siteSettings.favicon || '',
        contactInfo: siteSettings.contactInfo || {
          email: 'info@edgeup.in',
          phone: '044 4500 2700',
          address: 'No 14, Tank Bund Rd, Lake Area, Nungambakkam, Chennai, Tamil Nadu 600032',
          socialLinks: {
            linkedin: 'https://www.linkedin.com/company/edgeup-zan/',
            twitter: '',
            facebook: '',
            instagram: 'https://www.instagram.com/edgeup_zan/'
          }
        },
        seoDefaults: siteSettings.seoDefaults || {
          title: 'EdgeUp - AI-Powered Learning Platform for Institutions',
          description: 'India\'s first AI-driven learning companion tailored for institutions preparing students for UPSC, state exams, and other competitive tests.',
          keywords: [
            'AI learning platform India',
            'adaptive learning for UPSC', 
            'psychometric EdTech', 
            'institutional learning intelligence'
          ]
        }
      });
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage('');
    
    try {
      // Update using the CMS context instead of direct Supabase calls
      updateSiteSettings({
        siteName: settings.siteName,
        logo: settings.logo,
        favicon: settings.favicon,
        contactInfo: settings.contactInfo,
        seoDefaults: settings.seoDefaults
      });
      
      setSaveMessage('Settings saved successfully!');
    } catch (error) {
      console.error('Error saving settings:', error);
      setSaveMessage('Error saving settings. Please try again.');
    } finally {
      setIsSaving(false);
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  const updateContactInfo = (field: string, value: any) => {
    setSettings({
      ...settings,
      contactInfo: {
        ...settings.contactInfo,
        [field]: value
      }
    });
  };

  const updateSocialLink = (platform: string, value: string) => {
    setSettings({
      ...settings,
      contactInfo: {
        ...settings.contactInfo,
        socialLinks: {
          ...settings.contactInfo.socialLinks,
          [platform]: value
        }
      }
    });
  };

  const updateSeoDefaults = (field: string, value: any) => {
    setSettings({
      ...settings,
      seoDefaults: {
        ...settings.seoDefaults,
        [field]: value
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="pl-64">
        <AdminHeader title="Site Settings" />
        
        <main className="p-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Site Settings</h2>

            {/* Basic Site Information */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Basic Information</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Site Name
                </label>
                <input
                  type="text"
                  value={settings.siteName}
                  onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter site name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Logo URL
                </label>
                <input
                  type="url"
                  value={settings.logo}
                  onChange={(e) => setSettings({ ...settings, logo: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter logo URL"
                />
                {settings.logo && (
                  <div className="mt-2">
                    <img
                      src={settings.logo}
                      alt="Logo preview"
                      className="h-12 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Favicon URL
                </label>
                <input
                  type="url"
                  value={settings.favicon}
                  onChange={(e) => setSettings({ ...settings, favicon: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter favicon URL"
                />
                {settings.favicon && (
                  <div className="mt-2">
                    <img
                      src={settings.favicon}
                      alt="Favicon preview"
                      className="h-8 w-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={settings.contactInfo.email}
                    onChange={(e) => updateContactInfo('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={settings.contactInfo.phone}
                    onChange={(e) => updateContactInfo('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  value={settings.contactInfo.address}
                  onChange={(e) => updateContactInfo('address', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Enter business address"
                />
              </div>

              <div className="mt-6">
                <h4 className="text-md font-medium mb-3">Social Media Links</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      value={settings.contactInfo.socialLinks?.linkedin || ''}
                      onChange={(e) => updateSocialLink('linkedin', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="LinkedIn URL"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Twitter
                    </label>
                    <input
                      type="url"
                      value={settings.contactInfo.socialLinks?.twitter || ''}
                      onChange={(e) => updateSocialLink('twitter', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Twitter URL"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Facebook
                    </label>
                    <input
                      type="url"
                      value={settings.contactInfo.socialLinks?.facebook || ''}
                      onChange={(e) => updateSocialLink('facebook', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Facebook URL"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Instagram
                    </label>
                    <input
                      type="url"
                      value={settings.contactInfo.socialLinks?.instagram || ''}
                      onChange={(e) => updateSocialLink('instagram', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Instagram URL"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Settings */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">SEO Defaults</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Page Title
                </label>
                <input
                  type="text"
                  value={settings.seoDefaults.title}
                  onChange={(e) => updateSeoDefaults('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Default page title"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Meta Description
                </label>
                <textarea
                  value={settings.seoDefaults.description}
                  onChange={(e) => updateSeoDefaults('description', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Default meta description"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Keywords (comma separated)
                </label>
                <input
                  type="text"
                  value={Array.isArray(settings.seoDefaults.keywords) ? settings.seoDefaults.keywords.join(', ') : ''}
                  onChange={(e) => updateSeoDefaults('keywords', e.target.value.split(', ').filter(k => k.trim()))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>
            </div>

            {saveMessage && (
              <div className={`mb-4 p-3 rounded ${
                saveMessage.includes('Error') 
                  ? 'bg-red-50 text-red-700 border border-red-200'
                  : 'bg-green-50 text-green-700 border border-green-200'
              }`}>
                {saveMessage}
              </div>
            )}

            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
            >
              <Save size={18} className="mr-2" />
              {isSaving ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminSettings;