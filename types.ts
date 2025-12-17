export interface Bull {
  id: string;
  name: string;
  regNo: string;
  code: string;
  image: string;
  badges: string[]; // e.g., 'A2A2', 'BB', 'Polled'
  description: string;
  stats: {
    gtpi: number;
    milk: number;
    udc: number; // Udder Composite
    dpr: number; // Daughter Pregnancy Rate
    scs: number; // Somatic Cell Score
    ptat: number; // Type
  };
  traits: {
    trait: string;
    value: number;
    fullMark: number;
  }[];
  pedigree: {
    sire: string;
    dam: string;
    mgs: string; // Maternal Grandsire
  };
  pricing: {
    conventional: number;
    sexed?: number;
  };
}

export interface PricingItem {
  bullName: string;
  conventional: number;
  sexed?: number;
}