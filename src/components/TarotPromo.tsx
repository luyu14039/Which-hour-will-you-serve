import React from 'react';
import { ExternalLink, Sparkles, Github } from 'lucide-react';

export const TarotPromo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full max-w-2xl mx-auto mt-6 p-6 border border-gold/20 bg-onyx/40 backdrop-blur-sm rounded-sm relative group overflow-hidden ${className}`}>
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/40" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/40" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/40" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/40" />

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="p-4 bg-gold/5 rounded-full border border-gold/10 group-hover:border-gold/30 transition-colors">
          <Sparkles className="w-8 h-8 text-gold/80" />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-gold font-heading text-lg tracking-wider mb-2 flex items-center justify-center md:justify-start gap-2">
            Tarot But Hours / 司辰塔罗
            <span className="text-[10px] px-2 py-0.5 border border-gold/20 rounded text-gold/60 font-sans tracking-normal">New Project</span>
          </h4>
          <p className="text-parchment/60 text-sm font-serif leading-relaxed mb-4">
            一个基于《司辰之书》世界观的塔罗牌占卜工具。在漫宿的星空下，通过牌阵解读你的命运与渴望。
          </p>
          
          <div className="flex items-center justify-center md:justify-start gap-6">
            <a 
              href="https://luyu14039.github.io/tarot-but-hours/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-gold hover:text-gold/80 transition-colors border-b border-gold/20 hover:border-gold pb-0.5 font-heading tracking-widest uppercase"
            >
              <span>开始占卜</span>
              <ExternalLink size={12} />
            </a>
            
            <a 
              href="https://github.com/luyu14039/tarot-but-hours"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-gold/60 hover:text-gold transition-colors border-b border-transparent hover:border-gold/40 pb-0.5 font-heading tracking-widest uppercase"
            >
              <span>GitHub</span>
              <Github size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
