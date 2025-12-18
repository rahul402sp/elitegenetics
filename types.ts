export interface LinearTrait {
  trait: string;
  value: number;
  labelLow: string;
  labelHigh: string;
}

export interface Bull {
  id: string;
  name: string;
  fullName?: string; // Added for official names like WAKE-UP SATELLITE
  regNo: string;
  naab: string;
  dob: string;
  betaCasein: string;
  kappaCasein: string;
  aaa?: string;
  geneticCodes?: string;
  code: string;
  image: string;
  badges: string[];
  description: string;
  
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
      reliability: number;
      dtrs: number;
      herds: number;
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
      reliability: number;
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