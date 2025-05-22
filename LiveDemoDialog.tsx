
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LiveDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LiveDemoDialog = ({ open, onOpenChange }: LiveDemoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border border-brand-pink/10 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-gray-800">Try Our AI Voice Agent</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Experience our AI voice technology firsthand by visiting our demo page.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-4 py-6 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5 rounded-lg px-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 20 
            }}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white"
          >
            <Phone className="h-8 w-8" />
          </motion.div>
          <p className="text-lg font-semibold text-center text-gray-800">Try our AI voice agent demo</p>
          <p className="text-sm text-gray-500 text-center mb-4">
            Complete a quick form to access our interactive AI demo
          </p>
          <Link to="/demo" onClick={() => onOpenChange(false)}>
            <Button 
              variant="action"
              size="lg"
              className="shadow-lg bg-gradient-to-r from-brand-pink to-brand-aqua hover:shadow-xl transition-all duration-300"
            >
              <Phone className="mr-2" /> Go to Demo
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LiveDemoDialog;
