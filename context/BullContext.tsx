import React, { createContext, useContext, useState, useEffect } from 'react';
import { Bull } from '../types';
import { BULLS as INITIAL_BULLS } from '../constants';

interface BullContextType {
  bulls: Bull[];
  addBull: (bull: Bull) => void;
  updateBull: (bull: Bull) => void;
  deleteBull: (id: string) => void;
  getBull: (id: string) => Bull | undefined;
}

const BullContext = createContext<BullContextType | undefined>(undefined);

export const BullProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bulls, setBulls] = useState<Bull[]>([]);

  useEffect(() => {
    const savedBulls = localStorage.getItem('elite_genetics_bulls');
    if (savedBulls) {
      setBulls(JSON.parse(savedBulls));
    } else {
      // Seed with initial data if empty
      const seeded = INITIAL_BULLS.map(b => ({ ...b, published: true }));
      setBulls(seeded);
      localStorage.setItem('elite_genetics_bulls', JSON.stringify(seeded));
    }
  }, []);

  const saveToStorage = (updatedBulls: Bull[]) => {
    setBulls(updatedBulls);
    localStorage.setItem('elite_genetics_bulls', JSON.stringify(updatedBulls));
  };

  const addBull = (bull: Bull) => {
    saveToStorage([...bulls, bull]);
  };

  const updateBull = (updatedBull: Bull) => {
    saveToStorage(bulls.map(b => b.id === updatedBull.id ? updatedBull : b));
  };

  const deleteBull = (id: string) => {
    saveToStorage(bulls.filter(b => b.id !== id));
  };

  const getBull = (id: string) => bulls.find(b => b.id === id);

  return (
    <BullContext.Provider value={{ bulls, addBull, updateBull, deleteBull, getBull }}>
      {children}
    </BullContext.Provider>
  );
};

export const useBulls = () => {
  const context = useContext(BullContext);
  if (!context) throw new Error('useBulls must be used within a BullProvider');
  return context;
};