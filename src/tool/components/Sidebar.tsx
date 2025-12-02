import React from 'react';
import { LayoutDashboard, Mail, Settings, Zap, LogOut, Link2 } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'generator', label: 'Email Generator', icon: Zap },
    { id: 'integrations', label: 'Integrations', icon: Link2 },
    { id: 'templates', label: 'Templates', icon: Mail },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 h-screen bg-dark-bg border-r border-dark-border flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
          EmailSnipe
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/50'
                  : 'text-gray-400 hover:bg-dark-card hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-dark-border">
        <div className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-dark-card border border-dark-border">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-blue-500" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Alex Designer</p>
            <p className="text-xs text-gray-500 truncate">Free Plan</p>
          </div>
          <LogOut size={16} className="text-gray-500 cursor-pointer hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;