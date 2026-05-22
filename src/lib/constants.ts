// ─── Navigation ───────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
]

// ─── Hero Stats ───────────────────────────────────────────────────
export const HERO_STATS = [
  { num: '10x', label: 'faster billing' },
  { num: '₹0', label: 'billing errors' },
  { num: '5 min', label: 'to set up' },
]

// ─── Problem Cards ────────────────────────────────────────────────
export const PROBLEMS = [
  {
    icon: 'PenLine',
    title: 'Slow handwritten billing',
    desc: 'Writing every bill by hand takes minutes per customer, creating long queues and unhappy shoppers.',
  },
  {
    icon: 'XCircle',
    title: 'Calculation errors',
    desc: 'Manual math leads to billing mistakes — either you lose money or the customer distrusts you.',
  },
  {
    icon: 'BookOpen',
    title: 'Scattered credit records',
    desc: 'Multiple notebooks for udhar (credit), no easy way to see who owes what, when, or how much.',
  },
  {
    icon: 'TrendingDown',
    title: 'No business insights',
    desc: "You don't know your best-selling products, peak hours, or monthly profit trends.",
  },
  {
    icon: 'FolderX',
    title: 'No digital records',
    desc: "Paper bills get lost, damaged, or misread. No backup means any dispute is your word vs theirs.",
  },
  {
    icon: 'Clock',
    title: 'Month-end headaches',
    desc: 'Hours spent tallying totals, reconciling accounts, and preparing for tax at the end of every month.',
  },
]

// ─── How It Works Steps ──────────────────────────────────────────
export const STEPS = [
  {
    num: 'STEP 01',
    icon: 'Smartphone',
    title: 'Download & login',
    desc: 'Install the Kirana app on any Android or iOS phone. Log in with your mobile number — no email or documents needed.',
  },
  {
    num: 'STEP 02',
    icon: 'Store',
    title: 'Set up your store',
    desc: 'Enter your store name and location. Add products manually or let Kirana auto-detect them from barcodes as you scan.',
  },
  {
    num: 'STEP 03',
    icon: 'ScanLine',
    title: 'Start scanning & billing',
    desc: 'Scan barcodes with the camera. Items are auto-added to the bill. Accept payment and share the bill instantly.',
  },
  {
    num: 'STEP 04',
    icon: 'BarChart2',
    title: 'Watch insights grow',
    desc: 'As you bill, Kirana builds your analytics. Check daily summaries, monthly reports, and AI tips.',
  },
]

// ─── Pricing Plans ────────────────────────────────────────────────
export const PLANS = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month, forever',
    featured: false,
    features: [
      { text: 'Up to 50 bills/month', included: true },
      { text: 'Barcode scanning', included: true },
      { text: 'Basic analytics', included: true },
      { text: '10 credit accounts', included: true },
      { text: 'Excel export', included: false },
      { text: 'WhatsApp reminders', included: false },
    ],
    cta: 'Get Started',
    ctaStyle: 'outline' as const,
  },
  {
    name: 'Pro',
    price: '₹299',
    period: '/month, billed monthly',
    featured: true,
    badge: 'Most Popular',
    features: [
      { text: 'Unlimited bills', included: true },
      { text: 'Barcode scanning', included: true },
      { text: 'Full AI analytics', included: true },
      { text: 'Unlimited credit accounts', included: true },
      { text: 'Excel + PDF export', included: true },
      { text: 'WhatsApp reminders', included: true },
    ],
    cta: 'Start 30-day Free Trial',
    ctaStyle: 'primary' as const,
  },
  {
    name: 'Business',
    price: '₹699',
    period: '/month, per store',
    featured: false,
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Multi-store dashboard', included: true },
      { text: 'Staff accounts', included: true },
      { text: 'Inventory management', included: true },
      { text: 'GST filing reports', included: true },
      { text: 'Priority support', included: true },
    ],
    cta: 'Contact Sales',
    ctaStyle: 'dark' as const,
  },
]

// ─── Testimonials ─────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    initials: 'RS',
    name: 'Rajesh Sharma',
    role: 'Sharma General Store, Delhi',
    quote:
      'Pehle bill likhne mein 5 minute lagte the. Ab 30 second. Customers bhi khush hain, main bhi khush hoon.',
    rating: 5,
  },
  {
    initials: 'MK',
    name: 'Manoj Kumar',
    role: 'Manoj Kirana, Lucknow',
    quote:
      'Udhar notebook ka jhanjhat khatam. Ab WhatsApp pe reminder bhejta hoon, paise time pe milte hain.',
    rating: 5,
  },
  {
    initials: 'SG',
    name: 'Sunita Gupta',
    role: 'Gupta Provisions, Jaipur',
    quote:
      'Monthly report se pata chala ki biscuits sabse zyada bikti hain. Maine stock badha diya — profit 18% badh gaya.',
    rating: 5,
  },
]

// ─── Phone Mockup Bill Items ──────────────────────────────────────
export const MOCK_BILL_ITEMS = [
  { name: 'Aashirvaad Aata 5kg', qty: '1 × ₹285', price: '₹285' },
  { name: 'Tata Salt 1kg', qty: '2 × ₹22', price: '₹44' },
  { name: 'Surf Excel 1kg', qty: '1 × ₹349', price: '₹349' },
  { name: 'Amul Butter 500g', qty: '1 × ₹169.50', price: '₹169.50' },
]

// ─── Udhar (Credit) Customers ─────────────────────────────────────
export const MOCK_CUSTOMERS = [
  { initials: 'RK', name: 'Rakesh Kumar', lastSeen: '3 days ago', amount: '-₹1,240', type: 'due' },
  { initials: 'PD', name: 'Priya Devi', lastSeen: 'today', amount: 'Settled ✓', type: 'paid' },
  { initials: 'MS', name: 'Mohan Singh', lastSeen: '12 days ago', amount: '-₹680', type: 'due' },
]
