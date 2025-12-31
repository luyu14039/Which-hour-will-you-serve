import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, PartyPopper } from 'lucide-react';

interface NewYearModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewYearModal: React.FC<NewYearModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-onyx border border-gold/40 shadow-[0_0_50px_rgba(192,160,98,0.2)] p-6 md:p-8 rounded-sm text-center max-h-[85vh] overflow-y-auto custom-scrollbar"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gold/40 hover:text-gold transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="mb-6 flex justify-center">
                <div className="p-3 bg-gold/10 rounded-full border border-gold/20">
                    <PartyPopper className="w-8 h-8 text-gold animate-bounce" />
                </div>
            </div>

            <h3 className="text-2xl text-gold font-heading mb-2 tracking-wider">2026年快乐！</h3>
            
            <div className="h-px w-16 bg-gold/30 mx-auto my-4" />

            <div className="text-parchment/80 text-sm leading-relaxed mb-6 font-serif space-y-4 text-center">
                <p>
                    祝大家元旦快乐！
                </p>
                <p>
                    很高兴我考试周做的这个小东西能获得这么多人的喜爱，希望在新的一年也能多多做出这些大家喜爱，我也喜爱的小东西。
                </p>
                <p>
                    新的一年还望大家多多关照。
                </p>
                
                <div className="mt-8 text-center">
                    <Sparkles className="inline-block w-4 h-4 text-gold/60 mb-2" />
                    <p className="text-xs text-gold/40 italic">
                        May the Hours favor you in the coming year.
                    </p>
                </div>
            </div>

            <button
                onClick={onClose}
                className="mt-2 text-xs text-gold/30 hover:text-gold/60 transition-colors underline decoration-gold/20 underline-offset-4"
            >
                关闭
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
