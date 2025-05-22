
import { motion } from "framer-motion";
import HeroContent from "./hero/HeroContent";
import HeroPreview from "./hero/HeroPreview";
import StyleProvider from "../design/StyleProvider";
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative overflow-hidden bg-white border-b border-gray-200">
      {/* Enhanced background effects with more dynamic gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-brand-violet/5 blur-3xl -top-20 -left-20"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute h-[350px] w-[350px] md:h-[700px] md:w-[700px] rounded-full bg-brand-indigo/5 blur-3xl top-40 right-10"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full bg-brand-pink/5 blur-3xl bottom-20 left-20"
        />
      </div>
      
      <StyleProvider className="container-custom relative z-10 py-6 md:py-20 lg:py-28 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          <HeroContent lightMode={true} />
          <div className={isMobile ? "mt-2" : ""}>
            <HeroPreview lightMode={true} />
          </div>
        </div>
      </StyleProvider>
    </div>
  );
};

export default Hero;
