
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Timer, Clock, ChartBar, DollarSign } from "lucide-react";
import SectionTitle from "../design/SectionTitle";
import StyleProvider from "../design/StyleProvider";
import FeatureCard from "../design/FeatureCard";

const metrics = [
  {
    category: "Availability",
    human: 40,
    ai: 168,
    humanColor: "#CBD5E1",
    aiColor: "#8B5CF6",
    label: "hrs/week",
    description: "AI operates 24/7 while human agents work standard hours",
    percentage: "320% more availability",
    icon: Clock
  },
  {
    category: "Efficiency",
    human: 8,
    ai: 30,
    humanColor: "#CBD5E1",
    aiColor: "#8B5CF6",
    label: "calls/hour",
    description: "AI handles multiple conversations simultaneously",
    percentage: "275% more efficient",
    icon: ChartBar
  },
  {
    category: "Response Time",
    human: 45,
    ai: 1,
    humanColor: "#CBD5E1",
    aiColor: "#8B5CF6",
    label: "seconds",
    description: "Near-instant AI responses vs human processing time",
    percentage: "98% faster",
    icon: Timer
  },
  {
    category: "Operating Cost",
    human: 25,
    ai: 5,
    humanColor: "#CBD5E1",
    aiColor: "#8B5CF6",
    label: "$/hour",
    description: "Significant cost savings with AI operations",
    percentage: "80% cost reduction",
    icon: DollarSign
  },
  {
    category: "Consistency",
    human: 85,
    ai: 100,
    humanColor: "#CBD5E1",
    aiColor: "#8B5CF6",
    label: "%",
    description: "AI maintains perfect consistency in responses",
    percentage: "100% consistent",
    icon: ChartBar
  },
  {
    category: "Monthly Cost",
    human: 4000,
    ai: 800,
    humanColor: "#CBD5E1",
    aiColor: "#8B5CF6",
    label: "$",
    description: "Based on 160 hours of operation",
    percentage: "80% monthly savings",
    icon: DollarSign
  }
];

// Comparison view that works for all screen sizes using cards
const ComparisonView = ({ data }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
      {data.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
        >
          <div className="bg-gradient-to-r from-brand-purple/10 to-brand-aqua/10 px-3 py-2 md:px-4 md:py-3 border-b border-gray-100">
            <h3 className="font-bold text-base md:text-lg text-brand-dark">{item.category}</h3>
            <p className="text-xs text-brand-gray">{item.description}</p>
          </div>
          
          <div className="p-3 md:p-4">
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <div className="flex flex-col">
                <span className="text-xs md:text-sm text-brand-gray">Human</span>
                <span className="text-lg md:text-xl font-bold text-brand-dark">
                  {item.human} <span className="text-xs">{item.label}</span>
                </span>
              </div>
              
              <div className="flex flex-col items-end">
                <span className="text-xs md:text-sm text-brand-vibrantPurple">AI Voice Agent</span>
                <span className="text-lg md:text-xl font-bold text-brand-vibrantPurple">
                  {item.ai} <span className="text-xs">{item.label}</span>
                </span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
              <div 
                className="absolute top-0 left-0 h-2.5 rounded-full bg-gray-400"
                style={{ 
                  width: `${(item.human / Math.max(item.human, item.ai)) * 100}%`,
                  backgroundColor: item.humanColor 
                }}
              ></div>
              <div 
                className="absolute top-0 left-0 h-2.5 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua"
                style={{ 
                  width: `${(item.ai / Math.max(item.human, item.ai)) * 100}%`,
                  transform: `translateX(${item.human > item.ai ? '0%' : '100%'})`,
                  left: item.human > item.ai ? `${(item.human / Math.max(item.human, item.ai)) * 100}%` : '0'
                }}
              ></div>
            </div>
            
            <div className="mt-2 text-center">
              <span className="text-xs md:text-sm font-medium text-brand-vibrantPurple">
                {item.percentage}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const CallerComparisonChart = () => {
  const isMobile = useIsMobile();
  const containerSpacing = isMobile ? "mb-6" : "mb-12";
  const gridSpacing = isMobile ? "gap-3 mt-6" : "gap-6 mt-12";
  
  return (
    <StyleProvider
      className={isMobile ? "py-4" : "section-padding bg-white"}
    >
      <div className="container-custom">
        <SectionTitle
          title="AI Voice Agents vs Human Agents"
          subtitle="Experience the future of customer service with our AI voice agents - delivering unmatched efficiency, availability, and cost savings compared to traditional human call handlers"
          centered={true}
          className={containerSpacing}
        />

        <Card className="p-3 md:p-6 bg-white shadow-lg border border-gray-100 relative overflow-hidden">
          {/* Use card-based comparison for all screen sizes */}
          <ComparisonView data={metrics} />
        </Card>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${gridSpacing}`}>
          {[
            {
              icon: Clock,
              title: "24/7 Availability",
              description: "Always online, never tired. 168 hours of continuous operation vs 40 hours of human availability."
            },
            {
              icon: ChartBar,
              title: "Superior Efficiency",
              description: "Process 30 calls simultaneously while maintaining perfect accuracy and consistency."
            },
            {
              icon: DollarSign,
              title: "Cost Efficiency",
              description: "Save up to 80% on operational costs with our AI voice agents compared to human agents."
            },
            {
              icon: Timer,
              title: "Lightning Fast",
              description: "Instant responses in under 1 second, compared to 45-second average human response time."
            }
          ].map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </StyleProvider>
  );
};

export default CallerComparisonChart;
