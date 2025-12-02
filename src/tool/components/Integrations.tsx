import React, { useState } from 'react';
import { Check, HardDrive, Mail, Share2, RefreshCw } from 'lucide-react';
import { Integration } from '../types';

const Integrations: React.FC = () => {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: 'gmail',
      name: 'Gmail',
      connected: true,
      icon: 'Mail',
      description: 'Sync your sent folder to analyze past successful cold emails.'
    },
    {
      id: 'drive',
      name: 'Google Drive',
      connected: false,
      icon: 'HardDrive',
      description: 'Access case studies and whitepapers to automatically reference in offers.'
    },
    {
      id: 'outlook',
      name: 'Outlook',
      connected: false,
      icon: 'Mail',
      description: 'Connect your Outlook workspace for seamless email drafting.'
    }
  ]);

  const toggleIntegration = (id: string) => {
    setIntegrations(prev => prev.map(int => 
      int.id === id ? { ...int, connected: !int.connected } : int
    ));
  };

  return (
    <div className="p-8 max-w-5xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Data Sources</h2>
        <p className="text-gray-400">
          Connect your accounts to let EmailSnipe learn from your past communication and assets.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {integrations.map((item) => (
          <div 
            key={item.id} 
            className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6 ${
              item.connected 
                ? 'bg-primary-900/10 border-primary-500/50' 
                : 'bg-dark-card border-dark-border hover:border-gray-600'
            }`}
          >
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${
                item.connected ? 'bg-primary-500 text-white' : 'bg-dark-bg border border-dark-border text-gray-400'
              }`}>
                {item.id === 'drive' ? <HardDrive size={32} /> : <Mail size={32} />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  {item.name}
                  {item.connected && <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full flex items-center gap-1"><Check size={10} /> Active</span>}
                </h3>
                <p className="text-gray-400 text-sm mt-1 max-w-lg">{item.description}</p>
              </div>
            </div>

            <button
              onClick={() => toggleIntegration(item.id)}
              className={`px-6 py-3 rounded-xl font-medium text-sm transition-all min-w-[140px] flex items-center justify-center gap-2 ${
                item.connected
                  ? 'bg-dark-bg border border-primary-500/30 text-primary-300 hover:bg-primary-900/20'
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {item.connected ? (
                <>
                  <Share2 size={16} /> Disconnect
                </>
              ) : (
                <>
                  <RefreshCw size={16} /> Connect
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-primary-900/40 to-purple-900/40 border border-primary-500/20 p-6 rounded-2xl">
        <h4 className="text-primary-300 font-semibold mb-2 flex items-center gap-2">
          <Share2 size={18} /> AI Context Injection
        </h4>
        <p className="text-gray-400 text-sm">
          When connected, our Gemini model will scan your last 50 successful emails (Gmail) and your "Sales Assets" folder (Drive) to mimic your unique writing style automatically.
        </p>
      </div>
    </div>
  );
};

export default Integrations;