
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroPreviewProps {
  lightMode?: boolean;
}

const HeroPreview = ({ lightMode = false }: HeroPreviewProps) => {
  const isMobile = useIsMobile();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`relative ${isMobile ? 'mx-auto max-w-[92%] py-2' : ''}`}
    >
      <div className="bg-white shadow-xl border border-brand-pink/10 rounded-2xl p-4 md:p-6 relative z-10">
        <div className="rounded-xl overflow-hidden flex items-center justify-center border border-gray-100 aspect-square">
          <div className="w-full h-full relative bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
            {/* Main animated visual element */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central animated circle with gradient and glow */}
              <motion.div
                className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center relative"
                animate={{ 
                  boxShadow: [
                    "0 0 15px rgba(236, 72, 153, 0.5), 0 0 30px rgba(124, 58, 237, 0.3)", 
                    "0 0 30px rgba(236, 72, 153, 0.7), 0 0 60px rgba(124, 58, 237, 0.5)"
                  ] 
                }}
                transition={{ 
                  duration: 3, 
                  repeatType: "reverse", 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                {/* Microphone icon */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 3, 
                    repeatType: "reverse", 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="text-white z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                  </svg>
                </motion.div>
              </motion.div>

              {/* Concentric circles animation */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-brand-pink/20"
                  initial={{ width: 100, height: 100, opacity: 0.8 }}
                  animate={{
                    width: [100 + i * 40, 260 + i * 40],
                    height: [100 + i * 40, 260 + i * 40],
                    opacity: [0.7, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 1.2,
                    ease: "easeOut"
                  }}
                />
              ))}

              {/* Sound wave animation */}
              <div className="absolute flex items-center justify-center gap-1.5 z-10">
                {Array.from({ length: 7 }).map((_, i) => (
                  <motion.div
                    key={`wave-${i}`}
                    className="bg-gradient-to-b from-brand-aqua to-brand-pink w-1.5 md:w-2 rounded-full"
                    animate={{ 
                      height: [
                        `${10 + Math.random() * 5}px`,
                        `${30 + Math.random() * 25}px`
                      ],
                      opacity: [0.7, 1]
                    }}
                    transition={{
                      duration: 1 + Math.random() * 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: i * 0.1
                    }}
                    style={{
                      transform: `translateX(${(i - 3) * 10}px) translateY(80px)`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating particles */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 4 + Math.random() * 8,
                  height: 4 + Math.random() * 8,
                  background: i % 2 === 0 
                    ? `linear-gradient(${Math.random() * 360}deg, #EC4899, #8B5CF6)` 
                    : `linear-gradient(${Math.random() * 360}deg, #8B5CF6, #06B6D4)`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.6 + Math.random() * 0.4
                }}
                animate={{
                  x: [
                    Math.random() * 40 - 20,
                    Math.random() * 40 - 20
                  ],
                  y: [
                    Math.random() * 40 - 20,
                    Math.random() * 40 - 20
                  ],
                  opacity: [0.6, 0.9]
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Gradient orbs */}
            <motion.div
              className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-brand-aqua/30 to-brand-purple/30 blur-xl"
              style={{
                top: '15%',
                left: '15%',
              }}
              animate={{
                scale: [1, 1.2],
                opacity: [0.3, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-brand-pink/30 to-brand-aqua/30 blur-xl"
              style={{
                bottom: '10%',
                right: '20%',
              }}
              animate={{
                scale: [1, 1.2],
                opacity: [0.3, 0.5],
              }}
              transition={{
                duration: 7,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Floating elements with enhanced design */}
      <motion.div 
        initial={{ opacity: 0, x: -20, y: -20, rotate: -10 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 12 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className={`absolute -top-4 -right-4 ${isMobile ? 'w-16 h-16' : 'w-24 h-24'} bg-gradient-to-br from-brand-pink/20 to-brand-aqua/20 rounded-lg rotate-12 animate-float delay-200`}
      />
      
      <motion.div 
        initial={{ opacity: 0, x: 20, y: 20, rotate: 10 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -12 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className={`absolute -bottom-4 -left-4 ${isMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-gradient-to-br from-brand-aqua/20 to-brand-pink/20 rounded-lg -rotate-12 animate-float delay-300`}
      />
    </motion.div>
  );
};

export default HeroPreview;
