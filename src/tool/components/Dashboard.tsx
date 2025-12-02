import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, Mail, Users, MousePointerClick } from 'lucide-react';

const data = [
  { name: 'Mon', emails: 400 },
  { name: 'Tue', emails: 300 },
  { name: 'Wed', emails: 550 },
  { name: 'Thu', emails: 450 },
  { name: 'Fri', emails: 700 },
  { name: 'Sat', emails: 200 },
  { name: 'Sun', emails: 300 },
];

const StatCard: React.FC<{ title: string; value: string; trend: string; icon: React.ElementType; color: string }> = ({
  title,
  value,
  trend,
  icon: Icon,
  color
}) => (
  <div className="bg-dark-card p-6 rounded-2xl border border-dark-border relative overflow-hidden group">
    <div className={`absolute top-0 right-0 w-24 h-24 bg-${color}-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`} />
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-lg bg-${color}-500/20 text-${color}-400`}>
        <Icon size={24} />
      </div>
      <span className="flex items-center text-emerald-400 text-sm font-medium bg-emerald-400/10 px-2 py-1 rounded-full">
        +{trend} <ArrowUpRight size={14} className="ml-1" />
      </span>
    </div>
    <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
    <p className="text-3xl font-bold text-white">{value}</p>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white">Overview</h2>
          <p className="text-gray-400 mt-1">Track your campaign performance metrics.</p>
        </div>
        <div className="text-sm text-gray-500 bg-dark-card px-4 py-2 rounded-lg border border-dark-border">
          Last 7 Days
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Generated" value="12,450" trend="12%" icon={Mail} color="primary" />
        <StatCard title="Open Rate" value="48.2%" trend="5.4%" icon={Users} color="blue" />
        <StatCard title="Click Through" value="14.5%" trend="2.1%" icon={MousePointerClick} color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-dark-card p-6 rounded-2xl border border-dark-border">
          <h3 className="text-xl font-bold text-white mb-6">Email Generation Activity</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorEmails" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2B35" vertical={false} />
                <XAxis dataKey="name" stroke="#6b7280" axisLine={false} tickLine={false} dy={10} />
                <YAxis stroke="#6b7280" axisLine={false} tickLine={false} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#15161E', borderColor: '#2A2B35', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#a78bfa' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="emails" 
                  stroke="#7c3aed" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorEmails)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-dark-card p-6 rounded-2xl border border-dark-border">
          <h3 className="text-xl font-bold text-white mb-6">Recent Campaigns</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">SaaS Outreach #{i}</p>
                    <p className="text-xs text-gray-500">Tech Startups • Professional</p>
                  </div>
                </div>
                <div className="text-xs text-gray-400">2h ago</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 rounded-xl border border-dashed border-gray-600 text-gray-400 hover:border-primary-500 hover:text-primary-400 transition-colors text-sm font-medium">
            View All Campaigns
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;