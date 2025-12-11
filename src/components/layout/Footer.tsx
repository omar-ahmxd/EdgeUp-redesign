import React from 'react';
import { Link } from 'react-router-dom';
import {
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer: React.FC = () => {

  return (
    <footer className="bg-[#094d88] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start justify-between">
            {/* Company Info */}
            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">EdgeUp</h2>
                <p className="text-white/80 leading-relaxed">
                  A product of Zaryah Angel Network. India's first AI-driven learning companion tailored for institutions
                  preparing students for UPSC, state exams, and other competitive tests.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center text-white/80">
                  <Mail className="h-4 w-4 mr-2 text-[#10ac8b]" />
                  <a href="mailto:info@edgeup.in" className="hover:text-white transition-colors">
                    info@edgeup.in
                  </a>
                </div>
                <div className="flex items-center text-white/80">
                  <Phone className="h-4 w-4 mr-2 text-[#10ac8b]" />
                  <a href="tel:+919585626626" className="hover:text-white transition-colors">
                    +91 95856 26626
                  </a>
                </div>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-2 text-[#10ac8b] flex-shrink-0" />
                <span className="text-sm">No 14, Tank Bund Rd, Lake Area, Nungambakkam, Chennai, Tamil Nadu 600032</span>
              </div>

            </div>

            {/* Navigation */}
            <div className="flex flex-col md:items-start gap-4 w-full md:w-auto text-white/90 text-base">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 shadow-lg backdrop-blur-sm w-full md:w-80">
                <p className="text-xs uppercase tracking-[0.24em] text-white/60 mb-3">Explore</p>
                <div className="flex flex-col gap-2 text-sm">
                  <Link to="/" className="hover:text-white transition-colors px-3 py-2 rounded-full bg-white/5 border border-white/10 text-left">
                    Home
                  </Link>
                  <Link to="/features" className="hover:text-white transition-colors px-3 py-2 rounded-full bg-white/5 border border-white/10 text-left">
                    Features
                  </Link>
                  <Link to="/about" className="hover:text-white transition-colors px-3 py-2 rounded-full bg-white/5 border border-white/10 text-left">
                    About
                  </Link>
                  <Link to="/about-team" className="hover:text-white transition-colors px-3 py-2 rounded-full bg-white/5 border border-white/10 text-left">
                    Our Team
                  </Link>
                  <Link to="/contact" className="hover:text-white transition-colors px-3 py-2 rounded-full bg-white/5 border border-white/10 text-left">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} EdgeUP a product of Zaryah Angel Network. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/company/edgeup-zan/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-[#10ac8b] transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/edgeup_tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-[#10ac8b] transition-all duration-300 hover:scale-110"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://youtube.com/@edgeup_tech?si=ln6M7grjNHdvQouO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-[#10ac8b] transition-all duration-300 hover:scale-110"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://x.com/edgeup_tech?s=11&t=SHSizG39YtA0X2HrNQmUVw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-[#10ac8b] transition-all duration-300 hover:scale-110"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
