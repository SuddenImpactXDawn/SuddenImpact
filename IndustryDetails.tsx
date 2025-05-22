
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Industry {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  detailsTitle: string;
  detailsDescription: string;
  features: string[];
  results: string[];
}

interface IndustryDetailsProps {
  industry: Industry;
  lightMode?: boolean;
}

const IndustryDetails = ({ industry, lightMode }: IndustryDetailsProps) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden h-full border border-gray-200 transition-all duration-300 hover:shadow-xl">
      {/* Colorful gradient header */}
      <div className="h-3 pink-aqua-bg"></div>
      
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full pink-aqua-bg flex items-center justify-center text-white shadow-md">
            {industry.icon}
          </div>
          <h3 className="text-2xl font-bold text-brand-dark">{industry.detailsTitle}</h3>
        </div>
        
        <p className="text-brand-gray mb-8 text-lg">
          {industry.detailsDescription}
        </p>

        <div className="mb-8">
          <h4 className="text-xl font-semibold aqua-pink-text mb-4">Key Features</h4>
          <ul className="space-y-3">
            {industry.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 bg-brand-aqua/10 text-brand-aqua p-1 rounded-full">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-brand-gray">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold pink-aqua-text mb-4">Proven Results</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {industry.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5 p-5 rounded-lg border border-brand-pink/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <p className="text-center text-brand-dark font-medium">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetails;
