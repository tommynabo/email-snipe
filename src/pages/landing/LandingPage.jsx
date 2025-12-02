import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, Mail, Users, CheckCircle2, Shield, Star, PlayCircle } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  
  // Función para ir al login
  const onEnterApp = () => navigate('/login');

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white font-sans selection:bg-primary-500/30">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[128px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-primary-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Zap size={20} className="text-white" fill="currentColor" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            EmailSnipe
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={onEnterApp} className="hidden md:block text-sm font-medium text-white hover:text-primary-400 transition-colors">
            Log In
          </button>
          <button 
            onClick={onEnterApp}
            className="bg-gradient-to-r from-primary-600 to-blue-600 hover:shadow-lg hover:shadow-primary-500/20 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
          >
            Get Started — It's Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center relative">
          
          {/* Floating Badges (Decorations) */}
          <div className="hidden lg:block absolute -left-12 top-0 animate-bounce duration-[3000ms]">
            <span className="px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50 text-xs text-gray-400 backdrop-blur-md">
              Student
            </span>
          </div>
          <div className="hidden lg:block absolute -right-4 top-10 animate-bounce duration-[4000ms]">
            <span className="px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50 text-xs text-gray-400 backdrop-blur-md">
              Recruiter
            </span>
          </div>
          <div className="hidden lg:block absolute left-0 bottom-20 animate-bounce duration-[3500ms]">
            <span className="px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50 text-xs text-gray-400 backdrop-blur-md">
              Freelancer
            </span>
          </div>
          <div className="hidden lg:block absolute right-10 bottom-10 animate-bounce duration-[4500ms]">
            <span className="px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50 text-xs text-gray-400 backdrop-blur-md">
              Founder
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Make All Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary-500">Cold Email</span> Wishes <br className="hidden md:block" />
            Come True With EmailSnipe
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Simply Input Your Desired Intent And Any Relevant Information, And EmailSnipe Does The Rest using advanced AI.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={onEnterApp}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full hover:shadow-2xl hover:shadow-primary-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 focus:ring-offset-gray-900"
            >
              Start Writing For Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-sm text-gray-500">No credit card required</span>
          </div>

          {/* Hero Image / Dashboard Preview */}
          <div className="mt-20 relative mx-auto max-w-4xl">
            <div className="absolute inset-0 bg-primary-500/20 blur-3xl -z-10 rounded-full" />
            <div className="bg-[#15161E] border border-gray-800 rounded-2xl p-2 shadow-2xl">
                <div className="bg-[#0B0C10] rounded-xl overflow-hidden border border-gray-800 relative">
                    {/* Mock Header */}
                    <div className="h-10 border-b border-gray-800 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                    </div>
                    {/* Mock Content */}
                    <div className="p-8 flex flex-col md:flex-row gap-8">
                        <div className="flex-1 space-y-4">
                             <div className="h-4 w-1/3 bg-gray-800 rounded"></div>
                             <div className="h-10 w-full bg-gray-800/50 border border-gray-700 rounded-lg"></div>
                             <div className="h-4 w-1/4 bg-gray-800 rounded mt-4"></div>
                             <div className="h-24 w-full bg-gray-800/50 border border-gray-700 rounded-lg"></div>
                             <div className="h-10 w-full bg-primary-600 rounded-lg mt-2 opacity-80"></div>
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-primary-900/40 to-blue-900/20 rounded-xl p-6 border border-primary-500/20 flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mb-4">
                                <Zap size={32} className="text-primary-400" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Revolutionize Your Cold Email Game</h3>
                            <p className="text-gray-400 text-sm">AI-driven personalization at scale.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features / How it works */}
      <section className="py-24 relative z-10 bg-[#0B0C10]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works?</h2>
            <p className="text-gray-400">Generate high-converting emails in seconds.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xl border border-blue-500/20">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Select Your Intent</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Simply search or select the type of email you want to write. Whether it's a sales pitch, follow-up, or networking request, we've got you covered.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500/10 text-primary-400 flex items-center justify-center font-bold text-xl border border-primary-500/20">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Input Context & Generate</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Fill out the necessary details. Our AI analyzes your tone and offer to craft the perfect message.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xl border border-emerald-500/20">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Sync & Scale</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Connect Gmail and Drive to let the AI learn from your past successes and automatically reference your case studies.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Visual */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-[#15161E] border border-gray-800 p-8 rounded-2xl">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                            <span className="text-sm font-medium text-gray-400">Choose Email Type</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-primary-900/20 border border-primary-500/50 p-4 rounded-xl cursor-pointer">
                                <Mail className="text-primary-400 mb-3" size={20} />
                                <div className="font-semibold text-white text-sm mb-1">Cold Outreach</div>
                                <div className="text-xs text-gray-500">Initial sales contact</div>
                            </div>
                            <div className="bg-[#0B0C10] border border-gray-800 p-4 rounded-xl opacity-60">
                                <Users className="text-gray-400 mb-3" size={20} />
                                <div className="font-semibold text-white text-sm mb-1">Follow Up</div>
                                <div className="text-xs text-gray-500">Check-in email</div>
                            </div>
                        </div>
                        <div className="bg-[#0B0C10] border border-gray-800 rounded-xl p-4">
                            <div className="text-xs text-gray-500 mb-2 uppercase">Input Context</div>
                            <div className="h-2 bg-gray-800 rounded w-3/4 mb-2"></div>
                            <div className="h-2 bg-gray-800 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 relative z-10 bg-[#0B0C10]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-gradient-to-tr from-primary-500 to-blue-500 rounded flex items-center justify-center">
                <Zap size={14} className="text-white" fill="currentColor" />
             </div>
             <span className="font-bold text-gray-300">EmailSnipe</span>
          </div>
          <p className="text-gray-600 text-sm">
            © 2024 EmailSnipe. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;