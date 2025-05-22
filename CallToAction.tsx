
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Play } from "lucide-react";
import SectionTitle from "../design/SectionTitle";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useIsMobile } from '@/hooks/use-mobile';

const CallToAction = () => {
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  const [showDemoVideo, setShowDemoVideo] = useState(false);
  const isMobile = useIsMobile();
  const demoVideoUrl = "https://www.youtube.com/embed/HuU_pxXVVqo?si=qrMXYUDeg8m8zUzs";

  return (
    <section className={`relative overflow-hidden ${isMobile ? 'py-5' : 'section-padding'}`}>
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-pink/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-brand-indigo to-brand-violet rounded-3xl p-6 md:p-16 shadow-2xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Ready to Transform Your Business with AI Voice Agents?"
              subtitle="Start your free 7-day trial today and experience how our AI voice agents can revolutionize your operations and enhance customer experiences."
              centered={true}
              light={true}
            />
            
            <div className="flex flex-col sm:flex-row items-center justify-center mt-4 sm:mt-8 space-y-3 sm:space-y-0 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link 
                  to="/pricing" 
                  className="inline-flex items-center justify-center px-6 py-3 text-brand-indigo bg-white hover:bg-gray-100 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <button 
                  onClick={() => setShowDemoVideo(true)}
                  className="inline-flex items-center justify-center px-6 py-3 text-brand-pink bg-white hover:bg-gray-100 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-brand-pink/20 w-full sm:w-auto"
                >
                  <Play className="mr-2 h-5 w-5 text-brand-pink" fill="currentColor" />
                  Watch Demo Video
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Schedule Dialog - Updated styling to match brand colors and updated booking link */}
      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-white border border-brand-pink/10 shadow-xl">
          <DialogTitle className="text-xl font-bold text-center mb-4 text-gray-800">Schedule Your Demo</DialogTitle>
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
                id="msgsndr-calendar-cta"
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
    </section>
  );
};

export default CallToAction;
