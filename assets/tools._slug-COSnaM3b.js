import { s as e } from "./button-GRMyZlvL.js";
import { t as n } from "./link-CZ3VaoX1.js";
import { l as r, m as i } from "./button-GRMyZlvL.js";
import { B as supabase, y as useCart, a as toast } from "./index-Dr8K-Qyh.js";

var p = e();
var React = i(r(), 1);

export const FEATURED_TOOLS_DATA = [
  {
    id: "tool-chatgpt",
    name: "ChatGPT Plus (GPT-4o)",
    slug: "chatgpt-plus",
    category: "AI",
    price: "PKR 1,499",
    original_price: "PKR 5,999",
    savings: "PKR 4,500",
    discount: "75% OFF",
    rating: "4.9",
    reviews_count: "2,380",
    orders_count: "13,000+",
    delivery_time: "5 - 15 Minutes",
    warranty_text: "30 Days Replacement",
    access_type: "Premium / Private",
    device_support: "All Devices (Web, Mobile, Desktop)",
    validity: "1 Month (Auto Renew)",
    badge: "BEST SELLER",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    canva_link: "https://chatgpt.com",
    is_active: true,
    is_trending: true,
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=400&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80"
    ],
    highlights: [
      "Full access to GPT-4o & GPT-4 Turbo",
      "DALL-E 3 High-resolution Image Generation",
      "Advanced Data Analysis & Python Code Execution",
      "Custom GPTs creation & Store access",
      "Priority Response & zero queue waiting",
      "100% Official & Secure Account"
    ],
    overview: "ChatGPT Plus (GPT-4o) gives you full access to OpenAI's most advanced AI model with faster responses, smarter capabilities, and premium features to supercharge your productivity, coding, research, and design workflows.",
    faqs: [
      { q: "How fast will I receive my ChatGPT Plus access?", a: "Access details are delivered to your email & WhatsApp within 5 to 15 minutes of payment verification." },
      { q: "Is there a replacement warranty included?", a: "Yes! You get a full 30-day replacement warranty. If you experience any issue, WhatsApp support fixes it instantly." },
      { q: "Can I use Custom GPTs & DALL-E 3?", a: "Yes, all ChatGPT Plus features including DALL-E 3 and Custom GPTs are 100% active." },
      { q: "Can I renew my plan next month?", a: "Yes, you can easily renew your subscription every month on the same account." }
    ],
    customer_reviews: [
      { name: "Ahmed Raza", rating: 5, date: "2 May 2026", comment: "Super fast delivery and working perfectly. Highly recommended!", verified: true },
      { name: "Zainab Malik", rating: 5, date: "15 Apr 2026", comment: "GPT-4o speed is insane. Got access within 7 minutes on WhatsApp. 10/10!", verified: true },
      { name: "Usman Ghani", rating: 5, date: "28 Mar 2026", comment: "Best service for AI subscriptions in Pakistan. Very reliable warranty.", verified: true }
    ]
  },
  {
    id: "tool-canva",
    name: "Canva Pro (Private Team)",
    slug: "canva-pro",
    category: "Design",
    price: "PKR 499",
    original_price: "PKR 3,500",
    savings: "PKR 3,001",
    discount: "85% OFF",
    rating: "4.9",
    reviews_count: "2,034",
    orders_count: "15,000+",
    delivery_time: "5 - 10 Minutes",
    warranty_text: "1-Year Full Warranty Support",
    access_type: "Personal Email Upgrade",
    device_support: "All Devices",
    validity: "1 Year Full Access",
    badge: "TOP CHOICE",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
    canva_link: "https://canva.com",
    is_active: true,
    is_trending: true,
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg"
    ],
    highlights: [
      "100+ Million Premium Stock Photos, Videos & Audio",
      "One-click Magic Background Remover",
      "Magic Resize for all social media formats",
      "Brand Kit with custom fonts & colors",
      "100GB Cloud Storage for designs",
      "Premium Templates & SVG Vector Exports"
    ],
    overview: "Upgrade your own personal Canva account to Pro! Get unlimited access to premium design elements, background removal, brand kits, and 100M+ stock assets without losing your existing work.",
    faqs: [
      { q: "Will Canva Pro be activated on my existing account?", a: "Yes! You will receive an official email invite link to upgrade your existing personal Canva account." },
      { q: "Are my designs private?", a: "100% private. Nobody else can see or edit your personal designs." },
      { q: "What is the warranty period?", a: "We provide 1-year full warranty support with instant replacement guarantee." }
    ],
    customer_reviews: [
      { name: "Fatima Noor", rating: 5, date: "10 May 2026", comment: "My personal Canva account upgraded within 5 mins! Amazing deal.", verified: true },
      { name: "Bilal Hassan", rating: 5, date: "01 May 2026", comment: "Background remover and premium templates work perfectly. Must buy!", verified: true }
    ]
  },
  {
    id: "tool-midjourney",
    name: "Midjourney Pro (Fast GPU)",
    slug: "midjourney-pro",
    category: "AI",
    price: "PKR 1,999",
    original_price: "PKR 8,999",
    savings: "PKR 7,000",
    discount: "78% OFF",
    rating: "4.8",
    reviews_count: "986",
    orders_count: "6,500+",
    delivery_time: "5 - 15 Minutes",
    warranty_text: "30 Days Replacement",
    access_type: "Private Discord / Bot",
    device_support: "Discord (PC / Mobile)",
    validity: "1 Month",
    badge: "FEATURED",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    canva_link: "https://midjourney.com",
    is_active: true,
    is_trending: true,
    highlights: [
      "30 Hours of Fast GPU Generation Time",
      "Unlimited Relax GPU Generations",
      "Stealth Mode (Private generations)",
      "Full Commercial Usage License",
      "V6 & Niji 6 AI Image Engine Support",
      "High Resolution Upscaling & Pan/Vary tools"
    ],
    overview: "Generate stunning photorealistic 8K AI artwork, character designs, logos, and graphics with Midjourney Pro. Includes Fast GPU hours and commercial licensing.",
    faqs: [
      { q: "How do I access Midjourney?", a: "You will receive dedicated Discord bot credentials or channel invite with full Fast GPU credits." },
      { q: "Can I use generated images commercially?", a: "Yes, all Midjourney Pro generations include full commercial licensing rights." }
    ],
    customer_reviews: [
      { name: "Hamza Sheikh", rating: 5, date: "12 May 2026", comment: "Fast GPU hours work great. Generated 200+ logos for my clients already.", verified: true }
    ]
  },
  {
    id: "tool-semrush",
    name: "Semrush Guru Plan",
    slug: "semrush-guru",
    category: "SEO",
    price: "PKR 2,499",
    original_price: "PKR 12,000",
    savings: "PKR 9,501",
    discount: "80% OFF",
    rating: "4.9",
    reviews_count: "1,120",
    orders_count: "4,200+",
    delivery_time: "5 - 15 Minutes",
    warranty_text: "30 Days Warranty",
    access_type: "Dedicated Logins",
    device_support: "Web Browsers",
    validity: "1 Month",
    badge: "SEO TOOL",
    icon_url: "https://cdn.worldvectorlogo.com/logos/semrush-1.svg",
    canva_link: "https://semrush.com",
    is_active: true,
    is_trending: true,
    highlights: [
      "Keyword Magic Tool & Difficulty Analysis",
      "Domain Overview & Competitor Traffic Insights",
      "Backlink Audit & Toxic Link Checker",
      "Historical Data analysis (since 2012)",
      "15 Project Site Audits & Rank Tracking",
      "Content Marketing Toolkit & Topic Research"
    ],
    overview: "Dominating search engines made easy. Semrush Guru provides comprehensive keyword research, competitor analytics, backlink tracking, and site health audits.",
    faqs: [
      { q: "Is this Semrush Guru Plan?", a: "Yes, full Guru tier access with project audits and keyword tracking." },
      { q: "What is the delivery time?", a: "Delivered within 5-15 minutes after payment verification." }
    ],
    customer_reviews: [
      { name: "Kashif Ali", rating: 5, date: "04 May 2026", comment: "Keyword Magic Tool & Site Audit works 100%. Great for agency work.", verified: true }
    ]
  },
  {
    id: "tool-netflix",
    name: "Netflix 4K Ultra HD (Private Screen)",
    slug: "netflix-4k",
    category: "Streaming",
    price: "PKR 799",
    original_price: "PKR 2,200",
    savings: "PKR 1,401",
    discount: "64% OFF",
    rating: "4.7",
    reviews_count: "5,087",
    orders_count: "20,000+",
    delivery_time: "5 - 15 Minutes",
    warranty_text: "30 Days Replacement",
    access_type: "Private PIN Screen",
    device_support: "Smart TV, Mobile, Laptop",
    validity: "1 Month",
    badge: "POPULAR",
    icon_url: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico",
    canva_link: "https://netflix.com",
    is_active: true,
    is_trending: true,
    highlights: [
      "4K Ultra HD + HDR Streaming Quality",
      "Dedicated Private Profile with PIN Lock",
      "Unlimited Movies, TV Shows & Documentaries",
      "Multi-device login (TV, Mobile, Laptop)",
      "No Household restriction issues",
      "30-Day Full Replacement Warranty"
    ],
    overview: "Stream your favorite movies and shows in crystal clear 4K Ultra HD. Enjoy your own private PIN-protected profile on Smart TV, Phone, and Computer.",
    faqs: [
      { q: "Will I get a PIN-locked profile?", a: "Yes! You get your own private profile with a 4-digit PIN lock." },
      { q: "Does it work on Smart TV?", a: "Yes, works seamlessly on Smart TVs, Android boxes, Phones and Laptops." }
    ],
    customer_reviews: [
      { name: "Sana Tariq", rating: 5, date: "14 May 2026", comment: "4K quality is awesome on my Samsung TV. No household error!", verified: true }
    ]
  },
  {
    id: "tool-capcut",
    name: "CapCut Pro (Desktop & Mobile)",
    slug: "capcut-pro",
    category: "Video",
    price: "PKR 699",
    original_price: "PKR 2,500",
    savings: "PKR 1,801",
    discount: "72% OFF",
    rating: "4.8",
    reviews_count: "740",
    orders_count: "3,800+",
    delivery_time: "5 - 15 Minutes",
    warranty_text: "30 Days Replacement",
    access_type: "Pro Account Login",
    device_support: "PC, Mac, iOS & Android",
    validity: "1 Month",
    badge: "TRENDING",
    icon_url: "https://sf16-va.tiktokcdn.com/obj/eden-va2/ais_lseh7eh7b/capcut_logo.png",
    canva_link: "https://capcut.com",
    is_active: true,
    is_trending: false,
    highlights: [
      "AI Auto-Subtitles & Speech-to-Text",
      "One-Click Background Removal for Video",
      "4K 60FPS High-Bitrate Export",
      "1,000+ Pro Transitions, Filters & Effects",
      "AI Body Effects & Facial Enhancement",
      "Desktop & Mobile Cross-Platform Sync"
    ],
    overview: "Create viral Reels, TikToks, and YouTube Shorts with CapCut Pro. Unlocks AI captions, pro transitions, 4K 60fps export, and video enhancement tools.",
    faqs: [
      { q: "Does it work on Windows/Mac and Mobile?", a: "Yes, CapCut Pro works on Windows PC, Mac, iOS and Android." }
    ],
    customer_reviews: [
      { name: "Omer Farooq", rating: 5, date: "08 May 2026", comment: "Auto captions feature saved me hours of video editing time. Top quality!", verified: true }
    ]
  },
  {
    id: "tool-grammarly",
    name: "Grammarly Premium",
    slug: "grammarly-premium",
    category: "Productivity",
    price: "PKR 699",
    original_price: "PKR 3,000",
    savings: "PKR 2,301",
    discount: "76% OFF",
    rating: "4.9",
    reviews_count: "1,450",
    orders_count: "8,900+",
    delivery_time: "5 - 15 Minutes",
    warranty_text: "30 Days Replacement",
    access_type: "Premium Login",
    device_support: "All Browsers & MS Word",
    validity: "1 Month",
    badge: "ESSENTIAL",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Grammarly_icon.svg",
    canva_link: "https://grammarly.com",
    is_active: true,
    is_trending: false,
    highlights: [
      "Advanced Clarity & Full-Sentence Rewrites",
      "Plagiarism Detector across 16 Billion web pages",
      "Tone & Formality Adjustment",
      "GrammarlyGO AI Writing Assistance",
      "Browser Extension & MS Word Integration",
      "Vocabulary Enhancement & Synonym Suggestions"
    ],
    overview: "Write error-free essays, emails, and articles. Grammarly Premium corrects grammar, improves clarity, checks plagiarism, and refines writing tone.",
    faqs: [
      { q: "Does it include Plagiarism Checker?", a: "Yes, full premium plagiarism detection is included." }
    ],
    customer_reviews: [
      { name: "Maryam Siddiqui", rating: 5, date: "03 May 2026", comment: "Perfect for thesis and assignment editing. Plagiarism checker is accurate.", verified: true }
    ]
  },
  {
    id: "tool-claude",
    name: "Claude 3.5 Sonnet Pro",
    slug: "claude-3-pro",
    category: "AI",
    price: "PKR 1,699",
    original_price: "PKR 6,500",
    savings: "PKR 4,801",
    discount: "74% OFF",
    rating: "4.9",
    reviews_count: "1,245",
    orders_count: "7,100+",
    delivery_time: "5 - 15 Minutes",
    warranty_text: "30 Days Replacement",
    access_type: "Claude Pro Login",
    device_support: "Web & Mobile App",
    validity: "1 Month",
    badge: "BEST FOR CODE",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
    canva_link: "https://claude.ai",
    is_active: true,
    is_trending: true,
    highlights: [
      "Access to Claude 3.5 Sonnet & Claude 3 Opus",
      "200,000 Token Context Window (Book-length prompts)",
      "Interactive Artifacts (Live React code/SVG previews)",
      "Superior Coding & Complex Logic Performance",
      "PDF, Image & Document Analysis",
      "5x Usage Limits compared to free tier"
    ],
    overview: "Anthropic's flagship AI model Claude 3.5 Sonnet offers unmatched coding accuracy, 200K token context window, and live Artifacts interactive rendering.",
    faqs: [
      { q: "Is Artifacts feature available?", a: "Yes, Artifacts live code and UI rendering works 100%." }
    ],
    customer_reviews: [
      { name: "Mustafa Khan", rating: 5, date: "16 May 2026", comment: "Claude 3.5 Sonnet is far superior for coding tasks. Instant delivery!", verified: true }
    ]
  },
  {
    id: "tool-adobe",
    name: "Adobe Creative Cloud (All Apps)",
    slug: "adobe-creative-cloud",
    category: "Design",
    price: "PKR 2,999",
    original_price: "PKR 18,000",
    savings: "PKR 15,001",
    discount: "83% OFF",
    rating: "4.8",
    reviews_count: "890",
    orders_count: "3,100+",
    delivery_time: "5 - 15 Minutes",
    warranty_text: "1-Year Official Warranty",
    access_type: "Official Email Redemption",
    device_support: "Windows & Mac Desktop Apps",
    validity: "1 Year Access",
    badge: "PRO DESIGNER",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg",
    canva_link: "https://adobe.com",
    is_active: true,
    is_trending: false,
    highlights: [
      "20+ Desktop & Mobile Creative Apps",
      "Photoshop Generative Fill & AI Tools",
      "Premiere Pro AI Speech Enhance",
      "100GB Adobe Cloud Storage",
      "Adobe Fonts Library Access",
      "Official Updates via Creative Cloud App"
    ],
    overview: "Get official access to Photoshop, Illustrator, Premiere Pro, After Effects, Acrobat Pro, and 20+ apps with Generative Fill AI and 100GB cloud storage.",
    faqs: [
      { q: "Will I get official Adobe Creative Cloud app updates?", a: "Yes, you download apps directly from official Adobe CC Desktop." }
    ],
    customer_reviews: [
      { name: "Daniyal Qureshi", rating: 5, date: "07 May 2026", comment: "Photoshop Generative Fill and Premiere Pro work flawlessly. Highly recommended!", verified: true }
    ]
  },
  {
    id: "tool-spotify",
    name: "Spotify Premium (Individual/Duo)",
    slug: "spotify-premium",
    category: "Streaming",
    price: "PKR 499",
    original_price: "PKR 1,500",
    savings: "PKR 1,001",
    discount: "67% OFF",
    rating: "4.9",
    reviews_count: "3,200",
    orders_count: "18,000+",
    delivery_time: "5 - 10 Minutes",
    warranty_text: "6-Month & 1-Year Warranty",
    access_type: "Personal Account Upgrade",
    device_support: "All Devices",
    validity: "6 Months / 1 Year",
    badge: "MUSIC LOVER",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    canva_link: "https://spotify.com",
    is_active: true,
    is_trending: false,
    highlights: [
      "Ad-free Music & Podcast Streaming",
      "Unlimited Offline Downloads on 5 Devices",
      "320kbps Extreme High-Quality Audio",
      "Unlimited Track Skips & On-Demand Playback",
      "Compatible with iOS, Android, Windows, Car Play",
      "Full Replacement Guarantee"
    ],
    overview: "Listen to millions of songs ad-free with offline downloads, extreme audio quality, and unlimited skips on your existing personal Spotify account.",
    faqs: [
      { q: "Can I use my existing Spotify account?", a: "Yes, we upgrade your existing personal account without losing playlists." }
    ],
    customer_reviews: [
      { name: "Shehryar Khan", rating: 5, date: "11 May 2026", comment: "Upgraded my existing account in 5 mins. Offline songs working fine!", verified: true }
    ]
  }
];

function ToolDetailsComponent() {
  const rawSlug = typeof window !== "undefined" ? window.location.pathname.split("/").pop() : "";
  const slug = rawSlug && rawSlug !== "index.html" ? rawSlug : "chatgpt-plus";

  const [tool, setTool] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState("overview");
  const [loading, setLoading] = React.useState(true);
  const { addItem, items } = useCart();

  React.useEffect(() => {
    async function fetchTool() {
      let matchedTool = null;
      try {
        const { data, error } = await supabase
          .from("tools")
          .select("*")
          .eq("slug", slug)
          .single();
        if (!error && data) {
          matchedTool = data;
        }
      } catch (err) {
        console.error(err);
      }

      const defaultMatch = FEATURED_TOOLS_DATA.find(t => t.slug === slug || t.id === slug) || FEATURED_TOOLS_DATA[0];

      if (matchedTool) {
        setTool({
          ...defaultMatch,
          ...matchedTool,
          price: matchedTool.price || defaultMatch.price,
          original_price: matchedTool.original_price || defaultMatch.original_price,
          savings: matchedTool.savings || defaultMatch.savings,
          discount: matchedTool.discount || defaultMatch.discount,
          delivery_time: matchedTool.delivery_time || defaultMatch.delivery_time,
          warranty_text: matchedTool.warranty_text || defaultMatch.warranty_text,
          highlights: matchedTool.highlights || defaultMatch.highlights,
          faqs: matchedTool.faqs || defaultMatch.faqs,
          customer_reviews: defaultMatch.customer_reviews
        });
      } else {
        setTool(defaultMatch);
      }
      setLoading(false);
    }
    fetchTool();
  }, [slug]);

  if (loading) {
    return (0, p.jsx)("div", {
      className: "container mx-auto px-4 py-20 flex justify-center items-center min-h-[50vh]",
      children: (0, p.jsxs)("div", {
        className: "flex flex-col items-center gap-3 text-muted-foreground",
        children: [
          (0, p.jsx)("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" }),
          (0, p.jsx)("span", { children: "Loading tool details..." })
        ]
      })
    });
  }

  if (!tool) {
    return (0, p.jsx)("div", {
      className: "container mx-auto px-4 py-20 text-center",
      children: (0, p.jsxs)("div", {
        className: "max-w-md mx-auto space-y-4",
        children: [
          (0, p.jsx)("h2", { className: "text-2xl font-bold font-display text-destructive", children: "Tool Not Found" }),
          (0, p.jsx)(n, {
            to: "/tools",
            children: (0, p.jsx)("button", {
              className: "inline-flex items-center justify-center rounded-lg text-sm font-semibold bg-primary text-primary-foreground h-10 px-6 cursor-pointer",
              children: "Back to Catalog"
            })
          })
        ]
      })
    });
  }

  const inCart = items.some(item => item.toolId === tool.id || item.toolName === tool.name);
  const fallbackIcon = `https://api.dicebear.com/9.x/shapes/svg?seed=${encodeURIComponent(tool.name)}&backgroundType=gradientLinear&backgroundColor=1e9bff,7ee8fa`;

  // Filter related tools (exclude current tool)
  const relatedTools = FEATURED_TOOLS_DATA.filter(t => t.slug !== tool.slug).slice(0, 4);

  return (0, p.jsxs)("div", {
    className: "container mx-auto px-4 py-6 md:py-10 max-w-7xl space-y-8 text-foreground",
    children: [
      
      // Top Navigation & Breadcrumb Header
      (0, p.jsxs)("div", {
        className: "flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm text-muted-foreground border-b border-border/40 pb-4",
        children: [
          (0, p.jsx)(n, {
            to: "/tools",
            className: "inline-flex items-center gap-1.5 font-semibold text-rose-500 hover:text-rose-600 transition-colors",
            children: (0, p.jsxs)("span", {
              className: "flex items-center gap-1 cursor-pointer",
              children: [
                (0, p.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "2.5", stroke: "currentColor", className: "w-4 h-4", children: (0, p.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5 8.25 12l7.5-7.5" }) }),
                " Back to Catalog"
              ]
            })
          }),
          (0, p.jsxs)("div", {
            className: "flex items-center gap-2 text-xs",
            children: [
              (0, p.jsx)("span", { children: "Home" }),
              (0, p.jsx)("span", { children: "/" }),
              (0, p.jsx)("span", { children: `${tool.category} Tools` }),
              (0, p.jsx)("span", { children: "/" }),
              (0, p.jsx)("span", { className: "font-semibold text-foreground truncate max-w-[150px]", children: tool.name })
            ]
          }),
          (0, p.jsxs)("div", {
            className: "hidden md:flex items-center gap-4 text-xs font-semibold",
            children: [
              (0, p.jsxs)("button", {
                onClick: () => toast.success("Added to wishlist!"),
                className: "inline-flex items-center gap-1 text-muted-foreground hover:text-rose-500 transition-colors cursor-pointer",
                children: ["❤️ ", "Add to Wishlist"]
              }),
              (0, p.jsxs)("span", {
                className: "px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-500 font-bold border border-rose-500/20",
                children: ["🔥 ", "50+ Orders Today"]
              })
            ]
          })
        ]
      }),

      // ================= MAIN PRODUCT HERO GRID (3-COLUMN DESKTOP / STACK MOBILE) =================
      (0, p.jsxs)("div", {
        className: "grid gap-6 lg:grid-cols-12 items-start",
        children: [

          // LEFT COLUMN: Product Image Card & Gallery (lg:col-span-4)
          (0, p.jsxs)("div", {
            className: "lg:col-span-4 space-y-4",
            children: [
              (0, p.jsxs)("div", {
                className: "relative rounded-3xl bg-gradient-to-br from-rose-500/10 via-background to-rose-500/5 border border-border/60 p-6 md:p-8 flex items-center justify-center shadow-card overflow-hidden group min-h-[260px]",
                children: [
                  tool.badge && (0, p.jsx)("span", {
                    className: "absolute top-4 left-4 px-3 py-1 bg-rose-500 text-white font-extrabold text-[11px] uppercase tracking-wider rounded-full shadow-md z-20",
                    children: tool.badge
                  }),
                  (0, p.jsx)("div", { className: "absolute inset-0 bg-rose-500/5 blur-3xl rounded-full" }),
                  (0, p.jsx)("img", {
                    src: tool.icon_url || fallbackIcon,
                    alt: tool.name,
                    className: "h-36 w-36 md:h-44 md:w-44 object-contain relative z-10 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-xl",
                    onError: e => { e.currentTarget.src = fallbackIcon; }
                  })
                ]
              }),

              // Thumbnails Gallery
              (0, p.jsxs)("div", {
                className: "flex items-center justify-center gap-2 overflow-x-auto py-1",
                children: [
                  (0, p.jsx)("div", {
                    className: "w-14 h-14 rounded-xl border-2 border-rose-500 p-2 bg-card flex items-center justify-center cursor-pointer shadow-sm shrink-0",
                    children: (0, p.jsx)("img", { src: tool.icon_url || fallbackIcon, alt: "thumb", className: "w-full h-full object-contain" })
                  }),
                  (0, p.jsx)("div", {
                    className: "w-14 h-14 rounded-xl border border-border/60 p-2 bg-card flex items-center justify-center cursor-pointer hover:border-rose-300 shrink-0 text-xs text-muted-foreground font-bold",
                    children: "UI"
                  }),
                  (0, p.jsx)("div", {
                    className: "w-14 h-14 rounded-xl border border-border/60 p-2 bg-card flex items-center justify-center cursor-pointer hover:border-rose-300 shrink-0 text-xs text-muted-foreground font-bold",
                    children: "Dark"
                  }),
                  (0, p.jsx)("div", {
                    className: "w-14 h-14 rounded-xl border border-border/60 p-2 bg-card flex items-center justify-center cursor-pointer hover:border-rose-300 shrink-0 text-xs text-rose-500 font-bold",
                    children: "+2"
                  })
                ]
              }),

              // 4 Micro Trust Badges
              (0, p.jsxs)("div", {
                className: "grid grid-cols-2 gap-2 text-[11px] pt-2",
                children: [
                  (0, p.jsxs)("div", { className: "flex items-center gap-1.5 p-2.5 rounded-xl bg-card border border-border/60 text-muted-foreground font-medium", children: ["🛡️ ", "30-Day Guarantee"] }),
                  (0, p.jsxs)("div", { className: "flex items-center gap-1.5 p-2.5 rounded-xl bg-card border border-border/60 text-muted-foreground font-medium", children: ["⚡ ", "5-15 Mins Delivery"] }),
                  (0, p.jsxs)("div", { className: "flex items-center gap-1.5 p-2.5 rounded-xl bg-card border border-border/60 text-muted-foreground font-medium", children: ["🔒 ", "100% Safe Payment"] }),
                  (0, p.jsxs)("div", { className: "flex items-center gap-1.5 p-2.5 rounded-xl bg-card border border-border/60 text-muted-foreground font-medium", children: ["👥 ", "10k+ Happy Users"] })
                ]
              })
            ]
          }),

          // MIDDLE COLUMN: Product Title & Highlights (lg:col-span-5)
          (0, p.jsxs)("div", {
            className: "lg:col-span-5 space-y-5",
            children: [
              (0, p.jsxs)("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                  (0, p.jsx)("span", { className: "px-3 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20", children: tool.category }),
                  tool.is_trending && (0, p.jsx)("span", { className: "px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20", children: "🔥 Hot / Trending" }),
                  (0, p.jsx)("span", { className: "px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20", children: "⚡ Verified Instant" })
                ]
              }),

              (0, p.jsx)("h1", { className: "font-display text-2xl md:text-4xl font-extrabold tracking-tight text-foreground leading-snug", children: tool.name }),

              // Ratings & Order Stats Bar
              (0, p.jsxs)("div", {
                className: "flex items-center gap-3 text-xs text-muted-foreground font-medium",
                children: [
                  (0, p.jsxs)("div", { className: "flex items-center gap-1 text-amber-400 font-bold text-sm", children: ["★ ", tool.rating || "4.9"] }),
                  (0, p.jsxs)("span", { children: [`(${tool.reviews_count || "2,380"} Reviews)`] }),
                  (0, p.jsx)("span", { children: "•" }),
                  (0, p.jsxs)("span", { className: "font-bold text-foreground", children: [`${tool.orders_count || "13,000+"} Orders`] })
                ]
              }),

              (0, p.jsx)("p", { className: "text-xs md:text-sm text-muted-foreground leading-relaxed", children: tool.overview || tool.description }),

              // Key Highlights Box
              (0, p.jsxs)("div", {
                className: "bg-card border border-border/60 rounded-2xl p-4 md:p-5 space-y-3 shadow-sm",
                children: [
                  (0, p.jsx)("h4", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Key Product Highlights" }),
                  (0, p.jsx)("div", {
                    className: "space-y-2.5",
                    children: (tool.highlights || []).map((hl, idx) => (
                      (0, p.jsxs)("div", { key: idx, className: "flex items-center gap-2.5 text-xs font-semibold text-foreground", children: [
                        (0, p.jsx)("span", { className: "h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs shrink-0 font-bold", children: "✓" }),
                        (0, p.jsx)("span", { children: hl })
                      ] })
                    ))
                  })
                ]
              })
            ]
          }),

          // RIGHT COLUMN: Sticky Price & Checkout Box (lg:col-span-3)
          (0, p.jsxs)("div", {
            className: "lg:col-span-3 bg-card border border-border/80 rounded-3xl p-6 space-y-5 shadow-card sticky top-24",
            children: [
              (0, p.jsxs)("div", {
                className: "flex items-start justify-between gap-2 border-b border-border/40 pb-4",
                children: [
                  (0, p.jsxs)("div", {
                    children: [
                      (0, p.jsx)("div", { className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider", children: "Special Price" }),
                      (0, p.jsxs)("div", { className: "flex items-baseline gap-2 mt-1", children: [
                        (0, p.jsx)("span", { className: "font-display text-3xl font-extrabold text-rose-500", children: tool.price || "PKR 1,499" }),
                        tool.original_price && (0, p.jsx)("span", { className: "text-sm text-muted-foreground line-through font-medium", children: tool.original_price })
                      ] })
                    ]
                  }),
                  tool.discount && (0, p.jsx)("span", {
                    className: "px-2.5 py-1 bg-rose-500/10 text-rose-500 font-extrabold text-xs rounded-lg border border-rose-500/20",
                    children: tool.discount
                  })
                ]
              }),

              tool.savings && (0, p.jsxs)("div", {
                className: "text-center text-xs font-bold text-rose-500 bg-rose-50 dark:bg-rose-950/40 p-2 rounded-xl border border-rose-100 dark:border-rose-900/50",
                children: ["🎉 ", `You Save ${tool.savings}`]
              }),

              // Spec List Table
              (0, p.jsxs)("div", {
                className: "space-y-2.5 text-xs text-muted-foreground border-b border-border/40 pb-4",
                children: [
                  (0, p.jsxs)("div", { className: "flex justify-between items-center", children: [(0, p.jsxs)("span", { className: "flex items-center gap-1", children: ["⚡ ", "Delivery Time"] }), (0, p.jsx)("span", { className: "font-bold text-foreground", children: tool.delivery_time || "5 - 15 Mins" })] }),
                  (0, p.jsxs)("div", { className: "flex justify-between items-center", children: [(0, p.jsxs)("span", { className: "flex items-center gap-1", children: ["🛡️ ", "Warranty"] }), (0, p.jsx)("span", { className: "font-bold text-emerald-600", children: tool.warranty_text || "30 Days Guarantee" })] }),
                  (0, p.jsxs)("div", { className: "flex justify-between items-center", children: [(0, p.jsxs)("span", { className: "flex items-center gap-1", children: ["👤 ", "Access Type"] }), (0, p.jsx)("span", { className: "font-bold text-foreground", children: tool.access_type || "Premium Access" })] }),
                  (0, p.jsxs)("div", { className: "flex justify-between items-center", children: [(0, p.jsxs)("span", { className: "flex items-center gap-1", children: ["💻 ", "Device Support"] }), (0, p.jsx)("span", { className: "font-bold text-foreground", children: "All Devices" })] }),
                  (0, p.jsxs)("div", { className: "flex justify-between items-center", children: [(0, p.jsxs)("span", { className: "flex items-center gap-1", children: ["🕒 ", "Validity"] }), (0, p.jsx)("span", { className: "font-bold text-foreground", children: tool.validity || "1 Month (Auto Renew)" })] })
                ]
              }),

              // Action Buttons
              (0, p.jsxs)("div", {
                className: "space-y-2.5",
                children: [
                  (0, p.jsx)("a", {
                    href: `https://wa.me/923106126454?text=Hi%20Techno%20Tools!%20I%20want%20to%20buy%20${encodeURIComponent(tool.name)}%20for%20${encodeURIComponent(tool.price || "PKR 1,499")}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-full flex items-center justify-center gap-2 py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm rounded-2xl shadow-lg shadow-rose-500/25 transition-all cursor-pointer",
                    children: "⚡ Buy Now"
                  }),
                  (0, p.jsx)("button", {
                    onClick: e => {
                      e.preventDefault();
                      if (!inCart) {
                        addItem({ toolId: tool.id, toolName: tool.name, planName: "Standard", iconUrl: tool.icon_url || "" });
                        toast.success(`${tool.name} added to cart`);
                      }
                    },
                    disabled: inCart,
                    className: `w-full flex items-center justify-center gap-2 py-3 border border-rose-500/30 text-rose-500 font-bold text-sm rounded-2xl transition-all cursor-pointer ${inCart ? 'bg-secondary text-secondary-foreground opacity-70 pointer-events-none' : 'hover:bg-rose-500/10'}`,
                    children: inCart ? "Already in Cart 🛒" : "🛒 Add to Cart"
                  })
                ]
              }),

              (0, p.jsxs)("div", {
                className: "text-center text-[11px] text-muted-foreground pt-1",
                children: [
                  "Have questions? ",
                  (0, p.jsx)("a", { href: "https://wa.me/923106126454", target: "_blank", rel: "noreferrer", className: "text-rose-500 font-bold hover:underline", children: "Contact Support" })
                ]
              })
            ]
          })
        ]
      }),

      // ================= HOW IT WORKS TIMELINE BANNER =================
      (0, p.jsxs)("div", {
        className: "bg-card border border-border/60 rounded-3xl p-6 md:p-8 space-y-6 shadow-card",
        children: [
          (0, p.jsxs)("div", {
            className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2",
            children: [
              (0, p.jsxs)("div", { children: [
                (0, p.jsx)("h3", { className: "font-display text-xl font-bold text-foreground", children: "How It Works" }),
                (0, p.jsx)("p", { className: "text-xs text-muted-foreground", children: "5 simple steps to get your instant tool access" })
              ] }),
              (0, p.jsxs)("div", { className: "px-4 py-2 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-2xl text-xs font-bold flex items-center gap-2", children: [
                "⏱️ Total Time: ", (0, p.jsx)("span", { className: "font-extrabold", children: tool.delivery_time || "5-15 Minutes" })
              ] })
            ]
          }),

          // 5-Step Process
          (0, p.jsx)("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 pt-2 text-center",
            children: [
              { step: "1", title: "Select & Checkout", desc: "Choose tool & complete order", icon: "🛒" },
              { step: "2", title: "Make Payment", desc: "Send via JazzCash/Easypaisa", icon: "💳" },
              { step: "3", title: "Upload Screenshot", desc: "Upload proof on Dashboard", icon: "📤" },
              { step: "4", title: "Verification", desc: "Fast automatic verification", icon: "🔍" },
              { step: "5", title: "Get Access", desc: "Receive logins in minutes", icon: "🔑" }
            ].map((st, i) => (
              (0, p.jsxs)("div", { key: i, className: "p-4 rounded-2xl bg-muted/30 border border-border/40 space-y-2 flex flex-col items-center justify-center relative", children: [
                (0, p.jsx)("div", { className: "w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center text-lg font-bold shadow-inner", children: st.icon }),
                (0, p.jsxs)("div", { className: "text-xs font-bold text-foreground", children: [`${st.step}. `, st.title] }),
                (0, p.jsx)("p", { className: "text-[11px] text-muted-foreground leading-tight", children: st.desc })
              ] })
            ))
          })
        ]
      }),

      // ================= TABS SECTION (OVERVIEW / FEATURES / FAQS / REVIEWS) =================
      (0, p.jsxs)("div", {
        className: "bg-card border border-border/60 rounded-3xl p-6 md:p-8 space-y-6 shadow-card",
        children: [

          // Tab Navigation Header
          (0, p.jsx)("div", {
            className: "flex items-center gap-2 border-b border-border/40 pb-4 overflow-x-auto no-scrollbar",
            children: [
              { id: "overview", label: "Overview" },
              { id: "features", label: "Features" },
              { id: "faqs", label: "FAQs" },
              { id: "reviews", label: `Reviews (${tool.reviews_count || '2,380'})` }
            ].map(tab => (
              (0, p.jsx)("button", {
                key: tab.id,
                onClick: () => setActiveTab(tab.id),
                className: `px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                    : "bg-muted/40 text-muted-foreground hover:text-foreground"
                }`,
                children: tab.label
              })
            ))
          }),

          // TAB 1: OVERVIEW & TRUST STATS
          activeTab === "overview" && (0, p.jsxs)("div", {
            className: "space-y-6 animate-fade-in",
            children: [
              (0, p.jsxs)("div", { className: "space-y-3", children: [
                (0, p.jsx)("h3", { className: "font-display text-xl font-bold text-foreground", children: `Product Overview` }),
                (0, p.jsx)("p", { className: "text-sm text-muted-foreground leading-relaxed", children: tool.overview || tool.description })
              ] }),

              (0, p.jsxs)("div", {
                className: "grid gap-6 md:grid-cols-3 pt-2",
                children: [
                  (0, p.jsxs)("div", { className: "md:col-span-2 space-y-2.5", children: (tool.highlights || []).map((hl, idx) => (
                    (0, p.jsxs)("div", { key: idx, className: "flex items-center gap-2 text-xs font-medium text-foreground", children: [
                      (0, p.jsx)("span", { className: "text-emerald-500 font-bold", children: "✓" }),
                      (0, p.jsx)("span", { children: hl })
                    ] })
                  )) }),

                  // Trusted by Thousands Box
                  (0, p.jsxs)("div", { className: "p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50 space-y-3 text-xs", children: [
                    (0, p.jsx)("h4", { className: "font-bold text-foreground", children: "Trusted by Thousands" }),
                    (0, p.jsxs)("div", { className: "space-y-2 text-muted-foreground font-medium", children: [
                      (0, p.jsxs)("div", { className: "flex items-center gap-1.5 text-amber-500 font-bold", children: ["★ ", "4.9/5 Average Rating"] }),
                      (0, p.jsxs)("div", { className: "flex items-center gap-1.5 text-emerald-600", children: ["🔒 ", "100% Safe & Secure"] }),
                      (0, p.jsxs)("div", { className: "flex items-center gap-1.5 text-rose-500", children: ["🎧 ", "24/7 WhatsApp Support"] }),
                      (0, p.jsxs)("div", { className: "flex items-center gap-1.5 text-foreground", children: ["😊 ", "98% Customer Satisfaction"] })
                    ] })
                  ] })
                ]
              })
            ]
          }),

          // TAB 2: FEATURES GRID
          activeTab === "features" && (0, p.jsxs)("div", {
            className: "space-y-4 animate-fade-in",
            children: [
              (0, p.jsx)("h3", { className: "font-display text-xl font-bold text-foreground", children: `Features of ${tool.name}` }),
              (0, p.jsx)("div", {
                className: "grid gap-4 sm:grid-cols-2",
                children: (tool.highlights || []).map((feat, idx) => (
                  (0, p.jsxs)("div", { key: idx, className: "flex items-start gap-3 p-4 rounded-2xl bg-muted/40 border border-border/40 text-xs font-semibold text-foreground", children: [
                    (0, p.jsx)("span", { className: "text-emerald-500 font-bold text-sm shrink-0", children: "✓" }),
                    (0, p.jsx)("span", { children: feat })
                  ] })
                ))
              })
            ]
          }),

          // TAB 3: FAQS ACCORDION
          activeTab === "faqs" && (0, p.jsxs)("div", {
            className: "space-y-4 animate-fade-in",
            children: [
              (0, p.jsx)("h3", { className: "font-display text-xl font-bold text-foreground", children: "Frequently Asked Questions (FAQs)" }),
              (0, p.jsx)("div", {
                className: "space-y-3",
                children: (tool.faqs || []).map((faq, idx) => (
                  (0, p.jsxs)("div", { key: idx, className: "p-5 rounded-2xl bg-muted/30 border border-border/50 space-y-2", children: [
                    (0, p.jsxs)("h4", { className: "font-display text-sm font-semibold text-foreground flex items-center gap-2", children: ["❓ ", faq.q] }),
                    (0, p.jsx)("p", { className: "text-xs text-muted-foreground leading-relaxed pl-6", children: faq.a })
                  ] })
                ))
              })
            ]
          }),

          // TAB 4: CUSTOMER REVIEWS WIDGET
          activeTab === "reviews" && (0, p.jsxs)("div", {
            className: "space-y-6 animate-fade-in",
            children: [
              (0, p.jsxs)("div", {
                className: "grid gap-6 md:grid-cols-3 items-center bg-muted/30 p-6 rounded-2xl border border-border/40",
                children: [
                  (0, p.jsxs)("div", { className: "text-center space-y-1", children: [
                    (0, p.jsx)("div", { className: "font-display text-4xl font-extrabold text-foreground", children: tool.rating || "4.9" }),
                    (0, p.jsx)("div", { className: "text-amber-400 font-bold text-sm", children: "★★★★★" }),
                    (0, p.jsxs)("p", { className: "text-xs text-muted-foreground", children: [`Based on ${tool.reviews_count || '2,380'} reviews`] })
                  ] }),
                  (0, p.jsxs)("div", { className: "md:col-span-2 space-y-2 text-xs text-muted-foreground", children: [
                    (0, p.jsxs)("div", { className: "flex items-center gap-3", children: [(0, p.jsx)("span", { className: "w-8", children: "5 ★" }), (0, p.jsx)("div", { className: "flex-1 bg-muted rounded-full h-2 overflow-hidden", children: (0, p.jsx)("div", { className: "bg-rose-500 h-full w-[92%]" }) }), (0, p.jsx)("span", { className: "w-8 text-right font-bold", children: "92%" })] }),
                    (0, p.jsxs)("div", { className: "flex items-center gap-3", children: [(0, p.jsx)("span", { className: "w-8", children: "4 ★" }), (0, p.jsx)("div", { className: "flex-1 bg-muted rounded-full h-2 overflow-hidden", children: (0, p.jsx)("div", { className: "bg-rose-500 h-full w-[6%]" }) }), (0, p.jsx)("span", { className: "w-8 text-right font-bold", children: "6%" })] }),
                    (0, p.jsxs)("div", { className: "flex items-center gap-3", children: [(0, p.jsx)("span", { className: "w-8", children: "3 ★" }), (0, p.jsx)("div", { className: "flex-1 bg-muted rounded-full h-2 overflow-hidden", children: (0, p.jsx)("div", { className: "bg-rose-500 h-full w-[1%]" }) }), (0, p.jsx)("span", { className: "w-8 text-right font-bold", children: "1%" })] })
                  ] })
                ]
              }),

              (0, p.jsx)("div", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                children: (tool.customer_reviews || []).map((rev, idx) => (
                  (0, p.jsxs)("div", { key: idx, className: "p-5 rounded-2xl bg-card border border-border/60 space-y-3 shadow-sm", children: [
                    (0, p.jsxs)("div", { className: "flex items-center justify-between", children: [
                      (0, p.jsxs)("div", { className: "flex items-center gap-2", children: [
                        (0, p.jsx)("div", { className: "w-8 h-8 rounded-full bg-rose-500/10 text-rose-500 font-bold flex items-center justify-center text-xs", children: rev.name.charAt(0) }),
                        (0, p.jsxs)("div", { children: [
                          (0, p.jsx)("div", { className: "font-bold text-xs text-foreground", children: rev.name }),
                          rev.verified && (0, p.jsx)("span", { className: "text-[10px] text-emerald-600 font-bold", children: "✓ Verified Buyer" })
                        ] })
                      ] }),
                      (0, p.jsx)("span", { className: "text-[10px] text-muted-foreground", children: rev.date })
                    ] }),
                    (0, p.jsx)("div", { className: "text-amber-400 text-xs", children: "★★★★★" }),
                    (0, p.jsx)("p", { className: "text-xs text-muted-foreground leading-relaxed", children: rev.comment })
                  ] })
                ))
              })
            ]
          })
        ]
      }),

      // ================= YOU MAY ALSO LIKE (RELATED PRODUCTS GRID) =================
      (0, p.jsxs)("div", {
        className: "space-y-6 pt-4",
        children: [
          (0, p.jsxs)("div", { className: "flex items-center justify-between", children: [
            (0, p.jsx)("h3", { className: "font-display text-2xl font-bold text-foreground", children: "You May Also Like" }),
            (0, p.jsx)(n, { to: "/tools", className: "text-xs font-bold text-rose-500 hover:underline", children: "View All Tools →" })
          ] }),

          (0, p.jsx)("div", {
            className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
            children: relatedTools.map(rel => (
              (0, p.jsx)(n, {
                key: rel.id,
                to: `/tools/${rel.slug}`,
                className: "block group",
                children: (0, p.jsxs)("div", {
                  className: "bg-card border border-border/60 rounded-2xl p-4 transition-all hover:-translate-y-1 hover:border-rose-500/40 shadow-sm hover:shadow-glow space-y-3",
                  children: [
                    (0, p.jsxs)("div", { className: "flex items-center gap-3", children: [
                      (0, p.jsx)("img", { src: rel.icon_url, alt: rel.name, className: "w-10 h-10 object-contain rounded-xl" }),
                      (0, p.jsxs)("div", { className: "overflow-hidden", children: [
                        (0, p.jsx)("h4", { className: "font-display text-sm font-bold truncate group-hover:text-rose-500 transition-colors", children: rel.name }),
                        (0, p.jsx)("span", { className: "text-[10px] text-muted-foreground font-semibold", children: rel.category })
                      ] })
                    ] }),
                    (0, p.jsxs)("div", { className: "flex items-center justify-between border-t border-border/40 pt-3 text-xs", children: [
                      (0, p.jsx)("span", { className: "font-bold text-rose-500", children: rel.price }),
                      (0, p.jsxs)("span", { className: "text-[10px] text-amber-500 font-bold", children: ["★ ", rel.rating] })
                    ] })
                  ]
                })
              })
            ))
          })
        ]
      }),

      // Promo Box
      (0, p.jsxs)("div", {
        className: "bg-gradient-to-r from-rose-500 via-rose-500 to-rose-600 text-white rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-lg shadow-rose-500/10",
        children: [
          (0, p.jsxs)("div", { children: [
            (0, p.jsx)("h4", { className: "font-display text-lg font-bold", children: "🎁 Special Offer for You!" }),
            (0, p.jsxs)("p", { className: "text-xs text-white/90 mt-1", children: ["Get 10% OFF on your order. Use code: ", (0, p.jsx)("span", { className: "font-bold underline bg-white/20 px-2 py-0.5 rounded font-mono ml-1", children: "LWS10" })] })
          ] }),
          (0, p.jsx)("button", {
            onClick: () => { navigator.clipboard.writeText("LWS10"); toast.success("Coupon LWS10 copied!"); },
            className: "px-6 py-2.5 bg-white text-rose-600 font-bold text-xs rounded-xl shadow-md hover:bg-gray-50 transition-all cursor-pointer shrink-0",
            children: "Copy Code 🚀"
          })
        ]
      }),

      // Bottom Trust Footer Bar
      (0, p.jsx)("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border/60 pt-8 text-center text-xs text-muted-foreground",
        children: [
          (0, p.jsxs)("div", { className: "p-4 rounded-2xl bg-card border border-border/40 space-y-1", children: [(0, p.jsx)("div", { className: "text-lg", children: "🔒" }), (0, p.jsx)("div", { className: "font-bold text-foreground", children: "100% Safe & Secure" }), (0, p.jsx)("div", { className: "text-[11px]", children: "Your security is our priority" })] }),
          (0, p.jsxs)("div", { className: "p-4 rounded-2xl bg-card border border-border/40 space-y-1", children: [(0, p.jsx)("div", { className: "text-lg", children: "⚡" }), (0, p.jsx)("div", { className: "font-bold text-foreground", children: "Instant Delivery" }), (0, p.jsx)("div", { className: "text-[11px]", children: "Get your tools in 5-15 mins" })] }),
          (0, p.jsxs)("div", { className: "p-4 rounded-2xl bg-card border border-border/40 space-y-1", children: [(0, p.jsx)("div", { className: "text-lg", children: "🛡️" }), (0, p.jsx)("div", { className: "font-bold text-foreground", children: "30-Day Warranty" }), (0, p.jsx)("div", { className: "text-[11px]", children: "Replacement guarantee" })] }),
          (0, p.jsxs)("div", { className: "p-4 rounded-2xl bg-card border border-border/40 space-y-1", children: [(0, p.jsx)("div", { className: "text-lg", children: "🎧" }), (0, p.jsx)("div", { className: "font-bold text-foreground", children: "24/7 Support" }), (0, p.jsx)("div", { className: "text-[11px]", children: "We are here to help anytime" })] })
        ]
      })

    ]
  });
}

export { ToolDetailsComponent as component };
