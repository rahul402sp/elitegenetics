
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
    id: "satellite",
    name: "SATELLITE",
    fullName: "WAKE-UP SATELLITE",
    regNo: "HO840003268504164",
    naab: "515HO00575",
    code: "515HO00575",
    dob: "03.01.2024",
    breed: "Holstein Friesian",
    weight: "820 kg",
    age: "1 Year",
    betaCasein: "A2A2",
    kappaCasein: "BB",
    aaa: "234156",
    geneticCodes: "TCTD TLTP TRTV TY HMW1",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2670&auto=format&fit=crop", 
    badges: ["GTPI +3301", "NM$ +840", "A2A2", "BB", "SEXED SEMEN"],
    description: "SATELLITE (Wake-Up Satellite) is an elite genomic powerhouse. Ranking among the top of the Holstein breed with a GTPI of +3301 and Net Merit of +840, he excels in Dairy Wellness Profit (+984) and Cheese Merit (+889).",
    stats: {
      gtpi: 3301,
      milk: 367,
      udc: 1.18,
      dpr: -0.6,
      scs: 2.83,
      ptat: 0.71,
      nm: 840,
      fat: 91,
      protein: 44,
      flc: -0.07
    },
    traits: [
      { trait: 'Milk', value: 65, fullMark: 100 },
      { trait: 'Fat', value: 92, fullMark: 100 },
      { trait: 'Protein', value: 78, fullMark: 100 },
      { trait: 'Udder', value: 85, fullMark: 100 },
      { trait: 'Prod Life', value: 96, fullMark: 100 },
    ],
    pedigree: {
      sire: "Dg SPACE",
      dam: "Wake-Up Gamed Sugar 5312 VG-85-USA",
      mgs: "RMD-Dotterer SSI GAMEDAY"
    },
    extendedPedigree: {
      sire: "Dg SPACE",
      dam: "Wake-Up Gamed Sugar 5312 VG-85-USA",
      mgs: "RMD-Dotterer SSI GAMEDAY",
      mgd: "Wake-Up Billy Siri 4643 VG-87-USA",
      mggs: "Mr Ri-Val-Re Free BILLY",
      mggd: "Wake-Up Frazzled Star 4151 VG-85-USA"
    },
    evaluations: {
      production: {
        reliability: 79,
        dtrs: 0,
        herds: 0,
        milk: 367,
        fatPct: 0.28,
        fat: 91,
        protPct: 0.12,
        prot: 44,
        cfp: 135,
        nm: 840,
        dwp: 984,
        cm: 889,
        fm: 724,
        gm: 816
      },
      type: {
        reliability: 78,
        ptat: 0.71,
        udc: 1.18,
        flc: -0.07,
        bwc: -0.53
      },
      calving: {
        sce: 1.3,
        dce: 1.7,
        ssb: 3.7,
        dsb: 3.4
      },
      health: {
        fi: 0.6,
        dpr: -0.6,
        hcr: 1.1,
        ccr: 1.0,
        mastitis: 1.9,
        scs: 2.83,
        pl: 3.5,
        liv: 1.8,
        fe: 260,
        rfi: -27,
        feedSaved: 113,
        milkingSpeed: 94
      }
    },
    linearTraitsFull: [
      { trait: "Stature", value: 0.12, labelLow: "Short", labelHigh: "Tall" },
      { trait: "Strength", value: -0.35, labelLow: "Frail", labelHigh: "Strong" },
      { trait: "Body Depth", value: -0.28, labelLow: "Shallow", labelHigh: "Deep" },
      { trait: "Dairy Form", value: 0.97, labelLow: "Tight Rib", labelHigh: "Open Rib" },
      { trait: "Rump Angle", value: -0.02, labelLow: "High Pins", labelHigh: "Sloped" },
      { trait: "Thurl Width", value: 1.04, labelLow: "Narrow", labelHigh: "Wide" },
      { trait: "Rear Legs - Side View", value: 1.04, labelLow: "Posty", labelHigh: "Sickled" },
      { trait: "Rear Legs - Rear View", value: -0.24, labelLow: "Hock-in", labelHigh: "Straight" },
      { trait: "Foot Angle", value: -0.37, labelLow: "Low Angle", labelHigh: "Steep" },
      { trait: "Feet & Legs Score", value: 0.08, labelLow: "Low", labelHigh: "Angle" },
      { trait: "Fore Udder Attachment", value: 0.83, labelLow: "Loose", labelHigh: "High" },
      { trait: "Rear Udder Height", value: 1.48, labelLow: "Low", labelHigh: "Strong" },
      { trait: "Rear Udder Width", value: 1.46, labelLow: "Narrow", labelHigh: "High Wide" },
      { trait: "Udder Cleft", value: 0.81, labelLow: "Weak", labelHigh: "Strong" },
      { trait: "Udder Depth", value: 0.82, labelLow: "Deep", labelHigh: "Shallow" },
      { trait: "Front Teat Placement", value: 0.66, labelLow: "Wide", labelHigh: "Close" },
      { trait: "Rear Teat Placement", value: 0.89, labelLow: "Wide", labelHigh: "Close" },
      { trait: "Teat Length", value: -0.15, labelLow: "Short", labelHigh: "Long" }
    ],
    pricing: {
      conventional: 1300,
      sexed: 5150
    }
  },
  {
    id: "hudson",
    name: "HUDSON",
    regNo: "HOLM840003212245742",
    naab: "515HO00388",
    code: "515HO00388",
    dob: "03.05.2020",
    breed: "Holstein Friesian",
    weight: "910 kg",
    age: "4 Years",
    betaCasein: "A2A2",
    kappaCasein: "AB",
    image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=2502&auto=format&fit=crop",
    badges: ["A2A2", "AB", "Balanced", "NM$ +570"],
    description: "HUDSON is a balanced sire combining strong milk yield (+791) with excellent udder composite (+1.37) and strength.",
    stats: {
      gtpi: 3167,
      milk: 791,
      udc: 1.37,
      dpr: 0.0,
      scs: 2.82,
      ptat: 1.30,
      nm: 570,
      fat: 80,
      protein: 34,
      flc: 0.03
    },
    traits: [
      { trait: 'Milk', value: 80, fullMark: 100 },
      { trait: 'Fat', value: 75, fullMark: 100 },
      { trait: 'Type', value: 75, fullMark: 100 },
      { trait: 'Udder', value: 80, fullMark: 100 },
      { trait: 'Fertility', value: 60, fullMark: 100 },
    ],
    pedigree: {
      sire: "Silverridge V EINSTEIN",
      dam: "AOT Positive Holiday VG-88-USA",
      mgs: "Progenesis POSITVE"
    },
    pricing: {
      conventional: 1350,
      sexed: 5500
    }
  },
  {
    id: "harrel-p-red",
    name: "HARREL P-RED",
    regNo: "HOLM840003267429415",
    naab: "515HO00525",
    code: "515HO00525",
    dob: "01.09.2023",
    breed: "Red Holstein",
    weight: "780 kg",
    age: "1.5 Years",
    betaCasein: "A1A2",
    kappaCasein: "BB",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=2521&auto=format&fit=crop",
    badges: ["Polled", "Red", "BB", "Type Specialist"],
    description: "HARREL P-RED is a unique Polled Red sire with extreme type (+2.82) and high Udder Composite (+1.77).",
    stats: {
      gtpi: 2878,
      milk: 184,
      udc: 1.77,
      dpr: 1.1,
      scs: 2.88,
      ptat: 2.82,
      nm: 115,
      fat: 8,
      protein: 15,
      flc: 1.72
    },
    traits: [
      { trait: 'Milk', value: 40, fullMark: 100 },
      { trait: 'Type', value: 95, fullMark: 100 },
      { trait: 'Udder', value: 90, fullMark: 100 },
      { trait: 'F&L', value: 90, fullMark: 100 },
      { trait: 'Fertility', value: 85, fullMark: 100 },
    ],
    pedigree: {
      sire: "Vogue LAZER-PP-RED",
      dam: "Siemers Wolf Hanan 36783 VG-85-USA",
      mgs: "Aija WOLFGANG P RC"
    },
    pricing: {
      conventional: 1300,
      sexed: 5200
    }
  },
  {
    id: "quality",
    name: "QUALITY",
    regNo: "HOLM840003213892679",
    code: "515HO00387",
    naab: "515HO00387",
    dob: "31.05.2020",
    breed: "Holstein Friesian",
    weight: "950 kg",
    age: "4 Years",
    betaCasein: "A2A2",
    kappaCasein: "BB",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2674&auto=format&fit=crop",
    badges: ["A2A2", "BB", "High Milk", "NM$ +658"],
    description: "QUALITY is a milk machine (+1717 lbs) with elite components. A top choice for commercial herds.",
    stats: {
      gtpi: 3134,
      milk: 1717,
      udc: 1.15,
      dpr: 0.2,
      scs: 2.82,
      ptat: 0.89,
      nm: 658,
      fat: 59,
      protein: 45,
      flc: -0.08
    },
    traits: [
      { trait: 'Milk', value: 98, fullMark: 100 },
      { trait: 'Fat', value: 70, fullMark: 100 },
      { trait: 'Protein', value: 80, fullMark: 100 },
      { trait: 'Udder', value: 75, fullMark: 100 },
      { trait: 'Fertility', value: 65, fullMark: 100 },
    ],
    pedigree: {
      sire: "Silverridge V EINSTEIN",
      dam: "No-Fla Ragen Julie 47267 GP-83-USA",
      mgs: "Fairmont Stoic RAGEN"
    },
    pricing: {
      conventional: 1700,
      sexed: 6000
    }
  },
  {
    id: "prada",
    name: "PRADA",
    regNo: "HOLM840003218556047",
    naab: "515HO00402",
    code: "515HO00402",
    dob: "29.12.2020",
    breed: "Holstein Friesian",
    weight: "880 kg",
    age: "3.5 Years",
    betaCasein: "A2A2",
    kappaCasein: "BB",
    image: "https://images.unsplash.com/photo-1559404245-502a28108502?q=80&w=2574&auto=format&fit=crop",
    badges: ["A2A2", "BB", "Fertility", "Components"],
    description: "PRADA delivers exceptional components (+61 Fat, +36 Protein) and fertility (DPR +1.4).",
    stats: {
      gtpi: 3108,
      milk: 409,
      udc: 0.97,
      dpr: 1.4,
      scs: 2.93,
      ptat: 1.22,
      nm: 373,
      fat: 61,
      protein: 36,
      flc: 1.26
    },
    traits: [
      { trait: 'Milk', value: 60, fullMark: 100 },
      { trait: 'Fat', value: 85, fullMark: 100 },
      { trait: 'Udder', value: 70, fullMark: 100 },
      { trait: 'F&L', value: 85, fullMark: 100 },
      { trait: 'Fertility', value: 90, fullMark: 100 },
    ],
    pedigree: {
      sire: "Leaninghouse TAOS",
      dam: "Siemers Grt Parini 28262 EX-91-USA",
      mgs: "Progenesis GRANITE"
    },
    pricing: {
      conventional: 1400,
      sexed: 5800
    }
  },
  {
    id: "have-it-all",
    name: "HAVE IT ALL",
    regNo: "HOLM840003208356638",
    naab: "515HO00371",
    code: "515HO00371",
    dob: "21.08.2019",
    breed: "Holstein Friesian",
    weight: "920 kg",
    age: "5 Years",
    betaCasein: "A1A2",
    kappaCasein: "BB",
    image: "https://images.unsplash.com/photo-1596733430284-f74377bc2bd6?q=80&w=2574&auto=format&fit=crop",
    badges: ["A1A2", "BB", "Type Specialist", "Daughter Proven"],
    description: "HAVE IT ALL lives up to his name as a Daughter Proven Type Specialist.",
    stats: {
      gtpi: 2733,
      milk: -125,
      udc: 1.55,
      dpr: -2.4,
      scs: 3.10,
      ptat: 2.29,
      nm: 135,
      fat: 40,
      protein: 6,
      flc: 1.15
    },
    traits: [
      { trait: 'Milk', value: 40, fullMark: 100 },
      { trait: 'Fat', value: 65, fullMark: 100 },
      { trait: 'Type', value: 95, fullMark: 100 },
      { trait: 'Udder', value: 90, fullMark: 100 },
      { trait: 'F&L', value: 80, fullMark: 100 },
    ],
    pedigree: {
      sire: "Sandy-Valley Kr EXCALIBUR",
      dam: "Siemers Doc Hanker 28653 EX-94-USA",
      mgs: "Woodcrest KING DOC"
    },
    pricing: {
      conventional: 1700,
      sexed: 7500
    }
  },
  {
    id: "hunter",
    name: "HUNTER",
    regNo: "HOLM840003260843020",
    naab: "515HO00498",
    code: "515HO00498",
    dob: "30.11.2022",
    breed: "Holstein Friesian",
    weight: "800 kg",
    age: "2.5 Years",
    betaCasein: "A2A2",
    kappaCasein: "BB",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2670&auto=format&fit=crop",
    badges: ["A2A2", "BB", "High Production", "Robotic Milking"],
    description: "HUNTER is a massive production sire (+1597 Milk) with balanced type.",
    stats: {
      gtpi: 3056,
      milk: 1597,
      udc: 0.59,
      dpr: -0.2,
      scs: 2.81,
      ptat: 1.54,
      nm: 420,
      fat: 31,
      protein: 47,
      flc: 1.12
    },
    traits: [
      { trait: 'Milk', value: 95, fullMark: 100 },
      { trait: 'Fat', value: 50, fullMark: 100 },
      { trait: 'Type', value: 80, fullMark: 100 },
      { trait: 'F&L', value: 80, fullMark: 100 },
      { trait: 'Prod Life', value: 85, fullMark: 100 },
    ],
    pedigree: {
      sire: "Sandy-Valley ESQUIRE",
      dam: "Duckett Parfect Hallie EX-91-USA",
      mgs: "Siemers Rengd PARFECT"
    },
    pricing: {
      conventional: 1350,
      sexed: 5200
    }
  },
  {
    id: "blackjack-p",
    name: "BLACKJACK P",
    regNo: "HOL840M003259995032",
    naab: "515HO00515",
    code: "515HO00515",
    dob: "10.02.2023",
    breed: "Holstein Friesian",
    weight: "760 kg",
    age: "2 Years",
    betaCasein: "A2A2",
    kappaCasein: "BB",
    image: "https://images.unsplash.com/photo-1596733430284-f74377bc2bd6?q=80&w=2574&auto=format&fit=crop",
    badges: ["Polled", "A2A2", "BB", "Commercial"],
    description: "BLACKJACK P offers Polled genetics with strong production numbers (+520 Milk).",
    stats: {
      gtpi: 3151,
      milk: 520,
      udc: 1.36,
      dpr: 0.2,
      scs: 2.73,
      ptat: 1.59,
      nm: 447,
      fat: 59,
      protein: 41,
      flc: 1.03
    },
    traits: [
      { trait: 'Milk', value: 70, fullMark: 100 },
      { trait: 'Fat', value: 80, fullMark: 100 },
      { trait: 'Type', value: 85, fullMark: 100 },
      { trait: 'Udder', value: 80, fullMark: 100 },
      { trait: 'Health', value: 85, fullMark: 100 },
    ],
    pedigree: {
      sire: "Penn-England CHEW-P",
      dam: "Aurora Parfect 23739 GP-USA 2yr",
      mgs: "Siemers Rengd PARFECT"
    },
    pricing: {
      conventional: 1250,
      sexed: 5700
    }
  },
  {
    id: "happen",
    name: "HAPPEN",
    regNo: "HOL840M003208356666",
    naab: "515HO00370",
    code: "515HO00370",
    dob: "01.09.2019",
    breed: "Holstein Friesian",
    weight: "940 kg",
    age: "5.5 Years",
    betaCasein: "A2A2",
    kappaCasein: "AB",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=2521&auto=format&fit=crop",
    badges: ["A2A2", "Type Specialist", "Show Winner"],
    description: "HAPPEN is an elite Type Specialist (+2.60 PTAT) known for producing show-winning daughters.",
    stats: {
      gtpi: 2626,
      milk: 172,
      udc: 1.72,
      dpr: -2.8,
      scs: 3.22,
      ptat: 2.60,
      nm: -68,
      fat: 20,
      protein: 10,
      flc: 1.57
    },
    traits: [
      { trait: 'Milk', value: 50, fullMark: 100 },
      { trait: 'Type', value: 98, fullMark: 100 },
      { trait: 'Udder', value: 95, fullMark: 100 },
      { trait: 'F&L', value: 92, fullMark: 100 },
      { trait: 'Show', value: 99, fullMark: 100 },
    ],
    pedigree: {
      sire: "Sandy-Valley Kr EXCALIBUR",
      dam: "Siemers Doc Hanker 28653 EX-94-USA",
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
