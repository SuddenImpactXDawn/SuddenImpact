
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Calendar, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import DemoCalendarForm from "@/components/demo/DemoCalendarForm";
import { useIsMobile } from '@/hooks/use-mobile';
import AIDemoCallDialog from "@/components/niches/AIDemoCallDialog";

const DemoForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showDemoVideo, setShowDemoVideo] = useState(false);
  const [showCallDialog, setShowCallDialog] = useState(false);
  const isMobile = useIsMobile();
  const formId = "Gf3ORV8Uba4HRiXoml5L";
  
  // Handle GHL form message events
  useEffect(() => {
    const handleGHLMessage = (event: MessageEvent) => {
      if (
        event.data && 
        typeof event.data === 'object' && 
        event.data.type === 'form:submit'
      ) {
        console.log('Form submission detected via postMessage', event.data);
        setIsSubmitted(true);
        setShowCallDialog(true);
        toast({
          title: "Demo Request Submitted!",
          description: "You'll be connected to our AI voice agent shortly.",
        });
      }
    };

    window.addEventListener('message', handleGHLMessage);
    return () => window.removeEventListener('message', handleGHLMessage);
  }, []);

  // Check local storage for previous submissions
  useEffect(() => {
    const hasSubmitted = localStorage.getItem('demoFormSubmitted') === 'true';
    if (hasSubmitted) {
      setIsSubmitted(true);
    }
  }, []);

  // Load the GHL embed.js script
  useEffect(() => {
    // First check if script already exists
    const existingScript = document.querySelector('script[src="https://link.suddenimpactagency.io/js/form_embed.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://link.suddenimpactagency.io/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
      
      console.log('GHL form script added to the page');
    }
    
    return () => {
      // Clean up script when component unmounts
      const scriptToRemove = document.querySelector('script[src="https://link.suddenimpactagency.io/js/form_embed.js"]');
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    };
  }, []);

  const handleScheduleClick = () => {
    setShowCalendar(true);
  };

  const handleDemoVideoClick = () => {
    setShowDemoVideo(true);
  };

  const handleFormSubmit = () => {
    setIsSubmitted(true);
    setShowCallDialog(true);
    localStorage.setItem('demoFormSubmitted', 'true');
    toast({
      title: "Demo Request Submitted!",
      description: "You'll be connected to our AI voice agent shortly.",
    });
  };

  const demoVideoUrl = "https://www.youtube.com/embed/HuU_pxXVVqo?si=qrMXYUDeg8m8zUzs";
  
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/5 via-white/90 to-brand-aqua/5"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800 text-center">
              Witness First-Hand How Our AI Voice Agents Can{" "}
              <span className="bg-gradient-to-r from-brand-pink to-brand-aqua bg-clip-text text-transparent">Revolutionize Your Business</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 text-center">
              Experience a live, interactive demo with our AI voice agent. See how it handles calls, schedules appointments, and answers questions about your business.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-brand-pink" />
                </div>
                <div className="ml-3">
                  <h3 className="text-base md:text-lg font-medium text-gray-800">Live 10-Minute Interactive Demo</h3>
                  <p className="text-sm md:text-base text-gray-600">Talk directly with our AI voice agent and experience its capabilities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-brand-pink" />
                </div>
                <div className="ml-3">
                  <h3 className="text-base md:text-lg font-medium text-gray-800">No Sales Pressure</h3>
                  <p className="text-sm md:text-base text-gray-600">This is a technology demo, not a sales call</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5 text-brand-pink" />
                </div>
                <div className="ml-3">
                  <h3 className="text-base md:text-lg font-medium text-gray-800">Schedule For Later</h3>
                  <p className="text-sm md:text-base text-gray-600">Can't talk now? Book a future time for your demo</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-6 md:mt-8">
                <button
                  onClick={handleDemoVideoClick}
                  className="bg-white border border-brand-pink/30 text-brand-pink hover:bg-gray-50 font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-sm hover:shadow-md transition-all text-sm md:text-base"
                >
                  Watch Demo Video
                </button>
                
                <button
                  onClick={handleScheduleClick}
                  className="bg-white border border-brand-aqua/30 text-brand-aqua hover:bg-gray-50 font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-sm hover:shadow-md transition-all text-sm md:text-base"
                >
                  <Calendar className="inline-block mr-2 h-3 w-3 md:h-4 md:w-4" />
                  Schedule For Later
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
          >
            {!isSubmitted ? (
              <div className="flex flex-col">
                <div className="text-center p-6">
                  <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" x2="12" y1="19" y2="22"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-gray-800">Try Our AI Voice Agent</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-2">
                    Complete the form below to access our AI voice agent demo.
                  </p>
                </div>
                
                <div className="w-full ghl-form-wrapper" style={{ height: "auto", minHeight: isMobile ? "800px" : "750px" }}>
                  <iframe
                    src="https://link.suddenimpactagency.io/widget/form/Gf3ORV8Uba4HRiXoml5L"
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      minHeight: isMobile ? "800px" : "750px",
                      border: "none", 
                      borderRadius: "8px" 
                    }}
                    id="inline-home-Gf3ORV8Uba4HRiXoml5L" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="leadCollected"
                    data-deactivation-value=""
                    data-form-name="A2P Form - New"
                    data-height="auto"
                    data-layout-iframe-id="inline-home-Gf3ORV8Uba4HRiXoml5L"
                    data-form-id="Gf3ORV8Uba4HRiXoml5L"
                    title="A2P Form - New"
                    onLoad={() => {
                      // Add a fallback button for when the form doesn't auto-submit
                      const formContainer = document.querySelector(".ghl-form-wrapper");
                      if (formContainer) {
                        const fallbackButton = document.createElement("button");
                        fallbackButton.innerText = "Submit Demo Request";
                        fallbackButton.className = "mt-4 bg-gradient-to-r from-brand-pink to-brand-aqua text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all";
                        fallbackButton.onclick = handleFormSubmit;
                        formContainer.appendChild(fallbackButton);
                      }
                    }}
                  ></iframe>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 px-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white mb-6">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Demo Request Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  We'll be in touch shortly to schedule your interactive AI voice demo.
                </p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <PhoneCall className="h-5 w-5 text-brand-pink" />
                  <a 
                    href="tel:+13026183977"
                    className="text-lg font-medium text-brand-aqua hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowCallDialog(true);
                    }}
                  >
                    +1 (302) 618-3977
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  Available 24/7 for demonstration purposes
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Calendar dialog for scheduling - Updated styling */}
      <Dialog open={showCalendar} onOpenChange={setShowCalendar}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-white border border-brand-pink/10 shadow-xl">
          <DialogTitle className="text-xl font-bold text-center mb-4 text-gray-800">Schedule Your Demo</DialogTitle>
          <div className="w-full calendar-container p-1 md:p-4 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5 rounded-lg">
            <div className="iframe-container">
              <iframe 
                src="https://link.suddenimpactagency.io/widget/booking/MYRdt5Un7mP29erZS5rx" 
                style={{ 
                  width: "100%",
                  height: isMobile ? "600px" : "700px", 
                  border: "none",
                  borderRadius: "8px",
                }}
                scrolling="no" 
                id="msgsndr-calendar-demoform"
                className="no-scrollbar bg-white shadow-md"
              ></iframe>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Video demo dialog */}
      <Dialog open={showDemoVideo} onOpenChange={setShowDemoVideo}>
        <DialogContent className="sm:max-w-[800px] bg-white border border-brand-pink/10 shadow-xl">
          <DialogTitle className="text-xl font-bold text-center mb-4 text-gray-800">AI Voice Agent Demo</DialogTitle>
          <div className="aspect-video relative bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5 rounded-lg overflow-hidden">
            <iframe 
              src={demoVideoUrl}
              className="w-full h-full"
              title="AI Voice Agent Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>

      {/* AI Demo Call Dialog */}
      <AIDemoCallDialog 
        open={showCallDialog} 
        onOpenChange={setShowCallDialog}
        phoneNumber="+1 (302) 618-3977"
      />
    </section>
  );
};

interface Window {
  ghl?: {
    loadEmbed: () => void;
  };
}

declare global {
  interface Window {
    ghl?: {
      loadEmbed: () => void;
    };
  }
}

export default DemoForm;
