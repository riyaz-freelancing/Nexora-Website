export const AGENCY_INFO = {
  name: "NexOra",
  fullName: "NexOra (Innaya Software)",
  brandName: "NexOra",
  tagline: "Web & Digital Services",
  slogan: "Click. Connect. Convert.",
  subtext: "India's premier digital engineering agency founded by Azhar, Riyaz & Habeeb Hussain. We build high-performance websites with React.js & Tailwind CSS, and scalable web applications with React, Node.js, Express.js & MySQL with 100% transparent pricing. Domain and hosting provided by client.",
  phone: "+91 90109 52596",
  phoneRaw: "919010952596",
  whatsappNumber: "919010952596",
  email: "hello@innayasoftware.com",
  address: "HITEC City & Madhapur, Hyderabad, Telangana, India",
  experienceYears: "7+",
  projectsCompleted: "150+",
  clientSatisfaction: "99.4%",
  googleRating: "4.9★",
};

export const FOUNDERS = [
  {
    id: "azhar",
    name: "Azhar",
    title: "Co-Founder & Client Relations",
    role: "Client Relations & Solution Advisor",
    phone: "+91 90109 52596",
    phoneRaw: "919010952596",
    whatsapp: "919010952596",
    tagline: "Direct Client Partnership & Requirement Scoping",
    desc: "Dedicated co-founder directly managing client relationships, contract terms, requirement scoping, and end-to-end satisfaction. Ensuring zero gap between client vision and execution.",
    skills: ["Client Relations", "Project Scoping", "Domain & Hosting Advisory", "Milestone Delivery"],
    gradient: "from-blue-600 via-sky-600 to-cyan-500",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25"
  },
  {
    id: "riyaz",
    name: "Riyaz",
    title: "Co-Founder & Lead Developer",
    role: "Lead Full-Stack Software Developer",
    phone: "+91 99481 35827",
    phoneRaw: "919948135827",
    whatsapp: "919948135827",
    tagline: "React.js, Node.js, Express.js & MySQL Engineering",
    desc: "Leading software engineering with React.js, Tailwind CSS for ultra-fast frontend, and high-concurrency Node.js, Express.js & MySQL architectures for enterprise applications.",
    skills: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL Architecture", "REST APIs"],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    badgeColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/25"
  },
  {
    id: "habeeb",
    name: "Habeeb Hussain",
    title: "Co-Founder & Digital Marketing",
    role: "Head of Digital Marketing & Growth",
    phone: "+91 95026 26677",
    phoneRaw: "919502626677",
    whatsapp: "919502626677",
    tagline: "SEO, Meta Ads, Google Ads & Viral Campaigns",
    desc: "Overseeing data-driven digital marketing campaigns, Google Page #1 SEO ranking in Hyderabad and pan-India, high-ROI Meta/Google ad architectures, and viral brand growth.",
    skills: ["Google SEO", "Meta & Instagram Ads", "Google Ads", "Conversion Rate Optimization", "Growth Strategy"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25"
  }
];

export const SERVICES = [
  // A) WEB & APP DEVELOPMENT
  {
    id: "static-website",
    category: "web",
    title: "Static Website",
    badge: "Most Affordable",
    billingType: "one-time",
    priceRange: "₹8,000 – ₹25,000",
    minPrice: 8000,
    maxPrice: 25000,
    delivery: "5 – 10 Days",
    techStack: ["React.js", "Tailwind CSS"],
    hostingPolicy: "Domain & Hosting provided by client",
    shortDesc: "Simple, ultra-fast website built with React.js & Tailwind CSS (5-8 pages) for small businesses, portfolios, and local services. Domain & hosting provided by client with free deployment.",
    whatYouGet: [
      "Custom React.js component architecture & Tailwind CSS responsive design",
      "5 to 8 custom responsive pages (Mobile, Tablet, PC)",
      "High-converting contact form & direct Click-to-WhatsApp integration",
      "Domain & hosting provided by client (Free deployment assistance)",
      "Basic on-page SEO setup & Google indexing",
      "Ultra-fast page speed performance (under 1.5s load)",
      "1 month free post-launch technical support"
    ],
    popularFor: "Lawyers, Doctors, CA firms, Local Retailers & Startups",
    icon: "Globe"
  },
  {
    id: "dynamic-website",
    category: "web",
    title: "Dynamic Website with CMS",
    badge: "Most Requested",
    billingType: "one-time",
    priceRange: "₹25,000 – ₹80,000",
    minPrice: 25000,
    maxPrice: 80000,
    delivery: "2 – 4 Weeks",
    techStack: ["React.js", "Tailwind CSS", "CMS / Admin"],
    hostingPolicy: "Domain & Hosting provided by client",
    shortDesc: "A website built with React.js & Tailwind CSS with an admin panel where you can update content yourself (blogs, services, galleries, enquiries). Domain & hosting provided by client.",
    whatYouGet: [
      "Modern React.js frontend styled with Tailwind CSS",
      "User-friendly Admin CMS Dashboard (No coding required to update content)",
      "Secure database integration (PostgreSQL / MongoDB / Firebase)",
      "Interactive blog engine & news publishing",
      "Domain & hosting provided by client (Free setup on Hostinger / AWS / VPS)",
      "Role-based authentication & lead management",
      "Advanced on-page SEO & Schema markup",
      "3 months complimentary maintenance & training"
    ],
    popularFor: "Real Estate, Clinics, B2B Companies, Educational Institutes",
    icon: "LayoutDashboard"
  },
  {
    id: "3d-website",
    category: "web",
    title: "3D Website & Interactive WebGL",
    badge: "Award-Winning Look",
    billingType: "one-time",
    priceRange: "₹60,000 – ₹2,00,000",
    minPrice: 60000,
    maxPrice: 200000,
    delivery: "3 – 6 Weeks",
    techStack: ["React.js", "Three.js", "Tailwind CSS"],
    hostingPolicy: "Domain & Hosting provided by client",
    shortDesc: "An immersive website with interactive 3D animations, product viewers, and scroll effects that make your brand stand out. Domain & hosting provided by client.",
    whatYouGet: [
      "Interactive Three.js & WebGL scene rendering with React.js",
      "Interactive 3D product view & 360-degree rotation",
      "Physics-based scroll-triggered animation timelines",
      "Optimized 60 FPS performance on mobile & desktop with Tailwind CSS",
      "Domain & hosting provided by client (Free deployment assistance)",
      "Full responsive fallback for low-power mobile devices"
    ],
    popularFor: "Luxury Brands, Architecture Studios, EV / Tech Startups, Gaming",
    icon: "Sparkles"
  },
  {
    id: "ecommerce-website",
    category: "web",
    title: "E-commerce Website",
    badge: "High Conversion",
    billingType: "one-time",
    priceRange: "₹40,000 – ₹1,50,000",
    minPrice: 40000,
    maxPrice: 150000,
    delivery: "3 – 5 Weeks",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL"],
    hostingPolicy: "Domain & Hosting provided by client",
    shortDesc: "A complete online store built with React.js frontend, Node.js + Express.js backend, and MySQL database with Razorpay, UPI, cards, and net banking. Domain & hosting provided by client.",
    whatYouGet: [
      "Custom product catalogue with filters, variants & search",
      "Frictionless cart & 1-page checkout in React.js & Tailwind CSS",
      "Robust Node.js & Express.js REST API with MySQL relational database",
      "Indian Payment Gateway setup (Razorpay, Cashfree, PayU, UPI QR)",
      "Order management, inventory & coupon codes",
      "Domain & hosting provided by client (Free server setup on AWS / Hostinger / DigitalOcean)",
      "Shiprocket / Delhivery courier API integration & automated order tracking"
    ],
    popularFor: "Fashion, Jewellery, Electronics, Grocery & D2C Brands",
    icon: "ShoppingBag"
  },
  {
    id: "custom-applications",
    category: "web",
    title: "Applications (Web & Mobile)",
    badge: "Enterprise Grade",
    billingType: "one-time",
    priceRange: "₹75,000 – ₹5,00,000+",
    minPrice: 75000,
    maxPrice: 500000,
    delivery: "6 – 16 Weeks",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL"],
    hostingPolicy: "Domain & Hosting provided by client",
    shortDesc: "Custom web and mobile apps engineered with React.js, Node.js, Express.js, and MySQL for business operations (booking, delivery, CRM, learning, etc.). Domain & hosting provided by client.",
    whatYouGet: [
      "High-performance React.js frontend styled with Tailwind CSS",
      "Scalable Node.js & Express.js REST API architecture",
      "Relational MySQL database design with secure indexing",
      "Role-based authentication & admin ERP / CRM control center",
      "Domain & cloud hosting provided by client (Free AWS / VPS deployment)",
      "Payment gateway, SMS OTP & automated notifications",
      "6 months warranty & SLA bug fixing guarantee"
    ],
    popularFor: "On-demand delivery, Appointment Booking, CRM, SaaS, FinTech",
    icon: "Smartphone"
  },

  // B) DIGITAL MARKETING
  {
    id: "seo-marketing",
    category: "marketing",
    title: "Search Engine Optimization (SEO)",
    badge: "Long-term ROI",
    billingType: "monthly",
    priceRange: "₹10,000 – ₹40,000 / month",
    minPrice: 10000,
    maxPrice: 40000,
    delivery: "Monthly Retainer",
    techStack: ["Google Search Console", "GA4", "Local SEO"],
    hostingPolicy: "Requires client website access",
    shortDesc: "Get found on Google when customers search for your services. Deep keyword research, on-page SEO, technical SEO, backlinks, and Google Business Profile.",
    whatYouGet: [
      "Keyword research & competitor gap analysis",
      "On-page optimization (Meta tags, H1-H6, internal links, content)",
      "Technical SEO audit (Core Web Vitals, Schema, sitemap, indexing)",
      "High DA / PA manual Indian backlink creation",
      "Google Business Profile (GMB) Local SEO optimization & maps ranking",
      "Monthly transparent rank tracker & traffic growth report"
    ],
    popularFor: "Service Businesses, Manufacturers, Doctors, Real Estate, Local Stores",
    icon: "TrendingUp"
  },
  {
    id: "social-media",
    category: "marketing",
    title: "Social Media Management",
    badge: "Brand Authority",
    billingType: "monthly",
    priceRange: "₹8,000 – ₹30,000 / month",
    minPrice: 8000,
    maxPrice: 30000,
    delivery: "Monthly Retainer",
    techStack: ["Canva Pro", "Premiere", "Meta Business Suite"],
    hostingPolicy: "N/A",
    shortDesc: "We run your Instagram, Facebook, and LinkedIn so you stay active and grow followers. Content calendar, posts/reels, captions & hashtags.",
    whatYouGet: [
      "Monthly curated content calendar & campaign strategy",
      "12 to 20 custom graphics, carousels & trending reels",
      "Persuasive copywriting, hook-based captions & targeted hashtags",
      "Community engagement (comment replies, DM triage)",
      "Story highlights, bio optimization & feed aesthetic curation",
      "End-of-month analytics & ROI report"
    ],
    popularFor: "Restaurants, Fashion, Beauty, Lifestyle, Gyms, Corporate Brands",
    icon: "Share2"
  },
  {
    id: "meta-ads",
    category: "marketing",
    title: "Meta Ads (Facebook & Instagram)",
    badge: "Fastest Leads",
    billingType: "monthly",
    priceRange: "₹8,000 – ₹25,000 / month fee",
    minPrice: 8000,
    maxPrice: 25000,
    delivery: "Monthly Retainer",
    techStack: ["Meta Ads Manager", "Pixel API", "Custom Creatives"],
    hostingPolicy: "Ad spend paid directly to Meta by client",
    shortDesc: "Targeted ads that bring leads and sales. Ad budget is paid separately directly to Meta via your card or UPI.",
    whatYouGet: [
      "Audience research & lookalike persona setup",
      "High-converting ad creatives & copywriting variations",
      "Meta Pixel setup, Conversion API & domain verification",
      "A/B split testing (Hooks, CTAs, Creatives, Landing pages)",
      "Daily budget optimization & weekly performance reviews"
    ],
    popularFor: "D2C Stores, Real Estate, Coaching, Clinics, B2B Lead Gen",
    icon: "Target"
  },
  {
    id: "google-ads",
    category: "marketing",
    title: "Google Ads (Search & Performance Max)",
    badge: "High Intent Leads",
    billingType: "monthly",
    priceRange: "₹10,000 – ₹30,000 / month fee",
    minPrice: 10000,
    maxPrice: 30000,
    delivery: "Monthly Retainer",
    techStack: ["Google Ads", "GTM", "Conversion Tracking"],
    hostingPolicy: "Ad spend paid directly to Google by client",
    shortDesc: "Reach customers actively searching for your product. Ad budget is paid separately directly to Google via your card or UPI.",
    whatYouGet: [
      "Keyword research & negative keyword lists to prevent wasted ad budget",
      "Search, display & YouTube campaign setups",
      "Google Tag Manager & GA4 conversion tracking setup",
      "Quality Score optimization to lower your Cost Per Click (CPC)",
      "Bi-weekly performance calls & transparent dashboard"
    ],
    popularFor: "B2B Exporters, Lawyers, Emergency Services, Hospitals, E-Commerce",
    icon: "Search"
  },
  {
    id: "logo-design",
    category: "marketing",
    title: "Brand Identity & Logo Design",
    badge: "One-Time Asset",
    billingType: "one-time",
    priceRange: "₹2,000 – ₹15,000",
    minPrice: 2000,
    maxPrice: 15000,
    delivery: "3 – 7 Days",
    techStack: ["Illustrator", "Figma", "Vector SVG"],
    hostingPolicy: "N/A",
    shortDesc: "A unique, memorable logo for your brand. Includes 3-5 concepts, unlimited minor revisions, and complete vector files.",
    whatYouGet: [
      "3 to 5 unique concept sketches crafted by senior graphic designers",
      "Unlimited minor revisions until complete satisfaction",
      "PNG, SVG, PDF, AI vector source files",
      "Basic brand color palette & font guide",
      "Social media profile display picture & banner sizes included"
    ],
    popularFor: "New businesses, Rebranding ventures, Startups, Product Lines",
    icon: "Palette"
  },
  {
    id: "ai-videos",
    category: "marketing",
    title: "AI Promo Videos & Reels",
    badge: "Trending Format",
    billingType: "one-time",
    priceRange: "₹1,500 – ₹10,000 / video",
    minPrice: 1500,
    maxPrice: 10000,
    delivery: "2 – 5 Days",
    techStack: ["AI Voiceover", "Motion Graphics", "HD 1080p"],
    hostingPolicy: "N/A",
    shortDesc: "Eye-catching AI-generated promo videos, reels, and product ads, made quickly and affordably with script, voiceover, and captions.",
    whatYouGet: [
      "Script, AI visuals & studio voiceover (Multiple Indian & Global accents)",
      "Background music & rhythmic captions",
      "HD 1080p export, 1 revision included",
      "Delivery: 2–5 days"
    ],
    popularFor: "Instagram Reels, YouTube Shorts, Product Teasers, Event Promos",
    icon: "Video"
  }
];

export const COMBO_PACKAGES = [
  {
    id: "startup-pack",
    name: "Startup Launch Pack",
    tagline: "Static Website + Logo + Social Media (1 month).",
    price: "₹15,999",
    originalPrice: "₹18,000",
    savings: "Save ₹2,001",
    isPopular: false,
    delivery: "7 – 10 Days",
    features: [
      "Static Website built with React.js & Tailwind CSS (5 Pages)",
      "Domain & hosting provided by client (Free deployment assistance)",
      "Professional Logo Design (3 Concepts + Vector Files)",
      "Google Business Profile Setup & Verification Guidance",
      "1 Month Social Media Kickstart (8 Custom Posts)",
      "Direct Click-to-WhatsApp Integration"
    ]
  },
  {
    id: "growth-pack",
    name: "Business Growth Pack",
    tagline: "Dynamic Website + SEO + Meta Ads setup.",
    price: "₹39,999",
    originalPrice: "₹48,000",
    savings: "Save ₹8,001",
    isPopular: true,
    badge: "Most Popular",
    delivery: "2 – 3 Weeks",
    features: [
      "Dynamic Website with React.js, Tailwind CSS & Admin CMS",
      "Domain & hosting provided by client (Free AWS / Hostinger setup)",
      "Complete SEO Setup + 1st Month Keyword Optimization",
      "Meta Ads Setup (Facebook & Instagram lead campaign)",
      "High-Converting Landing Page Design",
      "Lead Capture WhatsApp & Email Automation"
    ]
  },
  {
    id: "omnichannel-pack",
    name: "Complete Brand & E-Com Pack",
    tagline: "E-commerce Website + Logo + Social Media + Google Ads.",
    price: "₹59,999",
    originalPrice: "₹75,000",
    savings: "Save ₹15,001",
    isPopular: false,
    delivery: "3 – 5 Weeks",
    features: [
      "Complete E-Commerce Store with React, Node.js, Express & MySQL",
      "Razorpay / UPI Payment Gateway & Cart Management",
      "Domain & hosting provided by client (Free Cloud Server deployment)",
      "Brand Identity Kit (Logo, Typography, Social Assets)",
      "Google Shopping / Search Ads Campaign Architecture",
      "2 Months Priority Technical Maintenance"
    ]
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Discuss & Understand",
    subtitle: "We listen to your business goals",
    desc: "We jump on a quick Google Meet or phone call to understand your target audience, business requirements, and tech preferences. No confusing jargon.",
    icon: "MessageSquareHeart"
  },
  {
    step: "02",
    title: "Plan & Transparent Quote",
    subtitle: "Fixed pricing with clear milestones",
    desc: "We send you a transparent, itemized proposal in Indian Rupees (₹) with defined timelines and deliverables. What you see is exactly what you pay.",
    icon: "FileCheck2"
  },
  {
    step: "03",
    title: "Build, Design & Test",
    subtitle: "Real-time updates as we build",
    desc: "We engineer with React.js & Tailwind CSS for websites, or React + Node.js + Express.js + MySQL for applications. You get live staging links to preview and review.",
    icon: "Cpu"
  },
  {
    step: "04",
    title: "Launch & Growth Support",
    subtitle: "We stand with you after go-live",
    desc: "We deploy everything to your client-provided domain & hosting account, configure SSL, test payments, and provide training so you feel 100% in control.",
    icon: "Rocket"
  }
];

export const FAQS = [
  {
    q: "What tech stack do you use for websites and web applications?",
    a: "For websites, we use React.js and Tailwind CSS for blazingly fast load speeds, modular components, and fluid responsive design across all devices. For custom web applications, SaaS portals, and full-stack platforms, we build using React.js (Frontend), Node.js & Express.js (Backend REST APIs), and MySQL (Relational Database) for secure, scalable data architecture."
  },
  {
    q: "Who provides the domain name and hosting?",
    a: "Domain name and hosting are provided by the client. This guarantees that you maintain 100% legal ownership, billing control, and credentials for your domain (via GoDaddy, Namecheap, etc.) and hosting (Hostinger, AWS, DigitalOcean, cPanel, Vercel). Our engineering team handles 100% of the deployment, DNS setup, and SSL installation for free!"
  },
  {
    q: "What are your payment terms and milestones?",
    a: "We work on structured, trust-based milestones: 40% advance upon project signoff, 40% upon staging demo approval, and the final 20% on final client-hosting deployment. Monthly retainers (SEO, Ads, Social Media) are billed at the start of each monthly cycle via UPI, NEFT/IMPS, or Cards."
  },
  {
    q: "How long does it take to deliver my website or project?",
    a: "Static React.js websites take 5 to 10 days. Dynamic websites take 2 to 4 weeks. E-commerce platforms take 3 to 5 weeks, and comprehensive full-stack React-Node-MySQL applications take 6 to 16 weeks depending on custom feature requirements."
  },
  {
    q: "How many revisions do we get?",
    a: "We provide unlimited minor revisions during the design and staging review phase. We make sure you are 100% satisfied with the aesthetics, fonts, colors, and layout before taking the website live."
  },
  {
    q: "Is the advertising budget included in the digital marketing management fee?",
    a: "No. The monthly management fee (e.g. ₹8,000 – ₹25,000) covers our team's creative strategy, ad graphic design, copywriting, targeting setup, A/B testing, and weekly optimization. Your advertising spend is paid directly by you to Meta or Google via your own card or UPI."
  },
  {
    q: "Do you issue official GST tax invoices?",
    a: "Yes! We provide official GST tax invoices. If your business has a registered GSTIN, you can claim 18% Input Tax Credit (ITC) on all development and marketing expenses."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Rajesh Kulkarni",
    role: "Founder, SmileCraft Dental Clinic",
    location: "Pune & Hyderabad",
    text: "Innaya Software built our React.js clinic appointment website in 8 days. Our domain & Hostinger setup was handled seamlessly by their team. We get regular patient inquiries straight on WhatsApp!",
    rating: 5,
    tag: "React.js + Tailwind CSS"
  },
  {
    name: "Pooja Singhania",
    role: "Creative Director, Vanya Sarees",
    location: "Jaipur & Hyderabad",
    text: "Our online store built with React, Node.js, Express & MySQL is extremely fast. Razorpay UPI checkout works flawlessly, and deployment on our AWS server was completely hassle-free.",
    rating: 5,
    tag: "React + Node + Express + MySQL"
  },
  {
    name: "Vikramjit Singh",
    role: "Managing Director, Apex Logistics B2B",
    location: "Delhi NCR & Hyderabad",
    text: "Clear pricing without tech jargon. They built our dispatch tracking portal in React and Node with MySQL database on our cloud hosting exactly within the quoted budget.",
    rating: 5,
    tag: "Full-Stack Web Application"
  }
];
