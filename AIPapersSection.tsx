
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Link as LinkIcon, Info, ChevronDown } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const papers = [
  {
    title: "AI-Augmented Cold Outreach: 3x Connection Rates & Improved Meeting Holds",
    authors: "Case Study: Avantive Solutions",
    source: "Avantive Solutions",
    highlights: [
      "AI + human callers connected on 3x as many calls as human-only teams",
      "20% increase in meeting hold rate",
      "Combined efforts of AI and humans boosted overall outreach effectiveness"
    ],
    summary:
      "In a sales organization, integrating AI with human cold callers led to a tripling of connection rates and improved meeting hold rates, demonstrating the power of AI augmentation in outreach.",
    url: "https://jbai.ai/index.php/jbai/article/view/22/7",
    note: "See the full case study from the Journal of Business AI."
  },
  {
    title: "Voice-Based AI Agents Transform Call Center Service Availability",
    authors: "Case Study: AISEL (AI-Driven Customer Service)",
    source: "ResearchGate",
    highlights: [
      "AI agents provided 24/7 service coverage, eliminating customer wait times",
      "Enabled rapid responses and improved consistency in support",
      "Boosted overall efficiency and service stability"
    ],
    summary:
      "Voice-based AI agents in a large call center allowed the team to move to true 24/7 support, enhancing both speed and operational reliability compared to human-only call handling.",
    url: "https://www.researchgate.net/publication/342983429_Voice-Based_AI_in_Call_Center_Customer_Service_Evidence_from_a_Field_Experiment",
    note: "Read the academic report on ResearchGate."
  },
  {
    title: "AI Outperforms Human Emergency Call Handlers in Stroke Recognition",
    authors: "Danish National Emergency Medical Services & University of Copenhagen",
    source: "Healthcare-in-Europe",
    highlights: [
      "AI better recognized stroke indicators in emergency calls vs. human dispatchers",
      "Outperformed humans across all age groups and sexes",
      "Could enable faster, life-saving interventions"
    ],
    summary:
      "A trained AI model analyzed live emergency calls in Denmark and was significantly more accurate than human call handlers at detecting strokes, illustrating the potential for AI to augment—and sometimes outperform—humans in critical, high-stakes communication.",
    url: "https://healthcare-in-europe.com/en/news/ai-tool-emergency-call-handlers-stroke.html",
    note: "Read the news brief on Healthcare in Europe."
  }
];

export default function AIPapersSection() {
  return (
    <section className="container-custom my-16">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-violet-500 to-purple-500 bg-clip-text text-transparent">
          Real-World Results: AI vs. Human Callers
        </h2>
        <p className="text-gray-500 md:text-lg mb-4">
          Explore recent independent studies and case reports showing how AI drives better results in real call and customer service scenarios.
        </p>
      </div>
      
      <div className="space-y-4 max-w-4xl mx-auto">
        {papers.map((paper, idx) => (
          <Card key={idx} className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
            <Accordion type="single" collapsible>
              <AccordionItem value={`paper-${idx}`} className="border-none">
                <AccordionTrigger className="px-6 py-5 hover:no-underline">
                  <div className="flex items-center justify-between w-full text-left">
                    <div>
                      <div className="font-medium text-gray-800">{paper.authors} <span className="text-gray-400 italic">{paper.source && `· ${paper.source}`}</span></div>
                      <div className="font-semibold text-lg text-gray-900 mt-1">{paper.title}</div>
                    </div>
                    <div className="flex items-center ml-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a 
                              href={paper.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              onClick={(e) => e.stopPropagation()}
                              className="text-blue-500 hover:text-blue-700 mr-2"
                            >
                              <LinkIcon className="h-5 w-5" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View source</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <ChevronDown className="h-5 w-5 text-gray-400 transform transition-transform duration-200" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div className="space-y-4">
                    <div>
                      <span className="font-medium text-gray-700">Key Insights:</span>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                        {paper.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Summary:</span>
                      <p className="text-gray-600 mt-1">{paper.summary}</p>
                    </div>
                    <div>
                      <a
                        href={paper.url}
                        className="inline-flex items-center text-blue-500 hover:text-blue-700 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {paper.note || "View Source"}
                        <LinkIcon className="ml-1" size={14} />
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-8 max-w-3xl mx-auto text-sm flex items-start gap-2 bg-gray-50 rounded-lg px-4 py-3 text-left border border-gray-100">
        <Info className="text-gray-400 mt-0.5 flex-shrink-0" size={18} />
        <span className="text-gray-600">
          <b>Disclaimer:</b> The above case studies and reports are taken from their respective cited sources.
          Results are provided for informational purposes only to offer a viable idea of AI's impact in select scenarios.
          Actual results may vary and are not guaranteed by Sudden Impact Agency.
        </span>
      </div>
    </section>
  );
}
