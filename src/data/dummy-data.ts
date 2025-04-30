import Image from 'next/image';
import landing from '../../public/images/landing.png'
import about from '../../public/images/about.png'
import login from '../../public/images/login.png'
import pricing from '../../public/images/pricing.png'
import notfound from '../../public/images/landing.png'
import flightLanding from '../../public/images/icons/vaadin_flight-landing.png'
import moneyBag from '../../public/images/icons/healthicons_money-bag.png'
import aboutUs from '../../public/images/icons/mdi_family.png'
import lock from '../../public/images/icons/solar_login-bold-duotone.png'
import register from '../../public/images/icons/mdi_register.png'
import error from '../../public/images/icons/ooui_error.png'
import search from '../../public/images/icons/streamline_magnifying-glass-circle-solid.png'
import gift from '../../public/images/icons/mage_gift-fill.png'
import rocker from '../../public/images/icons/mingcute_rocket-fill.png'
import image1 from '../../public/images/images1.png'
import image2 from '../../public/images/images2.png'
import image3 from '../../public/images/images3.png'
import image4 from '../../public/images/images4.png'
import image5 from '../../public/images/images5.png'
import image6 from '../../public/images/images6.png'
import image7 from '../../public/images/images7.png'
import image8 from '../../public/images/images8.png'
import image9 from '../../public/images/images9.png'
import image10 from '../../public/images/images10.png'
import image11 from '../../public/images/images11.png'
import image12 from '../../public/images/images12.png'
import image13 from '../../public/images/images13.png'

export interface InspirationCard { 
  id: number;
  title: string;
  description: string;
  image: string;
  views: number;
  icon: string;
  category: 'landing' | 'pricing' | 'about' | 'login' | 'signup' | 'not-found';
}

export const inspirationCategories = [
  {
    id: 'landing',
    title: 'SaaS Landing Pages',
    description: '20+ designs to inspire your SaaS launch',
    icon: flightLanding,
    image: landing
  },
  {
    id: 'pricing',
    title: 'SaaS Pricing Pages',
    description: '50+ designs for effective monetization strategies.',
    icon: moneyBag,
    image: pricing
  },
  {
    id: 'about',
    title: 'SaaS About Us Pages',
    description: '15+ clean layouts to help you tell your brand story',
    icon: aboutUs,
    image: about
  },
  {
    id: 'login',
    title: 'Login Pages',
    description: '20+ modern login screens designed for smooth access',
    icon: lock,
    image: login
  },
  {
    id: 'signup',
    title: 'Signup Pages',
    description: '18+ high-converting designs to grow your user base',
    icon: register,
    image: login
  },
  {
    id: 'not-found',
    title: 'Not Found Pages',
    description: '12+ clever 404 pages that actually keep users around',
    icon: error,
    image: notfound
  }
];

export interface DesignInspiration {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  stack: string;
  niche: string;
  style: string;
  colorScheme: string[];
  metaTitle?: string;
  metaDescription?: string;
  pageViews: number;
  image: any;
}

export const designInspirations: DesignInspiration[] = [
  {
    id: 'ecomflow',
    image: image1,
    title: 'The future of supply-chain has arrived.',
    description: 'Ecomflow: Streamline your D2C supply chain with our global fulfillment & premium packaging from China to the world.',
    imageUrl: '/images/ecomflow.jpg',
    category: 'landing',
    stack: 'Framer',
    niche: 'Ecommerce',
    style: 'Corporate',
    colorScheme: ['green', 'white', 'black'],
    pageViews: 2340
  },
  {
    id: 'customer-feedback',
    image: image2,
    title: 'The fastest way to understand your customer',
    description: 'All-in-one customer feedback platform that helps you get insights faster.',
    imageUrl: '/images/customer-feedback.jpg',
    category: 'landing',
    stack: 'Webflow',
    niche: 'Analytics',
    style: 'Minimal',
    colorScheme: ['purple', 'white'],
    pageViews: 1890
  },
  {
    id: 'returns-platform',
    image: image3,
    title: 'All-in-One returns platform for growing brands',
    description: 'Streamline your returns process and improve customer satisfaction.',
    imageUrl: '/images/returns-platform.jpg',
    category: 'landing',
    stack: 'Webflow',
    niche: 'Ecommerce',
    style: 'Dark Mode',
    colorScheme: ['blue', 'black'],
    pageViews: 1670
  },
  {
    id: 'productivity-app',
    image: image4,
    title: 'Built just what you need in a tool',
    description: 'AI-supports people who fit the knowledge — to do things nice.',
    imageUrl: '/images/productivity-app.jpg',
    category: 'landing',
    stack: 'Webflow',
    niche: 'Productivity',
    style: 'Minimal',
    colorScheme: ['black', 'white'],
    pageViews: 2105
  },
  {
    id: 'journey',
    image: image5,
    title: 'Rediscover the joy of the journey',
    description: 'A travel planning app that makes exploration easy and enjoyable.',
    imageUrl: '/images/journey.jpg',
    category: 'landing',
    stack: 'Webflow',
    niche: 'Travel',
    style: 'Minimal',
    colorScheme: ['blue', 'white'],
    pageViews: 1950
  },
  {
    id: 'ai-financial',
    image: image6,
    title: 'Generative AI for Financial Firms',
    description: 'Transform your financial services with cutting-edge AI technology.',
    imageUrl: '/images/ai-financial.jpg',
    category: 'landing',
    stack: 'Next.js',
    niche: 'AI',
    style: 'Corporate',
    colorScheme: ['black', 'teal'],
    pageViews: 2415
  },
  {
    id: 'data-demand',
    image: image7,
    title: 'Data on demand',
    description: 'Access the data you need, when you need it, with our intuitive platform.',
    imageUrl: '/images/data-demand.jpg',
    category: 'landing',
    stack: 'Webflow',
    niche: 'Analytics',
    style: 'Minimal',
    colorScheme: ['blue', 'white'],
    pageViews: 1845
  },
  {
    id: 'family-travel',
    image: image8,
    title: "The only family travel planner app you'll need",
    description: 'Plan perfect family vacations with ease using our comprehensive app.',
    imageUrl: '/images/family-travel.jpg',
    category: 'landing',
    stack: 'Webflow',
    niche: 'Travel',
    style: 'Playful',
    colorScheme: ['blue', 'purple'],
    pageViews: 1620
  },
  {
    id: 'cloud-security',
    image: image9,
    title: 'Secure Everything to build and Run in the Cloud',
    description: 'Enterprise-grade security solutions for your cloud infrastructure.',
    imageUrl: '/images/cloud-security.jpg',
    category: 'landing',
    stack: 'Next.js',
    niche: 'Cloud',
    style: 'Corporate',
    colorScheme: ['blue', 'white'],
    pageViews: 2180
  },
  {
    id: 'get-paid',
    image: image10,
    title: 'Get paid same day',
    description: 'Instant payment solutions for freelancers and small businesses.',
    imageUrl: '/images/get-paid.jpg',
    category: 'landing',
    stack: 'Webflow',
    niche: 'Finance',
    style: 'Minimal',
    colorScheme: ['blue', 'white'],
    pageViews: 1795
  },
  {
    id: 'pay-button',
    image: image11,
    title: "INDEPENDENT'S PAY BUTTON",
    description: 'Build invoice your professional services for your clients, handling billing & payment collection.',
    imageUrl: '/images/pay-button.jpg',
    category: 'landing',
    stack: 'Webflow',
    niche: 'Finance',
    style: 'Bold',
    colorScheme: ['yellow', 'black'],
    pageViews: 2250
  },
  {
    id: 'infrastructure',
    image: image12,
    title: "The Infdev'n infrastructure for modern products",
    description: 'Powerful infrastructure solutions designed for modern digital products.',
    imageUrl: '/images/infrastructure.jpg',
    category: 'landing',
    stack: 'Next.js',
    niche: 'Cloud',
    style: 'Dark Mode',
    colorScheme: ['blue', 'purple', 'black'],
    pageViews: 2380
  },
  {
    id: 'engineering-portal',
    image: image13,
    title: 'Your Portal to Engineering Excellence',
    description: 'A comprehensive platform for engineering teams to collaborate and innovate.',
    imageUrl: '/images/engineering-portal.jpg',
    category: 'landing',
    stack: 'Next.js',
    niche: 'Developer Tools',
    style: 'Dark Mode',
    colorScheme: ['purple', 'black'],
    pageViews: 2510
  }
];

export const features = [
  {
    id: 'curated',
    title: 'Expertly Curated',
    description: 'Our team of SaaS specialists handpicks the best resources to ensure quality and relevance.',
    icon: search
  },
  {
    id: 'free',
    title: 'Free to Start',
    description: 'Begin with our free resources and scale up with premium offerings as needed.',
    icon: gift
  },
  {
    id: 'built',
    title: 'Built for SaaS',
    description: 'Every resource is designed with SaaS-specific needs in mind, from scalability to security.',
    icon: rocker
  }
];

export const filterCategories = [
  {
    name: "Categories",
    options: [
      { id: "landing", label: "Landing page", count: 132 },
      { id: "pricing", label: "Pricing Plan page", count: 178 },
      { id: "about", label: "About Us Page", count: 124 },
      { id: "login", label: "Login Page", count: 153 },
      { id: "signup", label: "Signup Page", count: 134 },
      { id: "not-found", label: "Not Found Page", count: 88 }
    ]
  },
  {
    name: "Stack",
    options: [
      { id: "webflow", label: "Webflow", count: 114 },
      { id: "nextjs", label: "Next.js", count: 76 },
      { id: "framer", label: "Framer", count: 51 },
      { id: "wordpress", label: "WordPress", count: 32 },
      { id: "mern", label: "MERN", count: 24 },
      { id: "other-stack", label: "Other", count: 14 }
    ]
  },
  {
    name: "Style",
    options: [
      { id: "dark-mode", label: "Dark Mode", count: 178 },
      { id: "minimal", label: "Minimal", count: 76 },
      { id: "colorful", label: "Colorful Animation", count: 58 },
      { id: "gradient", label: "Gradient", count: 38 },
      { id: "corporate", label: "Corporate", count: 32 },
      { id: "technical", label: "Technical", count: 24 },
      { id: "other-style", label: "Other", count: 14 }
    ]
  },
  {
    name: "Color",
    options: [
      { id: "black", label: "Black", color: "#000000" },
      { id: "blue", label: "Blue", color: "#0066FF" },
      { id: "green", label: "Green", color: "#00CC66" },
      { id: "yellow", label: "Yellow", color: "#FFCC00" },
      { id: "red", label: "Red", color: "#FF3333" },
      { id: "orange", label: "Orange", color: "#FF9900" },
      { id: "pink", label: "Pink", color: "#FF66CC" }
    ]
  },
  {
    name: "Niche",
    options: [
      { id: "ai", label: "AI", count: 132 },
      { id: "api", label: "API", count: 76 },
      { id: "analytics", label: "Analytics", count: 33 },
      { id: "crypto", label: "Crypto", count: 32 },
      { id: "cloud", label: "Cloud", count: 24 },
      { id: "other-niche", label: "Other", count: 14 }
    ]
  }
];
