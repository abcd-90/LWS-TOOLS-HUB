import { s as e } from "./button-GRMyZlvL.js";
import { t as n } from "./link-CZ3VaoX1.js";
import { l as r, m as i } from "./button-GRMyZlvL.js";
import { B as supabase, y as useCart, a as toast } from "./index-Dr8K-Qyh.js";

var p = e();
var React = i(r(), 1);

function ToolDetailsComponent() {
  const slug = typeof window !== "undefined" ? window.location.pathname.split("/").pop() : "";
  const [tool, setTool] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { addItem, items } = useCart();

  React.useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }
    async function fetchTool() {
      try {
        const { data, error } = await supabase
          .from("tools")
          .select("*")
          .eq("slug", slug)
          .single();
        if (!error && data) {
          setTool(data);
        }
      } catch (err) {
        console.error(err);
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
          (0, p.jsx)("div", {
            className: "h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"
          }),
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
          (0, p.jsx)("h2", {
            className: "text-2xl font-bold font-display text-destructive",
            children: "Tool Not Found"
          }),
          (0, p.jsx)("p", {
            className: "text-muted-foreground text-sm",
            children: "The requested tool subscription does not exist or may have been removed."
          }),
          (0, p.jsx)(n, {
            to: "/tools",
            children: (0, p.jsx)("button", {
              className: "inline-flex items-center justify-center rounded-lg text-sm font-semibold bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 cursor-pointer",
              children: "Back to Catalog"
            })
          })
        ]
      })
    });
  }

  const inCart = items.some(item => item.toolId === tool.id);
  const fallbackIcon = `https://api.dicebear.com/9.x/shapes/svg?seed=${encodeURIComponent(tool.name)}&backgroundType=gradientLinear&backgroundColor=1e9bff,7ee8fa`;

  return (0, p.jsxs)("div", {
    className: "container mx-auto px-4 py-10 max-w-4xl",
    children: [
      (0, p.jsx)(n, {
        to: "/tools",
        className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8",
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
              children: (0, p.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15.75 19.5 8.25 12l7.5-7.5"
              })
            }),
            " Back to Catalog"
          ]
        })
      }),
      (0, p.jsxs)("div", {
        className: "grid gap-8 md:grid-cols-3",
        children: [
          (0, p.jsx)("div", {
            className: "md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left gap-4",
            children: (0, p.jsxs)("div", {
              className: "relative h-40 w-40 rounded-[2rem] bg-gradient-to-br from-primary/10 to-accent/40 border border-border/60 shadow-card flex items-center justify-center p-6 overflow-hidden",
              children: [
                (0, p.jsx)("div", {
                  className: "absolute inset-0 bg-primary/5 blur-2xl rounded-full"
                }),
                (0, p.jsx)("img", {
                  src: tool.icon_url || fallbackIcon,
                  alt: tool.name,
                  className: "h-24 w-24 object-contain relative z-10",
                  onError: e => { e.currentTarget.src = fallbackIcon; }
                })
              ]
            })
          }),
          (0, p.jsxs)("div", {
            className: "md:col-span-2 space-y-6",
            children: [
              (0, p.jsxs)("div", {
                className: "space-y-2",
                children: [
                  (0, p.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [
                      (0, p.jsx)("span", {
                        className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20",
                        children: tool.category
                      }),
                      tool.is_trending && (0, p.jsx)("span", {
                        className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20",
                        children: "\ud83d\udd25 Hot"
                      })
                    ]
                  }),
                  (0, p.jsx)("h1", {
                    className: "font-display text-4xl font-extrabold tracking-tight text-foreground",
                    children: tool.name
                  }),
                  (0, p.jsx)("p", {
                    className: "text-sm text-primary font-medium",
                    children: tool.warranty_text || "Replacement Warranty Included"
                  })
                ]
              }),
              (0, p.jsx)("div", {
                className: "border-t border-border/60 pt-6",
                children: (0, p.jsx)("p", {
                  className: "text-muted-foreground leading-relaxed whitespace-pre-wrap text-base",
                  children: tool.description
                })
              }),
              tool.canva_link && (0, p.jsxs)("div", {
                className: "bg-muted/40 border border-border/60 rounded-2xl p-5 space-y-2",
                children: [
                  (0, p.jsx)("h4", {
                    className: "text-sm font-semibold text-foreground",
                    children: "Direct Team Link"
                  }),
                  (0, p.jsx)("a", {
                    href: tool.canva_link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-sm text-primary break-all hover:underline block font-mono",
                    children: tool.canva_link
                  })
                ]
              }),
              (0, p.jsx)("div", {
                className: "pt-4",
                children: (0, p.jsx)("button", {
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
                  className: `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all h-12 px-8 cursor-pointer ${
                    inCart
                      ? "bg-secondary text-secondary-foreground shadow-none pointer-events-none opacity-80"
                      : "bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 hover:-translate-y-0.5"
                  }`,
                  children: inCart ? "Already in Cart" : "Add to Cart"
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
