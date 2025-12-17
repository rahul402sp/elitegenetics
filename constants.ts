import { Bull, PricingItem } from './types';

export const COMPANY_INFO = {
  name: "Elite Genetics LTD",
  address: "VPO Mana Singh Wala, Dist. Ferozpur, Punjab – 142052",
  phone: "+91 89685 36356",
  email: "elitegenetics2024@gmail.com",
  contactPerson: "Robanpreet Singh"
};

export const BULLS: Bull[] = [
  {
    id: "quality",
    name: "QUALITY",
    regNo: "HOLM840003213892679",
    code: "515HO00387",
    image: "https://picsum.photos/id/237/800/600", // Placeholder for cow/bull
    badges: ["A2A2", "BB", "Daughter Proven", "High Milk"],
    description: "QUALITY is a leading udder and milk bull, ranking among the top daughter-proven TPI sires globally. His daughters show exceptional udder depth, teat placement, and strength. He is the #1 Udder bull and #1 Milk bull in his class.",
    stats: {
      gtpi: 3197,
      milk: 1909,
      udc: 1.30,
      dpr: 0.2,
      scs: 2.81,
      ptat: 0.89
    },
    traits: [
      { trait: 'Milk', value: 90, fullMark: 100 },
      { trait: 'Fat', value: 85, fullMark: 100 },
      { trait: 'Protein', value: 80, fullMark: 100 },
      { trait: 'Udder', value: 95, fullMark: 100 },
      { trait: 'Fertility', value: 70, fullMark: 100 },
    ],
    pedigree: {
      sire: "Silverridge V EINSTEIN",
      dam: "No-Fla Ragen Julie 47267",
      mgs: "Fairmont Stoic RAGEN"
    },
    pricing: {
      conventional: 1700,
      sexed: 6000
    }
  },
  {
    id: "hudson",
    name: "HUDSON",
    regNo: "HOLM840003212245742",
    code: "515HO00388",
    image: "https://picsum.photos/id/200/800/600",
    badges: ["A2A2", "AB", "Balanced"],
    description: "A balanced sire combining strong milk yield with excellent udder composite and strength. Hudson daughters show durability, functional udders, and improved herd efficiency.",
    stats: {
      gtpi: 3167,
      milk: 791,
      udc: 1.37,
      dpr: 0.0,
      scs: 2.82,
      ptat: 1.30
    },
    traits: [
      { trait: 'Milk', value: 75, fullMark: 100 },
      { trait: 'Fat', value: 80, fullMark: 100 },
      { trait: 'Type', value: 85, fullMark: 100 },
      { trait: 'Udder', value: 88, fullMark: 100 },
      { trait: 'Feet/Legs', value: 60, fullMark: 100 },
    ],
    pedigree: {
      sire: "Silverridge V EINSTEIN",
      dam: "AOT Positive Holiday",
      mgs: "Progenesis POSITIVE"
    },
    pricing: {
      conventional: 1350,
      sexed: 5500
    }
  },
  {
    id: "have-it-all",
    name: "HAVE IT ALL",
    regNo: "HOLM840003208356638",
    code: "515HO00371",
    image: "https://picsum.photos/id/202/800/600",
    badges: ["A1A2", "Type Specialist", "Daughter Proven"],
    description: "One of the most reliable type and udder sires globally. Proven with thousands of daughters across herds. Delivers show-quality udders, strong frames, and consistent fertility.",
    stats: {
      gtpi: 2733,
      milk: -125,
      udc: 1.55,
      dpr: -2.4,
      scs: 3.10,
      ptat: 2.29
    },
    traits: [
      { trait: 'Milk', value: 40, fullMark: 100 },
      { trait: 'Fat', value: 60, fullMark: 100 },
      { trait: 'Type', value: 98, fullMark: 100 },
      { trait: 'Udder', value: 95, fullMark: 100 },
      { trait: 'Feet/Legs', value: 85, fullMark: 100 },
    ],
    pedigree: {
      sire: "Sandy-Valley Kr EXCALIBUR",
      dam: "Siemers Doc Hanker",
      mgs: "Woodcrest KING DOC"
    },
    pricing: {
      conventional: 1700,
      sexed: 7500
    }
  },
  {
    id: "satellite",
    name: "SATELLITE",
    regNo: "HO840003268504164",
    code: "515HO00575",
    image: "https://picsum.photos/id/204/800/600",
    badges: ["A2A2", "High GTPI", "Components"],
    description: "An extreme GTPI sire with solid production and functional type. Ideal for modern dairy systems requiring efficiency and health traits.",
    stats: {
      gtpi: 3301,
      milk: 367,
      udc: 1.18,
      dpr: -0.6,
      scs: 2.83,
      ptat: 0.71
    },
    traits: [
      { trait: 'Milk', value: 65, fullMark: 100 },
      { trait: 'Fat', value: 90, fullMark: 100 },
      { trait: 'Protein', value: 85, fullMark: 100 },
      { trait: 'Health', value: 88, fullMark: 100 },
      { trait: 'Fertility', value: 60, fullMark: 100 },
    ],
    pedigree: {
      sire: "Dg SPACE",
      dam: "Wake-Up Gamed Sugar",
      mgs: "RMD-Dotterer SSI GAMEDAY"
    },
    pricing: {
      conventional: 1300,
      sexed: 5150
    }
  },
  {
    id: "happen",
    name: "HAPPEN",
    regNo: "HOLM840003208356666",
    code: "515HO00370",
    image: "https://picsum.photos/id/209/800/600",
    badges: ["A2A2", "Type Specialist", "Show Winner"],
    description: "A daughter-proven type specialist known for elite udders and show success. Excellent choice for breeders aiming at type improvement and premium herd appearance.",
    stats: {
      gtpi: 2626,
      milk: 172,
      udc: 1.72,
      dpr: -2.8,
      scs: 3.22,
      ptat: 2.60
    },
    traits: [
      { trait: 'Milk', value: 50, fullMark: 100 },
      { trait: 'Fat', value: 55, fullMark: 100 },
      { trait: 'Type', value: 99, fullMark: 100 },
      { trait: 'Udder', value: 97, fullMark: 100 },
      { trait: 'Feet/Legs', value: 90, fullMark: 100 },
    ],
    pedigree: {
      sire: "Sandy-Valley Kr EXCALIBUR",
      dam: "Siemers Doc Hanker",
      mgs: "Woodcrest KING DOC"
    },
    pricing: {
      conventional: 2800
    }
  }
];

export const PRICING_LIST: PricingItem[] = [
  { bullName: "Satellite", conventional: 1300, sexed: 5150 },
  { bullName: "Hudson", conventional: 1350, sexed: 5500 },
  { bullName: "Happen", conventional: 2800 },
  { bullName: "Have It All", conventional: 1700, sexed: 7500 },
  { bullName: "Hunter", conventional: 1350, sexed: 5200 },
  { bullName: "Prada", conventional: 1400, sexed: 5800 },
  { bullName: "Harrel-P-Red", conventional: 1300, sexed: 5200 },
  { bullName: "Blackjack-P", conventional: 1250, sexed: 5700 },
  { bullName: "Quality", conventional: 1700, sexed: 6000 },
];
