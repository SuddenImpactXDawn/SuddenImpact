
import { Clock, Calendar, Filter, Link as LinkIcon } from "lucide-react";
import SectionTitle from "../design/SectionTitle";
import FeatureCard from "../design/FeatureCard";
import StyleProvider from "../design/StyleProvider";
import { useIsMobile } from '@/hooks/use-mobile';

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a call or appointment opportunity with always-on AI voice agents.",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Automate bookings and integrate seamlessly with your existing calendar systems.",
  },
  {
    icon: Filter,
    title: "Lead Qualification",
    description: "Pre-screen potential clients to focus your efforts on high-quality leads.",
  },
  {
    icon: LinkIcon,
    title: "Seamless Integration",
    description: "Compatible with your existing systems and workflows for a friction-free experience.",
  },
];

const ServiceFeatures = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-purple/5 rounded-full blur-3xl" />
      </div>
      
      <StyleProvider className="container-custom relative z-10 px-4">
        <SectionTitle
          title="Plug-and-Play AI Voice Agents for Service Pros"
          subtitle="Our ready-to-deploy AI voice agents are designed to streamline your operations and enhance customer interactions."
          centered={true}
          maxWidth="max-w-4xl"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              className="bg-gradient-to-br from-white to-gray-50 shadow-xl border border-brand-purple/10 hover:border-brand-purple/20 hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300"
            />
          ))}
        </div>
      </StyleProvider>
    </section>
  );
};

export default ServiceFeatures;
