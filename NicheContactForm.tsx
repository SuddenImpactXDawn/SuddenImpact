import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Calendar, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import AIDemoCallDialog from './AIDemoCallDialog';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useIsMobile } from '@/hooks/use-mobile';

interface NicheContactFormProps {
  industry: 'healthcare' | 'real-estate' | 'restaurants' | 'service-contractors' | 'music';
}

const NicheContactForm = ({ industry }: NicheContactFormProps) => {
  const [showPricing, setShowPricing] = useState(true);
  const [showCallDialog, setShowCallDialog] = useState(false);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const phoneNumber = "+1 (302) 618-3977";
  const isMobile = useIsMobile();

  // Define industry-specific labels
  const getIndustryLabel = () => {
    switch(industry) {
      case 'healthcare':
        return 'Healthcare Practice';
      case 'real-estate':
        return 'Real Estate Agency';
      case 'restaurants':
        return 'Restaurant Name';
      case 'service-contractors':
        return 'Service Business Name';
      default:
        return 'Company Name';
    }
  };

  // Define industry-specific gradients
  const getGradient = () => {
    switch(industry) {
      case 'healthcare':
        return 'from-brand-aqua to-brand-pink';
      case 'real-estate':
        return 'from-brand-purple to-brand-aqua';
      case 'restaurants':
        return 'from-brand-pink to-brand-aqua';
      case 'service-contractors':
        return 'from-brand-purple to-brand-pink';
      default:
        return 'from-brand-pink to-brand-aqua';
    }
  };

  // Define industry-specific pricing plans with exact links
  const getPricingPlans = () => {
    switch(industry) {
      case 'healthcare':
        return [
          {
            name: "Impact Starter - HIPAA Compliance",
            price: "$797/mo",
            annualPrice: "$7,651/annual",
            setupFee: "$297.00 One-time set-up",
            popular: false,
            monthlyLink: "https://buy.stripe.com/4gM3cnbFheRC3TZd5rejK0p",
            annualLink: "https://buy.stripe.com/00wdR14cPdNyfCHaXjejK0r"
          },
          {
            name: "Impact Pro - HIPAA Compliance",
            price: "$1,097/mo",
            annualPrice: "$10,531/annual",
            setupFee: "$297.00 One-time set-up",
            popular: true,
            monthlyLink: "https://buy.stripe.com/14A9ALgZBbFq76baXjejK0s",
            annualLink: "https://buy.stripe.com/fZu28j4cP9xiain4yVejK0t"
          },
          {
            name: "Impact Enterprise - HIPAA Compliance",
            price: "$1,497/mo",
            annualPrice: "$14,371/annual",
            setupFee: "$297.00 One-time set-up",
            popular: false,
            monthlyLink: "https://buy.stripe.com/14AdR124HfVGainfdzejK0u",
            annualLink: "https://buy.stripe.com/4gMbITbFh9xigGL4yVejK0v"
          }
        ];
      case 'real-estate':
        return [
          {
            name: "Impact Starter",
            price: "$397/mo",
            annualPrice: "$3,811/annual",
            setupFee: "$197.00 One-time set-up",
            popular: false,
            monthlyLink: "https://buy.stripe.com/4gM8wH10DcJu2PV0iFejK0d",
            annualLink: "https://buy.stripe.com/28EfZ9aBd38U1LR0iFejK0e"
          },
          {
            name: "Impact Pro",
            price: "$597/mo",
            annualPrice: "$5,731/annual",
            setupFee: "$197.00 One-time set-up",
            popular: true,
            monthlyLink: "https://buy.stripe.com/3cIcMX8t5dNy627d5rejK0f",
            annualLink: "https://buy.stripe.com/8x23cn8t58tegGL6H3ejK0g"
          },
          {
            name: "Impact Enterprise",
            price: "$897/mo",
            annualPrice: "$8,611/annual",
            setupFee: "$197.00 One-time set-up",
            popular: false,
            monthlyLink: "https://buy.stripe.com/9B6dR124HeRC6275CZejK0h",
            annualLink: "https://buy.stripe.com/3cIdR18t510MfCHd5rejK0i"
          }
        ];
      case 'restaurants':
        return [
          {
            name: "Impact Starter",
            price: "$397/mo",
            annualPrice: "$3,811/annual",
            setupFee: "$197.00 One-time set-up",
            popular: false,
            monthlyLink: "https://buy.stripe.com/dRmaEPeRt38Ubmr7L7ejK0w",
            annualLink: "https://buy.stripe.com/8x27sDbFh6l61LR0iFejK0x"
          },
          {
            name: "Impact Pro",
            price: "$597/mo",
            annualPrice: "$5,731/annual",
            setupFee: "$197.00 One-time set-up",
            popular: true,
            monthlyLink: "https://buy.stripe.com/28E3cncJl24Q2PVd5rejK0z",
            annualLink: "https://buy.stripe.com/14AcMX7p1eRC3TZ4yVejK0A"
          },
          {
            name: "Impact Enterprise",
            price: "$897/mo",
            annualPrice: "$8,611/annual",
            setupFee: "$197.00 One-time set-up",
            popular: false,
            monthlyLink: "https://buy.stripe.com/eVqdR18t538Ubmr8PbejK0B",
            annualLink: "https://buy.stripe.com/6oU28j38L24QeyD5CZejK0C"
          }
        ];
      case 'service-contractors':
        return [
          {
            name: "Impact Starter",
            price: "$397/mo",
            annualPrice: "$3,811/annual",
            setupFee: "$197.00 One-time set-up",
            popular: false,
            monthlyLink: "https://buy.stripe.com/aFa14ffVxdNy9ej1mJejK06",
            annualLink: "https://buy.stripe.com/fZu00b38LaBm627aXjejK07"
          },
          {
            name: "Impact Pro",
            price: "$597/mo",
            annualPrice: "$5,731/annual",
            setupFee: "$197.00 One-time set-up",
            popular: true,
            monthlyLink: "https://buy.stripe.com/eVqfZ95gT38UgGL3uRejK08",
            annualLink: "https://buy.stripe.com/eVq8wHbFhaBm8af9TfejK09"
          },
          {
            name: "Impact Enterprise",
            price: "$897/mo",
            annualPrice: "$8,611/annual",
            setupFee: "$197.00 One-time set-up",
            popular: false,
            monthlyLink: "https://buy.stripe.com/5kQ5kv10DbFq1LRe9vejK0a",
            annualLink: "https://buy.stripe.com/bJe5kvdNp10MeyDc1nejK0b"
          }
        ];
      case 'music':
        return [
          {
            name: "Impact Starter",
            price: "$397/mo",
            annualPrice: "$3,811/annual",
            setupFee: "$197.00 One-time set-up",
            popular: false,
            monthlyLink: "https://buy.stripe.com/4gM00bfVxbFq2PV9TfejK0j",
            annualLink: "https://buy.stripe.com/7sY00bcJl38UgGLaXjejK0k"
          },
          {
            name: "Impact Pro",
            price: "$597/mo",
            annualPrice: "$5,731/annual",
            setupFee: "$197.00 One-time set-up",
            popular: true,
            monthlyLink: "https://buy.stripe.com/cNi5kv6kX7pa2PVd5rejK0l",
            annualLink: "https://buy.stripe.com/9B600bfVx4cYbmr2qNejK0m"
          },
          {
            name: "Impact Enterprise",
            price: "$897/mo",
            annualPrice: "$8,611/annual",
            setupFee: "$197.00 One-time set-up",
            popular: false,
            monthlyLink: "https://buy.stripe.com/bJecMXeRt6l6bmr9TfejK0n",
            annualLink: "https://buy.stripe.com/dRm7sD24HfVG4Y33uRejK0o"
          }
        ];
      default:
        return [];
    }
  };

  const industryLabel = getIndustryLabel();
  const gradient = getGradient();
  const pricingPlans = getPricingPlans();

  // Handle video load complete
  const handlePlanSelect = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Get Started Today"
          subtitle={`Begin your ${industry.replace('-', ' ')} automation journey`}
          centered={true}
        />
        
        {/* Display pricing plans directly on the page */}
        <div className="mt-8 mb-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <StyleProvider 
                key={index} 
                delay={index * 0.1} 
                className={`bg-white p-6 rounded-xl border ${plan.popular ? 'border-brand-pink shadow-lg' : 'border-gray-200'} flex flex-col`}
              >
                {plan.popular && (
                  <div className={`py-1 text-sm bg-gradient-to-r ${gradient} text-white text-center font-medium rounded-t-lg -mt-6 -mx-6 mb-4`}>
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-center mb-2">{plan.name}</h3>
                
                {/* Monthly Option */}
                <div className="border rounded-lg p-4 mb-3 flex-1">
                  <div className="text-center">
                    <p className="text-xl font-bold mb-1">{plan.price}</p>
                    <p className="text-sm text-gray-500 mb-2">{plan.setupFee}</p>
                    
                    <motion.button
                      className="w-full text-sm py-2 px-3 bg-gradient-to-r from-brand-pink to-brand-aqua text-white rounded-md hover:shadow-md transition-all duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handlePlanSelect(plan.monthlyLink)}
                    >
                      Select Monthly
                    </motion.button>
                  </div>
                </div>
                
                {/* Annual Option */}
                <div className="border border-green-100 bg-green-50/30 rounded-lg p-4 flex-1">
                  <div className="text-center">
                    <p className="text-lg font-bold mb-1">{plan.annualPrice}</p>
                    <p className="text-sm text-gray-500 mb-1">{plan.setupFee}</p>
                    <p className="text-xs text-green-600 font-medium mb-2">Save with annual billing</p>
                    
                    <motion.button
                      className="w-full text-sm py-2 px-3 bg-gradient-to-r from-green-500 to-brand-aqua text-white rounded-md hover:shadow-md transition-all duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handlePlanSelect(plan.annualLink)}
                    >
                      Select Annual
                    </motion.button>
                  </div>
                </div>
              </StyleProvider>
            ))}
          </div>
        </div>
        
        <div id="ai-demo-form" className="mt-12 max-w-3xl mx-auto">
          <StyleProvider className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-center mb-4">Try Our AI Voice Agent</h3>
            <p className="text-center text-gray-600 mb-6">Call our demo number to experience our AI voice agent</p>
            
            {/* Direct call section */}
            <div className="text-center py-8">
              <motion.div 
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ type: "spring", stiffness: 260, damping: 20, repeat: Infinity, repeatType: "reverse", duration: 2 }}
                className="bg-gradient-to-r from-brand-pink to-brand-aqua w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6"
              >
                <PhoneCall size={30} className="text-white" />
              </motion.div>
              
              <motion.a
                href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                className="text-3xl font-bold mb-5 text-brand-aqua block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {phoneNumber}
              </motion.a>
              
              <Button
                variant="action"
                size="lg"
                className="shadow-lg bg-gradient-to-r from-brand-pink to-brand-aqua hover:shadow-xl transition-all duration-300 my-4"
                onClick={() => window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`}
              >
                <PhoneCall className="mr-2" /> Call Now
              </Button>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Watch Demo Video</h3>
                <div className="aspect-video max-w-lg mx-auto overflow-hidden rounded-lg shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/HuU_pxXVVqo"
                    title="AI Voice Agent Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="font-medium text-gray-700 mb-2">Prefer to speak with our team?</p>
              <Button 
                onClick={() => setShowBookingDialog(true)}
                className="inline-flex items-center px-4 py-2 bg-brand-aqua/10 text-brand-aqua hover:bg-brand-aqua/20 rounded-lg transition-colors"
              >
                <Calendar size={16} className="mr-1" /> Schedule a consultation
              </Button>
            </div>
          </StyleProvider>
        </div>
      </div>
      
      {/* Booking Dialog - Added for Schedule Consultation button */}
      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-white border border-brand-pink/10 shadow-xl">
          <DialogTitle className="text-xl font-bold text-center mb-4 text-gray-800">Schedule Your Consultation</DialogTitle>
          <div className="w-full calendar-container p-1 md:p-4 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5 rounded-lg">
            <div className="iframe-container">
              <iframe 
                src="https://link.suddenimpactagency.io/widget/bookings/XaOGCzWWKmrQWqpbwWlq-4f31f69f-689b-4bd4-95d8-c885cf48e9ac-ff5dc43e-63e9-438c-a258-ad582d9e066e-a667fee4-6211-4e1e-9aed-df4252fe1635" 
                style={{ 
                  width: "100%",
                  height: isMobile ? "600px" : "700px", 
                  border: "none",
                  borderRadius: "8px",
                }}
                scrolling="no" 
                id="booking-iframe-contact"
                className="no-scrollbar bg-white shadow-md"
              ></iframe>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* AI Demo Call Dialog - Shows automatically after form submission */}
      <AIDemoCallDialog 
        open={showCallDialog}
        onOpenChange={setShowCallDialog}
        phoneNumber={phoneNumber}
      />
    </section>
  );
};

export default NicheContactForm;
