
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../design/SectionTitle";
import { BarChart3, Calendar, MessageCircle, Users } from "lucide-react";

// Sample case study data
const caseStudies = [
  {
    id: "restaurant",
    title: "Restaurant Chain",
    description: "How a 12-location restaurant chain automated 92% of reservation calls",
    metrics: [
      { label: "Calls Automated", value: "92%", icon: PhoneIcon },
      { label: "Hours Saved Weekly", value: "87", icon: Calendar },
      { label: "Increase in Online Orders", value: "34%", icon: BarChart3 },
      { label: "Customer Satisfaction", value: "4.8/5", icon: MessageCircle },
    ],
    image: "/lovable-uploads/restaurant-dashboard.jpg",
    content: "Implementing our AI voice agent allowed this restaurant chain to automate their reservation system, handle peak call volumes without hiring additional staff, and increase online ordering through automated follow-up texts. The system integrated with their existing POS and handled complex reservation changes seamlessly.",
  },
  {
    id: "medical",
    title: "Medical Practice",
    description: "HIPAA-compliant scheduling for a multi-location medical practice",
    metrics: [
      { label: "Appointment No-Shows", value: "↓63%", icon: Users },
      { label: "Staff Time Savings", value: "22 hrs/wk", icon: Calendar },
      { label: "New Patient Conversion", value: "↑28%", icon: BarChart3 },
      { label: "Patient Satisfaction", value: "4.7/5", icon: MessageCircle },
    ],
    image: "/lovable-uploads/medical-dashboard.jpg",
    content: "Our HIPAA-compliant AI voice solution enabled this practice to streamline appointment scheduling while maintaining strict compliance requirements. The system handled insurance verification pre-calls, sent automated reminders that reduced no-shows by 63%, and integrated with their EHR system for seamless patient management.",
  },
  {
    id: "realestate",
    title: "Real Estate Agency",
    description: "How a boutique agency scaled lead qualification without adding headcount",
    metrics: [
      { label: "Lead Response Time", value: "↓97%", icon: PhoneIcon },
      { label: "Qualified Showings", value: "↑46%", icon: Users },
      { label: "Agent Productivity", value: "↑32%", icon: BarChart3 },
      { label: "Client Satisfaction", value: "4.9/5", icon: MessageCircle },
    ],
    image: "/lovable-uploads/realestate-dashboard.jpg",
    content: "This real estate agency implemented our AI voice agent to handle initial lead qualification, property information requests, and showing scheduling. The system integrated with their CRM to prioritize leads based on buying signals and automatically routed high-intent prospects to the appropriate agent, resulting in a 46% increase in qualified showings.",
  }
];

// Phone icon component
function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(caseStudies[0].id);
  const demoVideoUrl = "https://www.youtube.com/embed/HuU_pxXVVqo?si=qrMXYUDeg8m8zUzs";
  const currentCase = caseStudies.find(cs => cs.id === activeCase) || caseStudies[0];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          title="Real Results for Real Businesses"
          subtitle="See how our AI voice agents transform operations across industries"
          centered={true}
        />

        {/* Industry selector */}
        <div className="flex flex-wrap gap-3 justify-center mt-12 mb-16">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(study.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCase === study.id
                  ? "bg-gradient-to-r from-brand-pink to-brand-aqua text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {study.title}
            </button>
          ))}
        </div>

        {/* Case study content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            key={`content-${activeCase}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentCase.title}</h3>
              <p className="text-xl text-brand-pink">{currentCase.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {currentCase.metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center space-x-2 text-brand-aqua mb-2">
                    <metric.icon className="h-5 w-5" />
                    <span className="font-medium">{metric.label}</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{metric.value}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700">{currentCase.content}</p>
          </motion.div>

          {/* Right column - Dashboard mockup */}
          <motion.div
            key={`image-${activeCase}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-gray-900 rounded-lg p-4 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-400">AI Voice Agent Dashboard</p>
              </div>
              <div className="bg-gray-100 rounded overflow-hidden aspect-video">
                {/* Demo video display */}
                <iframe
                  src={demoVideoUrl}
                  title="AI Voice Agent Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </div>
              <div className="mt-4 flex justify-between">
                <div className="text-xs text-gray-400">Powered by Sudden Impact Agency</div>
                <div className="text-xs text-gray-400">Real-time data</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-brand-pink/20 to-brand-aqua/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
