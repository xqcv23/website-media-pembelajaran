import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle, XCircle, RefreshCw, Play } from 'lucide-react';
import { QuizQuestion } from '../types';
import { generateQuizFromGemini } from '../services/geminiService';

const QuizView: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [quizTopic, setQuizTopic] = useState<string>('Hardware');
  const [quizFinished, setQuizFinished] = useState(false);

  const startQuiz = async () => {
    setLoading(true);
    setQuizFinished(false);
    setCurrentQIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowExplanation(false);
    
    const newQuestions = await generateQuizFromGemini(quizTopic);
    setQuestions(newQuestions);
    setLoading(false);
  };

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return; // Prevent changing answer
    setSelectedOption(index);
    setShowExplanation(true);
    
    if (index === questions[currentQIndex].correctAnswer) {
        setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
        setCurrentQIndex(prev => prev + 1);
        setSelectedOption(null);
        setShowExplanation(false);
    } else {
        setQuizFinished(true);
    }
  };

  if (loading) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-white">
            <RefreshCw className="w-12 h-12 animate-spin text-blue-500 mb-4" />
            <p className="text-lg">AI sedang membuat soal untukmu...</p>
        </div>
    );
  }

  if (questions.length === 0 && !quizFinished) {
     return (
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-slate-800 rounded-2xl border border-slate-700 text-center">
            <Brain className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Kuis Pintar AI</h2>
            <p className="text-slate-400 mb-8">
                Pilih topik dan AI akan membuatkan soal latihan unik untuk menguji pemahamanmu tentang Sistem Komputer.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
                {['Hardware', 'Software', 'Brainware'].map(topic => (
                    <button
                        key={topic}
                        onClick={() => setQuizTopic(topic)}
                        className={`px-4 py-2 rounded-lg border ${
                            quizTopic === topic 
                            ? 'bg-blue-600 border-blue-500 text-white' 
                            : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-700'
                        }`}
                    >
                        {topic}
                    </button>
                ))}
            </div>

            <button 
                onClick={startQuiz}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-bold flex items-center mx-auto shadow-lg shadow-blue-500/25"
            >
                <Play className="w-5 h-5 mr-2" />
                Mulai Kuis
            </button>
        </div>
     );
  }

  if (quizFinished) {
    return (
        <div className="max-w-md mx-auto mt-12 p-8 bg-slate-800 rounded-2xl border border-slate-700 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Hasil Kuis</h2>
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4">
                {Math.round((score / questions.length) * 100)}
            </div>
            <p className="text-slate-300 mb-6">
                Kamu menjawab {score} benar dari {questions.length} soal.
            </p>
            <button 
                onClick={() => setQuestions([])}
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
                Coba Lagi
            </button>
        </div>
    );
  }

  const currentQ = questions[currentQIndex];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 md:p-8 relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-1 bg-blue-600" style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }} />
        
        <div className="flex justify-between items-center mb-6">
            <span className="text-slate-400 text-sm">Soal {currentQIndex + 1} dari {questions.length}</span>
            <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                {quizTopic}
            </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed">
            {currentQ.question}
        </h3>

        <div className="space-y-4">
            {currentQ.options.map((option, idx) => {
                let itemClass = "w-full text-left p-4 rounded-xl border-2 transition-all ";
                if (selectedOption === null) {
                    itemClass += "border-slate-700 bg-slate-900/50 hover:border-blue-500 hover:bg-slate-800 text-slate-200";
                } else {
                    if (idx === currentQ.correctAnswer) {
                        itemClass += "border-green-500 bg-green-500/10 text-green-200";
                    } else if (idx === selectedOption) {
                        itemClass += "border-red-500 bg-red-500/10 text-red-200";
                    } else {
                        itemClass += "border-slate-800 bg-slate-900/30 text-slate-500 opacity-50";
                    }
                }

                return (
                    <button
                        key={idx}
                        disabled={selectedOption !== null}
                        onClick={() => handleOptionClick(idx)}
                        className={itemClass}
                    >
                        <div className="flex items-center justify-between">
                            <span>{option}</span>
                            {selectedOption !== null && idx === currentQ.correctAnswer && <CheckCircle className="w-5 h-5 text-green-500" />}
                            {selectedOption === idx && idx !== currentQ.correctAnswer && <XCircle className="w-5 h-5 text-red-500" />}
                        </div>
                    </button>
                );
            })}
        </div>

        {showExplanation && (
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-slate-900/80 rounded-xl border border-slate-700"
            >
                <h4 className="font-bold text-blue-400 mb-1">Penjelasan:</h4>
                <p className="text-slate-300 text-sm">{currentQ.explanation}</p>
                <div className="mt-4 flex justify-end">
                    <button 
                        onClick={nextQuestion}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium"
                    >
                        {currentQIndex < questions.length - 1 ? 'Lanjut' : 'Selesai'}
                    </button>
                </div>
            </motion.div>
        )}
      </div>
    </div>
  );
};

export default QuizView;
