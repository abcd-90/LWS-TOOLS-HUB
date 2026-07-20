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
    delivery_time: "5 - 15 Minutes Instant Delivery",
    warranty_text: "30-Day Instant Replacement Guarantee via WhatsApp",
    description: "Unlock full access to OpenAI's most powerful AI model GPT-4o, DALL-E 3 image creator, Advanced Data Analysis, Custom GPTs & priority response speeds.",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    canva_link: "https://chatgpt.com",
    is_active: true,
    is_trending: true,
    features: [
      "Access to GPT-4o & GPT-4 Turbo models",
      "DALL-E 3 High-resolution AI Image Generation",
      "Advanced Data Analysis & Python Code Execution",
      "Custom GPTs creation & Store access",
      "4x faster response speed with no queue",
      "Browsing & Real-time Web Search"
    ],
    faqs: [
      { q: "How fast will I receive my ChatGPT Plus access?", a: "Access details are delivered to your email & WhatsApp within 5 to 15 minutes of payment verification." },
      { q: "Is there a replacement warranty?", a: "Yes, you get a full 30-day replacement warranty. If you experience any issue, WhatsApp support fixes it instantly." },
      { q: "Can I use Custom GPTs & DALL-E 3?", a: "Yes, all ChatGPT Plus features including DALL-E 3 and Custom GPTs are 100% active." },
      { q: "Can I renew next month?", a: "Yes, you can easily renew your subscription every month on the same account." }
    ]
  },
  {
    id: "tool-canva",
    name: "Canva Pro (Private Team)",
    slug: "canva-pro",
    category: "Design",
    price: "PKR 499",
    original_price: "PKR 3,500",
    delivery_time: "Instant Email Invite (5 Mins)",
    warranty_text: "1-Year Full Warranty Support",
    description: "Unlimited access to 100M+ premium stock photos, videos, brand kits, magic resize & AI background remover on your personal account.",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
    canva_link: "https://canva.com",
    is_active: true,
    is_trending: true,
    features: [
      "100+ Million Premium Stock Photos, Videos & Audio",
      "One-click Magic Background Remover",
      "Magic Resize for all social media formats",
      "Brand Kit with custom fonts & colors",
      "100GB Cloud Storage for designs",
      "Premium Templates & SVG Vector Exports"
    ],
    faqs: [
      { q: "Will Canva Pro be activated on my existing account?", a: "Yes! You will receive an official email invite link to upgrade your existing personal Canva account." },
      { q: "Are my designs private?", a: "100% private. Nobody else can see or edit your personal designs." },
      { q: "What is the warranty period?", a: "We provide 1-year full warranty support with instant replacement guarantee." }
    ]
  },
  {
    id: "tool-midjourney",
    name: "Midjourney Pro (Fast GPU)",
    slug: "midjourney-pro",
    category: "AI",
    price: "PKR 1,999",
    original_price: "PKR 8,999",
    delivery_time: "5 - 15 Minutes Instant Delivery",
    warranty_text: "30-Day Instant Replacement Guarantee",
    description: "Generate photorealistic 8K AI artwork with 30 hours of fast GPU time, stealth mode generation & commercial rights.",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    canva_link: "https://midjourney.com",
    is_active: true,
    is_trending: true,
    features: [
      "30 Hours of Fast GPU Generation Time",
      "Unlimited Relax GPU Generations",
      "Stealth Mode (Private generations)",
      "Full Commercial Usage License",
      "V6 & Niji 6 AI Image Engine Support",
      "High Resolution Upscaling & Pan/Vary tools"
    ],
    faqs: [
      { q: "How do I access Midjourney?", a: "You will receive dedicated Discord bot credentials or channel invite with full Fast GPU credits." },
      { q: "Can I use generated images commercially?", a: "Yes, all Midjourney Pro generations include full commercial licensing rights." }
    ]
  },
  {
    id: "tool-semrush",
    name: "Semrush Guru Plan",
    slug: "semrush-guru",
    category: "SEO",
    price: "PKR 2,499",
    original_price: "PKR 12,000",
    delivery_time: "5 - 15 Minutes",
    warranty_text: "30-Day Warranty with Dedicated Logins",
    description: "All-in-one SEO toolkit: Keyword research, competitor analysis, backlink audits, historical data & 15 site audit reports.",
    icon_url: "https://cdn.worldvectorlogo.com/logos/semrush-1.svg",
    canva_link: "https://semrush.com",
    is_active: true,
    is_trending: true,
    features: [
      "Keyword Magic Tool & Difficulty Analysis",
      "Domain Overview & Competitor Traffic Insights",
      "Backlink Audit & Toxic Link Checker",
      "Historical Data analysis (since 2012)",
      "15 Project Site Audits & Rank Tracking",
      "Content Marketing Toolkit & Topic Research"
    ],
    faqs: [
      { q: "Is this Semrush Guru Plan?", a: "Yes, full Guru tier access with project audits and keyword tracking." },
      { q: "What is the delivery time?", a: "Delivered within 5-15 minutes after payment verification." }
    ]
  },
  {
    id: "tool-netflix",
    name: "Netflix 4K Ultra HD (Private Screen)",
    slug: "netflix-4k",
    category: "Streaming",
    price: "PKR 799",
    original_price: "PKR 2,200",
    delivery_time: "5 - 15 Minutes",
    warranty_text: "30-Day Replacement Guarantee",
    description: "Dedicated 4K UHD screen with personal PIN lock, unlimited movies & TV series in HDR with multi-device login.",
    icon_url: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico",
    canva_link: "https://netflix.com",
    is_active: true,
    is_trending: true,
    features: [
      "4K Ultra HD + HDR Streaming Quality",
      "Dedicated Private Profile with PIN Lock",
      "Unlimited Movies, TV Shows & Documentaries",
      "Multi-device login (TV, Mobile, Laptop)",
      "No Household restriction issues",
      "30-Day Full Replacement Warranty"
    ],
    faqs: [
      { q: "Will I get a PIN-locked profile?", a: "Yes! You get your own private profile with a 4-digit PIN lock." },
      { q: "Does it work on Smart TV?", a: "Yes, works seamlessly on Smart TVs, Android boxes, Phones and Laptops." }
    ]
  },
  {
    id: "tool-capcut",
    name: "CapCut Pro (Desktop & Mobile)",
    slug: "capcut-pro",
    category: "Video",
    price: "PKR 699",
    original_price: "PKR 2,500",
    delivery_time: "5 - 15 Minutes",
    warranty_text: "30-Day Replacement Guarantee",
    description: "AI video editing, auto-captions in 20+ languages, 4K 60fps export, premium visual effects & cloud project sync.",
    icon_url: "https://sf16-va.tiktokcdn.com/obj/eden-va2/ais_lseh7eh7b/capcut_logo.png",
    canva_link: "https://capcut.com",
    is_active: true,
    is_trending: false,
    features: [
      "AI Auto-Subtitles & Speech-to-Text",
      "One-Click Background Removal for Video",
      "4K 60FPS High-Bitrate Export",
      "1,000+ Pro Transitions, Filters & Effects",
      "AI Body Effects & Facial Enhancement",
      "Desktop & Mobile Cross-Platform Sync"
    ],
    faqs: [
      { q: "Does it work on Windows/Mac and Mobile?", a: "Yes, CapCut Pro works on Windows PC, Mac, iOS and Android." }
    ]
  },
  {
    id: "tool-grammarly",
    name: "Grammarly Premium",
    slug: "grammarly-premium",
    category: "Productivity",
    price: "PKR 699",
    original_price: "PKR 3,000",
    delivery_time: "5 - 15 Minutes",
    warranty_text: "30-Day Replacement Guarantee",
    description: "AI writing assistant with plagiarism checker, tone adjustment, vocabulary enhancement & advanced sentence rewrites.",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Grammarly_icon.svg",
    canva_link: "https://grammarly.com",
    is_active: true,
    is_trending: false,
    features: [
      "Advanced Clarity & Full-Sentence Rewrites",
      "Plagiarism Detector across 16 Billion web pages",
      "Tone & Formality Adjustment",
      "GrammarlyGO AI Writing Assistance",
      "Browser Extension & MS Word Integration",
      "Vocabulary Enhancement & Synonym Suggestions"
    ],
    faqs: [
      { q: "Does it include Plagiarism Checker?", a: "Yes, full premium plagiarism detection is included." }
    ]
  },
  {
    id: "tool-claude",
    name: "Claude 3.5 Sonnet Pro",
    slug: "claude-3-pro",
    category: "AI",
    price: "PKR 1,699",
    original_price: "PKR 6,500",
    delivery_time: "5 - 15 Minutes",
    warranty_text: "30-Day Replacement Guarantee",
    description: "Anthropic's flagship AI model featuring 200K context window, Artifacts interactive preview, coding & document analysis.",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
    canva_link: "https://claude.ai",
    is_active: true,
    is_trending: true,
    features: [
      "Access to Claude 3.5 Sonnet & Claude 3 Opus",
      "200,000 Token Context Window (Book-length prompts)",
      "Interactive Artifacts (Live React code/SVG previews)",
      "Superior Coding & Complex Logic Performance",
      "PDF, Image & Document Analysis",
      "5x Usage Limits compared to free tier"
    ],
    faqs: [
      { q: "Is Artifacts feature available?", a: "Yes, Artifacts live code and UI rendering works 100%." }
    ]
  },
  {
    id: "tool-adobe",
    name: "Adobe Creative Cloud (All Apps)",
    slug: "adobe-creative-cloud",
    category: "Design",
    price: "PKR 2,999",
    original_price: "PKR 18,000",
    delivery_time: "5 - 15 Minutes",
    warranty_text: "1-Year Official License Warranty",
    description: "20+ creative desktop apps including Photoshop, Illustrator, Premiere Pro, After Effects, Acrobat Pro + 100GB cloud storage.",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg",
    canva_link: "https://adobe.com",
    is_active: true,
    is_trending: false,
    features: [
      "20+ Desktop & Mobile Creative Apps",
      "Photoshop Generative Fill & AI Tools",
      "Premiere Pro AI Speech Enhance",
      "100GB Adobe Cloud Storage",
      "Adobe Fonts Library Access",
      "Official Updates via Creative Cloud App"
    ],
    faqs: [
      { q: "Will I get official Adobe Creative Cloud app updates?", a: "Yes, you download apps directly from official Adobe CC Desktop." }
    ]
  },
  {
    id: "tool-spotify",
    name: "Spotify Premium (Individual/Duo)",
    slug: "spotify-premium",
    category: "Streaming",
    price: "PKR 499",
    original_price: "PKR 1,500",
    delivery_time: "Instant Activation",
    warranty_text: "6-Month & 1-Year Subscription Warranty",
    description: "Ad-free music listening, offline song downloads, high-fidelity 320kbps audio & unlimited track skips.",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    canva_link: "https://spotify.com",
    is_active: true,
    is_trending: false,
    features: [
      "Ad-free Music & Podcast Streaming",
      "Unlimited Offline Downloads on 5 Devices",
      "320kbps Extreme High-Quality Audio",
      "Unlimited Track Skips & On-Demand Playback",
      "Compatible with iOS, Android, Windows, Car Play",
      "Full Replacement Guarantee"
    ],
    faqs: [
      { q: "Can I use my existing Spotify account?", a: "Yes, we upgrade your existing personal account without losing playlists." }
    ]
  }
];

function ToolDetailsComponent() {
  const rawSlug = typeof window !== "undefined" ? window.location.pathname.split("/").pop() : "";
  const slug = rawSlug && rawSlug !== "index.html" ? rawSlug : "chatgpt-plus";
  
  const [tool, setTool] = React.useState(null);
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
          delivery_time: matchedTool.delivery_time || defaultMatch.delivery_time,
          features: matchedTool.features || defaultMatch.features,
          faqs: matchedTool.faqs || defaultMatch.faqs
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

  return (0, p.jsxs)("div", {
    className: "container mx-auto px-4 py-10 max-w-5xl space-y-10",
    children: [
      (0, p.jsx)(n, {
        to: "/tools",
        className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors",
        children: (0, p.jsxs)("span", {
          className: "flex items-center gap-1 cursor-pointer font-medium",
          children: [
            (0, p.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "2.5",
              stroke: "currentColor",
              className: "w-4 h-4",
              children: (0, p.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5 8.25 12l7.5-7.5" })
            }),
            " Back to Catalog"
          ]
        })
      }),

      // Step 2 — Main Tool Info Banner
      (0, p.jsxs)("div", {
        className: "grid gap-8 md:grid-cols-3 bg-card border border-border/60 rounded-3xl p-6 md:p-8 shadow-card",
        children: [
          (0, p.jsx)("div", {
            className: "md:col-span-1 flex flex-col items-center justify-center gap-4 text-center",
            children: (0, p.jsxs)("div", {
              className: "relative h-44 w-44 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/40 border border-border/60 shadow-card flex items-center justify-center p-6 overflow-hidden",
              children: [
                (0, p.jsx)("div", { className: "absolute inset-0 bg-primary/5 blur-2xl rounded-full" }),
                (0, p.jsx)("img", {
                  src: tool.icon_url || fallbackIcon,
                  alt: tool.name,
                  className: "h-28 w-28 object-contain relative z-10",
                  onError: e => { e.currentTarget.src = fallbackIcon; }
                })
              ]
            })
          }),
          (0, p.jsxs)("div", {
            className: "md:col-span-2 space-y-6 flex flex-col justify-between",
            children: [
              (0, p.jsxs)("div", {
                className: "space-y-3",
                children: [
                  (0, p.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [
                      (0, p.jsx)("span", {
                        className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20",
                        children: tool.category
                      }),
                      tool.is_trending && (0, p.jsx)("span", {
                        className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20",
                        children: "🔥 Hot / Trending"
                      }),
                      (0, p.jsx)("span", {
                        className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
                        children: "⚡ Verified Instant"
                      })
                    ]
                  }),
                  (0, p.jsx)("h1", {
                    className: "font-display text-3xl md:text-4xl font-extrabold tracking-tight text-foreground",
                    children: tool.name
                  }),
                  (0, p.jsxs)("div", {
                    className: "flex items-baseline gap-3 pt-1",
                    children: [
                      (0, p.jsx)("span", {
                        className: "font-display text-3xl font-bold text-primary",
                        children: tool.price || "PKR 1,499"
                      }),
                      tool.original_price && (0, p.jsx)("span", {
                        className: "text-base text-muted-foreground line-through",
                        children: tool.original_price
                      }),
                      (0, p.jsx)("span", {
                        className: "text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200",
                        children: "Save up to 75%"
                      })
                    ]
                  }),
                  (0, p.jsx)("p", {
                    className: "text-sm text-muted-foreground leading-relaxed pt-2",
                    children: tool.description
                  })
                ]
              }),

              // Action buttons & Guarantee badges
              (0, p.jsxs)("div", {
                className: "pt-4 border-t border-border/60 space-y-4",
                children: [
                  (0, p.jsxs)("div", {
                    className: "flex flex-wrap gap-3",
                    children: [
                      (0, p.jsx)("button", {
                        onClick: e => {
                          e.preventDefault();
                          if (!inCart) {
                            addItem({
                              toolId: tool.id,
                              toolName: tool.name,
                              planName: "Standard",
                              iconUrl: tool.icon_url || ""
                            });
                            toast.success(`${tool.name} added to cart`);
                          }
                        },
                        disabled: inCart,
                        className: `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all h-12 px-8 cursor-pointer flex-1 ${
                          inCart
                            ? "bg-secondary text-secondary-foreground pointer-events-none opacity-80"
                            : "bg-primary text-primary-foreground shadow-glow hover:bg-primary/90"
                        }`,
                        children: inCart ? "Already in Cart 🛒" : "Add to Cart 🛒"
                      }),
                      (0, p.jsx)("a", {
                        href: `https://wa.me/923106126454?text=Hi%20Techno%20Tools!%20I%20want%20to%20order%20${encodeURIComponent(tool.name)}%20for%20${encodeURIComponent(tool.price || "PKR 1,499")}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold bg-emerald-600 text-white shadow-md hover:bg-emerald-700 h-12 px-6 cursor-pointer",
                        children: "Buy on WhatsApp 💬"
                      })
                    ]
                  }),
                  (0, p.jsxs)("div", {
                    className: "flex flex-wrap items-center justify-between text-xs text-muted-foreground pt-1 gap-2",
                    children: [
                      (0, p.jsxs)("span", {
                        className: "flex items-center gap-1 font-medium text-emerald-600",
                        children: ["🛡️ ", tool.warranty_text || "30-Day Replacement Guarantee"]
                      }),
                      (0, p.jsxs)("span", {
                        className: "flex items-center gap-1 font-medium",
                        children: ["⚡ ", tool.delivery_time || "5-15 Mins Delivery"]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      // Step 2 — Delivery Time & Order Flow Banner
      (0, p.jsxs)("div", {
        className: "bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 border border-primary/20 rounded-3xl p-6 md:p-8 space-y-4",
        children: [
          (0, p.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [
              (0, p.jsx)("div", {
                className: "h-10 w-10 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-md",
                children: "⚡"
              }),
              (0, p.jsxs)("div", {
                children: [
                  (0, p.jsx)("h3", { className: "font-display text-lg font-bold text-foreground", children: "Delivery Time & Order Process" }),
                  (0, p.jsx)("p", { className: "text-xs text-muted-foreground", children: tool.delivery_time || "5 - 15 Minutes Instant Delivery via WhatsApp & Email" })
                ]
              })
            ]
          }),
          (0, p.jsxs)("div", {
            className: "grid gap-4 md:grid-cols-3 pt-2 text-xs",
            children: [
              (0, p.jsxs)("div", {
                className: "bg-card p-4 rounded-2xl border border-border/60 space-y-1",
                children: [
                  (0, p.jsx)("div", { className: "font-bold text-primary", children: "1. Select & Checkout" }),
                  (0, p.jsx)("p", { className: "text-muted-foreground", children: "Add tool to cart or click Buy on WhatsApp to initiate your request." })
                ]
              }),
              (0, p.jsxs)("div", {
                className: "bg-card p-4 rounded-2xl border border-border/60 space-y-1",
                children: [
                  (0, p.jsx)("div", { className: "font-bold text-primary", children: "2. Payment Verification" }),
                  (0, p.jsx)("p", { className: "text-muted-foreground", children: "Upload payment screenshot on Dashboard or send directly on WhatsApp." })
                ]
              }),
              (0, p.jsxs)("div", {
                className: "bg-card p-4 rounded-2xl border border-border/60 space-y-1",
                children: [
                  (0, p.jsx)("div", { className: "font-bold text-primary", children: "3. Instant Access & Guarantee" }),
                  (0, p.jsx)("p", { className: "text-muted-foreground", children: "Logins / invite links are sent within 5-15 mins with 24/7 warranty support." })
                ]
              })
            ]
          })
        ]
      }),

      // Step 2 — Features Grid
      (0, p.jsxs)("div", {
        className: "bg-card border border-border/60 rounded-3xl p-6 md:p-8 space-y-6 shadow-card",
        children: [
          (0, p.jsxs)("div", {
            className: "space-y-1",
            children: [
              (0, p.jsx)("h3", { className: "font-display text-2xl font-bold text-foreground", children: `Features of ${tool.name}` }),
              (0, p.jsx)("p", { className: "text-xs text-muted-foreground", children: "Everything included in this premium tool subscription" })
            ]
          }),
          (0, p.jsx)("div", {
            className: "grid gap-4 sm:grid-cols-2",
            children: (tool.features || []).map((feat, idx) => (
              (0, p.jsxs)("div", {
                key: idx,
                className: "flex items-start gap-3 p-4 rounded-2xl bg-muted/40 border border-border/40 text-sm font-medium text-foreground",
                children: [
                  (0, p.jsx)("span", { className: "text-emerald-500 font-bold text-base shrink-0", children: "✓" }),
                  (0, p.jsx)("span", { children: feat })
                ]
              })
            ))
          })
        ]
      }),

      // Step 2 — FAQs Section
      (0, p.jsxs)("div", {
        className: "bg-card border border-border/60 rounded-3xl p-6 md:p-8 space-y-6 shadow-card",
        children: [
          (0, p.jsxs)("div", {
            className: "space-y-1",
            children: [
              (0, p.jsx)("h3", { className: "font-display text-2xl font-bold text-foreground", children: `Frequently Asked Questions (FAQs)` }),
              (0, p.jsx)("p", { className: "text-xs text-muted-foreground", children: `Common questions about ${tool.name}` })
            ]
          }),
          (0, p.jsx)("div", {
            className: "space-y-4",
            children: (tool.faqs || []).map((faq, idx) => (
              (0, p.jsxs)("div", {
                key: idx,
                className: "p-5 rounded-2xl bg-muted/30 border border-border/50 space-y-2",
                children: [
                  (0, p.jsxs)("h4", { className: "font-display text-base font-semibold text-foreground flex items-center gap-2", children: ["❓ ", faq.q] }),
                  (0, p.jsx)("p", { className: "text-sm text-muted-foreground leading-relaxed pl-6", children: faq.a })
                ]
              })
            ))
          })
        ]
      })
    ]
  });
}

export { ToolDetailsComponent as component };
