import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useBulls } from '../../context/BullContext';
import { Plus, Search, Edit2, Trash2, Eye, LayoutDashboard, LogOut, Package } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { bulls, deleteBull } = useBulls();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredBulls = bulls.filter(b => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.naab.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to PERMANENTLY delete ${name}?`)) {
      deleteBull(id);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('eg_admin_session');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-brand-black text-white hidden lg:flex flex-col p-8 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center text-brand-black">
            <LayoutDashboard size={20} />
          </div>
          <h2 className="font-display font-black uppercase tracking-tighter text-xl italic">EG Admin</h2>
        </div>

        <nav className="flex-grow space-y-4">
          <Link to="/admin/dashboard" className="flex items-center gap-4 bg-brand-blue/20 text-brand-blue px-6 py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest border border-brand-blue/30">
            <Package size={18} /> Inventory Manager
          </Link>
        </nav>

        <button onClick={handleLogout} className="flex items-center gap-4 text-gray-500 hover:text-white px-6 py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all">
          <LogOut size={18} /> System Exit
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 sm:p-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-display font-black text-brand-black uppercase tracking-tighter italic">Sire <span className="text-brand-blue">Inventory</span></h1>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em] mt-1">Manage global genetic assets</p>
          </div>
          <Link to="/admin/new" className="bg-brand-green hover:bg-brand-darkGreen text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all flex items-center gap-3 shadow-xl">
            <Plus size={18} /> Add New Sire
          </Link>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center bg-white sticky top-0 z-10">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by name or NAAB code..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-14 pr-6 focus:ring-4 focus:ring-brand-blue/10 outline-none font-bold"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-8 py-6 font-black uppercase text-[10px] tracking-widest text-gray-400">Identity</th>
                  <th className="px-8 py-6 font-black uppercase text-[10px] tracking-widest text-gray-400">Genetic Index</th>
                  <th className="px-8 py-6 font-black uppercase text-[10px] tracking-widest text-gray-400">Status</th>
                  <th className="px-8 py-6 font-black uppercase text-[10px] tracking-widest text-gray-400">Market Price</th>
                  <th className="px-8 py-6 font-black uppercase text-[10px] tracking-widest text-gray-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredBulls.map(bull => (
                  <tr key={bull.id} className="hover:bg-brand-blue/5 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-slate-100 rounded-2xl overflow-hidden p-2 flex items-center justify-center border border-slate-200">
                           <img src={bull.image} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div>
                          <div className="font-display font-black text-brand-black uppercase italic text-lg leading-tight">{bull.name}</div>
                          <div className="font-mono text-[10px] text-gray-400 font-bold">{bull.naab}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                       <div className="flex items-center gap-2">
                         <span className="bg-brand-black text-white px-3 py-1 rounded-lg text-[10px] font-black">GTPI {bull.stats.gtpi}</span>
                         <span className="text-gray-300">/</span>
                         <span className="text-brand-green font-black text-xs">NM$ {bull.stats.nm || 'N/A'}</span>
                       </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${bull.published ? 'bg-brand-green/10 text-brand-green' : 'bg-orange-100 text-orange-600'}`}>
                        {bull.published ? 'Live' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-[11px] font-black text-gray-900">₹{bull.pricing.conventional.toLocaleString()}</div>
                      <div className="text-[9px] text-gray-400 uppercase tracking-widest">Conventional</div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        <Link to={`/bull/${bull.id}`} target="_blank" className="p-3 text-gray-400 hover:text-brand-blue hover:bg-brand-blue/10 rounded-xl transition-all" title="View Public Profile">
                          <Eye size={18} />
                        </Link>
                        <Link to={`/admin/edit/${bull.id}`} className="p-3 text-gray-400 hover:text-brand-green hover:bg-brand-green/10 rounded-xl transition-all" title="Edit Bull">
                          <Edit2 size={18} />
                        </Link>
                        <button onClick={() => handleDelete(bull.id, bull.name)} className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all" title="Delete Profile">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;