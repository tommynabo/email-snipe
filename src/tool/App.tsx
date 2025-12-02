import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import EmailGenerator from './components/EmailGenerator';
import Integrations from './components/Integrations';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'generator':
        return <EmailGenerator />;
      case 'integrations':
        return <Integrations />;
      case 'templates':
      case 'settings':
        return (
          <div className="flex items-center justify-center h-full text-gray-500">
            <div className="text-center">
              <h3 className="text-xl font-medium text-white mb-2">Coming Soon</h3>
              <p>This module is currently under development.</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-dark-bg font-sans selection:bg-primary-500/30 selection:text-white overflow-hidden">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="flex-1 ml-64 h-full relative overflow-hidden">
        {/* Background Gradients for Aesthetics */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[128px] pointer-events-none" />
        
        {/* Content Area */}
        <div className="h-full overflow-y-auto custom-scrollbar relative z-10">
            {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;