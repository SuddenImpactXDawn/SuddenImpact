
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  lightMode?: boolean;
}

// Custom TikTok icon since it's not available in lucide-react
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC<FooterProps> = ({ lightMode = false }) => {
  // Define classes based on light/dark mode
  const bgColor = lightMode ? 'bg-white' : 'bg-background';
  const borderColor = lightMode ? 'border-gray-200' : 'border-white/10';
  const textColor = lightMode ? 'text-gray-600' : 'text-gray-300';
  const titleColor = lightMode ? 'text-agency-dark' : 'text-white';
  const linkHoverColor = lightMode ? 'hover:text-agency-blue' : 'hover:text-white';

  return (
    <footer className={`${bgColor} border-t ${borderColor} pt-8 pb-6`}>
      <div className="container-custom max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/lovable-uploads/99284eb7-0e97-4d18-a9bd-6e1edf74a2a1.png" 
                alt="Sudden Impact Agency Logo" 
                className="h-16 w-auto object-contain mb-4"
              />
              <p className={`${textColor} text-sm mb-4`}>
                Transforming business communication through intelligent AI voice agents.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <a href="tel:+13026183977" className={`${textColor} flex items-center gap-2 text-sm ${linkHoverColor}`}>
                  <Phone className="h-3 w-3" />
                  (302) 618-3977
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="mailto:info@suddenimpactagency.io" className={`${textColor} flex items-center gap-2 text-sm ${linkHoverColor}`}>
                  <Mail className="h-3 w-3" />
                  info@suddenimpactagency.io
                </a>
              </div>
            </motion.div>
          </div>

          {/* Solutions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className={`font-bold text-sm mb-3 ${titleColor}`}>Solutions</h4>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <Link to="/solutions" className={`${textColor} ${linkHoverColor} transition-colors duration-200`}>
                    AI Voice Agents
                  </Link>
                </li>
                <li>
                  <Link to="/demo" className={`${textColor} ${linkHoverColor} transition-colors duration-200`}>
                    Try Demo
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className={`${textColor} ${linkHoverColor} transition-colors duration-200`}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={`${textColor} ${linkHoverColor} transition-colors duration-200`}>
                    Get Started
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Industries */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className={`font-bold text-sm mb-3 ${titleColor}`}>Industries</h4>
              <ul className="space-y-1.5 text-sm">
                {[
                  { name: "Real Estate", url: "/industries/realestate" },
                  { name: "Healthcare", url: "/industries/healthcare" },
                  { name: "Restaurants", url: "/industries/restaurants" },
                  { name: "Service Contractors", url: "/industries/contractors" },
                  { name: "Music", url: "/industries/music" }
                ].map((item, i) => (
                  <li key={i}>
                    <Link to={item.url} className={`${textColor} ${linkHoverColor} transition-colors duration-200`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className={`font-bold text-sm mb-3 ${titleColor}`}>Resources</h4>
              <ul className="space-y-1.5 text-sm">
                {[
                  { name: "Demo", url: "/demo" },
                  { name: "Pricing", url: "/pricing" },
                  { name: "FAQ", url: "/#faq" },
                  { name: "Case Studies", url: "/#case-studies" },
                  { name: "Legal", url: "/legal" },
                  { name: "Contact", url: "/contact" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link to={item.url} className={`${textColor} ${linkHoverColor} transition-colors duration-200`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className={`border-t ${borderColor} pt-4 mt-4`}>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className={`${textColor} text-xs mb-3 sm:mb-0`}>
              © {new Date().getFullYear()} Sudden Impact Agency. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/suddenaiimpact/" target="_blank" rel="noopener noreferrer" className={textColor} aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/suddenimpact/" target="_blank" rel="noopener noreferrer" className={textColor} aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.tiktok.com/@suddenimpactai" target="_blank" rel="noopener noreferrer" className={textColor} aria-label="TikTok">
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
