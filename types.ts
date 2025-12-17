export interface LinearTrait {
  trait: string;
  value: number;
  labelLow: string;
  labelHigh: string;
}

export interface Bull {
  id: string;
  name: string;
  regNo: string;
  naab: string;
  dob: string;
  betaCasein: string;
  kappaCasein: string;
  aaa?: string; // Added
  geneticCodes?: string; // Added (e.g. TC TD TL...)
  code: string;
  image: string;
  badges: string[];
  description: string;
  
  // Basic stats for cards
  stats: {
    gtpi: number;
    milk: number;
    udc: number;
    dpr: number;
    scs: number;
    ptat: number;
    nm?: number;
    fat?: number;
    protein?: number;
    flc?: number;
  };

  // Legacy radar chart traits
  traits: {
    trait: string;
    value: number;
    fullMark: number;
  }[];

  pedigree: {
    sire: string;
    dam: string;
    mgs: string;
  };
  
  // New Extended Fields
  extendedPedigree?: {
    sire: string;
    dam: string;
    mgs: string;
    mgd: string;
    mggs?: string;
    mggd?: string;
  };

  evaluations?: {
    production: {
      milk: number;
      fatPct: number;
      fat: number;
      protPct: number;
      prot: number;
      cfp: number;
      nm: number;
      dwp: number;
      cm: number;
      fm: number;
      gm: number;
    };
    type: {
      ptat: number;
      udc: number;
      flc: number;
      bwc: number;
    };
    calving: {
      sce: number;
      dce: number;
      ssb: number;
      dsb: number;
    };
    health: {
      fi: number;
      dpr: number;
      hcr: number;
      ccr: number;
      mastitis: number;
      scs: number;
      pl: number;
      liv: number;
      fe: number;
      rfi: number;
      feedSaved: number;
      milkingSpeed: number;
    };
  };

  linearTraitsFull?: LinearTrait[];

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