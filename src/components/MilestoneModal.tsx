import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Sparkles, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface MilestoneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MilestoneModal: React.FC<MilestoneModalProps> = ({ isOpen, onClose }) => {
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);

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
                    <Sparkles className="w-8 h-8 text-gold animate-pulse" />
                </div>
            </div>

            <h3 className="text-2xl text-gold font-heading mb-2 tracking-wider">45,000 次的相遇</h3>
            
            <div className="h-px w-16 bg-gold/30 mx-auto my-4" />

            <div className="text-parchment/80 text-sm leading-relaxed mb-6 font-serif space-y-4 text-left">
                <p className="indent-8">
                    最初，这只是一个出于兴趣的微小尝试，未曾想过能与如此多的灵魂在漫宿的边缘相遇。
                </p>
                <p className="indent-8">
                    感谢你们的停泊，让这片虚构的海域变得如此真实。每一次点击，都是一次无形的共鸣；每一次停留，都让这座无墙之屋更加坚固。
                </p>
                
                <div className="bg-black/20 p-4 rounded border border-gold/10 my-4">
                  <h4 className="text-gold font-bold mb-2 text-center flex items-center justify-center gap-2">
                    <Sparkles size={14} />
                    本次更新：今日司辰
                    <Sparkles size={14} />
                  </h4>
                  <p className="text-xs text-parchment/70 mb-3 text-center">
                    “时间是最大的秘密，而我们皆是时间的囚徒。”
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs text-parchment/70">
                    <li>
                        <span className="text-gold/80 font-bold">每日运势：</span>
                        每天抽取一位守护你的司辰，获取今日的启示与箴言。
                    </li>
                    <li>
                        <span className="text-gold/80 font-bold">密教黄历：</span>
                        基于真实天象与密教世界观重构的历法。包含拉丁文日期、星象位置以及每日宜忌。
                    </li>
                    <li>
                        <span className="text-gold/80 font-bold">彩蛋机制：</span>
                        如果你连续两天抽到同一位司辰，或许会有特别的事情发生......
                    </li>
                  </ul>
                  <div className="mt-3 text-center">
                    <p className="text-[10px] text-gold/40 italic">
                        * 点击主界面右上角的“今日司辰”按钮即可体验 *
                    </p>
                  </div>
                </div>

                {/* 历史更新记录 (可展开) */}
                <div className="border-t border-gold/10 pt-2">
                    <button 
                        onClick={() => setIsHistoryExpanded(!isHistoryExpanded)}
                        className="flex items-center justify-center gap-2 w-full py-2 text-gold/40 hover:text-gold/60 transition-colors text-xs uppercase tracking-widest"
                    >
                        {isHistoryExpanded ? '收起历史记录' : '查看往期更新'}
                        {isHistoryExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    </button>
                    
                    <AnimatePresence>
                        {isHistoryExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="bg-black/10 p-4 rounded border border-gold/5 mt-2 space-y-4">
                                    <div>
                                        <h5 className="text-gold/60 text-xs font-bold mb-1">35,000 访客里程碑</h5>
                                        <ul className="list-disc pl-4 space-y-1 text-[10px] text-parchment/50">
                                            <li>新增 Wiki 快速跳转按钮和相性详细解释。</li>
                                            <li>新增《司辰之书》额外五个相性的适配。</li>
                                            <li>优化问题和结果的判别算法。</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="text-gold/60 text-xs font-bold mb-1">早期更新</h5>
                                        <ul className="list-disc pl-4 space-y-1 text-[10px] text-parchment/50">
                                            <li>实装“现实模式”与“故事模式”。</li>
                                            <li>增加背景音乐与音效系统。</li>
                                            <li>优化移动端适配与视觉效果。</li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <p className="text-center text-gold/60 italic pt-2 pb-2 border-t border-b border-gold/10 my-4">
                    “门关已开，而我们皆是过客。愿你在无墙之屋中，寻得那把属于你的钥匙。”
                </p>
                <p className="indent-8 text-xs text-parchment/60">
                    最近我的事儿也结束一些了，我将继续投入到这个以及更多新的二创项目的开发中。如果您感兴趣，欢迎在小黑盒或小红书关注我，我会第一时间在那里发布更新动态。
                </p>
                <p>
                    如果您对《密教模拟器》与《司辰之书》的世界观感兴趣，或许也会喜欢我的其他二创项目：
                </p>
                
                <div className="space-y-4 mt-4">
                    {/* Hush House */}
                    <div className="bg-black/30 p-4 border border-gold/10 rounded-sm">
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

                    {/* Tarot But Hours */}
                    <div className="bg-black/30 p-4 border border-gold/10 rounded-sm">
                        <h4 className="text-gold font-bold mb-1 flex items-center gap-2">
                            Tarot But Hours / 司辰塔罗
                        </h4>
                        <p className="text-xs text-parchment/60 mb-3">
                            一个基于《密教模拟器》与《司辰之书》世界观的塔罗牌占卜工具，将司辰与大阿卡纳牌一一对应。
                        </p>
                        <div className="flex gap-2">
                            <a 
                                href="https://luyu14039.github.io/tarot-but-hours/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 py-2 border border-gold/30 bg-gold/5 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 font-heading tracking-widest uppercase text-xs group"
                            >
                                <Sparkles size={14} />
                                在线占卜
                                <ExternalLink size={14} className="ml-1 opacity-50" />
                            </a>
                            <a 
                                href="https://github.com/luyu14039/tarot-but-hours" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 py-2 border border-gold/30 bg-gold/5 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 font-heading tracking-widest uppercase text-xs group"
                            >
                                <Github size={14} />
                                查看项目
                                <ExternalLink size={14} className="ml-1 opacity-50" />
                            </a>
                        </div>
                    </div>
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
