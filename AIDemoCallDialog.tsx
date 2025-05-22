
import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface AIDemoCallDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  phoneNumber?: string;
  industry?: string;
}

const AIDemoCallDialog = ({ 
  open, 
  onOpenChange, 
  phoneNumber = "+1 (302) 618-3977",
  industry
}: AIDemoCallDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border border-brand-pink/10 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-gray-800">
            Thank You! Call Our AI Voice Agent Now
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Experience our AI voice technology firsthand by calling the number below.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-4 py-6 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5 rounded-lg px-4">
          <motion.div 
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white"
          >
            <Phone className="h-8 w-8" />
          </motion.div>
          <p className="text-2xl font-semibold text-center text-gray-800">{phoneNumber}</p>
          <p className="text-sm text-gray-500 text-center">
            Available 24/7 - Call now for your interactive demo
          </p>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 mb-2">Need to schedule for later?</p>
            <a 
              href="https://link.suddenimpactagency.io/widget/booking/MYRdt5Un7mP29erZS5rx" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-brand-aqua/10 text-brand-aqua hover:bg-brand-aqua/20 rounded-lg transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIDemoCallDialog;
