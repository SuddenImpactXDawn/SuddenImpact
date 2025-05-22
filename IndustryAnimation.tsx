
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';
import { RiRestaurantLine, RiBuilding2Line, RiHealthBookLine } from 'react-icons/ri';
import { Wrench, Music } from 'lucide-react';

interface IndustryAnimationProps {
  industry: string;
}

const IndustryAnimation = ({ industry }: IndustryAnimationProps) => {
  // Define animation variants for different elements
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      } 
    }
  };
  
  const itemVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [-10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  const rotateVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Industry-specific animation content
  const renderAnimationContent = () => {
    switch (industry) {
      case 'restaurants':
        return (
          <div className="relative h-80 w-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-red-500/10 to-orange-600/20 rounded-xl" />
            
            {/* Main animation container */}
            <motion.div 
              className="relative h-full w-full flex items-center justify-center"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {/* Center restaurant icon */}
              <motion.div 
                className="absolute z-20"
                variants={floatVariants}
                animate="animate"
              >
                <motion.div 
                  className="w-28 h-28 bg-gradient-to-br from-brand-pink to-brand-aqua rounded-full flex items-center justify-center text-white shadow-lg"
                  variants={itemVariants}
                >
                  <RiRestaurantLine size={64} />
                </motion.div>
              </motion.div>
              
              {/* Orbiting food icons */}
              <motion.div 
                className="absolute w-64 h-64"
                variants={rotateVariants}
                animate="animate"
              >
                {[0, 60, 120, 180, 240, 300].map((degree, index) => (
                  <motion.div 
                    key={index}
                    className="absolute" 
                    style={{
                      transform: `rotate(${degree}deg) translateX(120px)`,
                    }}
                    variants={itemVariants}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white text-brand-pink shadow-md`}>
                      {index % 6 === 0 ? '🍕' : index % 6 === 1 ? '🍷' : index % 6 === 2 ? '🍽️' : index % 6 === 3 ? '☕' : index % 6 === 4 ? '🍰' : '🍔'}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Decorative background circles */}
              <motion.div 
                className="absolute w-80 h-80 rounded-full border-2 border-white/10"
                variants={itemVariants}
              />
              <motion.div 
                className="absolute w-60 h-60 rounded-full border-2 border-white/20"
                variants={itemVariants}
              />
            </motion.div>
          </div>
        );
        
      case 'realEstate':
        return (
          <div className="relative h-80 w-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-brand-purple/20 rounded-xl" />
            
            {/* Main animation container */}
            <motion.div 
              className="relative h-full w-full flex items-center justify-center"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {/* Center real estate icon */}
              <motion.div 
                className="absolute z-20"
                variants={floatVariants}
                animate="animate"
              >
                <motion.div 
                  className="w-28 h-28 bg-gradient-to-br from-brand-purple to-brand-aqua rounded-full flex items-center justify-center text-white shadow-lg"
                  variants={itemVariants}
                >
                  <RiBuilding2Line size={64} />
                </motion.div>
              </motion.div>
              
              {/* Building grid */}
              <motion.div className="absolute bottom-4 w-full flex justify-center gap-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: i * 0.2 + 0.5, duration: 0.5 } 
                    }}
                  >
                    <div className={`w-16 h-${24 + i * 8} bg-gradient-to-t from-brand-purple to-brand-aqua rounded-t-lg`}>
                      {[...Array(3 + i)].map((_, j) => (
                        <div key={j} className="flex justify-center gap-1 pt-2">
                          {[...Array(2)].map((_, k) => (
                            <div key={k} className="w-2 h-2 bg-yellow-300 rounded-sm"></div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute w-72 h-72"
                variants={rotateVariants}
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                {[0, 72, 144, 216, 288].map((degree, index) => (
                  <motion.div 
                    key={index}
                    className="absolute" 
                    style={{
                      transform: `rotate(${degree}deg) translateX(130px)`,
                    }}
                    variants={itemVariants}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md`}>
                      {index % 5 === 0 ? '🏠' : index % 5 === 1 ? '🔑' : index % 5 === 2 ? '📝' : index % 5 === 3 ? '📍' : '💰'}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        );
        
      case 'healthcare':
        return (
          <div className="relative h-80 w-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-aqua/20 via-cyan-500/10 to-blue-400/20 rounded-xl" />
            
            {/* Main animation container */}
            <motion.div 
              className="relative h-full w-full flex items-center justify-center"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {/* Center healthcare icon */}
              <motion.div 
                className="absolute z-20"
                variants={floatVariants}
                animate="animate"
              >
                <motion.div 
                  className="w-28 h-28 bg-gradient-to-br from-brand-aqua to-brand-pink rounded-full flex items-center justify-center text-white shadow-lg"
                  variants={itemVariants}
                >
                  <RiHealthBookLine size={64} />
                </motion.div>
              </motion.div>
              
              {/* Animated pulse */}
              <motion.div
                className="absolute w-60 h-60 bg-red-500/5 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              <motion.div
                className="absolute w-80 h-80 bg-red-500/2 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.2,
                }}
              />
              
              {/* Orbiting health icons */}
              <motion.div 
                className="absolute w-64 h-64"
                variants={rotateVariants}
                animate="animate"
              >
                {[0, 60, 120, 180, 240, 300].map((degree, index) => (
                  <motion.div 
                    key={index}
                    className="absolute" 
                    style={{
                      transform: `rotate(${degree}deg) translateX(120px)`,
                    }}
                    variants={itemVariants}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white text-brand-aqua shadow-md`}>
                      {index % 6 === 0 ? '💊' : index % 6 === 1 ? '🩺' : index % 6 === 2 ? '🧬' : index % 6 === 3 ? '🏥' : index % 6 === 4 ? '🫀' : '🧠'}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        );
        
      case 'contractors':
        return (
          <div className="relative h-80 w-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-brand-blue/10 to-brand-purple/20 rounded-xl" />
            
            {/* Main animation container */}
            <motion.div 
              className="relative h-full w-full flex items-center justify-center"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {/* Center contractors icon */}
              <motion.div 
                className="absolute z-20"
                variants={floatVariants}
                animate="animate"
              >
                <motion.div 
                  className="w-28 h-28 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full flex items-center justify-center text-white shadow-lg"
                  variants={itemVariants}
                >
                  <Wrench size={64} />
                </motion.div>
              </motion.div>
              
              {/* Animated tools */}
              <motion.div className="absolute top-10 right-20">
                <motion.div
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                    }
                  }}
                  className="text-4xl"
                >
                  🔨
                </motion.div>
              </motion.div>
              
              <motion.div className="absolute bottom-20 left-20">
                <motion.div
                  animate={{
                    rotate: [0, -10, 0, 10, 0],
                    transition: {
                      duration: 3.5,
                      repeat: Infinity,
                      delay: 0.5,
                    }
                  }}
                  className="text-4xl"
                >
                  🔧
                </motion.div>
              </motion.div>
              
              {/* Orbiting service icons */}
              <motion.div 
                className="absolute w-64 h-64"
                variants={rotateVariants}
                animate="animate"
              >
                {[0, 60, 120, 180, 240, 300].map((degree, index) => (
                  <motion.div 
                    key={index}
                    className="absolute" 
                    style={{
                      transform: `rotate(${degree}deg) translateX(120px)`,
                    }}
                    variants={itemVariants}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white text-brand-blue shadow-md`}>
                      {index % 6 === 0 ? '🔌' : index % 6 === 1 ? '🚿' : index % 6 === 2 ? '❄️' : index % 6 === 3 ? '🧹' : index % 6 === 4 ? '🌱' : '🏗️'}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        );
        
      case 'music':
        return (
          <div className="relative h-80 w-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 via-purple-500/10 to-brand-aqua/20 rounded-xl" />
            
            {/* Main animation container */}
            <motion.div 
              className="relative h-full w-full flex items-center justify-center"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {/* Center music icon */}
              <motion.div 
                className="absolute z-20"
                variants={floatVariants}
                animate="animate"
              >
                <motion.div 
                  className="w-28 h-28 bg-gradient-to-br from-brand-pink to-brand-aqua rounded-full flex items-center justify-center text-white shadow-lg"
                  variants={itemVariants}
                >
                  <Music size={64} />
                </motion.div>
              </motion.div>
              
              {/* Sound waves animation */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={`ring-${ring}`}
                  className="absolute rounded-full border-2 border-brand-pink/30"
                  style={{
                    width: `${ring * 30 + 100}px`, 
                    height: `${ring * 30 + 100}px`
                  }}
                  animate={{
                    scale: [1, 1.1],
                    opacity: [0.7, 0.3],
                  }}
                  transition={{
                    duration: 2 + ring * 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: ring * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Orbiting music icons */}
              <motion.div 
                className="absolute w-64 h-64"
                variants={rotateVariants}
                animate="animate"
              >
                {[0, 60, 120, 180, 240, 300].map((degree, index) => (
                  <motion.div 
                    key={index}
                    className="absolute" 
                    style={{
                      transform: `rotate(${degree}deg) translateX(120px)`,
                    }}
                    variants={itemVariants}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white text-brand-aqua shadow-md`}>
                      {index % 6 === 0 ? '🎸' : index % 6 === 1 ? '🎹' : index % 6 === 2 ? '🎵' : index % 6 === 3 ? '🎤' : index % 6 === 4 ? '🎧' : '🥁'}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Music notes animation */}
              {[1, 2, 3, 4].map((note) => (
                <motion.div
                  key={`note-${note}`}
                  className="absolute text-3xl"
                  style={{
                    left: `${20 + note * 15}%`,
                    top: `${30 + (note % 3) * 15}%`,
                  }}
                  animate={{
                    y: [-40, -20],
                    x: [note % 2 === 0 ? 10 : -10, 0],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: note * 0.8,
                    repeatDelay: 0.5,
                    ease: "easeInOut"
                  }}
                >
                  {note % 2 === 0 ? '♪' : '♫'}
                </motion.div>
              ))}
            </motion.div>
          </div>
        );
        
      default:
        return (
          <div className="h-80 w-full flex items-center justify-center">
            <div className="text-2xl text-gray-400">Animation not available</div>
          </div>
        );
    }
  };

  return renderAnimationContent();
};

export default IndustryAnimation;
