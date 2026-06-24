export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  results: string;
  metric: string;
  tags: string[];
  imageColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
  metric: string;
}

export interface ComparisonRow {
  feature: string;
  agency: {
    text: string;
    status: 'good' | 'bad' | 'neutral';
  };
  traditional: {
    text: string;
    status: 'good' | 'bad' | 'neutral';
  };
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  badge?: string;
  buttonText: string;
  color: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const servicesData: Service[] = [
  {
    id: "reddit",
    title: "Reddit Marketing",
    description: "Navigate subreddits with native, value-first content. We map authentic high-karma conversations that drive organic high-intent signups.",
    iconName: "Flame",
    metric: "18.4x",
    metricLabel: "Avg ROI on Reddit Conversions",
    tags: ["Organic Seeding", "Subreddit Mapping", "Reputation Management"],
    color: "from-orange-500 to-red-600"
  },
  {
    id: "x",
    title: "X (Twitter) Marketing",
    description: "Write high-signal thread storms and narrative hooks that establish founders as category authorities and capture viral feed volume.",
    iconName: "Twitter",
    metric: "+320%",
    metricLabel: "Founder Audience Scaling",
    tags: ["Ghostwriting", "Thread Campaigns", "Niche Networking"],
    color: "from-blue-400 to-indigo-600"
  },
  {
    id: "tiktok",
    title: "TikTok Growth",
    description: "High-tempo video production, spark ad orchestration, and native TikTok trend hijacking engineered for maximum retention.",
    iconName: "Music",
    metric: "+4.2M",
    metricLabel: "Monthly Organic Views Avg",
    tags: ["Trend Jacking", "Spark Ads", "UGC Directing"],
    color: "from-pink-500 to-purple-600"
  },
  {
    id: "instagram",
    title: "Instagram Growth",
    description: "Aesthetic grid planning, high-retention reels, and community stories that convert passive scrollers into long-term brand advocates.",
    iconName: "Instagram",
    metric: "45%",
    metricLabel: "Direct-to-DM Conversion Rate",
    tags: ["Aesthetic Reels", "DM Funneling", "Creator Partnerships"],
    color: "from-fuchsia-500 to-rose-500"
  },
  {
    id: "youtube",
    title: "YouTube Marketing",
    description: "From engaging YouTube Shorts loops to high-retention long-form videos, we engineer click-worthy thumbnails and optimized descriptions.",
    iconName: "Youtube",
    metric: "+85%",
    metricLabel: "Subscriber Growth Acceleration",
    tags: ["Video Editing", "Thumbnail Design", "YouTube SEO"],
    color: "from-red-600 to-orange-600"
  },
  {
    id: "influencer",
    title: "Influencer Campaigns",
    description: "End-to-end management of targeted creator programs. We handpick creators that genuinely match your audience with zero vanity metrics.",
    iconName: "Users",
    metric: "3.8x",
    metricLabel: "Lower Customer Acquisition Cost",
    tags: ["Vetted Roster", "Contract Handling", "Performance Tracking"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "community",
    title: "Community Building",
    description: "Construct modern brand sanctuaries on Discord and Slack. Engage early users with live events, exclusive beta access, and token assets.",
    iconName: "MessageSquare",
    metric: "88%",
    metricLabel: "Weekly Active Engagement",
    tags: ["Discord Setup", "Slack Moderation", "Host Events"],
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: "seo",
    title: "Topical SEO Authority",
    description: "Topical coverage mapping that builds unquestioned authority in Google's eyes. Elegant editorial articles driving compounding sales.",
    iconName: "Search",
    metric: "+280k",
    metricLabel: "Monthly High-Intent Visitors",
    tags: ["Topical Clusters", "Backlink Seeding", "Technical Audits"],
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "paid",
    title: "High-Intent Paid Ads",
    description: "Scientific, multi-variant ad testing on Meta, Google, LinkedIn, and TikTok. Built around capital efficiency and clear attribution.",
    iconName: "TrendingUp",
    metric: "$4.1M",
    metricLabel: "Direct Attributable Ad Spend Managed",
    tags: ["Retargeting Flows", "Multi-Variant Copy", "Precise Audience Demographics"],
    color: "from-violet-500 to-fuchsia-600"
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "SaaS Launch: From $0 to $180k MRR",
    category: "Reddit & X Marketing",
    description: "An open-source dev tool needed high-intent signups without huge ad spend. We created an organic value seeding engine on Reddit and targeted tech-influencer threads.",
    results: "Drove 45,000 developer signups and triggered a viral Github Trending streak.",
    metric: "180k MRR",
    tags: ["Organic Growth", "Subreddit Seeding", "Developer Relations"],
    imageColor: "from-purple-900/60 to-blue-900/60"
  },
  {
    id: "proj-2",
    title: "Web3 Brand Community Scale",
    category: "Community & X Campaigns",
    description: "A secure digital asset protocol required trust-building and high-tempo community alignment. We engineered structured community rewards and high-authority founder threads.",
    results: "Built a discord of 120,000 active members and sold out the initial mint in 4 minutes.",
    metric: "$2.4M Sold",
    tags: ["Discord Setup", "Narrative Hook Design", "Tokenomics Branding"],
    imageColor: "from-pink-900/60 to-purple-900/60"
  },
  {
    id: "proj-3",
    title: "Omnichannel TikTok Ecommerce Scale",
    category: "TikTok & Influencers",
    description: "An eco-friendly apparel brand wanted to scale without losing its indie vibe. We launched a high-velocity creator remix initiative and spark-advertised organic high performers.",
    results: "Achieved continuous profitable scaling, bypassing classic Meta attribution blocks.",
    metric: "+480% YoY",
    tags: ["TikTok Spark", "Creator Orchestration", "Profitable Scaling"],
    imageColor: "from-blue-900/60 to-cyan-900/60"
  },
  {
    id: "proj-4",
    title: "B2B SaaS Growth Engine",
    category: "SEO & Paid Media",
    description: "An AI scheduling software was stuck at flat organic rankings. We designed a comprehensive topical map of 140 inter-linked guides, while driving conversion retargeting.",
    results: "Claimed #1 rank for 42 high-volume transaction terms and reduced CAC by half.",
    metric: "-52% CAC",
    tags: ["Topical SEO", "Meta Retargeting", "Conversion Mapping"],
    imageColor: "from-emerald-900/60 to-teal-900/60"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Alex Rivera",
    role: "CEO & Co-Founder",
    company: "DevSync Pro",
    text: "Working with this team changed everything. Instead of typical vanity impressions, we saw real signups. Our Reddit organic campaign alone drove 14k trial users in the first week. Their visual execution and positioning are second to none.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    metric: "+320% trials"
  },
  {
    id: "test-2",
    name: "Marcus Vance",
    role: "VP of Growth",
    company: "Aura Health",
    text: "They are not just another agency; they function as our core growth architects. Their creative direction on TikTok and Instagram scaled our weekly subscriber numbers by 4x, all while maintaining absolute cost efficiency.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    metric: "4x scaling"
  },
  {
    id: "test-3",
    name: "Sophia Chen",
    role: "Head of Community",
    company: "LedgerMint",
    text: "Building Web3 communities is notoriously hard due to noise and bots. They mapped out a high-trust narrative campaign that brought 120k authentic participants who actively use our protocol daily. Outstanding work.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    metric: "120k members"
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Audience Intelligence",
    description: "We map out exactly where your high-intent audience spends their time—which Subreddits, who they follow on X, and which search phrases they use daily."
  },
  {
    number: "02",
    title: "Narrative & Identity Design",
    description: "We craft custom hooks, scroll-stopping copy, and aesthetic guidelines tailored to feel native to each specific media platform."
  },
  {
    number: "03",
    title: "High-Tempo Distribution",
    description: "Deploying coordinated organic seeding, influencer campaigns, and precision-targeted paid media in highly efficient compounding loops."
  },
  {
    number: "04",
    title: "Continuous Hyper-Scale",
    description: "Analyzing precise client metrics to double-down on winners, optimize ad budget splits, and expand into permanent omnichannel authority."
  }
];

export const comparisonData: ComparisonRow[] = [
  {
    feature: "Onboarding & Launch Speed",
    agency: { text: "2-3 Days (Slack + Notion Kickoff)", status: "good" },
    traditional: { text: "4-6 Weeks of bureaucratic meetings", status: "bad" }
  },
  {
    feature: "Creative Strategy Alignment",
    agency: { text: "Engineered platform-native memes & value posts", status: "good" },
    traditional: { text: "Generic stock images & boring copy", status: "bad" }
  },
  {
    feature: "Attribution & Metrics",
    agency: { text: "Real conversions, CAC reduction, and MRR growth", status: "good" },
    traditional: { text: "Vanity impressions, views, and likes reports", status: "bad" }
  },
  {
    feature: "Team Access",
    agency: { text: "Direct line to Senior Growth Partners on Slack", status: "good" },
    traditional: { text: "Junior account manager proxy relays", status: "bad" }
  },
  {
    feature: "Pricing Model",
    agency: { text: "Predictable, transparent flat-rate retainer", status: "good" },
    traditional: { text: "Hidden hourly rates + markup surcharges", status: "bad" }
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Startup Spark",
    price: "2,999",
    period: "month",
    description: "Perfect for seed-stage startups looking to establish initial traction, validate marketing channels, and drive early organic adoption.",
    features: [
      "Select 2 core growth channels (e.g. Reddit + X)",
      "Dedicated organic growth writer",
      "Subreddit & audience mapping report",
      "Bi-weekly performance audit dashboard",
      "Direct communication via shared Slack",
      "1 launch narrative campaign run"
    ],
    popular: false,
    buttonText: "Start Scaling Now",
    color: "from-blue-500/20 to-purple-500/10"
  },
  {
    name: "Velocity Scale",
    price: "4,999",
    period: "month",
    description: "Our signature plan. Omnichannel growth designed to dominate organic feeds, secure creator partnerships, and build lasting user compounding.",
    features: [
      "Up to 4 growth channels (Reddit, X, TikTok, IG)",
      "Full creator partnership management (vetted roster)",
      "High-tempo short-form video design (8 clips/mo)",
      "Weekly performance audits & visual attribution",
      "Advanced community setup (Discord or Slack)",
      "Bi-weekly priority strategy brainstorm sessions"
    ],
    popular: true,
    badge: "Most Selected",
    buttonText: "Accelerate Growth",
    color: "from-brand-purple/30 to-brand-pink/20"
  },
  {
    name: "Omnichannel Elite",
    price: "8,999",
    period: "month",
    description: "An all-inclusive, high-octane growth engine. Seamlessly blending organic seeding, massive influencer campaigns, and precision paid-ads orchestration.",
    features: [
      "All platforms + unlimited strategic flexibility",
      "Paid acquisition management (up to $50k spend/mo)",
      "High-tempo video design (18 premium assets/mo)",
      "Topical SEO content cluster development (4 guides/mo)",
      "Founding partners direct strategy ownership",
      "Custom analytics & daily metrics sync"
    ],
    popular: false,
    buttonText: "Enter Enterprise Scale",
    color: "from-cyan-500/20 to-blue-500/10"
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do you achieve organic growth on Reddit without getting banned?",
    answer: "Reddit has a strict culture that rejects generic marketing slop. We succeed because we do not pitch. Instead, we map out relevant high-karma user conversations, provide genuine value/insights or interesting engineering narratives, and subtly introduce your brand in high-context responses. Our process is native and human-authored.",
    category: "Reddit"
  },
  {
    id: "faq-2",
    question: "Do you provide actual video editing and asset creation?",
    answer: "Yes, fully! For our Velocity Scale and Omnichannel plans, we script, capture, animate, and edit native short-form and high-retention social assets. We work directly with our vetted in-house creators and editors to design scroll-stopping content that matches your exact brand aesthetic.",
    category: "Creative"
  },
  {
    id: "faq-3",
    question: "What is your onboarding duration and kickoff process?",
    answer: "We kick off incredibly fast. Once we align on details, we launch a shared Slack channel and Notion dashboard within 24 hours. The kickoff strategy session occurs within 2 days, and active campaign deployment typically begins within 4-5 business days of kickoff.",
    category: "Operations"
  },
  {
    id: "faq-4",
    question: "Is there a long-term commitment or contract?",
    answer: "No, all our standard growth plans operate on a monthly basis. You can scale up, down, or pause at the end of any billing cycle with 14 days' notice. We believe our metrics and revenue delivery are the best retention mechanism.",
    category: "Pricing"
  },
  {
    id: "faq-5",
    question: "Do you manage paid ad spend directly?",
    answer: "Yes, in the Omnichannel Elite plan, we manage and optimize your paid media budgets (Meta, TikTok, X, Google, LinkedIn) using a rigorous multi-variant testing model. You pay ad networks directly, and we handle the creative, copy, targeting, tracking, and constant refinement.",
    category: "Paid Ads"
  }
];
