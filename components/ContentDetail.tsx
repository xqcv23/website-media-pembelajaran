import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TopicContent, TopicItem } from '../types';
import { X, ExternalLink } from 'lucide-react';

interface ContentDetailProps {
  content: TopicContent;
}

const ContentDetail: React.FC<ContentDetailProps> = ({ content }) => {
  const [selectedItem, setSelectedItem] = useState<TopicItem | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-4">{content.title}</h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">{content.description}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 space-y-8">
            {content.details.map((section, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
                >
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">{section.subtitle}</h3>
                    <p className="text-slate-300 leading-relaxed mb-6">{section.text}</p>
                    
                    {section.items.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {section.items.map((item, i) => (
                                <motion.div 
                                    key={i} 
                                    whileHover={item.examples ? { scale: 1.02, borderColor: 'rgba(59, 130, 246, 0.5)' } : {}}
                                    whileTap={item.examples ? { scale: 0.98 } : {}}
                                    onClick={() => item.examples && setSelectedItem(item)}
                                    className={`bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 transition-colors relative ${item.examples ? 'cursor-pointer hover:bg-slate-800' : ''}`}
                                >
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h4 className="font-bold text-white text-lg flex items-center justify-between">
                                        {item.label}
                                        {item.examples && <ExternalLink className="w-4 h-4 text-blue-400 opacity-50" />}
                                    </h4>
                                    <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
                                    
                                    {item.examples && (
                                        <div className="mt-3 text-xs text-blue-400 font-semibold bg-blue-900/20 inline-block px-2 py-1 rounded-md border border-blue-500/20">
                                            Klik untuk lihat contoh
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            ))}
        </div>

        <div className="lg:col-span-1">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="sticky top-24"
            >
                <div className="bg-gradient-to-b from-blue-600/20 to-purple-600/20 p-1 rounded-2xl">
                    <img 
                        src={content.image} 
                        alt={content.title} 
                        className="rounded-xl w-full h-64 object-cover mb-4"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-bold text-white mb-2">Tahukah Kamu?</h3>
                        <p className="text-slate-400 text-sm">
                            {content.title} terus berkembang sangat cepat. Komponen yang ada sekarang jauh lebih kecil dan cepat dibandingkan 10 tahun lalu!
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Popup / Modal */}
      <AnimatePresence>
        {selectedItem && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedItem(null)}
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                />
                
                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 50 }}
                    className="bg-slate-900 border border-slate-600 rounded-2xl shadow-2xl w-full max-w-3xl relative z-10 overflow-hidden flex flex-col max-h-[85vh]"
                >
                    <div className="p-6 border-b border-slate-700 bg-slate-800 flex justify-between items-center sticky top-0 z-20">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">{selectedItem.icon}</span>
                            <div>
                                <h3 className="text-2xl font-bold text-white">{selectedItem.label}</h3>
                                <p className="text-blue-300 text-sm">Galeri & Penjelasan Perangkat</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setSelectedItem(null)}
                            className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="p-6 overflow-y-auto custom-scrollbar">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {selectedItem.examples?.map((example, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden group flex flex-col"
                                >
                                    {/* Image Container */}
                                    <div className="h-48 w-full bg-slate-700 relative overflow-hidden">
                                        <img 
                                            src={example.image || `https://placehold.co/600x400/1e293b/3b82f6?text=${encodeURIComponent(example.name)}`}
                                            alt={example.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                         <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-md rounded-lg p-1.5 text-xl border border-white/10 shadow-sm">
                                            {example.icon}
                                        </div>
                                    </div>
                                    
                                    {/* Text Content */}
                                    <div className="p-5 flex-1 flex flex-col">
                                        <h4 className="font-bold text-white text-lg mb-2 border-b border-slate-700 pb-2">{example.name}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed flex-1">{example.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContentDetail;