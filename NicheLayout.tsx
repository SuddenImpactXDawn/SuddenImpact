
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Check, HelpCircle, DollarSign, Star } from 'lucide-react';
import StyleProvider from '@/components/design/StyleProvider';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

interface NicheLayoutProps {
  children: React.ReactNode;
  industry: 'healthcare' | 'real-estate' | 'restaurants' | 'service-contractors' | 'music';
  title: string;
  subtitle: string;
}

const NicheLayout = ({ children, industry, title, subtitle }: NicheLayoutProps) => {
  // ROI Calculator state
  const [monthlyCalls, setMonthlyCalls] = useState<number>(500);
  const [avgTransactionValue, setAvgTransactionValue] = useState<number>(150);
  const [conversionRate, setConversionRate] = useState<number>(0.2); // 20% conversion rate
  
  // Define industry-specific gradients and colors
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
  
  const getButtonText = () => {
    switch(industry) {
      case 'healthcare':
        return 'Book Your Appointment';
      case 'real-estate':
        return 'Get Started Now';
      case 'restaurants':
        return 'Reserve Now';
      case 'service-contractors':
        return 'Schedule Service Now';
      default:
        return 'Get Started';
    }
  };

  const getIndustryBenefits = () => {
    switch(industry) {
      case 'healthcare':
        return {
          title: "Why AI Voice Agents for Healthcare?",
          benefits: [
            "24/7 appointment booking even when your office is closed",
            "Reduce missed appointments by 35% with automated reminders",
            "Capture patient information accurately without front desk staff",
            "HIPAA-compliant conversations and secure data handling",
            "Seamless integration with your existing scheduling systems"
          ]
        };
      case 'real-estate':
        return {
          title: "Why AI Voice Agents for Real Estate?",
          benefits: [
            "Never miss a potential buyer inquiry - 24/7 responsiveness",
            "Qualify leads automatically and schedule showings instantly",
            "Follow up with prospects consistently through their journey",
            "Provide instant property information without agent intervention",
            "Increase conversion rates by 40% with timely follow-ups"
          ]
        };
      case 'restaurants':
        return {
          title: "Why AI Voice Agents for Restaurants?",
          benefits: [
            "Handle reservation peaks without additional staff",
            "Answer common questions instantly (hours, location, menu)",
            "Upsell specials and event bookings automatically",
            "Capture customer preferences for personalized experiences",
            "Reduce no-shows by 45% with automated reminders"
          ]
        };
      case 'service-contractors':
        return {
          title: "Why AI Voice Agents for Service Contractors?",
          benefits: [
            "Book appointments while your team is on service calls",
            "Qualify emergency vs. standard service needs automatically",
            "Send appointment confirmations with technician information",
            "Automated follow-ups for estimates and maintenance reminders",
            "Increase customer satisfaction with improved response times"
          ]
        };
      default:
        return {
          title: "Why AI Voice Agents?",
          benefits: [
            "24/7 availability for your customers",
            "Reduce staffing costs while improving service",
            "Consistent quality in every interaction",
            "Automated follow-ups and reminders",
            "Detailed analytics on customer interactions"
          ]
        };
    }
  };
  
  const gradient = getGradient();
  const buttonText = getButtonText();
  const industryBenefits = getIndustryBenefits();
  
  // Calculate ROI based on current state
  const calculateMonthlySavings = () => {
    // Base monthly savings from call handling
    const callHandlingSavings = monthlyCalls * 3; // $3 saved per call handled by AI
    
    // Additional revenue from improved conversion rate (assuming 5% improvement)
    const improvedConversionRate = conversionRate * 1.05;
    const additionalConversions = monthlyCalls * (improvedConversionRate - conversionRate);
    const additionalRevenue = additionalConversions * avgTransactionValue;
    
    // Estimate staff time savings (assuming $25/hour labor cost)
    const hoursSaved = monthlyCalls * 0.08; // 5 minutes (0.08 hours) saved per call
    const laborSavings = hoursSaved * 25;
    
    // Total monthly savings
    return Math.round(callHandlingSavings + additionalRevenue * 0.3 + laborSavings); // 30% profit margin on additional revenue
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header without any navigation to main site */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="container-custom">
          <div className="flex justify-center">
            <motion.img 
              src="/lovable-uploads/293aebbf-1435-4e16-867f-2a95f52ef685.png" 
              alt="Sudden Impact Agency Logo" 
              className="h-32 md:h-40 w-auto" // Increased logo size
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </header>
      
      {/* Hero Section with Interactive Elements */}
      <section className="bg-gray-50 pt-20 pb-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <StyleProvider>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  {title}
                </span>
              </h1>
              <p className="text-xl text-gray-600 mt-6">
                {subtitle}
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className={`bg-gradient-to-r ${gradient} text-white hover:opacity-90 px-6 py-6 rounded-lg shadow-lg flex items-center gap-2 text-lg`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {buttonText}
                  <ArrowRight size={18} />
                </Button>
                
                <Button
                  variant="outline"
                  className="px-6 py-6 rounded-lg border border-gray-200 hover:border-brand-pink/30 text-gray-700 flex items-center gap-2 text-lg"
                  onClick={() => window.open('https://link.suddenimpactagency.io/widget/booking/MYRdt5Un7mP29erZS5rx', '_blank')}
                >
                  <Phone size={18} />
                  Schedule Demo
                </Button>
              </div>
              <div className="mt-4 flex justify-center space-x-4">
                <Link to="/legal" className="text-gray-600 hover:text-gray-900 text-sm underline">Legal</Link>
                <Link to={`/niches/${industry}/about`} className="text-gray-600 hover:text-gray-900 text-sm underline">About Us</Link>
              </div>
            </StyleProvider>
          </div>
        </div>
      </section>
      
      {/* Industry-Specific Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <StyleProvider>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                {industryBenefits.title}
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Key Benefits */}
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-t-brand-pink">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="text-brand-pink" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {industryBenefits.benefits.map((benefit, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="text-brand-pink mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* ROI Calculator - Updated to be functional */}
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-t-brand-aqua">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="text-brand-aqua" />
                    ROI Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Calls: {monthlyCalls}</label>
                      <Slider 
                        value={[monthlyCalls]} 
                        min={100} 
                        max={1000} 
                        step={50} 
                        onValueChange={(value) => setMonthlyCalls(value[0])}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>100</span>
                        <span>1000</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Average Transaction Value: ${avgTransactionValue}</label>
                      <Slider 
                        value={[avgTransactionValue]} 
                        min={50} 
                        max={500} 
                        step={10} 
                        onValueChange={(value) => setAvgTransactionValue(value[0])}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>$50</span>
                        <span>$500</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Conversion Rate: {(conversionRate * 100).toFixed(0)}%</label>
                      <Slider 
                        value={[conversionRate * 100]} 
                        min={5} 
                        max={40} 
                        step={1} 
                        onValueChange={(value) => setConversionRate(value[0] / 100)}
                        className="w-full" 
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>5%</span>
                        <span>40%</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mt-4">
                      <h4 className="font-medium mb-2">Your Potential Monthly Savings</h4>
                      <p className="text-2xl font-bold text-brand-aqua">${calculateMonthlySavings()}</p>
                      <p className="text-sm text-gray-500 mt-1">Based on industry averages</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full bg-gradient-to-r from-brand-aqua to-brand-purple text-white`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Your Custom ROI Analysis
                  </Button>
                </CardFooter>
              </Card>
              
              {/* FAQ Quick Answers */}
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-t-brand-purple">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="text-brand-purple" />
                    Common Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800">How quickly can I get started?</h4>
                      <p className="text-gray-600 text-sm mt-1">Our setup takes just 24-48 hours for most {industry.replace('-', ' ')} businesses.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800">Will it integrate with my current systems?</h4>
                      <p className="text-gray-600 text-sm mt-1">Yes! We integrate with most popular {industry.replace('-', ' ')} software platforms.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800">What if the AI can't answer a question?</h4>
                      <p className="text-gray-600 text-sm mt-1">It will seamlessly transfer to your team while keeping all context.</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link 
                    to={`/niches/${industry}/about`}
                    className="w-full text-center text-brand-purple hover:text-brand-pink transition-colors"
                  >
                    View All FAQs
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </StyleProvider>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className={`py-12 bg-gradient-to-r ${gradient}`}>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold">Ready to transform your {industry.replace('-', ' ')} business?</h3>
              <p className="mt-2 text-white/80">Join hundreds of businesses saving time and growing revenue.</p>
            </div>
            <Button
              variant="outline"
              className="bg-white text-brand-pink hover:bg-gray-100 px-8 py-6 rounded-lg text-lg font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      {children}
      
      {/* Footer - Simple without links to main site */}
      <footer className="bg-gray-50 border-t border-gray-200 py-10">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-gray-600">© {new Date().getFullYear()} Sudden Impact Agency. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">AI Voice Agents for Business Communication</p>
            <div className="mt-4 flex justify-center space-x-4">
              <Link to="/legal" className="text-gray-500 hover:text-gray-700 text-sm">Privacy Policy & Terms</Link>
              <Link to={`/niches/${industry}/about`} className="text-gray-500 hover:text-gray-700 text-sm">About Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NicheLayout;
