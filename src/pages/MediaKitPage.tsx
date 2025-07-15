import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, Image, FileText, Palette, ArrowRight, Sparkles, Copy, CheckCircle } from 'lucide-react';
import IntersectionObserver from '../components/common/IntersectionObserver';

const MediaKitPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EdgeUp Media Kit - Brand Assets & Resources";
    setIsLoaded(true);
  }, []);

  const brandAssets = [
    {
      category: 'Logos',
      description: 'EdgeUp logos in various formats and color variations',
      items: [
        { name: 'Primary Logo (PNG)', format: 'PNG', size: '2.1 MB' },
        { name: 'Primary Logo (SVG)', format: 'SVG', size: '156 KB' },
        { name: 'Logo White Version', format: 'PNG', size: '1.8 MB' },
        { name: 'Logo Icon Only', format: 'PNG', size: '512 KB' }
      ]
    },
    {
      category: 'Brand Guidelines',
      description: 'Complete brand guidelines including colors, typography, and usage rules',
      items: [
        { name: 'Brand Guidelines PDF', format: 'PDF', size: '4.2 MB' },
        { name: 'Color Palette Guide', format: 'PDF', size: '1.5 MB' },
        { name: 'Typography Guide', format: 'PDF', size: '2.1 MB' }
      ]
    },
    {
      category: 'Product Screenshots',
      description: 'High-resolution screenshots of the EdgeUp platform',
      items: [
        { name: 'Dashboard Screenshots', format: 'ZIP', size: '15.2 MB' },
        { name: 'Mobile App Screenshots', format: 'ZIP', size: '8.7 MB' },
        { name: 'Assessment Interface', format: 'ZIP', size: '12.3 MB' }
      ]
    },
    {
      category: 'Company Information',
      description: 'Fact sheets, bios, and company information',
      items: [
        { name: 'Company Fact Sheet', format: 'PDF', size: '1.1 MB' },
        { name: 'Executive Bios', format: 'PDF', size: '2.3 MB' },
        { name: 'Product Overview', format: 'PDF', size: '3.4 MB' }
      ]
    }
  ];

  const brandColors = [
    { name: 'Primary Blue', hex: '#094d88', rgb: 'rgb(9, 77, 136)' },
    { name: 'Secondary Teal', hex: '#10ac8b', rgb: 'rgb(16, 172, 139)' },
    { name: 'Dark Gray', hex: '#1f2937', rgb: 'rgb(31, 41, 55)' },
    { name: 'Light Gray', hex: '#6b7280', rgb: 'rgb(107, 114, 128)' }
  ];

  const companyFacts = [
    { label: 'Founded', value: '2022' },
    { label: 'Headquarters', value: 'Chennai, India' },
    { label: 'Employees', value: '135+' },
    { label: 'Funding', value: '₹8 Cr Seed' },
    { label: 'Partner Institutions', value: '150+' },
    { label: 'Students Impacted', value: '50,000+' }
  ];

  const handleCopyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <main className="pt-16 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        
        {/* Floating Particles */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Static Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-[#094d88] text-sm font-medium mb-8 border border-white/30 shadow-lg transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Media Kit & Brand Assets
              <div className="ml-2 w-2 h-2 bg-[#10ac8b] rounded-full animate-pulse"></div>
            </div>
            
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent leading-tight transition-all duration-1000 delay-200 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              Media Kit
            </h1>
            
            <p className={`text-xl text-gray-600 mt-8 leading-relaxed transition-all duration-1000 delay-400 ${isLoaded ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
              Download our complete media kit with brand assets, company information, and high-resolution images for press and marketing use.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Download Section */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-4">
                    Complete Media Kit
                  </h2>
                  <p className="text-xl text-gray-600">
                    Everything you need in one convenient download
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center">
                          <Image className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">High-resolution logos and brand assets</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center">
                          <FileText className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">Company fact sheets and executive bios</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center">
                          <Palette className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">Brand guidelines and color palettes</span>
                      </div>
                    </div>

                    <button className="group relative overflow-hidden w-full bg-gradient-to-r from-[#094d88] to-[#10ac8b] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                      <span className="relative z-10 flex items-center justify-center">
                        <Download className="mr-3 h-5 w-5" />
                        Download Complete Kit (25.4 MB)
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                      </span>
                    </button>
                  </div>

                  <div className="relative">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                      <img 
                        src="/Screenshot 2025-06-18 174133.png" 
                        alt="EdgeUp Logo Preview" 
                        className="w-full h-32 object-contain mb-4"
                      />
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">EdgeUp Brand Assets</h4>
                        <p className="text-sm text-gray-600">Ready for print and digital use</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Individual Assets */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                Individual Assets
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Download specific assets as needed for your projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brandAssets.map((category, index) => (
                <div 
                  key={index}
                  className={`bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300">
                        <div>
                          <div className="font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-600">{item.format} • {item.size}</div>
                        </div>
                        <button className="w-10 h-10 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                          <Download size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Brand Colors */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                  Brand Colors
                </h2>
                <p className="text-xl text-gray-600">
                  Our official color palette for consistent brand representation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {brandColors.map((color, index) => (
                  <div 
                    key={index}
                    className={`bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div 
                      className="h-32 w-full"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">{color.name}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">HEX</span>
                          <button
                            onClick={() => handleCopyToClipboard(color.hex, `hex-${index}`)}
                            className="flex items-center space-x-1 text-sm font-mono text-gray-900 hover:text-[#094d88] transition-colors"
                          >
                            <span>{color.hex}</span>
                            {copiedText === `hex-${index}` ? (
                              <CheckCircle size={14} className="text-green-500" />
                            ) : (
                              <Copy size={14} />
                            )}
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">RGB</span>
                          <button
                            onClick={() => handleCopyToClipboard(color.rgb, `rgb-${index}`)}
                            className="flex items-center space-x-1 text-sm font-mono text-gray-900 hover:text-[#094d88] transition-colors"
                          >
                            <span>{color.rgb}</span>
                            {copiedText === `rgb-${index}` ? (
                              <CheckCircle size={14} className="text-green-500" />
                            ) : (
                              <Copy size={14} />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Company Facts */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                  Company Facts
                </h2>
                <p className="text-xl text-gray-600">
                  Key information about EdgeUp for press and media use.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {companyFacts.map((fact, index) => (
                    <div 
                      key={index}
                      className={`text-center animate-fade-in-up`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-3xl font-bold text-[#094d88] mb-2">{fact.value}</div>
                      <div className="text-gray-600">{fact.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Contact Section */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="relative bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center max-w-4xl mx-auto py-20 px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up">
                  Need Something Specific?
                </h2>
                <p className="text-xl text-white/90 mb-12 animate-fade-in-up delay-200">
                  Can't find what you're looking for? Our press team is here to help with custom assets and information.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
                  <Link
                    to="/contact"
                    className="group relative overflow-hidden bg-white text-[#094d88] px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Contact Press Team
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </span>
                  </Link>
                  <a
                    href="mailto:press@edgeup.in"
                    className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#094d88] transition-all duration-500 hover:scale-105"
                  >
                    press@edgeup.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      <style jsx>{`
        .particle-float {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #094d88, #10ac8b);
          border-radius: 50%;
          animation: float 20s ease-in-out infinite;
          opacity: 0.6;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-40px) rotate(180deg); }
          75% { transform: translateY(-20px) rotate(270deg); }
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
      `}</style>
    </main>
  );
};

export default MediaKitPage;