
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Industry {
  id: string;
  title: string;
}

interface IndustrySelectorProps {
  industries: Industry[];
  selectedId: string;
  onChange: (id: string) => void;
}

const IndustrySelector = ({ industries, selectedId, onChange }: IndustrySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const selectedIndustry = industries.find(industry => industry.id === selectedId) || industries[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mb-16 max-w-md mx-auto z-20" 
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-3.5 pink-aqua-bg backdrop-blur-lg border border-white/20 rounded-lg text-white hover:opacity-95 transition-all shadow-lg"
      >
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
            <Check className="h-4 w-4" />
          </div>
          <span className="font-medium">{selectedIndustry.title}</span>
        </div>
        <svg 
          className={`h-5 w-5 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute z-30 mt-2 w-full bg-background/90 backdrop-blur-lg border border-white/20 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="max-h-60 overflow-y-auto">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => {
                  onChange(industry.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-5 py-3.5 hover:bg-brand-pink/10 transition-colors flex items-center ${
                  industry.id === selectedId 
                    ? 'bg-gradient-to-r from-brand-pink/20 to-brand-aqua/20 text-white' 
                    : 'text-gray-300'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                  industry.id === selectedId 
                    ? 'pink-aqua-bg' 
                    : 'bg-white/10'
                }`}>
                  {industry.id === selectedId && <Check className="h-4 w-4 text-white" />}
                </div>
                <span className="font-medium">{industry.title}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default IndustrySelector;
