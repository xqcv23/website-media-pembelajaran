import React from 'react';
import { motion } from 'framer-motion';
import { ViewState } from '../types';
import { ArrowRight, Cpu, Monitor, User } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
  setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onStart, setView }) => {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center justify-center">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6">
            Platform Belajar Sistem Komputer SMA
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
            Jelajahi Dunia <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Sistem Komputer
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-lg">
            Pelajari bagaimana Hardware, Software, dan Brainware bekerja sama membentuk teknologi yang kita gunakan setiap hari.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onStart}
              className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-600/30 flex items-center"
            >
              Mulai Belajar
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Interactive Cards Simulation */}
          <div className="relative w-full max-w-md mx-auto aspect-square">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -5 }}
              className="absolute top-0 left-0 w-48 h-48 bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl cursor-pointer flex flex-col justify-between z-20"
              onClick={() => setView(ViewState.HARDWARE)}
            >
                <Cpu className="w-12 h-12 text-cyan-400" />
                <div>
                    <h3 className="text-xl font-bold text-white">Hardware</h3>
                    <p className="text-slate-400 text-sm">Perangkat Keras</p>
                </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="absolute top-20 right-0 w-48 h-48 bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl cursor-pointer flex flex-col justify-between z-10"
              onClick={() => setView(ViewState.SOFTWARE)}
            >
                <Monitor className="w-12 h-12 text-purple-400" />
                <div>
                    <h3 className="text-xl font-bold text-white">Software</h3>
                    <p className="text-slate-400 text-sm">Perangkat Lunak</p>
                </div>
            </motion.div>

            <motion.div 
               whileHover={{ scale: 1.05, rotate: -2 }}
               className="absolute bottom-0 left-10 w-48 h-48 bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl cursor-pointer flex flex-col justify-between z-30"
               onClick={() => setView(ViewState.BRAINWARE)}
            >
                <User className="w-12 h-12 text-green-400" />
                <div>
                    <h3 className="text-xl font-bold text-white">Brainware</h3>
                    <p className="text-slate-400 text-sm">Pengguna</p>
                </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
