export const SITE_NAME = 'Campway Customs';
export const SITE_TAGLINE = 'Custom Campervan & Ready-Built Vans';
export const SITE_DESCRIPTION = 'Campway Customs delivers premium yet affordable custom campervan fit-outs across Australia. From off-grid power systems to smart storage solutions, we make van life stylish and accessible.';
export const SITE_LOCATION = 'Melbourne, Australia';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/vans', label: 'Our Vans' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SERVICES = [
  {
    id: 'custom-built',
    name: 'Custom Built',
    description: 'We specialise in custom campervan conversions based on your lifestyle, travel needs, and budget.',
    icon: 'wrench',
  },
  {
    id: 'singles-fitout',
    name: 'Singles Fit-Out',
    description: 'Already own a van? We can help you turn it into a fully equipped camper.',
    icon: 'settings',
  },
  {
    id: 'ready-to-go',
    name: 'Ready To Go Vans',
    description: 'Browse our selection of fully built campervans available for immediate purchase.',
    icon: 'truck',
  },
  {
    id: 'diy-kits',
    name: 'DIY Kits',
    description: 'Want to save money and do it yourself? We offer pre-designed van conversion kits.',
    icon: 'package',
  },
] as const;

export const AVAILABLE_VANS = [
  {
    id: 'van-1',
    name: 'Toyota HiAce Commuter — Full Conversion',
    status: 'available' as const,
    description: 'Fully converted Toyota HiAce Commuter with custom kitchen, sleeping platform, LED lighting, and off-grid power system. Ready to hit the road.',
    features: ['Custom kitchen with sink', 'Queen-size sleeping platform', '200Ah lithium battery', 'Roof-mount solar panels', 'LED mood lighting', 'Under-bed storage'],
    image: '/campway/van1.jpg',
    gallery: ['/campway/van1.jpg', '/campway/van2.jpg', '/campway/van3.jpg'],
    price: 'Contact for Price',
  },
  {
    id: 'van-2',
    name: 'Toyota HiAce Commuter — Weekender Build',
    status: 'available' as const,
    description: 'Clean weekender setup with timber cabinetry, compact kitchen, and convertible bed. Perfect for weekend escapes.',
    features: ['Timber cabinetry', 'Convertible bed/lounge', '12V fridge slide', 'USB charging points', 'Water tank & pump', 'Insulated & lined'],
    image: '/campway/van2.jpg',
    gallery: ['/campway/van2.jpg', '/campway/van4.jpg', '/campway/van5.jpg'],
    price: 'Contact for Price',
  },
  {
    id: 'van-3',
    name: 'Toyota HiAce Commuter — Adventure Camper',
    status: 'sold' as const,
    description: 'Full adventure camper build with marble-finish benchtops, warm timber throughout, and premium electrical system.',
    features: ['Marble-finish benchtops', 'Full timber interior', '400Ah battery system', 'Hot water system', 'Ventilation fan', 'External shower'],
    image: '/campway/van3.jpg',
    gallery: ['/campway/van3.jpg', '/campway/van6.jpg', '/campway/van7.jpg'],
    price: 'SOLD',
  },
  {
    id: 'van-4',
    name: 'Toyota HiAce Commuter (High Roof) — Luxury Tourer',
    status: 'sold' as const,
    description: 'High-roof Commuter conversion with standing room, full kitchen, and luxury finishes throughout.',
    features: ['High roof — full standing height', 'Premium kitchen build', 'Couch/bed conversion', 'Overhead storage', 'Blackout curtains', 'Maxxfan ventilation'],
    image: '/campway/van4.jpg',
    gallery: ['/campway/van4.jpg', '/campway/van8.jpg', '/campway/van9.jpg'],
    price: 'SOLD',
  },
  {
    id: 'van-5',
    name: 'Toyota HiAce — Compact Camper',
    status: 'in-build' as const,
    description: 'Currently in build. Compact yet functional setup with zero wasted space. Smart storage solutions throughout.',
    features: ['Compact kitchen unit', 'Fold-down bed system', 'Smart storage everywhere', '100Ah lithium battery', 'LED strip lighting', 'Custom timber finish'],
    image: '/campway/van5.jpg',
    gallery: ['/campway/van5.jpg', '/campway/van6.jpg'],
    price: 'Coming Soon',
  },
  {
    id: 'van-6',
    name: 'Toyota HiAce — Tradesperson Special',
    status: 'available' as const,
    description: 'Purpose-built for tradies who want to travel. Work-ready by day, camp-ready by night.',
    features: ['Modular shelving system', 'Fold-out workbench', 'Secure tool storage', 'Sleeping platform', '12V auxiliary battery', 'LED work lights'],
    image: '/campway/van6.jpg',
    gallery: ['/campway/van6.jpg', '/campway/van7.jpg', '/campway/van8.jpg'],
    price: 'Contact for Price',
  },
] as const;

export const GALLERY_ITEMS = [
  { id: 'g1', title: 'Custom Kitchen Build', category: 'Interior', image: '/campway/van1.jpg', description: 'Full kitchen fitout with timber cabinetry, sink, and integrated appliances.' },
  { id: 'g2', title: 'Sleeping Platform', category: 'Interior', image: '/campway/van2.jpg', description: 'Convertible bed system with storage underneath for maximum space utilisation.' },
  { id: 'g3', title: 'Marble Finish Interior', category: 'Interior', image: '/campway/van3.jpg', description: 'Premium marble-finish benchtops with warm timber cabinetry throughout.' },
  { id: 'g4', title: 'Commuter Exterior', category: 'Exterior', image: '/campway/van4.jpg', description: 'Toyota HiAce Commuter with high roof conversion, ready for adventure.' },
  { id: 'g5', title: 'Compact Kitchen Setup', category: 'Interior', image: '/campway/van5.jpg', description: 'Compact yet fully functional kitchen with fridge slide and sink.' },
  { id: 'g6', title: 'Full Van Interior', category: 'Interior', image: '/campway/van6.jpg', description: 'Complete interior conversion with couch, kitchen, and overhead storage.' },
  { id: 'g7', title: 'Rear View — Ready to Roll', category: 'Exterior', image: '/campway/van7.jpg', description: 'Completed build from the rear — every inch used efficiently.' },
  { id: 'g8', title: 'Workshop Progress', category: 'Process', image: '/campway/van8.jpg', description: 'In-progress build showing our attention to detail and quality craftsmanship.' },
  { id: 'g9', title: 'Premium Finish Details', category: 'Interior', image: '/campway/van9.jpg', description: 'Close-up of premium finishes — quality materials and expert carpentry.' },
] as const;

export const FITOUT_PACKAGES = [
  {
    name: 'Weekender',
    description: 'Perfect for weekend getaways. Basic sleeping and storage setup.',
    features: ['Fold-out bed platform', 'Under-bed storage', 'LED lighting', '12V auxiliary battery', 'USB charging ports'],
    startingPrice: 'From $8,500',
  },
  {
    name: 'Adventure Camper',
    description: 'Full camping setup for extended trips and touring.',
    features: ['Full kitchen with sink', 'Fridge/freezer slide', 'Sleeping platform', 'Water system (40L)', '200Ah battery system', 'Solar panel prep', 'Interior lighting'],
    startingPrice: 'From $18,000',
  },
  {
    name: 'Full Conversion',
    description: 'The ultimate build. Complete van-to-camper transformation.',
    features: ['Complete kitchen build', 'Hot water system', 'Shower/toilet option', 'Full insulation & lining', '400Ah lithium battery', 'Roof-mount solar', 'Custom cabinetry'],
    startingPrice: 'From $35,000',
  },
  {
    name: 'Custom Build',
    description: 'Your vision, our expertise. Fully bespoke to your needs.',
    features: ['Personalised design consultation', 'CAD layout planning', 'Premium material selection', 'Tailored to your lifestyle', 'Unlimited options'],
    startingPrice: 'Get a Quote',
  },
] as const;
