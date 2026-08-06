import { s as e } from "./button-GRMyZlvL.js";
import { t as n } from "./link-CZ3VaoX1.js";
import { l as r, m as i } from "./button-GRMyZlvL.js";
import { B as supabase, y as useCart, a as toast } from "./index-Dr8K-Qyh.js";

var p = e();
var React = i(r(), 1);

export const FEATURED_TOOLS_DATA = [
  {
    id: "tool-gemini-pro-18m",
    name: "Gemini AI Pro — 18 Months",
    slug: "gemini-ai-pro-18m",
    category: "AI",
    price: "PKR 599",
    original_price: "PKR 100,000",
    savings: "Save 99%",
    delivery_time: "5 - 15 Minutes Instant Delivery",
    warranty_text: "18 Months Validity • Full Replacement Guarantee",
    description: "18 Months Gemini AI Pro subscription + 5TB Google Cloud Storage. Full Family Account activated on your own Gmail. Works worldwide, 100% private and secure.",
    icon_url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    canva_link: "https://gemini.google.com",
    is_active: true,
    is_trending: true,
    gallery_images: [
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg"
    ],
    features: [
      "⚡ 18 Months Gemini AI Pro Access",
      "☁️ 5TB Google Cloud Storage",
      "👨‍👩‍👧‍👦 Full Family Account (Not An Invite)",
      "🔒 Activated On Your Own Gmail",
      "🌍 Works Worldwide",
      "💯 Private & Secure"
    ],
    faqs: [
      { q: "How is Gemini Pro activated?", a: "It is activated directly on your own Gmail address securely within 5 to 15 minutes." },
      { q: "What is the warranty period?", a: "You get full 18-month warranty support for the entire duration of the subscription." },
      { q: "Is this a shared account or invite?", a: "No, this is a Full Family Account activated on your personal Gmail." },
      { q: "Does it include cloud storage?", a: "Yes, it includes 5TB Google Cloud Storage!" }
    ]
  }
];

function ToolDetailsComponent() {
  const rawSlug = typeof window !== "undefined" ? window.location.pathname.split("/").pop() : "";
  const slug = rawSlug && rawSlug !== "index.html" ? rawSlug.toLowerCase() : "adobe-photoshop";
  
  const [tool, setTool] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [selectedImg, setSelectedImg] = React.useState(0);
  const { addItem, items } = useCart();

  React.useEffect(() => {
    async function fetchTool() {
      let matchedTool = null;
      try {
        const { data, error } = await supabase
          .from("tools")
          .select("*")
          .or(`slug.eq.${slug},id.eq.${slug}`)
          .single();
        if (!error && data) {
          matchedTool = data;
        }
      } catch (err) {
        console.error(err);
      }

      // Robust matching against FEATURED_TOOLS_DATA even if slug is 'adobe-photoshop-1year'
      const matchedDefault = FEATURED_TOOLS_DATA.find(t => 
        t.slug === slug || 
        t.id === slug || 
        slug.includes(t.slug) || 
        t.slug.includes(slug) ||
        (slug.includes("photoshop") && t.slug.includes("photoshop")) ||
        (slug.includes("canva") && t.slug.includes("canva")) ||
        (slug.includes("chatgpt") && t.slug.includes("chatgpt")) ||
        (slug.includes("midjourney") && t.slug.includes("midjourney")) ||
        (slug.includes("semrush") && t.slug.includes("semrush")) ||
        (slug.includes("netflix") && t.slug.includes("netflix")) ||
        (slug.includes("capcut") && t.slug.includes("capcut")) ||
        (slug.includes("grammarly") && t.slug.includes("grammarly")) ||
        (slug.includes("claude") && t.slug.includes("claude")) ||
        (slug.includes("spotify") && t.slug.includes("spotify")) ||
        (slug.includes("adobe") && t.slug.includes("adobe"))
      ) || FEATURED_TOOLS_DATA[0];

      if (matchedTool) {
        setTool({
          ...matchedDefault,
          ...matchedTool,
          name: matchedTool.name || matchedDefault.name,
          price: matchedTool.price || matchedDefault.price,
          original_price: matchedTool.original_price || matchedDefault.original_price,
          savings: matchedDefault.savings,
          delivery_time: matchedTool.delivery_time || matchedDefault.delivery_time,
          features: matchedTool.features && matchedTool.features.length > 0 ? matchedTool.features : matchedDefault.features,
          faqs: matchedTool.faqs && matchedTool.faqs.length > 0 ? matchedTool.faqs : matchedDefault.faqs
        });
      } else {
        setTool(matchedDefault);
      }
      setLoading(false);
    }
    fetchTool();
  }, [slug]);

  if (loading) {
    return (0, p.jsx)("div", {
      className: "container mx-auto px-4 py-20 flex justify-center items-center min-h-[50vh]",
      children: (0, p.jsxs)("div", {
        className: "flex flex-col items-center gap-3 text-slate-500",
        children: [
          (0, p.jsx)("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-red-500 border-t-transparent" }),
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
          (0, p.jsx)("h2", { className: "text-2xl font-bold text-red-500", children: "Tool Not Found" }),
          (0, p.jsx)(n, {
            to: "/tools",
            children: (0, p.jsx)("button", {
              className: "inline-flex items-center justify-center rounded-xl text-sm font-semibold bg-red-500 hover:bg-red-600 text-white h-10 px-6 cursor-pointer transition-colors",
              children: "Back to Catalog"
            })
          })
        ]
      })
    });
  }

  const inCart = items.some(item => item.toolId === tool.id || item.toolName === tool.name);
  const fallbackIcon = `https://api.dicebear.com/9.x/shapes/svg?seed=${encodeURIComponent(tool.name)}&backgroundType=gradientLinear&backgroundColor=1e9bff,7ee8fa`;
  const mainIcon = tool.icon_url || fallbackIcon;

  const defaultGallery = [mainIcon];
  const rawGallery = (tool.gallery_images && tool.gallery_images.length > 0) ? tool.gallery_images : defaultGallery;
  const gallery = rawGallery.filter(img => img && !img.includes("unsplash"));
  if (gallery.length === 0) gallery.push(mainIcon);
  const activeImg = gallery[selectedImg] || mainIcon;

  return (0, p.jsxs)("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-6xl space-y-8 sm:space-y-10 text-slate-800",
    children: [

      // Top Breadcrumb Link
      (0, p.jsx)(n, {
        to: "/tools",
        className: "inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-red-500 transition-colors cursor-pointer mb-2",
        children: (0, p.jsxs)("span", {
          className: "flex items-center gap-1.5",
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

      // 1. HERO SECTION CARD
      (0, p.jsx)("div", {
        className: "bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs",
        children: (0, p.jsxs)("div", {
          className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start",
          children: [

            // LEFT COLUMN: Product Gallery (~45% width -> lg:col-span-5)
            (0, p.jsxs)("div", {
              className: "lg:col-span-5 flex flex-col space-y-4 w-full",
              children: [
                // Main Image Container (Fixed Square, Soft Blush BG, Never Stretch)
                (0, p.jsx)("div", {
                  className: "w-full aspect-square rounded-3xl bg-rose-50/60 border border-rose-100/80 p-6 sm:p-8 flex items-center justify-center overflow-hidden relative shadow-2xs group",
                  children: (0, p.jsx)("img", {
                    src: activeImg,
                    alt: tool.name,
                    className: "w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 transform group-hover:scale-105",
                    onError: e => { e.currentTarget.src = fallbackIcon; }
                  })
                }),

                // 4 Thumbnail Cards Grid
                (0, p.jsx)("div", {
                  className: "grid grid-cols-4 gap-3",
                  children: gallery.slice(0, 4).map((imgUrl, idx) => {
                    const isSelected = selectedImg === idx;
                    return (0, p.jsx)("button", {
                      key: idx,
                      onClick: () => setSelectedImg(idx),
                      className: `aspect-square rounded-2xl border-2 p-1 bg-white cursor-pointer overflow-hidden transition-all flex items-center justify-center shadow-2xs ${
                        isSelected 
                          ? "border-red-500 ring-2 ring-red-500/20 scale-[1.02]" 
                          : "border-slate-200/80 hover:border-red-300 hover:scale-[1.01]"
                      }`,
                      children: (0, p.jsx)("img", {
                        src: imgUrl,
                        alt: `Preview ${idx + 1}`,
                        className: "w-full h-full object-cover rounded-xl",
                        onError: e => { e.currentTarget.src = fallbackIcon; }
                      })
                    }, idx);
                  })
                })
              ]
            }),

            // RIGHT COLUMN: Product Info & Pricing & Info Cards & CTA Buttons (lg:col-span-7)
            (0, p.jsxs)("div", {
              className: "lg:col-span-7 space-y-5 flex-1 min-w-0",
              children: [
                // Badges Row with Explicit Inline Flex & Spacing (Guaranteed No Overlap!)
                (0, p.jsxs)("div", {
                  style: { display: 'flex', flexWrap: 'nowrap', alignItems: 'center', gap: '8px', marginBottom: '12px' },
                  children: [
                    (0, p.jsx)("span", {
                      style: { backgroundColor: '#f1f5f9', color: '#334155', border: '1px solid #e2e8f0', padding: '4px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' },
                      children: tool.category || "Design"
                    }),
                    tool.is_trending && (0, p.jsxs)("span", {
                      style: { backgroundColor: '#fffbeb', color: '#b45309', border: '1px solid #fde68a', padding: '4px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' },
                      children: ["🔥 ", "Hot / Trending"]
                    }),
                    (0, p.jsxs)("span", {
                      style: { backgroundColor: '#fff1f2', color: '#ef4444', border: '1px solid #fecdd3', padding: '4px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' },
                      children: ["⚡ ", "Verified Instant"]
                    })
                  ]
                }),

                // Title
                (0, p.jsx)("h1", {
                  className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug break-words my-1",
                  children: tool.name || "Adobe Photoshop"
                }),

                // Price Row with Explicit Inline Flex & Save 75% Badge Styling
                (0, p.jsxs)("div", {
                  style: { display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginTop: '10px', marginBottom: '14px' },
                  children: [
                    (0, p.jsx)("span", {
                      style: { color: '#ef4444', fontWeight: '800', fontSize: '32px', letterSpacing: '-0.5px', fontFamily: 'sans-serif', flexShrink: 0 },
                      children: tool.price || "PKR 1,499"
                    }),
                    tool.original_price && (0, p.jsx)("span", {
                      style: { color: '#94a3b8', textDecoration: 'line-through', fontWeight: '500', fontSize: '18px', flexShrink: 0 },
                      children: tool.original_price
                    }),
                    tool.savings && (0, p.jsx)("span", {
                      style: { backgroundColor: '#ef4444', color: '#ffffff', fontWeight: '700', fontSize: '12px', padding: '4px 12px', borderRadius: '9999px', boxShadow: '0 2px 4px rgba(239,68,68,0.25)', flexShrink: 0 },
                      children: tool.savings
                    })
                  ]
                }),

                // Description Paragraph
                (0, p.jsx)("p", {
                  className: "text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl my-2",
                  children: tool.description
                }),

                // 3 INFO CARDS RESPONSIVE GRID (1 Column on Mobile, 3 Columns on Desktop)
                (0, p.jsxs)("div", {
                  className: "hero-info-cards-container bg-rose-50/50 border border-rose-100/80 rounded-2xl p-3 sm:p-3.5 my-4 w-full",
                  style: { display: 'grid', width: '100%', boxSizing: 'border-box', margin: '16px 0' },
                  children: [
                    // Card 1: Validity
                    (0, p.jsxs)("div", {
                      style: { 
                        backgroundColor: '#ffffff', 
                        border: '1px solid #ffe4e6', 
                        borderRadius: '12px', 
                        padding: '10px 12px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px', 
                        minWidth: '0', 
                        boxSizing: 'border-box',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                      },
                      children: [
                        (0, p.jsx)("div", {
                          style: { 
                            width: '36px', 
                            height: '36px', 
                            borderRadius: '10px', 
                            backgroundColor: '#ffe4e6', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            flexShrink: 0 
                          },
                          children: (0, p.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "2",
                            stroke: "#ef4444",
                            style: { width: '18px', height: '18px' },
                            children: (0, p.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" })
                          })
                        }),
                        (0, p.jsxs)("div", {
                          style: { display: 'flex', flexDirection: 'column', minWidth: 0 },
                          children: [
                            (0, p.jsx)("span", { style: { fontWeight: '700', color: '#0f172a', fontSize: '13px', lineHeight: '1.2' }, children: "4 months" }),
                            (0, p.jsx)("span", { style: { fontWeight: '500', color: '#64748b', fontSize: '11px', lineHeight: '1.2', marginTop: '2px' }, children: "Validity" })
                          ]
                        })
                      ]
                    }),

                    // Card 2: Instant Delivery
                    (0, p.jsxs)("div", {
                      style: { 
                        backgroundColor: '#ffffff', 
                        border: '1px solid #ffe4e6', 
                        borderRadius: '12px', 
                        padding: '10px 12px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px', 
                        minWidth: '0', 
                        boxSizing: 'border-box',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                      },
                      children: [
                        (0, p.jsx)("div", {
                          style: { 
                            width: '36px', 
                            height: '36px', 
                            borderRadius: '10px', 
                            backgroundColor: '#fef3c7', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            flexShrink: 0 
                          },
                          children: (0, p.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "2",
                            stroke: "#d97706",
                            style: { width: '18px', height: '18px' },
                            children: (0, p.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" })
                          })
                        }),
                        (0, p.jsxs)("div", {
                          style: { display: 'flex', flexDirection: 'column', minWidth: 0 },
                          children: [
                            (0, p.jsx)("span", { style: { fontWeight: '700', color: '#0f172a', fontSize: '13px', lineHeight: '1.2' }, children: "5 - 15 Minutes" }),
                            (0, p.jsx)("span", { style: { fontWeight: '500', color: '#64748b', fontSize: '11px', lineHeight: '1.2', marginTop: '2px' }, children: "Instant Delivery" })
                          ]
                        })
                      ]
                    }),

                    // Card 3: Secure & Trusted
                    (0, p.jsxs)("div", {
                      style: { 
                        backgroundColor: '#ffffff', 
                        border: '1px solid #ffe4e6', 
                        borderRadius: '12px', 
                        padding: '10px 12px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px', 
                        minWidth: '0', 
                        boxSizing: 'border-box',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                      },
                      children: [
                        (0, p.jsx)("div", {
                          style: { 
                            width: '36px', 
                            height: '36px', 
                            borderRadius: '10px', 
                            backgroundColor: '#ffe4e6', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            flexShrink: 0 
                          },
                          children: (0, p.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "2",
                            stroke: "#ef4444",
                            style: { width: '18px', height: '18px' },
                            children: (0, p.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" })
                          })
                        }),
                        (0, p.jsxs)("div", {
                          style: { display: 'flex', flexDirection: 'column', minWidth: 0 },
                          children: [
                            (0, p.jsx)("span", { style: { fontWeight: '700', color: '#0f172a', fontSize: '13px', lineHeight: '1.2' }, children: "100% Safe" }),
                            (0, p.jsx)("span", { style: { fontWeight: '500', color: '#64748b', fontSize: '11px', lineHeight: '1.2', marginTop: '2px' }, children: "Secure & Trusted" })
                          ]
                        })
                      ]
                    })
                  ]
                }),

                // CTA Section (Equal Width Primary Solid Red & Secondary Clean White Buttons)
                (0, p.jsxs)("div", {
                  className: "cta-buttons-container flex items-stretch pt-4",
                  style: { display: 'flex', flexDirection: 'column', width: '100%', gap: '12px' },
                  children: [
                    (0, p.jsxs)("button", {
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
                      style: { backgroundColor: '#ef4444', color: '#ffffff', width: '100%', minHeight: '52px', height: '52px' },
                      className: `rounded-2xl text-base font-bold flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-md shadow-red-500/20 active:scale-[0.99] hover:opacity-95`,
                      children: [
                        (0, p.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "2",
                          stroke: "currentColor",
                          className: "w-5 h-5 text-white shrink-0",
                          children: (0, p.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" })
                        }),
                        inCart ? "In Cart 🛒" : "Add to Cart"
                      ]
                    }),

                    (0, p.jsxs)("a", {
                      href: `https://wa.me/923106126454?text=Hi%20Techno%20Tools!%20I%20want%20to%20order%20${encodeURIComponent(tool.name)}%20for%20${encodeURIComponent(tool.price || "PKR 1,499")}`,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: { width: '100%', minHeight: '52px', height: '52px' },
                      className: "rounded-2xl text-base font-bold border-2 border-slate-200 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-2xs active:scale-[0.99]",
                      children: [
                        (0, p.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "2",
                          stroke: "currentColor",
                          className: "w-5 h-5 text-slate-700 shrink-0",
                          children: (0, p.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a.75.75 0 0 1-1.074-.85c.243-.88.665-1.921 1.15-2.795C4.053 15.86 3 14.03 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" })
                        }),
                        "Chat with Support"
                      ]
                    })
                  ]
                })
              ]
            })

          ]
        })
      }),

      // 2. DELIVERY TIME & ORDER PROCESS BANNER (3 CONNECTED CARDS SIDE BY SIDE WITH RIGHT ARROWS ON DESKTOP)
      (0, p.jsxs)("div", {
        className: "bg-rose-50/40 border border-rose-100/80 rounded-3xl p-5 sm:p-8 shadow-xs",
        children: [
          (0, p.jsxs)("div", {
            className: "flex items-center gap-3",
            style: { marginBottom: '20px' },
            children: [
              (0, p.jsx)("div", {
                className: "w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/60 text-amber-500 flex items-center justify-center font-bold text-xl shadow-2xs shrink-0",
                children: "⚡"
              }),
              (0, p.jsxs)("div", {
                children: [
                  (0, p.jsx)("h3", { className: "text-lg sm:text-xl font-extrabold text-slate-900", children: "Delivery Time & Order Process" }),
                  (0, p.jsx)("p", { className: "text-xs text-slate-500 font-medium", style: { marginTop: '2px' }, children: tool.delivery_time || "5 - 15 Minutes Instant Delivery" })
                ]
              })
            ]
          }),

          // 3 Connected Step Cards Layout (Flex Row with Right Arrows on md and lg screens!)
          (0, p.jsxs)("div", {
            className: "w-full",
            style: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', width: '100%' },
            children: [
              // STEP 1 CARD
              (0, p.jsxs)("div", {
                className: "bg-white border border-slate-200/80 p-5 sm:p-6 rounded-2xl space-y-3 shadow-2xs hover:border-rose-200 transition-colors flex flex-col justify-between min-h-[150px]",
                style: { flex: '1 1 240px', minWidth: '220px', boxSizing: 'border-box' },
                children: [
                  (0, p.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, p.jsx)("div", {
                        className: "w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center shadow-2xs shrink-0",
                        style: { backgroundColor: '#ef4444', color: '#ffffff' },
                        children: "1"
                      }),
                      (0, p.jsx)("div", {
                        className: "w-10 h-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-red-500 shadow-2xs shrink-0",
                        children: (0, p.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.75",
                          stroke: "currentColor",
                          className: "w-5 h-5 text-red-500 shrink-0",
                          children: (0, p.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" })
                        })
                      })
                    ]
                  }),
                  (0, p.jsxs)("div", {
                    className: "space-y-1 pt-1",
                    children: [
                      (0, p.jsx)("h4", { className: "text-base font-extrabold text-slate-900", children: "Select & Checkout" }),
                      (0, p.jsx)("p", { className: "text-xs text-slate-500 leading-relaxed", children: "Add tool to cart or click Buy on WhatsApp to initiate your request." })
                    ]
                  })
                ]
              }),

              // RIGHT ARROW 1 -> 2 (ONLY VISIBLE ON DESKTOP!)
              (0, p.jsx)("div", {
                className: "delivery-step-arrow shrink-0 items-center justify-center px-0.5 text-slate-300",
                children: (0, p.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: "2.5",
                  stroke: "currentColor",
                  className: "w-5 h-5 text-slate-400 shrink-0",
                  children: (0, p.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" })
                })
              }),

              // STEP 2 CARD
              (0, p.jsxs)("div", {
                className: "bg-white border border-slate-200/80 p-5 sm:p-6 rounded-2xl space-y-3 shadow-2xs hover:border-rose-200 transition-colors flex flex-col justify-between min-h-[150px]",
                style: { flex: '1 1 240px', minWidth: '220px', boxSizing: 'border-box' },
                children: [
                  (0, p.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, p.jsx)("div", {
                        className: "w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center shadow-2xs shrink-0",
                        style: { backgroundColor: '#ef4444', color: '#ffffff' },
                        children: "2"
                      }),
                      (0, p.jsx)("div", {
                        className: "w-10 h-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-red-500 shadow-2xs shrink-0",
                        children: (0, p.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.75",
                          stroke: "currentColor",
                          className: "w-5 h-5 text-red-500 shrink-0",
                          children: (0, p.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" })
                        })
                      })
                    ]
                  }),
                  (0, p.jsxs)("div", {
                    className: "space-y-1 pt-1",
                    children: [
                      (0, p.jsx)("h4", { className: "text-base font-extrabold text-slate-900", children: "Payment Verification" }),
                      (0, p.jsx)("p", { className: "text-xs text-slate-500 leading-relaxed", children: "Upload payment screenshot on Dashboard or send directly on WhatsApp." })
                    ]
                  })
                ]
              }),

              // RIGHT ARROW 2 -> 3 (ONLY VISIBLE ON DESKTOP!)
              (0, p.jsx)("div", {
                className: "delivery-step-arrow shrink-0 items-center justify-center px-0.5 text-slate-300",
                children: (0, p.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: "2.5",
                  stroke: "currentColor",
                  className: "w-5 h-5 text-slate-400 shrink-0",
                  children: (0, p.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" })
                })
              }),

              // STEP 3 CARD
              (0, p.jsxs)("div", {
                className: "bg-white border border-slate-200/80 p-5 sm:p-6 rounded-2xl space-y-3 shadow-2xs hover:border-rose-200 transition-colors flex flex-col justify-between min-h-[150px]",
                style: { flex: '1 1 240px', minWidth: '220px', boxSizing: 'border-box' },
                children: [
                  (0, p.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, p.jsx)("div", {
                        className: "w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center shadow-2xs shrink-0",
                        style: { backgroundColor: '#ef4444', color: '#ffffff' },
                        children: "3"
                      }),
                      (0, p.jsx)("div", {
                        className: "w-10 h-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-red-500 shadow-2xs shrink-0",
                        children: (0, p.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.75",
                          stroke: "currentColor",
                          className: "w-5 h-5 text-red-500 shrink-0",
                          children: (0, p.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" })
                        })
                      })
                    ]
                  }),
                  (0, p.jsxs)("div", {
                    className: "space-y-1 pt-1",
                    children: [
                      (0, p.jsx)("h4", { className: "text-base font-extrabold text-slate-900", children: "Instant Access & Guarantee" }),
                      (0, p.jsx)("p", { className: "text-xs text-slate-500 leading-relaxed", children: "Login / invite links are sent within 5 - 15 mins with 24/7 warranty support." })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      // 3. FEATURES & INTERACTIVE FAQS SECTION (2 EQUAL COLUMNS ON DESKTOP, 1 COLUMN ON MOBILE)
      (0, p.jsxs)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch",
        children: [

          // LEFT COLUMN: Features of Tool (2-Column Pill Grid on Desktop, 1-Column on Mobile)
          (0, p.jsxs)("div", {
            className: "bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-8 shadow-xs flex flex-col h-full",
            children: [
              (0, p.jsxs)("div", {
                className: "flex items-center gap-2.5",
                style: { marginBottom: '16px' },
                children: [
                  (0, p.jsx)("span", { className: "text-red-500 text-lg font-bold", children: "✨" }),
                  (0, p.jsx)("h3", {
                    className: "text-lg sm:text-xl font-bold text-slate-900",
                    children: `Features of ${tool.name}`
                  })
                ]
              }),
              (0, p.jsx)("div", {
                className: "features-grid-container w-full flex-1",
                style: { display: 'grid', width: '100%' },
                children: (tool.features || []).map((feat, idx) => (
                  (0, p.jsxs)("div", {
                    key: idx,
                    className: "flex items-center gap-3 p-3.5 rounded-2xl bg-rose-50/40 border border-rose-100/80 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-rose-50/80 transition-colors shadow-2xs",
                    style: { display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', borderRadius: '16px' },
                    children: [
                      (0, p.jsx)("div", {
                        className: "w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 font-extrabold shadow-2xs",
                        style: { backgroundColor: '#ef4444', color: '#ffffff', width: '20px', height: '20px', borderRadius: '50%', flexShrink: '0' },
                        children: "✓"
                      }),
                      (0, p.jsx)("span", { className: "leading-snug", children: feat })
                    ]
                  }, idx)
                ))
              })
            ]
          }),

          // RIGHT COLUMN: Frequently Asked Questions (Interactive Accordion)
          (0, p.jsxs)("div", {
            className: "bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-8 shadow-xs flex flex-col h-full",
            children: [
              (0, p.jsxs)("div", {
                className: "flex items-center gap-2.5",
                style: { marginBottom: '16px' },
                children: [
                  (0, p.jsx)("span", { className: "text-red-500 text-lg font-bold", children: "❓" }),
                  (0, p.jsx)("h3", {
                    className: "text-lg sm:text-xl font-bold text-slate-900",
                    children: "Frequently Asked Questions (FAQs)"
                  })
                ]
              }),
              (0, p.jsx)("div", {
                className: "space-y-3 flex-1",
                children: (tool.faqs || []).map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (0, p.jsxs)("div", {
                    key: idx,
                    className: "border border-slate-200/80 rounded-2xl bg-slate-50/50 overflow-hidden transition-all shadow-2xs hover:border-slate-300",
                    children: [
                      (0, p.jsxs)("button", {
                        onClick: () => setOpenFaq(isOpen ? null : idx),
                        className: "w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3 hover:bg-slate-100/60 cursor-pointer transition-colors",
                        children: [
                          (0, p.jsxs)("span", {
                            className: "flex items-center gap-2 min-w-0",
                            children: [
                              (0, p.jsx)("span", {
                                className: "font-extrabold text-base shrink-0 mr-1",
                                style: { color: '#ef4444' },
                                children: "?"
                              }),
                              (0, p.jsx)("span", { className: "truncate font-bold text-slate-900", children: faq.q })
                            ]
                          }),
                          (0, p.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "2.5",
                            stroke: "currentColor",
                            className: `w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-red-500" : ""}`,
                            children: (0, p.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m19.5 8.25-7.5 7.5-7.5-7.5" })
                          })
                        ]
                      }),
                      isOpen && (0, p.jsx)("div", {
                        className: "px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-white",
                        children: faq.a
                      })
                    ]
                  }, idx);
                })
              })
            ]
          })

        ]
      })

    ]
  });
}

export { ToolDetailsComponent as component };
