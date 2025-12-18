import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, ArrowRight } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Updated credentials as per user request
    if (email === 'wj00701@gmail.com' && password === '7837598586') {
      localStorage.setItem('eg_admin_session', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid Credentials. Access Denied.');
    }
  };

  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] bg-brand-green rounded-full blur-[150px]"></div>
      </div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white rounded-[3rem] p-10 sm:p-14 shadow-2xl">
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center text-brand-blue mb-6">
              <ShieldCheck size={40} />
            </div>
            <h1 className="text-3xl font-display font-black text-gray-900 uppercase tracking-tighter">Admin Portal</h1>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">Authorized Access Only</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-4">Corporate Email</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-5 pl-14 pr-6 font-bold text-black focus:ring-4 focus:ring-brand-blue/10 outline-none"
                  placeholder="name@elitegenetics.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-4">Secure Password</label>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-5 pl-14 pr-6 font-mono font-bold text-black focus:ring-4 focus:ring-brand-blue/10 outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button className="w-full bg-brand-black hover:bg-brand-blue text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-brand-blue/20">
              Authenticate & Enter <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="mt-10 text-center">
            <button onClick={() => navigate('/')} className="text-[10px] font-black uppercase text-gray-400 hover:text-brand-blue tracking-widest transition-colors">Return to Homepage</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;