import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useBulls } from '../../context/BullContext';
import { Bull, LinearTrait } from '../../types';
import { 
  ArrowLeft, Save, ShieldCheck, Image as ImageIcon, Ruler, 
  Activity, DollarSign, ChevronRight, Binary, HeartPulse, 
  Microscope, Target, Tags, LayoutDashboard, Database
} from 'lucide-react';

const BullEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addBull, updateBull, getBull } = useBulls();
  const [activeTab, setActiveTab] = useState('general');
  const [isNew, setIsNew] = useState(false);

  // Default state representing 100% of the possible fields found in BullDetail.tsx
  const [formData, setFormData] = useState<Bull>({
    id: '',
    name: '',
    fullName: '',
    regNo: '',
    naab: '',
    dob: '',
    breed: 'Holstein Friesian',
    weight: '',
    age: '',
    betaCasein: 'A2A2',
    kappaCasein: 'BB',
    aaa: '',
    geneticCodes: '',
    code: '',
    image: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=2502&auto=format&fit=crop',
    badges: [],
    description: '',
    published: true,
    // stats object powers the cards and hero highlights
    stats: { gtpi: 0, milk: 0, udc: 0, dpr: 0, scs: 0, ptat: 0, nm: 0, fat: 0, protein: 0, flc: 0 },
    traits: [],
    pedigree: { sire: '', dam: '', mgs: '' },
    extendedPedigree: {
      sire: '', dam: '', mgs: '', mgd: '', mggs: '', mggd: ''
    },
    evaluations: {
      production: {
        reliability: 0, dtrs: 0, herds: 0, milk: 0, fatPct: 0, fat: 0, protPct: 0, prot: 0, cfp: 0, nm: 0, dwp: 0, cm: 0, fm: 0, gm: 0
      },
      type: {
        reliability: 0, ptat: 0, udc: 0, flc: 0, bwc: 0
      },
      calving: {
        sce: 0, dce: 0, ssb: 0, dsb: 0
      },
      health: {
        fi: 0, dpr: 0, hcr: 0, ccr: 0, mastitis: 0, scs: 0, pl: 0, liv: 0, fe: 0, rfi: 0, feedSaved: 0, milkingSpeed: 0
      }
    },
    linearTraitsFull: [
      { trait: "Stature", value: 0, labelLow: "Short", labelHigh: "Tall" },
      { trait: "Strength", value: 0, labelLow: "Frail", labelHigh: "Strong" },
      { trait: "Body Depth", value: 0, labelLow: "Shallow", labelHigh: "Deep" },
      { trait: "Dairy Form", value: 0, labelLow: "Tight Rib", labelHigh: "Open Rib" },
      { trait: "Rump Angle", value: 0, labelLow: "High Pins", labelHigh: "Sloped" },
      { trait: "Thurl Width", value: 0, labelLow: "Narrow", labelHigh: "Wide" },
      { trait: "Rear Legs - Side View", value: 0, labelLow: "Posty", labelHigh: "Sickled" },
      { trait: "Rear Legs - Rear View", value: 0, labelLow: "Hock-in", labelHigh: "Straight" },
      { trait: "Foot Angle", value: 0, labelLow: "Low Angle", labelHigh: "Steep" },
      { trait: "Feet & Legs Score", value: 0, labelLow: "Low", labelHigh: "Angle" },
      { trait: "Fore Udder Attachment", value: 0, labelLow: "Loose", labelHigh: "High" },
      { trait: "Rear Udder Height", value: 0, labelLow: "Low", labelHigh: "Strong" },
      { trait: "Rear Udder Width", value: 0, labelLow: "Narrow", labelHigh: "High Wide" },
      { trait: "Udder Cleft", value: 0, labelLow: "Weak", labelHigh: "Strong" },
      { trait: "Udder Depth", value: 0, labelLow: "Deep", labelHigh: "Shallow" },
      { trait: "Front Teat Placement", value: 0, labelLow: "Wide", labelHigh: "Close" },
      { trait: "Rear Teat Placement", value: 0, labelLow: "Wide", labelHigh: "Close" },
      { trait: "Teat Length", value: 0, labelLow: "Short", labelHigh: "Long" }
    ],
    pricing: { conventional: 0, sexed: 0 }
  });

  useEffect(() => {
    if (id) {
      const existing = getBull(id);
      if (existing) {
        setFormData(prev => ({
          ...prev,
          ...existing,
          stats: { ...prev.stats, ...existing.stats },
          evaluations: { ...prev.evaluations, ...existing.evaluations },
          extendedPedigree: { ...prev.extendedPedigree, ...existing.extendedPedigree },
          linearTraitsFull: existing.linearTraitsFull || prev.linearTraitsFull
        }));
        setIsNew(false);
      } else {
        navigate('/admin/dashboard');
      }
    } else {
      setIsNew(true);
      setFormData(prev => ({ ...prev, id: 'bull-' + Date.now() }));
    }
  }, [id, getBull, navigate]);

  const handleInputChange = (path: string, value: any) => {
    const keys = path.split('.');
    setFormData(prev => {
      const newData = { ...prev };
      let current: any = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleLinearChange = (index: number, value: number) => {
    const newList = [...(formData.linearTraitsFull || [])];
    newList[index] = { ...newList[index], value };
    setFormData({ ...formData, linearTraitsFull: newList });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isNew) {
      const finalId = formData.name.toLowerCase().replace(/\s+/g, '-');
      addBull({ ...formData, id: finalId });
    } else {
      updateBull(formData);
    }
    navigate('/admin/dashboard');
  };

  const TabButton: React.FC<{ id: string, label: string, icon: any }> = ({ id, label, icon: Icon }) => (
    <button 
      type="button"
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-3 px-8 py-5 font-black uppercase text-[10px] tracking-widest border-b-4 transition-all whitespace-nowrap ${
        activeTab === id ? 'border-brand-blue bg-brand-blue/5 text-brand-blue' : 'border-transparent text-gray-400 hover:text-gray-600'
      }`}
    >
      <Icon size={16} /> {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-brand-black text-white pt-10 pb-20 px-6 sm:px-12">
        <div className="container mx-auto">
          <Link to="/admin/dashboard" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase font-black text-[10px] tracking-widest mb-10">
            <ArrowLeft size={14} /> Back to Inventory
          </Link>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <div>
              <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase italic leading-none">
                {isNew ? 'New' : 'Edit'} <span className="text-brand-green">Bull Profile</span>
              </h1>
              <p className="text-white/40 font-bold uppercase text-[10px] tracking-[0.3em] mt-3 italic">Data Parity Management System</p>
            </div>
            <button 
              onClick={handleSave}
              className="bg-brand-blue hover:bg-brand-darkBlue text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl transition-all flex items-center gap-3 active:scale-95"
            >
              <Save size={18} /> Commit Changes
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 mb-40">
        <form onSubmit={handleSave} className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="flex overflow-x-auto border-b border-slate-100 bg-white sticky top-0 z-20 no-scrollbar">
            <TabButton id="general" label="Identification" icon={ShieldCheck} />
            <TabButton id="pedigree" label="Lineage Tree" icon={ChevronRight} />
            <TabButton id="performance" label="Performance" icon={Activity} />
            <TabButton id="functional" label="Functional" icon={HeartPulse} />
            <TabButton id="linear" label="Conformation" icon={Ruler} />
            <TabButton id="dashboard" label="Card Highlights" icon={LayoutDashboard} />
            <TabButton id="pricing" label="Market Status" icon={DollarSign} />
          </div>

          <div className="p-8 sm:p-14">
            
            {/* 1. Identification & Metadata */}
            {activeTab === 'general' && (
              <div className="space-y-12 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                          <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Common Name</label>
                          <input type="text" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-black text-black text-xl uppercase italic" required />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Official Registered Name</label>
                          <input type="text" value={formData.fullName} onChange={(e) => handleInputChange('fullName', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-bold text-black" />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">NAAB Code</label>
                        <input type="text" value={formData.naab} onChange={(e) => handleInputChange('naab', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-mono font-bold" />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Reg. Number</label>
                        <input type="text" value={formData.regNo} onChange={(e) => handleInputChange('regNo', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-mono font-bold" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                       <div>
                        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">D.O.B</label>
                        <input type="text" value={formData.dob} onChange={(e) => handleInputChange('dob', e.target.value)} placeholder="DD.MM.YYYY" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-bold text-black" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Breed</label>
                        <input type="text" value={formData.breed} onChange={(e) => handleInputChange('breed', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-bold text-black" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">aAa Code</label>
                        <input type="text" value={formData.aaa} onChange={(e) => handleInputChange('aaa', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-bold text-black" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Age</label>
                        <input type="text" value={formData.age} onChange={(e) => handleInputChange('age', e.target.value)} placeholder="e.g. 3.5 Years" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-bold" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Weight</label>
                        <input type="text" value={formData.weight} onChange={(e) => handleInputChange('weight', e.target.value)} placeholder="e.g. 850 kg" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-bold" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Beta Casein</label>
                        <input type="text" value={formData.betaCasein} onChange={(e) => handleInputChange('betaCasein', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-bold text-center" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Kappa Casein</label>
                        <input type="text" value={formData.kappaCasein} onChange={(e) => handleInputChange('kappaCasein', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-bold text-center" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-white/10 text-white relative">
                       <div className="flex items-center gap-4 mb-8">
                          <ImageIcon className="text-brand-green" />
                          <h3 className="font-display font-black uppercase tracking-tight text-lg italic">Marketing Profile</h3>
                       </div>
                       <div className="flex items-center gap-6 mb-8">
                          <img src={formData.image} alt="Preview" className="w-24 h-24 rounded-2xl object-contain bg-white/5 border border-white/10 p-2" />
                          <div className="flex-grow">
                             <label className="block text-[9px] font-black uppercase text-white/40 tracking-widest mb-2">Image URL</label>
                             <input type="text" value={formData.image} onChange={(e) => handleInputChange('image', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 font-mono text-xs text-white" />
                          </div>
                       </div>
                       <div>
                          <label className="block text-[9px] font-black uppercase text-white/40 tracking-widest mb-3 flex items-center gap-2"><Tags size={12} /> Badges (Comma Separated)</label>
                          <input 
                            type="text" 
                            value={formData.badges.join(', ')} 
                            onChange={(e) => handleInputChange('badges', e.target.value.split(',').map(s => s.trim()))} 
                            placeholder="A2A2, High Milk, Show Specialist" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 font-bold text-brand-green" 
                          />
                       </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Breeder Insight / Description</label>
                      <textarea value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)} rows={5} className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] py-6 px-8 font-medium leading-relaxed" />
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Genetic Codes</label>
                      <input type="text" value={formData.geneticCodes} onChange={(e) => handleInputChange('geneticCodes', e.target.value)} placeholder="TCTD TLTP TRTV TY HMW1" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-mono font-bold text-brand-blue" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Lineage Tree Mapping */}
            {activeTab === 'pedigree' && (
              <div className="space-y-12 animate-in fade-in duration-500">
                <div className="bg-brand-blue/5 p-12 rounded-[3rem] border border-brand-blue/10">
                    <h3 className="font-display font-black text-brand-black uppercase italic text-2xl mb-10 flex items-center gap-4">
                       <Database className="text-brand-blue" /> DEEP LINEAGE MAPPING
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        <div>
                          <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">DIRECT SIRE</label>
                          <input type="text" value={formData.pedigree.sire} onChange={(e) => handleInputChange('pedigree.sire', e.target.value)} className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 font-bold" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">MATERNAL GRAND DAM (MGD)</label>
                          <input type="text" value={formData.extendedPedigree?.mgd} onChange={(e) => handleInputChange('extendedPedigree.mgd', e.target.value)} className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 font-bold" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">DIRECT DAM</label>
                          <input type="text" value={formData.pedigree.dam} onChange={(e) => handleInputChange('pedigree.dam', e.target.value)} className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 font-bold" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">MG GRAND SIRE (MGGS)</label>
                          <input type="text" value={formData.extendedPedigree?.mggs} onChange={(e) => handleInputChange('extendedPedigree.mggs', e.target.value)} className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 font-bold" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">MATERNAL GRAND SIRE (MGS)</label>
                          <input type="text" value={formData.pedigree.mgs} onChange={(e) => handleInputChange('pedigree.mgs', e.target.value)} className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 font-bold" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">MG GRAND DAM (MGGD)</label>
                          <input type="text" value={formData.extendedPedigree?.mggd} onChange={(e) => handleInputChange('extendedPedigree.mggd', e.target.value)} className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 font-bold" />
                        </div>
                    </div>
                </div>
              </div>
            )}

            {/* 3. Performance & Production */}
            {activeTab === 'performance' && (
              <div className="space-y-12 animate-in fade-in duration-500">
                 <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                    <div className="flex items-center justify-between mb-10 border-b border-slate-200 pb-6">
                       <h3 className="font-display font-black uppercase text-2xl italic flex items-center gap-4"><Microscope className="text-brand-blue" /> Production Proof</h3>
                       <div className="flex gap-4">
                          <div className="bg-white px-5 py-3 rounded-2xl border border-slate-200 flex items-center gap-4">
                             <span className="text-[9px] font-black uppercase text-gray-400">Reliability %</span>
                             <input type="number" step="0.1" value={formData.evaluations?.production.reliability} onChange={(e) => handleInputChange('evaluations.production.reliability', parseFloat(e.target.value))} className="w-16 text-center font-bold text-brand-blue text-sm" />
                          </div>
                          <div className="bg-white px-5 py-3 rounded-2xl border border-slate-200 flex items-center gap-4">
                             <span className="text-[9px] font-black uppercase text-gray-400">Daughters</span>
                             <input type="number" value={formData.evaluations?.production.dtrs} onChange={(e) => handleInputChange('evaluations.production.dtrs', parseInt(e.target.value))} className="w-16 text-center font-bold text-black text-sm" />
                          </div>
                          <div className="bg-white px-5 py-3 rounded-2xl border border-slate-200 flex items-center gap-4">
                             <span className="text-[9px] font-black uppercase text-gray-400">Herds</span>
                             <input type="number" value={formData.evaluations?.production.herds} onChange={(e) => handleInputChange('evaluations.production.herds', parseInt(e.target.value))} className="w-16 text-center font-bold text-black text-sm" />
                          </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
                       {[
                         { label: 'PTAM (Milk)', path: 'evaluations.production.milk' },
                         { label: 'Fat (Lbs)', path: 'evaluations.production.fat' },
                         { label: 'Fat %', path: 'evaluations.production.fatPct', step: 0.01 },
                         { label: 'Protein (Lbs)', path: 'evaluations.production.prot' },
                         { label: 'Prot %', path: 'evaluations.production.protPct', step: 0.01 },
                       ].map((p, i) => (
                         <div key={i}>
                            <label className="block text-[9px] font-black uppercase text-gray-400 mb-2 ml-1">{p.label}</label>
                            <input type="number" step={p.step || 1} value={(formData as any).evaluations.production[p.path.split('.')[2]]} onChange={(e) => handleInputChange(p.path, parseFloat(e.target.value))} className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 font-bold text-black text-center" />
                         </div>
                       ))}
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                       {[
                         { label: 'Net Merit $', path: 'evaluations.production.nm' },
                         { label: 'DWP$ Profit', path: 'evaluations.production.dwp' },
                         { label: 'Cheese Merit', path: 'evaluations.production.cm' },
                         { label: 'Fluid Merit', path: 'evaluations.production.fm' },
                         { label: 'Grazing Merit', path: 'evaluations.production.gm' },
                         { label: 'Total CFP', path: 'evaluations.production.cfp' },
                       ].map((m, i) => (
                         <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                            <label className="block text-[8px] font-black uppercase text-gray-400 mb-2">{m.label}</label>
                            <input type="number" value={(formData as any).evaluations.production[m.path.split('.')[2]]} onChange={(e) => handleInputChange(m.path, parseInt(e.target.value))} className="w-full font-bold text-brand-blue text-center outline-none" />
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-slate-900 p-10 rounded-[3rem] text-white">
                    <h3 className="font-display font-black uppercase text-xl mb-10 italic flex items-center gap-4"><Target className="text-brand-green" /> Calving Traits Index</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                       {[
                         { label: 'Sire Calving Ease (SCE)', path: 'evaluations.calving.sce' },
                         { label: 'Daughter Calv Ease (DCE)', path: 'evaluations.calving.dce' },
                         { label: 'Sire Still Birth (SSB)', path: 'evaluations.calving.ssb' },
                         { label: 'Daughter Still Birth (DSB)', path: 'evaluations.calving.dsb' },
                       ].map((c, i) => (
                         <div key={i}>
                            <label className="block text-[8px] font-black uppercase text-white/40 tracking-widest mb-3 ml-1">{c.label}</label>
                            <div className="relative">
                              <input type="number" step="0.1" value={(formData as any).evaluations.calving[c.path.split('.')[2]]} onChange={(e) => handleInputChange(c.path, parseFloat(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 text-center font-bold text-brand-green" />
                              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] text-white/20 font-black">%</span>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            )}

            {/* 4. Functional & Health */}
            {activeTab === 'functional' && (
              <div className="space-y-12 animate-in fade-in duration-500">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="space-y-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                       <h3 className="font-display font-black uppercase text-lg italic text-brand-black flex items-center gap-3"><HeartPulse size={20} className="text-brand-green" /> Health & Fertility</h3>
                       <div className="grid grid-cols-2 gap-6">
                          {[
                            { label: 'FI (Fertility Index)', path: 'evaluations.health.fi' },
                            { label: 'DPR (Preg Rate)', path: 'evaluations.health.dpr' },
                            { label: 'HCR (Heifer Concept)', path: 'evaluations.health.hcr' },
                            { label: 'CCR (Cow Concept)', path: 'evaluations.health.ccr' },
                            { label: 'Mastitis Resistance', path: 'evaluations.health.mastitis' },
                            { label: 'SCS (Somatic Cell)', path: 'evaluations.health.scs' },
                          ].map((f, i) => (
                            <div key={i}>
                               <label className="block text-[8px] font-black uppercase text-gray-400 mb-2">{f.label}</label>
                               <input type="number" step="0.1" value={(formData as any).evaluations.health[f.path.split('.')[2]]} onChange={(e) => handleInputChange(f.path, parseFloat(e.target.value))} className="w-full bg-white border border-slate-200 rounded-xl py-3 text-center font-bold" />
                            </div>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-8 bg-slate-900 p-10 rounded-[3rem] text-white">
                       <h3 className="font-display font-black uppercase text-lg italic text-brand-blue flex items-center gap-3"><Binary size={20} /> Efficiency & Lifetime</h3>
                       <div className="grid grid-cols-2 gap-6">
                          {[
                            { label: 'Productive Life (PL)', path: 'evaluations.health.pl' },
                            { label: 'Livability (LIV)', path: 'evaluations.health.liv' },
                            { label: 'Feed Efficiency (FE)', path: 'evaluations.health.fe' },
                            { label: 'Feed Saved', path: 'evaluations.health.feedSaved' },
                            { label: 'RFI (Residual Feed)', path: 'evaluations.health.rfi' },
                            { label: 'Milking Speed', path: 'evaluations.health.milkingSpeed' },
                          ].map((eff, i) => (
                            <div key={i}>
                               <label className="block text-[8px] font-black uppercase text-white/40 mb-2">{eff.label}</label>
                               <input type="number" step="0.1" value={(formData as any).evaluations.health[eff.path.split('.')[2]]} onChange={(e) => handleInputChange(eff.path, parseFloat(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 text-center font-bold text-white outline-none" />
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
            )}

            {/* 5. Linear Conformation */}
            {activeTab === 'linear' && (
              <div className="space-y-12 animate-in fade-in duration-500">
                 <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100">
                    <div className="flex items-center justify-between mb-12 border-b border-slate-200 pb-8">
                        <div className="flex items-center gap-4">
                           <Ruler className="text-brand-blue" />
                           <h3 className="font-display font-black uppercase text-2xl italic">Type Mapping Profile</h3>
                        </div>
                        <div className="flex gap-4">
                           <div className="bg-white px-6 py-4 rounded-2xl border border-slate-200 flex items-center gap-6">
                              <span className="text-[10px] font-black uppercase text-gray-400">Type Rel%</span>
                              <input type="number" step="0.1" value={formData.evaluations?.type.reliability} onChange={(e) => handleInputChange('evaluations.type.reliability', parseFloat(e.target.value))} className="w-16 text-center font-bold text-brand-blue text-lg" />
                           </div>
                           <div className="bg-slate-900 px-8 py-4 rounded-2xl flex items-center gap-6 text-white shadow-xl">
                              <span className="text-[10px] font-black uppercase text-white/40">PTAT Score</span>
                              <input type="number" step="0.01" value={formData.evaluations?.type.ptat} onChange={(e) => handleInputChange('evaluations.type.ptat', parseFloat(e.target.value))} className="w-20 text-center font-black text-brand-green text-xl bg-transparent outline-none" />
                           </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8">
                       {formData.linearTraitsFull?.map((lt, idx) => (
                          <div key={idx} className="relative group">
                             <div className="flex justify-between items-center mb-3">
                                <span className="text-[11px] font-black uppercase text-brand-black tracking-widest">{lt.trait}</span>
                                <span className={`text-sm font-black font-display ${lt.value > 0 ? 'text-brand-green' : 'text-brand-blue'}`}>
                                   {lt.value > 0 ? '+' : ''}{lt.value.toFixed(2)}
                                </span>
                             </div>
                             <div className="flex items-center gap-5">
                                <span className="text-[9px] font-bold text-gray-400 w-20 text-right uppercase italic">{lt.labelLow}</span>
                                <div className="flex-grow relative h-8 flex items-center">
                                   <div className="absolute inset-0 bg-slate-200 rounded-full h-2 top-1/2 -translate-y-1/2"></div>
                                   <input 
                                      type="range" min="-3" max="3" step="0.01" 
                                      value={lt.value} 
                                      onChange={(e) => handleLinearChange(idx, parseFloat(e.target.value))}
                                      className="absolute inset-0 w-full opacity-0 cursor-pointer z-20"
                                   />
                                   <div 
                                      className={`absolute h-5 w-5 rounded-full shadow-lg z-10 transition-all pointer-events-none border-2 border-white ${lt.value > 0 ? 'bg-brand-green' : 'bg-brand-blue'}`}
                                      style={{ left: `${50 + (lt.value * 16.66)}%`, transform: 'translateX(-50%)' }}
                                   ></div>
                                </div>
                                <span className="text-[9px] font-bold text-gray-400 w-20 text-left uppercase italic">{lt.labelHigh}</span>
                             </div>
                          </div>
                       ))}
                    </div>

                    <div className="grid grid-cols-3 gap-8 mt-20 border-t border-slate-200 pt-12">
                       {[
                         { label: 'Udder Composite (UDC)', path: 'evaluations.type.udc' },
                         { label: 'Feet & Legs (FLC)', path: 'evaluations.type.flc' },
                         { label: 'Body Weight (BWC)', path: 'evaluations.type.bwc' },
                       ].map((t, i) => (
                         <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-200 text-center shadow-sm">
                            <label className="block text-[10px] font-black uppercase text-gray-400 mb-3 tracking-widest">{t.label}</label>
                            <input type="number" step="0.01" value={(formData as any).evaluations.type[t.path.split('.')[2]]} onChange={(e) => handleInputChange(t.path, parseFloat(e.target.value))} className="w-full text-2xl font-display font-black text-brand-black text-center bg-transparent outline-none" />
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            )}

            {/* 6. Card & Hero Dashboard Highlights */}
            {activeTab === 'dashboard' && (
              <div className="space-y-12 animate-in fade-in duration-500 max-w-4xl">
                 <div className="bg-brand-black p-12 rounded-[3rem] text-white border border-white/5 shadow-2xl">
                    <div className="flex items-center gap-5 mb-12">
                       <LayoutDashboard className="text-brand-green" size={32} />
                       <div>
                          <h3 className="font-display font-black uppercase tracking-tight text-3xl italic">Summary Dashboard</h3>
                          <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">Controls Bull Card & Hero Index display</p>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                       {[
                         { label: 'Primary GTPI', path: 'stats.gtpi' },
                         { label: 'Net Merit $', path: 'stats.nm' },
                         { label: 'PTAM (Milk Summary)', path: 'stats.milk' },
                         { label: 'UDC Composite', path: 'stats.udc', step: 0.01 },
                         { label: 'PTAT Conformation', path: 'stats.ptat', step: 0.01 },
                         { label: 'Daughter Preg (DPR)', path: 'stats.dpr', step: 0.1 },
                         { label: 'Somatic Cell (SCS)', path: 'stats.scs', step: 0.01 },
                         { label: 'Fat Yield (Summary)', path: 'stats.fat' },
                         { label: 'Prot Yield (Summary)', path: 'stats.protein' },
                       ].map((s, i) => (
                         <div key={i} className="group">
                            <label className="block text-[10px] font-black uppercase text-white/40 tracking-widest mb-4 group-hover:text-brand-green transition-colors">{s.label}</label>
                            <input 
                              type="number" 
                              step={s.step || 1} 
                              value={(formData as any).stats[s.path.split('.')[1]]} 
                              onChange={(e) => handleInputChange(s.path, parseFloat(e.target.value))} 
                              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 font-display font-black text-2xl text-white outline-none focus:border-brand-green transition-all" 
                            />
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="p-10 bg-brand-green/5 border border-brand-green/10 rounded-[3rem] flex gap-8 items-start">
                    <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                       <Target size={28} />
                    </div>
                    <p className="text-base font-medium text-gray-600 italic leading-relaxed">
                       The values in this tab are used for the <strong>high-visibility indices</strong> on the Bull Portfolio cards and the Bull Profile hero section. Ensure these reflect the most accurate proof data for marketing.
                    </p>
                 </div>
              </div>
            )}

            {/* 7. Market Pricing & Status */}
            {activeTab === 'pricing' && (
              <div className="space-y-12 animate-in fade-in duration-500 max-w-2xl">
                 <div className="bg-slate-900 p-12 rounded-[3rem] text-white shadow-2xl">
                    <div className="flex items-center gap-5 mb-12">
                       <DollarSign className="text-brand-green" size={28} />
                       <h3 className="font-display font-black uppercase tracking-tight text-2xl italic">Market Valuation (₹)</h3>
                    </div>
                    <div className="space-y-10">
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                          <div>
                             <label className="block text-[10px] font-black uppercase text-white/40 tracking-widest mb-4">Conventional Straw</label>
                             <input type="number" value={formData.pricing.conventional} onChange={(e) => handleInputChange('pricing.conventional', parseInt(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 font-mono font-black text-4xl text-white outline-none focus:border-brand-green" />
                          </div>
                          <div>
                             <label className="block text-[10px] font-black uppercase text-white/40 tracking-widest mb-4">Sexed Ultra 4M</label>
                             <input type="number" value={formData.pricing.sexed || 0} onChange={(e) => handleInputChange('pricing.sexed', parseInt(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 font-mono font-black text-4xl text-brand-green outline-none focus:border-brand-green" />
                          </div>
                       </div>
                       
                       <div className="pt-10 border-t border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-5">
                             <div className="relative">
                                <input type="checkbox" checked={formData.published} onChange={(e) => setFormData({...formData, published: e.target.checked})} className="w-10 h-10 rounded-xl bg-white/5 border-white/10 accent-brand-green cursor-pointer appearance-none checked:bg-brand-green border-2 transition-all" id="pub-check" />
                                {formData.published && <Save size={16} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-black pointer-events-none" />}
                             </div>
                             <label htmlFor="pub-check" className="font-black uppercase tracking-[0.2em] text-[13px] cursor-pointer text-white/80">Active Inventory (Live in Portfolio)</label>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            )}

          </div>
        </form>
      </div>
    </div>
  );
};

export default BullEditor;