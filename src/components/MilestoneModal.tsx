import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Sparkles, ExternalLink } from 'lucide-react';

interface MilestoneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MilestoneModal: React.FC<MilestoneModalProps> = ({ isOpen, onClose }) => {
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
            className="relative w-full max-w-lg bg-onyx border border-gold/40 shadow-[0_0_50px_rgba(192,160,98,0.2)] p-6 md:p-8 rounded-sm text-center max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gold/20 scrollbar-track-transparent"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gold/40 hover:text-gold transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="mb-6 flex justify-center">
                <div className="p-3 bg-gold/10 rounded-full border border-gold/20">
                    <Sparkles className="w-8 h-8 text-gold animate-pulse" />
                </div>
            </div>

            <h3 className="text-2xl text-gold font-heading mb-2 tracking-wider">35,000 次的相遇</h3>
            
            <div className="h-px w-16 bg-gold/30 mx-auto my-4" />

            <div className="text-parchment/80 text-sm leading-relaxed mb-6 font-serif space-y-4 text-left">
                <p className="indent-8">
                    最初，这只是一个出于兴趣的微小尝试，未曾想过能与如此多的灵魂在漫宿的边缘相遇。
                </p>
                <p className="indent-8">
                    感谢你们的停泊，让这片虚构的海域变得如此真实。每一次点击，都是一次无形的共鸣；每一次停留，都让这座无墙之屋更加坚固。
                </p>
                
                <div className="bg-black/20 p-4 rounded border border-gold/10 my-4">
                  <h4 className="text-gold font-bold mb-2 text-center">本次更新内容</h4>
                  <ul className="list-disc pl-5 space-y-2 text-xs text-parchment/70">
                    <li>新增了 Wiki 的快速跳转按钮和相性的详细解释。</li>
                    <li>新增了对《司辰之书》中额外的五个相性的适配。</li>
                    <li>对问题和结果的判别进行了调整和优化。</li>
                    <li>因为算法更新，推荐大家重新测试，结果会更准确有趣。</li>
                  </ul>
                </div>

                <p className="text-center text-gold/60 italic pt-2 pb-2 border-t border-b border-gold/10 my-4">
                    “门关已开，而我们皆是过客。愿你在无墙之屋中，寻得那把属于你的钥匙。”
                </p>
                <p className="indent-8 text-xs text-parchment/60">
                    最近我的事儿也结束一些了，我将继续投入到这个以及更多新的二创项目的开发中。如果您感兴趣，欢迎在小黑盒或小红书关注我，我会第一时间在那里发布更新动态。
                </p>
                <p>
                    如果您对《密教模拟器》与《司辰之书》的世界观感兴趣，或许也会喜欢我的另一个二创项目：
                </p>
                <div className="bg-black/30 p-4 border border-gold/10 rounded-sm mt-4">
                    <h4 className="text-gold font-bold mb-1 flex items-center gap-2">
                        Hush House / 噤声书屋
                    </h4>
                    <p className="text-xs text-parchment/60 mb-3">
                        一个基于 LLM 数据提炼的《密教模拟器》与《司辰之书》沉浸式可视化阅读器与知识图谱构建项目。
                    </p>
                    <a 
                        href="https://github.com/luyu14039/Hush-House" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2 border border-gold/30 bg-gold/5 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 font-heading tracking-widest uppercase text-xs group"
                    >
                        <Github size={14} />
                        查看项目
                        <ExternalLink size={14} className="ml-1 opacity-50" />
                    </a>
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
