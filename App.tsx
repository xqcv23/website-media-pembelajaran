import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentDetail from './components/ContentDetail';
import ChatTutor from './components/ChatTutor';
import QuizView from './components/QuizView';
import { ViewState } from './types';
import { HARDWARE_CONTENT, SOFTWARE_CONTENT, BRAINWARE_CONTENT } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  // Toggle chat visibility if needed, for now always visible on non-home or based on preference
  const [showChat, setShowChat] = useState(true); 

  const renderContent = () => {
    switch (view) {
      case ViewState.HOME:
        return <Hero onStart={() => setView(ViewState.HARDWARE)} setView={setView} />;
      case ViewState.HARDWARE:
        return <ContentDetail content={HARDWARE_CONTENT} />;
      case ViewState.SOFTWARE:
        return <ContentDetail content={SOFTWARE_CONTENT} />;
      case ViewState.BRAINWARE:
        return <ContentDetail content={BRAINWARE_CONTENT} />;
      case ViewState.QUIZ:
        return <QuizView />;
      default:
        return <Hero onStart={() => setView(ViewState.HARDWARE)} setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 selection:text-blue-200 pb-20 md:pb-0">
      <Navbar currentView={view} setView={setView} />
      
      <main className="relative">
        {renderContent()}
      </main>

      {/* Global AI Tutor Overlay */}
      {showChat && <ChatTutor />}
    </div>
  );
};

export default App;
