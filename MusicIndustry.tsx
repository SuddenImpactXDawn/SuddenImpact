import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, Bell, Music, ArrowRight, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import FeatureCard from '@/components/design/FeatureCard';
import Layout from '@/components/layout/Layout';
import LiveDemoDialog from '@/components/pricing/LiveDemoDialog';
import IndustryAnimation from '@/components/industries/IndustryAnimation';
import MusicPricing from '@/components/industries/MusicPricing';
import AIDemoCallDialog from '@/components/niches/AIDemoCallDialog';
import WhiteSection from '@/components/layout/WhiteSection';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useIsMobile } from '@/hooks/use-mobile';

const MusicIndustry = () => {
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const [showCallDialog, setShowCallDialog] = useState(false);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const isMobile = useIsMobile();
  
  const benefits = [
    "Book your studio time online in seconds",
    "Get SMS and email reminders",
    "Access secure booking forms",
    "Reschedule without phone calls",
    "Review your performances anywhere",
    "Communicate securely with your fans"
  ];

  const workflows = [
    {
      title: "Studio Booking + Reminder",
      trigger: "Form submission",
      actions: "SMS/email confirmation + 24hr/2hr reminders",
      icon: Calendar
    },
    {
      title: "Missed Call Text-Back",
      trigger: "Missed call",
      actions: "SMS with link to schedule online",
      icon: Bell
    },
    {
      title: "Fan Reactivation Campaign",
      trigger: "6 months inactive",
      actions: "Email/SMS prompt to schedule next session",
      icon: Calendar
    },
    {
      title: "New Artist Intake",
      trigger: "Booking confirmation",
      actions: "Send secure form for intake",
      icon: Check
    }
  ];

  return (
    <Layout lightMode={true}>
      {/* Hero Section - Exactly matching healthcare layout */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-pink/5 via-white to-brand-aqua/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-aqua/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-brand-pink font-medium">Industry Solution</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 leading-tight">
                Secure, Simple Music <span className="bg-gradient-to-r from-brand-pink to-brand-aqua bg-clip-text text-transparent">Studio Bookings</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Book your studio time, get reminders, and stay in control of your music career.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-90 text-white px-6 py-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Get Started Now
                </Button>
                
                <Button
                  variant="outline"
                  className="border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 px-6 py-6 rounded-lg font-medium"
                  onClick={() => setShowDemoDialog(true)}
                >
                  Try Live Demo
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl border-2 border-white">
                <IndustryAnimation industry="music" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center">
                    <Music className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                    <p className="font-semibold">Never Miss a Booking</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
        <div className="container-custom">
          <SectionTitle
            title="Transform Your Music Experience"
            subtitle="Our AI voice agents handle studio bookings, reminders, and follow-ups while you focus on creating music"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center shadow-md">
                      <Check className="text-white" size={16} />
                    </div>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </StyleProvider>
            ))}
          </div>
        </div>
      </section>
      
      {/* Workflows Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Automated Music Studio Workflows"
            subtitle="Seamless experiences from booking to follow-up"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflows.map((workflow, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center shadow-md mb-4">
                      {React.createElement(workflow.icon, { className: "text-white", size: 20 })}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{workflow.title}</h3>
                  </div>
                  <div className="space-y-3 flex-grow">
                    <div>
                      <p className="text-sm font-medium text-gray-500">TRIGGER</p>
                      <p className="text-gray-700">{workflow.trigger}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">ACTIONS</p>
                      <p className="text-gray-700">{workflow.actions}</p>
                    </div>
                  </div>
                </div>
              </StyleProvider>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section - Using the updated MusicPricing component */}
      <MusicPricing />
      
      {/* Updated Testimonial Section to match other industry pages */}
      <WhiteSection className="bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Trusted by Music Professionals"
            subtitle="See how our AI voice agents are helping studios like yours"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 gap-8">
            <StyleProvider className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white text-2xl font-bold">
                  JR
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 italic mb-4">
                    "Our front desk staff was overwhelmed with calls before implementing this AI solution. Now they can focus on artists in the studio while the voice agent handles scheduling and routine inquiries. We've seen a 45% reduction in no-shows and our client satisfaction has improved tremendously."
                  </p>
                  <div>
                    <h4 className="text-gray-800 font-medium">James Rodriguez</h4>
                    <p className="text-gray-500">Director, Harmony Studios</p>
                  </div>
                </div>
              </div>
            </StyleProvider>
            
            <StyleProvider delay={0.1} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-aqua to-brand-pink flex items-center justify-center text-white text-2xl font-bold">
                  AM
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 italic mb-4">
                    "Since implementing the AI voice agent, I've been able to focus more on music production and less on answering routine calls. Our booking inquiries are handled efficiently 24/7, and our merchandise sales have increased by 45%. It's been a game-changer for our studio."
                  </p>
                  <div>
                    <h4 className="text-gray-800 font-medium">Alex Morgan</h4>
                    <p className="text-gray-500">Independent Music Producer, Rhythm Studios</p>
                  </div>
                </div>
              </div>
            </StyleProvider>
          </div>
        </div>
      </WhiteSection>
      
      {/* Enhanced Call-to-Action Section - Below testimonials and styled like reference image */}
      <section className="py-28 bg-gradient-to-r from-brand-pink/20 to-brand-aqua/20 border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-pink to-brand-aqua bg-clip-text text-transparent">
                Ready to Transform Your Music Business?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              Schedule a personalized demo to see how our AI voice agents can revolutionize your 
              music studio operations and fan engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link to="/demo">
                <Button 
                  className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white hover:opacity-90 px-12 py-8 text-lg shadow-xl rounded-xl"
                >
                  <Phone className="mr-2 h-6 w-6" />
                  Try AI Demo Now
                </Button>
              </Link>
              
              <Button
                variant="outline"
                className="border-2 border-gray-300 hover:border-brand-pink px-12 py-8 text-lg rounded-xl bg-white"
                onClick={() => setShowBookingDialog(true)}
              >
                <Calendar className="mr-2 h-6 w-6" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Dialog */}
      <LiveDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
      
      {/* AI Call Demo Dialog */}
      <AIDemoCallDialog
        open={showCallDialog}
        onOpenChange={setShowCallDialog}
        phoneNumber="+1 (302) 618-3977"
        industry="music"
      />

      {/* Booking Dialog - Updated with new booking URL */}
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
                id="booking-iframe"
                className="no-scrollbar bg-white shadow-md"
              ></iframe>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default MusicIndustry;
