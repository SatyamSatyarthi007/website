export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: "rings" | "watches" | "straps";
  categoryLabel: string;
  editionBadge: string;
  shortDescription: string;
  fullDescription: string;
  indicativePrice: string;
  numericPrice: number;
  image: string;
  materials: string[];
  specs: ProductSpec[];
  checkoutUrl: string; // Configurable external link (Stripe, Shopify, or invoice URL)
  featured?: boolean;
}

export const CATEGORIES = [
  { id: "all", label: "All Collections" },
  { id: "rings", label: "High Jewellery Rings" },
  { id: "watches", label: "Bespoke Watches" },
  { id: "straps", label: "Bespoke Leather Straps" },
] as const;

export const PRODUCTS: Product[] = [
  // ==========================================
  // RINGS
  // ==========================================
  {
    id: "solitaire-diamant-etoile",
    name: "L'Étoile Solitaire Diamant 3.20ct",
    category: "rings",
    categoryLabel: "High Jewellery Rings",
    editionBadge: "Unique Commission",
    shortDescription:
      "A flawless 3.20-carat round brilliant diamond perched in a six-prong platinum crown atop an ultra-fine micropavé shank.",
    fullDescription:
      "Hand-forged in the Geneva atelier, L'Étoile showcases a singular 3.20-carat D-Flawless diamond exhibiting superlative optical symmetry. The scalloped pavilion allows maximum light entry, while thirty-six micropavé diamonds trace the inner contour of the 950 platinum band. Individually sized and engraved to client monogram specifications.",
    indicativePrice: "$58,000 USD · Indicative Bespoke Tier",
    numericPrice: 58000,
    image: "/images/products/rings/solitaire-diamant.jpg",
    materials: ["3.20ct D-Flawless Round Brilliant", "950 Platinum", "0.45ct Micropavé Accent Stones"],
    specs: [
      { label: "Center Stone", value: "3.20 ct · Round Brilliant · Type IIa" },
      { label: "Color & Clarity", value: "D Color · Flawless (FL)" },
      { label: "Metal", value: "Solid 950 Platinum (Hand-Polished Miroir)" },
      { label: "Accent Pavé", value: "36 Def/VVS Micropavé Diamonds (0.45ct total)" },
      { label: "Provenance", value: "Certified Kimberley Process & Responsible Jewellery Council" },
      { label: "Crafting Window", value: "6 to 8 weeks upon stone selection" },
    ],
    checkoutUrl: "https://checkout.stripe.com/c/pay/placeholder-solitaire-diamant",
    featured: true,
  },
  {
    id: "saphir-architectural-royal",
    name: "Saphir Architectural Royal 5.40ct",
    category: "rings",
    categoryLabel: "High Jewellery Rings",
    editionBadge: "Numbered Edition 02/05",
    shortDescription:
      "An unheated royal blue emerald-cut Ceylon sapphire flanked by stepped baguette diamonds in hand-brushed 18k yellow gold.",
    fullDescription:
      "A sculptured study in architectural volume. The centerpiece is a certified natural unheated Ceylon sapphire weighing 5.40 carats, cradled in a dual-tiered bevel. Two precision-calibrated step-cut diamond baguettes create a modernist horizontal geometry against heavy satin-finished 18k yellow gold.",
    indicativePrice: "$44,500 USD · Indicative Bespoke Tier",
    numericPrice: 44500,
    image: "/images/products/rings/saphir-architectural.jpg",
    materials: ["5.40ct Unheated Royal Blue Sapphire", "18k Fairmined Yellow Gold", "0.88ct Tapered Baguettes"],
    specs: [
      { label: "Primary Gemstone", value: "5.40 ct Natural Ceylon Sapphire (Unheated)" },
      { label: "Color Grade", value: "Vivid Royal Blue" },
      { label: "Side Stones", value: "Stepped Baguette Cut Diamonds (E/VVS1 · 0.88ctw)" },
      { label: "Metal", value: "18k Fairmined Yellow Gold (750/1000, Brushed Satin Finish)" },
      { label: "Setting Style", value: "Architectural Split Shank with Flushed Channel" },
      { label: "Crafting Window", value: "7 to 9 weeks from commission" },
    ],
    checkoutUrl: "https://checkout.stripe.com/c/pay/placeholder-saphir-architectural",
    featured: false,
  },
  {
    id: "emeraude-ruban-colombienne",
    name: "Émeraude Ruban Infinie 4.10ct",
    category: "rings",
    categoryLabel: "High Jewellery Rings",
    editionBadge: "Unique Commission",
    shortDescription:
      "A luminous Muzo emerald nestled within an organic ribbon of 18k rose gold and delicate pavé brilliant diamonds.",
    fullDescription:
      "Sculpted to mimic the fluid drape of silk ribbon, this ring highlights a captivating 4.10-carat Colombian emerald from the historic Muzo deposits. The vivid green gem is enveloped by undulating loops of warm rose gold, hand-set with micro-diamonds that trace the contours of the wearer's hand.",
    indicativePrice: "$52,000 USD · Indicative Bespoke Tier",
    numericPrice: 52000,
    image: "/images/products/rings/emeraude-ruban.jpg",
    materials: ["4.10ct Muzo Colombian Emerald", "18k Rose Gold", "0.62ct Pavé Diamonds"],
    specs: [
      { label: "Center Stone", value: "4.10 ct Muzo Colombian Emerald (Insignia Green)" },
      { label: "Clarity Treatment", value: "Minor Traditional Cedarwood Oil Only" },
      { label: "Metal", value: "18k Warm Rose Gold (Au750)" },
      { label: "Pavé Details", value: "54 Brilliant-Cut Diamonds (F-G / VS+)" },
      { label: "Design Concept", value: "Continuous Mobius Ribbon Contour" },
      { label: "Crafting Window", value: "8 weeks bespoke casting & gem-setting" },
    ],
    checkoutUrl: "https://checkout.stripe.com/c/pay/placeholder-emeraude-ruban",
    featured: true,
  },

  // ==========================================
  // BESPOKE WATCHES
  // ==========================================
  {
    id: "tourbillon-squelette-or-rose",
    name: "Calibre V-01 Tourbillon Squelette",
    category: "watches",
    categoryLabel: "Bespoke Watches",
    editionBadge: "Atelier Series · Limited to 8 Pieces",
    shortDescription:
      "A hand-skeletonized flying 60-second tourbillon with rose gold bridges, blued Breguet hands, and 72-hour power reserve.",
    fullDescription:
      "The pinnacle of Vauclaire's horological capability. Calibre V-01 features an openworked manual-wind movement, where every bridge is hand-beveled with inward angles and finished with black polish (poli noir). The 40mm 18k 5N rose gold case houses an off-centered salmon dial with flame-blued titanium hands.",
    indicativePrice: "$92,000 USD · Indicative Bespoke Tier",
    numericPrice: 92000,
    image: "/images/products/watches/tourbillon-squelette.jpg",
    materials: ["18k 5N Rose Gold Case", "Calibre V-01 In-House Movement", "Hand-Blued Titanium Hands"],
    specs: [
      { label: "Case Diameter", value: "40.5 mm · Thickness: 10.8 mm" },
      { label: "Movement", value: "Manufacture Calibre V-01 Flying Tourbillon (Manual)" },
      { label: "Vibrations", value: "21,600 vph (3 Hz) · 23 Jewels" },
      { label: "Power Reserve", value: "72 Hours via Twin Co-Axial Barrels" },
      { label: "Finishing", value: "Hand-filed Anglage, Black Polished Tourbillon Bridge" },
      { label: "Water Resistance", value: "30 meters (3 ATM)" },
      { label: "Delivery Time", value: "12 to 16 weeks bespoke assembly" },
    ],
    checkoutUrl: "https://checkout.stripe.com/c/pay/placeholder-tourbillon-squelette",
    featured: true,
  },
  {
    id: "chronographe-monopoussoir-grand-feu",
    name: "Chronographe Grand Feu Platine 950",
    category: "watches",
    categoryLabel: "Bespoke Watches",
    editionBadge: "Commissioned Piece",
    shortDescription:
      "A monopusher chronograph featuring a deep midnight-blue Grand Feu enamel dial and column-wheel lateral clutch movement.",
    fullDescription:
      "Enclosed in a solid 950 platinum stepped case, this chronograph brings together traditional enameling with classical chronometry. The dial is baked six times at 800°C to achieve a deep, glass-like ocean blue that will never fade. Powered by a hand-wound horizontal clutch column-wheel movement visible through the sapphire exhibition back.",
    indicativePrice: "$78,000 USD · Indicative Bespoke Tier",
    numericPrice: 78000,
    image: "/images/products/watches/chronographe-grand-feu.jpg",
    materials: ["Solid 950 Platinum", "Grand Feu Vitreous Enamel Dial", "Column-Wheel Calibre"],
    specs: [
      { label: "Case Diameter", value: "39.0 mm · Thickness: 11.2 mm" },
      { label: "Dial Material", value: "Grand Feu Vitreous Enamel in Midnight Bleu" },
      { label: "Sub-Dials", value: "Engine-Turned Guilloché Silver Seconds & 30-Min Register" },
      { label: "Calibre", value: "Calibre V-04 Monopusher Chronograph with Column Wheel" },
      { label: "Exhibition Back", value: "Sapphire Crystal with Anti-Reflective Coating" },
      { label: "Strap Included", value: "Hand-stitched dark navy Mississippi alligator" },
      { label: "Delivery Time", value: "10 to 14 weeks" },
    ],
    checkoutUrl: "https://checkout.stripe.com/c/pay/placeholder-chronographe-grand-feu",
    featured: true,
  },
  {
    id: "phase-de-lune-meteorite-or-blanc",
    name: "Observatoire Météorite & Phase de Lune",
    category: "watches",
    categoryLabel: "Bespoke Watches",
    editionBadge: "Numbered Edition 03/10",
    shortDescription:
      "A poetic astronomical timepiece featuring a genuine Muonionalusta meteorite dial and lapis lazuli lunar disc in 18k white gold.",
    fullDescription:
      "Cut from an authentic iron-nickel meteorite displaying the intricate crystalline Widmanstätten pattern formed over four billion years. The high-precision spherical moonphase aperture is sculpted from deep blue lapis lazuli with hand-hammered 24k gold stars and moon, requiring adjustment only once every 122 years.",
    indicativePrice: "$64,000 USD · Indicative Bespoke Tier",
    numericPrice: 64000,
    image: "/images/products/watches/phase-de-lune-meteorite.jpg",
    materials: ["Muonionalusta Meteorite", "18k White Gold Fluted Case", "Lapis Lazuli Moon Disc"],
    specs: [
      { label: "Case Diameter", value: "38.5 mm · Thickness: 9.8 mm" },
      { label: "Dial Surface", value: "Natural Muonionalusta Meteorite Slab (Acid-Etched)" },
      { label: "Complication", value: "Astronomical Moonphase (Accurate to 122.6 Years)" },
      { label: "Moon & Stars", value: "Solid 24k Yellow Gold on Natural Lapis Lazuli" },
      { label: "Movement", value: "Ultra-Thin Automatic Calibre V-02 with 22k Gold Micro-Rotor" },
      { label: "Power Reserve", value: "54 Hours" },
      { label: "Delivery Time", value: "8 to 12 weeks" },
    ],
    checkoutUrl: "https://checkout.stripe.com/c/pay/placeholder-phase-de-lune-meteorite",
    featured: false,
  },

  // ==========================================
  // BESPOKE LEATHER WATCH STRAPS
  // ==========================================
  {
    id: "strap-barenia-cognac-saddle",
    name: "Bracelet Cuir Barénia Couture Sellier",
    category: "straps",
    categoryLabel: "Bespoke Leather Straps",
    editionBadge: "Made to Measure",
    shortDescription:
      "Hand-cut full-grain French Barénia calfskin in warm cognac, saddle-stitched with waxed ecru linen thread and beveled edges.",
    fullDescription:
      "Sourced exclusively from an artisanal tannery in Alsace, France, this Barénia calfskin possesses an unmatched tactile silkiness and develops a rich amber patina over years of wear. Fully crafted by hand using the traditional double-needle saddler's stitch, with hand-painted hot-waxed edges and hypoallergenic Zermatt calf lining.",
    indicativePrice: "$580 USD · Custom Made to Measure",
    numericPrice: 580,
    image: "/images/products/straps/barenia-cognac-saddle.jpg",
    materials: ["French Barénia Calfskin (Cognac)", "Fil Au Chinois Waxed Linen Thread", "Zermatt Lining"],
    specs: [
      { label: "Leather Origin", value: "Alsace Tannery (Full-Grain Double Tanned Calf)" },
      { label: "Stitching Technique", value: "Traditional Double-Needle Saddler's Stitch (Point Sellier)" },
      { label: "Thread", value: "Fil Au Chinois Lin Câblé (Ecru / Natural Waxed)" },
      { label: "Lining", value: "French Zermatt Water-Resistant Hypoallergenic Calfskin" },
      { label: "Buckle", value: "Solid Brushed 316L Steel or 18k Gold Plated Tang Buckle" },
      { label: "Customization", value: "Custom Lug Width (18-22mm), Length, & Taper to Measure" },
      { label: "Delivery Time", value: "10 to 14 business days" },
    ],
    checkoutUrl: "https://checkout.stripe.com/c/pay/placeholder-strap-barenia-cognac",
    featured: true,
  },
  {
    id: "strap-alligator-noir-mat",
    name: "Bracelet Alligator de Louisiane Noir Mat",
    category: "straps",
    categoryLabel: "Bespoke Leather Straps",
    editionBadge: "Made to Measure",
    shortDescription:
      "Matte black American alligator square-scale belly skin, hand-stitched with tone-on-tone silk and deployant hardware.",
    fullDescription:
      "Crafted exclusively from the central square scales of certified Louisiana alligator belly skins. The velvet-matte black finish reflects horological discretion, free of artificial sheen. Features hand-thinned edge turnings, rolled profile cushioning, and bespoke quick-release spring bars calibrated to your timepiece lugs.",
    indicativePrice: "$820 USD · Custom Made to Measure",
    numericPrice: 820,
    image: "/images/products/straps/alligator-noir-mat.jpg",
    materials: ["Certified Louisiana Alligator Belly", "Matte Noir Dye", "Brushed Platinum Clasp"],
    specs: [
      { label: "Leather Species", value: "Alligator Mississippiensis (CITES Certified)" },
      { label: "Cut & Grain", value: "Prime Center Square Scale (Écailles Carrées)" },
      { label: "Padding Profile", value: "Bespoke Raised Chronograph Padding (4.5mm tapering to 2.2mm)" },
      { label: "Edge Finishing", value: "Multi-Coat Matte Hand-Burnished Edge Ink" },
      { label: "Clasp Option", value: "Choice of Tang Buckle or Deployant Clasp in Steel/Platinum" },
      { label: "Lug Fitting", value: "Precision curved ends or straight fit to specific watch model" },
      { label: "Delivery Time", value: "2 to 3 weeks" },
    ],
    checkoutUrl: "https://checkout.stripe.com/c/pay/placeholder-strap-alligator-noir",
    featured: true,
  },
  {
    id: "strap-nubuck-taupe-artisan",
    name: "Bracelet Veau Velours Nubuck Taupe",
    category: "straps",
    categoryLabel: "Bespoke Leather Straps",
    editionBadge: "Made to Measure",
    shortDescription:
      "Supple Italian nubuck suede in earthy taupe, hand-accented with cream minimal tack-stitching and titanium tang buckle.",
    fullDescription:
      "A relaxed yet impeccably refined strap engineered for sports-luxury chronographs and vintage wristwatches. Sourced from Tuscany, the suede undergoes a proprietary velvety sanding process that resists minor surface marks. Finished with minimalist vintage tack-stitches near the lugs and buckle.",
    indicativePrice: "$490 USD · Custom Made to Measure",
    numericPrice: 490,
    image: "/images/products/straps/nubuck-taupe-artisan.jpg",
    materials: ["Tuscan Nubuck Calfskin", "Raw Titanium Buckle", "Zermatt Moisture-Barrier Lining"],
    specs: [
      { label: "Leather Origin", value: "Santa Croce sull'Arno, Tuscany (Italy)" },
      { label: "Texture & Color", value: "Fine-Velvet Nubuck in Earthy Taupe / Muted Olive" },
      { label: "Style", value: "Vintage Side-Stitch Accent (Minimalist 2-Point Tack)" },
      { label: "Hardware", value: "Grade 5 Satin-Finished Titanium Buckle" },
      { label: "Spring Bars", value: "Integrated Quick-Release Tool-Less Spring Bars Included" },
      { label: "Sizing", value: "Tailored to client wrist circumference in millimeters" },
      { label: "Delivery Time", value: "10 to 14 business days" },
    ],
    checkoutUrl: "https://checkout.stripe.com/c/pay/placeholder-strap-nubuck-taupe",
    featured: false,
  },
];
