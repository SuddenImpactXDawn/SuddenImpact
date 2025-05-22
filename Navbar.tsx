
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Import required components for the popup approach
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 75;
      if (isTop !== scrolled) {
        setScrolled(!isTop);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Determine active path for highlighting
  const isActive = (path: string) => {
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  // Use consistent styling
  const bgColor = scrolled ? 'bg-white/95 backdrop-blur-xl' : 'bg-white/90 backdrop-blur-xl';
  const textColor = 'text-gray-800';
  const navItemClass = "text-gray-700 hover:text-white hover:bg-brand-purple transition-colors duration-200";
  const activeClass = "text-white bg-brand-purple";

  return (
    <>
      <motion.div
        className={cn(
          'w-full transition-all duration-300 border-b border-gray-200 relative z-40',
          bgColor,
          scrolled ? 'shadow-md' : ''
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container-custom py-2">
          <div className="flex items-center justify-between py-1">
            {/* Logo container - expanded with negative margins for larger area */}
            <Link to="/" className="flex items-center -mx-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative bg-transparent rounded-lg p-0"
              >
                {/* Logo with dramatically larger size - fix path to use public folder directly */}
                <div className="relative inline-block -mt-8 -mb-8">
                  <img 
                    src="/lovable-uploads/99284eb7-0e97-4d18-a9bd-6e1edf74a2a1.png" 
                    alt="Sudden Impact Agency Logo" 
                    className={cn(
                      "relative z-10",
                      isMobile ? "h-40 w-auto object-contain" : "h-56 w-auto object-contain",
                      "filter drop-shadow-md hover:drop-shadow-lg transition-all duration-300"
                    )}
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation with larger buttons */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="space-x-2">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/" 
                        className={cn(
                          navigationMenuTriggerStyle(), 
                          navItemClass, 
                          "bg-transparent rounded-md py-2 px-4 text-base font-medium",
                          isActive('/') ? activeClass : ""
                        )}
                      >
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/solutions" 
                        className={cn(
                          navigationMenuTriggerStyle(), 
                          navItemClass, 
                          "bg-transparent rounded-md py-2 px-4 text-base font-medium",
                          isActive('/solutions') ? activeClass : ""
                        )}
                      >
                        Solutions
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/industries" 
                        className={cn(
                          navigationMenuTriggerStyle(), 
                          navItemClass, 
                          "bg-transparent rounded-md py-2 px-4 text-base font-medium",
                          isActive('/industries') ? activeClass : ""
                        )}
                      >
                        Industries
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/pricing" 
                        className={cn(
                          navigationMenuTriggerStyle(), 
                          navItemClass, 
                          "bg-transparent rounded-md py-2 px-4 text-base font-medium",
                          isActive('/pricing') ? activeClass : ""
                        )}
                      >
                        Pricing
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/contact" 
                        className={cn(
                          navigationMenuTriggerStyle(), 
                          navItemClass, 
                          "bg-transparent rounded-md py-2 px-4 text-base font-medium",
                          isActive('/contact') ? activeClass : ""
                        )}
                      >
                        Contact
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Menu using Sheet component */}
            <div className="flex items-center gap-2">
              {/* Larger CTA button */}
              <Link 
                to="/demo" 
                className={cn(
                  "bg-gradient-to-r from-brand-pink to-brand-aqua text-white font-medium py-2 px-4 md:py-2 md:px-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 text-base md:text-base whitespace-nowrap",
                  isActive('/demo') ? "ring-2 ring-white" : ""
                )}
              >
                Try AI Voice Agent
              </Link>
              
              {/* Sheet component for mobile menu - larger button */}
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <button 
                    className="ml-2 p-2 text-gray-700 focus:outline-none focus:ring-0"
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="md:hidden py-6 w-[85vw] sm:max-w-sm">
                  <SheetHeader className="mb-5">
                    <SheetTitle className="text-center font-bold text-xl">Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-6">
                    <Link 
                      to="/" 
                      className={cn(
                        "text-xl font-medium p-3 rounded-md transition-colors",
                        isActive('/') ? "text-white bg-brand-purple" : "text-gray-800 hover:text-white hover:bg-brand-purple"
                      )}
                    >
                      Home
                    </Link>
                    
                    <Link 
                      to="/solutions" 
                      className={cn(
                        "text-xl font-medium p-3 rounded-md transition-colors",
                        isActive('/solutions') ? "text-white bg-brand-purple" : "text-gray-800 hover:text-white hover:bg-brand-purple"
                      )}
                    >
                      Solutions
                    </Link>
                    
                    <Link 
                      to="/industries" 
                      className={cn(
                        "text-xl font-medium p-3 rounded-md transition-colors",
                        isActive('/industries') ? "text-white bg-brand-purple" : "text-gray-800 hover:text-white hover:bg-brand-purple"
                      )}
                    >
                      Industries
                    </Link>
                    
                    <Link 
                      to="/pricing" 
                      className={cn(
                        "text-xl font-medium p-3 rounded-md transition-colors",
                        isActive('/pricing') ? "text-white bg-brand-purple" : "text-gray-800 hover:text-white hover:bg-brand-purple"
                      )}
                    >
                      Pricing
                    </Link>
                    
                    <Link 
                      to="/contact" 
                      className={cn(
                        "text-xl font-medium p-3 rounded-md transition-colors",
                        isActive('/contact') ? "text-white bg-brand-purple" : "text-gray-800 hover:text-white hover:bg-brand-purple"
                      )}
                    >
                      Contact
                    </Link>
                    
                    <hr className="border-gray-200 my-2" />
                    
                    <Link 
                      to="/demo" 
                      className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white text-center font-medium py-3 px-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                    >
                      Try AI Voice Agent
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
