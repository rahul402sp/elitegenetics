
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useBulls } from '../../context/BullContext';
import { Bull, LinearTrait } from '../../types';
// Added Target to imports
import { ArrowLeft, Save, ShieldCheck, Image as ImageIcon, Ruler, Activity, ListChecks, DollarSign, ChevronRight, Binary, HeartPulse, Microscope, Target } from 'lucide-react';

const BullEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addBull, updateBull, getBull } = useBulls();
  const [activeTab, setActiveTab] = useState('general');
  const [isNew, setIsNew] = useState(false);

  // Comprehensive default state based on SATELLITE PDF
  const [formData, setFormData] = useState<Bull>({
    id: '',
    name: '',
    fullName: '',
    regNo: '',
    naab: '',
    dob: '',
    betaCasein: '',
    kappaCasein: '',
    aaa: '',
    geneticCodes: '',
    code: '',
    image: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=2502&auto=format&fit=crop',
    badges: [],
    description: '',
    published: true,
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
        // Deep merge to ensure all nested structures are present
        setFormData(prev => ({
          ...prev,
          ...existing,
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
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <div>
              <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase italic leading-none">
                {isNew ? 'Create' : 'Manage'} <span className="text-brand-green">Sire</span>
              </h1>
              <p className="text-white/40 font-bold uppercase text-[10px] tracking-[0.3em] mt-3 italic">Professional Genetic Editor</p>
            </div>
            <button 
              onClick={handleSave}
              className="bg-brand-blue hover:bg-brand-darkBlue text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl transition-all flex items-center gap-3 active:scale-95"
            >
              <Save size={18} /> Update Data Records
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 mb-40">
        <form onSubmit={handleSave} className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="flex overflow-x-auto border-b border-slate-100 bg-white sticky top-0 z-20 no-scrollbar">
            <TabButton id="general" label="ID & Image" icon={ShieldCheck} />
            <TabButton id="pedigree" label="Lineage" icon={ChevronRight} />
            <TabButton id="evaluations" label="Evaluations" icon={Activity} />
            <TabButton id="functional" label="Functional" icon={HeartPulse} />
            <TabButton id="linear" label="Linear" icon={Ruler} />
            <TabButton id="pricing" label="Market" icon={DollarSign} />
          </div>

          <div className="p-8 sm:p-14">
            {/* General Identification */}
            {activeTab === 'general' && (
              <div className="space-y-12 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                          <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Sire Display Name</label>
                          <input type="text" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-black text-black text-xl uppercase italic outline-none focus:ring-4 focus:ring-brand-blue/10" required />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Full Official Name</label>
                          <input type="text" value={formData.fullName} onChange={(e) => handleInputChange('fullName', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-bold text-black" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">NAAB Code</label>
                        <input type="text" value={formData.naab} onChange={(e) => handleInputChange('naab', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-mono font-bold text-black" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Registration No.</label>
                        <input type="text" value={formData.regNo} onChange={(e) => handleInputChange('regNo', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-mono font-bold text-black" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                       <div>
                        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">D.O.B</label>
                        <input type="text" value={formData.dob} onChange={(e) => handleInputChange('dob', e.target.value)} placeholder="DD.MM.YYYY" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-bold text-black" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">aAa Code</label>
                        <input type="text" value={formData.aaa} onChange={(e) => handleInputChange('aaa', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-bold text-black" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Casein Lines</label>
                        <div className="grid grid-cols-2 gap-2">
                           <input type="text" value={formData.betaCasein} onChange={(e) => handleInputChange('betaCasein', e.target.value)} placeholder="Beta" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-3 font-bold text-black text-center" />
                           <input type="text" value={formData.kappaCasein} onChange={(e) => handleInputChange('kappaCasein', e.target.value)} placeholder="Kappa" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-3 font-bold text-black text-center" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3 ml-2">Genetic Codes</label>
                      <input type="text" value={formData.geneticCodes} onChange={(e) => handleInputChange('geneticCodes', e.target.value)} placeholder="TCTD TLTP TRTV TY HMW1" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-mono font-bold text-brand-blue" />
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-white/10 text-white relative overflow-hidden">
                       <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-8">
                            <ImageIcon className="text-brand-green" />
                            <h3 className="font-display font-black uppercase tracking-tight text-lg italic">Visual Media Asset</h3>
                          </div>
                          <div className="flex items-center gap-8 mb-8">
                             <div className="w-32 h-32 bg-white/5 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center p-4">
                                <img src={formData.image} alt="Preview" className="max-w-full max-h-full object-contain" />
                             </div>
                             <div className="flex-grow">
                                <label className="block text-[10px] font-black uppercase text-white/40 tracking-widest mb-3 ml-1">CDN Image URL</label>
                                <input type="text" value={formData.image} onChange={(e) => handleInputChange('image', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 font-mono text-xs text-white outline-none focus:border-brand-green" />
                             </div>
                          </div>
                          <div className="p-6 bg-white/5 border border-dashed border-white/20 rounded-2xl text-center">
                             <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">Image Upload Integration: Ready</p>
                          </div>
                       </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4 ml-2">Strategic Summary Description</label>
                      <textarea value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)} rows={5} className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] py-6 px-8 font-medium leading-relaxed text-black" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pedigree Management */}
            {activeTab === 'pedigree' && (
              <div className="space-y-12 animate-in fade-in duration-500">
                <div className="bg-brand-blue/5 p-12 rounded-[3rem] border border-brand-blue/10">
                    <h3 className="font-display font-black text-brand-black uppercase italic text-2xl mb-12 flex items-center gap-4">
                       <div className="w-2 h-10 bg-brand-green rounded-full"></div> Deep Lineage Mapping
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-8">
                          <div>
                            <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3">Direct Sire</label>
                            <input type="text" value={formData.pedigree.sire} onChange={(e) => handleInputChange('pedigree.sire', e.target.value)} className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 font-bold text-black" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3">Direct Dam</label>
                            <input type="text" value={formData.pedigree.dam} onChange={(e) => handleInputChange('pedigree.dam', e.target.value)} className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 font-bold text-black" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3">Maternal Grand Sire (MGS)</label>
                            <input type="text" value={formData.pedigree.mgs} onChange={(e) => handleInputChange('pedigree.mgs', e.target.value)} className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 font-bold text-black" />
                          </div>
                        </div>
                        <div className="space-y-8">
                          <div>
                            <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3">Maternal Grand Dam (MGD)</label>
                            <input type="text" value={formData.extendedPedigree?.mgd} onChange={(e) => handleInputChange('extendedPedigree.mgd', e.target.value)} className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 font-bold text-black" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3">MG Grand Sire (MGGS)</label>
                            <input type="text" value={formData.extendedPedigree?.mggs} onChange={(e) => handleInputChange('extendedPedigree.mggs', e.target.value)} className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 font-bold text-black" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-black uppercase text-gray-400 tracking-widest mb-3">MG Grand Dam (MGGD)</label>
                            <input type="text" value={formData.extendedPedigree?.mggd} onChange={(e) => handleInputChange('extendedPedigree.mggd', e.target.value)} className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 font-bold text-black" />
                          </div>
                        </div>
                    </div>
                </div>
              </div>
            )}

            {/* Evaluations Tab */}
            {activeTab === 'evaluations' && (
              <div className="space-y-16 animate-in fade-in duration-500">
                 {/* Production Section */}
                 <div>
                    <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
                       <h3 className="font-display font-black uppercase text-2xl italic text-brand-black flex items-center gap-4">
                          <Microscope className="text-brand-blue" /> Production Performance
                       </h3>
                       <div className="flex gap-4">
                          <div className="bg-slate-50 px-4 py-2 rounded-xl flex items-center gap-4">
                             <label className="text-[9px] font-black uppercase text-gray-400">Reliability %</label>
                             <input type="number" step="0.1" value={formData.evaluations?.production.reliability} onChange={(e) => handleInputChange('evaluations.production.reliability', parseFloat(e.target.value))} className="w-16 bg-white border border-slate-200 rounded-lg text-center font-bold text-brand-blue text-xs py-1" />
                          </div>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                       <div>
                          <label className="block text-[9px] font-black uppercase text-gray-400 tracking-widest mb-2 ml-1">PTAM (Milk)</label>
                          <input type="number" value={formData.evaluations?.production.milk} onChange={(e) => handleInputChange('evaluations.production.milk', parseInt(e.target.value))} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-bold text-black" />
                       </div>
                       <div>
                          <label className="block text-[9px] font-black uppercase text-gray-400 tracking-widest mb-2 ml-1">Net Merit $</label>
                          <input type="number" value={formData.evaluations?.production.nm} onChange={(e) => handleInputChange('evaluations.production.nm', parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 px-6 font-bold text-white" />
                       </div>
                       <div>
                          <label className="block text-[9px] font-black uppercase text-gray-400 tracking-widest mb-2 ml-1">Fat (Lbs / %)</label>
                          <div className="grid grid-cols-2 gap-2">
                             <input type="number" value={formData.evaluations?.production.fat} onChange={(e) => handleInputChange('evaluations.production.fat', parseInt(e.target.value))} placeholder="Lbs" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-3 font-bold text-black text-center" />
                             <input type="number" step="0.01" value={formData.evaluations?.production.fatPct} onChange={(e) => handleInputChange('evaluations.production.fatPct', parseFloat(e.target.value))} placeholder="%" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-3 font-bold text-brand-green text-center" />
                          </div>
                       </div>
                       <div>
                          <label className="block text-[9px] font-black uppercase text-gray-400 tracking-widest mb-2 ml-1">Protein (Lbs / %)</label>
                          <div className="grid grid-cols-2 gap-2">
                             <input type="number" value={formData.evaluations?.production.prot} onChange={(e) => handleInputChange('evaluations.production.prot', parseInt(e.target.value))} placeholder="Lbs" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-3 font-bold text-black text-center" />
                             <input type="number" step="0.01" value={formData.evaluations?.production.protPct} onChange={(e) => handleInputChange('evaluations.production.protPct', parseFloat(e.target.value))} placeholder="%" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-3 font-bold text-brand-green text-center" />
                          </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                       {[
                         { label: 'DWP$', path: 'evaluations.production.dwp' },
                         { label: 'CM$', path: 'evaluations.production.cm' },
                         { label: 'FM$', path: 'evaluations.production.fm' },
                         { label: 'GM$', path: 'evaluations.production.gm' },
                         { label: 'CFP', path: 'evaluations.production.cfp' },
                       ].map((item, i) => (
                         <div key={i} className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4">
                            <label className="block text-[8px] font-black uppercase text-gray-400 tracking-widest mb-2 ml-1">{item.label}</label>
                            <input type="number" value={(formData as any).evaluations.production[item.path.split('.')[2]]} onChange={(e) => handleInputChange(item.path, parseInt(e.target.value))} className="w-full bg-white border border-slate-200 rounded-xl py-2 px-4 font-bold text-black text-center" />
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Calving Traits Index */}
                 <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white">
                    <h3 className="font-display font-black uppercase text-xl mb-8 italic flex items-center gap-4">
                       <Target className="text-brand-green" /> Calving Traits Index
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                       {[
                         { label: 'Sire Calving Ease (SCE)', path: 'evaluations.calving.sce' },
                         { label: 'Daughter Calving Ease (DCE)', path: 'evaluations.calving.dce' },
                         { label: 'Sire Still Birth (SSB)', path: 'evaluations.calving.ssb' },
                         { label: 'Daughter Still Birth (DSB)', path: 'evaluations.calving.dsb' },
                       ].map((c, i) => (
                         <div key={i}>
                            <label className="block text-[8px] font-black uppercase text-white/40 tracking-widest mb-3 ml-1">{c.label}</label>
                            <div className="relative">
                              <input type="number" step="0.1" value={(formData as any).evaluations.calving[c.path.split('.')[2]]} onChange={(e) => handleInputChange(c.path, parseFloat(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 font-bold text-brand-green text-center outline-none focus:border-brand-green" />
                              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] text-white/20 font-black">%</span>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Type Evaluation */}
                 <div>
                    <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
                       <h3 className="font-display font-black uppercase text-2xl italic text-brand-black flex items-center gap-4">
                          <Activity className="text-brand-blue" /> Type & Confirmation
                       </h3>
                       <div className="bg-slate-50 px-4 py-2 rounded-xl flex items-center gap-4">
                          <label className="text-[9px] font-black uppercase text-gray-400">Reliability %</label>
                          <input type="number" step="0.1" value={formData.evaluations?.type.reliability} onChange={(e) => handleInputChange('evaluations.type.reliability', parseFloat(e.target.value))} className="w-16 bg-white border border-slate-200 rounded-lg text-center font-bold text-brand-blue text-xs py-1" />
                       </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                       <div>
                          <label className="block text-[9px] font-black uppercase text-gray-400 tracking-widest mb-2 ml-1">PTAT (Overall Type)</label>
                          <input type="number" step="0.01" value={formData.evaluations?.type.ptat} onChange={(e) => handleInputChange('evaluations.type.ptat', parseFloat(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 px-6 font-bold text-brand-green text-center" />
                       </div>
                       {[
                         { label: 'Udder Composite (UDC)', path: 'evaluations.type.udc' },
                         { label: 'Feet & Leg Comp (FLC)', path: 'evaluations.type.flc' },
                         { label: 'Body Weight Comp (BWC)', path: 'evaluations.type.bwc' },
                       ].map((t, i) => (
                         <div key={i}>
                            <label className="block text-[9px] font-black uppercase text-gray-400 tracking-widest mb-2 ml-1">{t.label}</label>
                            <input type="number" step="0.01" value={(formData as any).evaluations.type[t.path.split('.')[2]]} onChange={(e) => handleInputChange(t.path, parseFloat(e.target.value))} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-bold text-black text-center" />
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            )}

            {/* Functional Traits Tab */}
            {activeTab === 'functional' && (
              <div className="space-y-12 animate-in fade-in duration-500">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="space-y-6 bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                       <h3 className="font-display font-black uppercase text-lg italic text-brand-black mb-6">Fertility & Health Indices</h3>
                       <div className="grid grid-cols-2 gap-6">
                          {[
                            { label: 'Fertility Index (FI)', path: 'evaluations.health.fi' },
                            { label: 'Daughter Preg Rate (DPR)', path: 'evaluations.health.dpr' },
                            { label: 'Heifer Concept Rate (HCR)', path: 'evaluations.health.hcr' },
                            { label: 'Cow Concept Rate (CCR)', path: 'evaluations.health.ccr' },
                            { label: 'Mastitis Index', path: 'evaluations.health.mastitis' },
                            { label: 'Somatic Cell Score (SCS)', path: 'evaluations.health.scs' },
                          ].map((f, i) => (
                            <div key={i}>
                               <label className="block text-[8px] font-black uppercase text-gray-400 mb-2">{f.label}</label>
                               <input type="number" step="0.1" value={(formData as any).evaluations.health[f.path.split('.')[2]]} onChange={(e) => handleInputChange(f.path, parseFloat(e.target.value))} className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 font-bold text-black text-center" />
                            </div>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-6 bg-slate-900 p-10 rounded-[3rem] text-white">
                       <h3 className="font-display font-black uppercase text-lg italic text-brand-green mb-6">Efficiency & Longevity</h3>
                       <div className="grid grid-cols-2 gap-6">
                          {[
                            { label: 'Productive Life (PL)', path: 'evaluations.health.pl' },
                            { label: 'Livability (LIV)', path: 'evaluations.health.liv' },
                            { label: 'Feed Efficiency (FE)', path: 'evaluations.health.fe' },
                            { label: 'Feed Saved', path: 'evaluations.health.feedSaved' },
                            { label: 'RFI', path: 'evaluations.health.rfi' },
                            { label: 'Milking Speed', path: 'evaluations.health.milkingSpeed' },
                          ].map((eff, i) => (
                            <div key={i}>
                               <label className="block text-[8px] font-black uppercase text-white/40 mb-2">{eff.label}</label>
                               <input type="number" step="0.1" value={(formData as any).evaluations.health[eff.path.split('.')[2]]} onChange={(e) => handleInputChange(eff.path, parseFloat(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 font-bold text-white text-center outline-none focus:border-brand-green" />
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
            )}

            {/* Linear Traits Tab */}
            {activeTab === 'linear' && (
              <div className="space-y-12 animate-in fade-in duration-500">
                 <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                    <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
                        <Ruler className="text-brand-blue" />
                        <h3 className="font-display font-black uppercase text-2xl italic text-brand-black">Linear Trait Mapping</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
                       {formData.linearTraitsFull?.map((lt, idx) => (
                          <div key={idx} className="group">
                             <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">{lt.trait}</span>
                                <span className={`text-xs font-black ${lt.value > 0 ? 'text-brand-green' : 'text-brand-blue'}`}>
                                   {lt.value > 0 ? '+' : ''}{lt.value.toFixed(2)}
                                </span>
                             </div>
                             <div className="flex items-center gap-4">
                                <span className="text-[8px] font-bold text-gray-400 w-16 text-right uppercase">{lt.labelLow}</span>
                                <div className="flex-grow relative h-6 flex items-center">
                                   <div className="absolute inset-0 bg-slate-200 rounded-full h-1.5 top-1/2 -translate-y-1/2"></div>
                                   <div className="absolute left-1/2 top-1/2 -translate-y-1/2 h-3 w-0.5 bg-slate-400"></div>
                                   <input 
                                      type="range" 
                                      min="-3" 
                                      max="3" 
                                      step="0.01" 
                                      value={lt.value} 
                                      onChange={(e) => handleLinearChange(idx, parseFloat(e.target.value))}
                                      className="absolute inset-0 w-full opacity-0 cursor-pointer z-20"
                                   />
                                   <div 
                                      className={`absolute h-4 w-4 rounded-full shadow-lg z-10 transition-all pointer-events-none ${lt.value > 0 ? 'bg-brand-green' : 'bg-brand-blue'}`}
                                      style={{ left: `${50 + (lt.value * 16.66)}%`, transform: 'translateX(-50%)' }}
                                   ></div>
                                </div>
                                <span className="text-[8px] font-bold text-gray-400 w-16 text-left uppercase">{lt.labelHigh}</span>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
            )}

            {/* Market Pricing Tab */}
            {activeTab === 'pricing' && (
              <div className="space-y-12 animate-in fade-in duration-500 max-w-2xl">
                 <div className="bg-slate-900 p-12 rounded-[3rem] text-white">
                    <div className="flex items-center gap-4 mb-12">
                       <DollarSign className="text-brand-green" />
                       <h3 className="font-display font-black uppercase tracking-tight text-2xl italic">Global Market Valuation</h3>
                    </div>
                    <div className="space-y-10">
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                          <div>
                             <label className="block text-[10px] font-black uppercase text-white/40 tracking-widest mb-4">Conventional Straw (₹)</label>
                             <input type="number" value={formData.pricing.conventional} onChange={(e) => handleInputChange('pricing.conventional', parseInt(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 font-mono font-black text-3xl text-white outline-none focus:border-brand-green" />
                          </div>
                          <div>
                             <label className="block text-[10px] font-black uppercase text-white/40 tracking-widest mb-4">Sexed Ultra 4M (₹)</label>
                             <input type="number" value={formData.pricing.sexed || 0} onChange={(e) => handleInputChange('pricing.sexed', parseInt(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 font-mono font-black text-3xl text-brand-green outline-none focus:border-brand-green" />
                          </div>
                       </div>
                       
                       <div className="pt-10 border-t border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                             <input type="checkbox" checked={formData.published} onChange={(e) => setFormData({...formData, published: e.target.checked})} className="w-8 h-8 rounded-xl bg-white/5 border-white/10 accent-brand-green cursor-pointer" id="pub-check" />
                             <label htmlFor="pub-check" className="font-black uppercase tracking-[0.2em] text-[12px] cursor-pointer text-white/80">Active Public Portfolio Inventory</label>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="p-8 bg-brand-blue/5 border border-brand-blue/10 rounded-[2.5rem] flex items-center gap-6">
                    <div className="w-14 h-14 bg-brand-blue rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                       <DollarSign size={24} />
                    </div>
                    <p className="text-sm font-medium text-gray-600 italic leading-relaxed">
                       Note: Pricing reflects current genomic evaluation proof levels. Updates here flow instantly to the public Price Index page.
                    </p>
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
