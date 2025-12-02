import React, { useState } from 'react';
import { Sparkles, Copy, RefreshCcw, Send, Briefcase, Mic2, Target } from 'lucide-react';
import { Tone, GeneratedEmail } from '../types';
import { generateColdEmail } from '../services/geminiService';

const EmailGenerator: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [offer, setOffer] = useState('');
  const [tone, setTone] = useState<Tone>(Tone.Professional);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedEmail | null>(null);

  // Mock integration context
  const integrations = ["Gmail (Sales Folder)", "Google Drive (Case Studies)"];

  const handleGenerate = async () => {
    if (!niche || !offer) return;
    
    setLoading(true);
    setResult(null);
    try {
      const email = await generateColdEmail(niche, tone, offer, integrations);
      setResult(email);
    } catch (error) {
      alert("Failed to generate email. Please check your API key.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex h-full animate-fade-in">
      {/* Left Input Panel */}
      <div className="w-full lg:w-1/2 p-8 border-r border-dark-border overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">New Project</h2>
          <p className="text-gray-400 mt-2">Define your target and let AI do the heavy lifting.</p>
        </div>

        <div className="space-y-6">
          {/* Niche Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Target size={16} className="text-primary-500" /> Target Audience / Niche
            </label>
            <div className="relative">
              <input
                type="text"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                placeholder="e.g. SaaS Founders in Healthcare"
                className="w-full bg-dark-card border border-dark-border rounded-xl p-4 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-gray-600"
              />
            </div>
          </div>

          {/* Tone Selector */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Mic2 size={16} className="text-primary-500" /> Tone of Voice
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.values(Tone).map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                    tone === t
                      ? 'bg-primary-600 border-primary-500 text-white shadow-lg shadow-primary-900/50'
                      : 'bg-dark-card border-dark-border text-gray-400 hover:border-gray-500'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Offer Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Briefcase size={16} className="text-primary-500" /> Your Offer / Value Prop
            </label>
            <textarea
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
              placeholder="e.g. We offer a free SEO audit that identifies 3 quick wins to boost traffic by 20%..."
              className="w-full h-40 bg-dark-card border border-dark-border rounded-xl p-4 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-gray-600 resize-none"
            />
          </div>

          {/* Action Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !niche || !offer}
            className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-2 transition-all ${
              loading || !niche || !offer
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-primary-600 to-indigo-600 text-white hover:shadow-primary-900/50 hover:scale-[1.02]'
            }`}
          >
            {loading ? (
              <>
                <RefreshCcw className="animate-spin" size={20} /> Generating...
              </>
            ) : (
              <>
                <Sparkles size={20} /> Generate Magic
              </>
            )}
          </button>
          
          <p className="text-xs text-center text-gray-500">
            Powered by Google Gemini 2.5 Flash • Uses context from linked accounts
          </p>
        </div>
      </div>

      {/* Right Result Panel */}
      <div className="w-full lg:w-1/2 p-8 bg-[#0F1014] overflow-y-auto">
        {!result ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4 opacity-50">
            <div className="w-24 h-24 rounded-full bg-dark-card border border-dark-border flex items-center justify-center">
              <Sparkles size={40} className="text-primary-800" />
            </div>
            <p className="text-lg">Your generated email will appear here</p>
          </div>
        ) : (
          <div className="space-y-6 animate-slide-up">
             <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Generated Output</h3>
                <div className="flex gap-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors" title="Regenerate">
                        <RefreshCcw size={18} />
                    </button>
                </div>
             </div>

            {/* Subject Line Card */}
            <div className="bg-dark-card rounded-xl border border-dark-border p-4 group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-primary-400 uppercase tracking-wider">Subject Line</span>
                <button 
                  onClick={() => copyToClipboard(result.subject)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <Copy size={16} />
                </button>
              </div>
              <p className="text-lg font-medium text-white">{result.subject}</p>
            </div>

            {/* Email Body Card */}
            <div className="bg-dark-card rounded-xl border border-dark-border p-6 group h-full">
               <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-primary-400 uppercase tracking-wider">Email Body</span>
                <button 
                  onClick={() => copyToClipboard(result.body)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <Copy size={16} />
                </button>
              </div>
              <div className="whitespace-pre-wrap text-gray-300 leading-relaxed text-base font-light">
                {result.body}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex gap-4 pt-4">
               <button className="flex-1 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  <Copy size={18} /> Copy All
               </button>
               <button className="flex-1 bg-dark-card border border-dark-border text-white py-3 rounded-xl font-semibold hover:bg-dark-border transition-colors flex items-center justify-center gap-2">
                  <Send size={18} /> Send to Drafts
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailGenerator;