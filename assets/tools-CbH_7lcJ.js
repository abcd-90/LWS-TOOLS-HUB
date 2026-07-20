import { component as ToolDetails, FEATURED_TOOLS_DATA } from "./tools._slug-COSnaM3b.js";
import { s as e, t, l as r_react, m as i_react } from "./button-GRMyZlvL.js";
import { i as n } from "./badge-B7Q8D7vI.js";
import { B as r, W as i, _ as a, b as o, g as s, r as c } from "./index-Dr8K-Qyh.js";
import { t as l } from "./input-BuMoPX4F.js";
import { t as u } from "./ToolCard-DgqKN_KS.js";

var d = s(`search`, [[`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }], [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }] ]),
    f = s(`sliders-horizontal`, [[`path`, { d: `M10 5H3`, key: `1qgfaw` }], [`path`, { d: `M12 19H3`, key: `yhmn1j` }], [`path`, { d: `M14 3v4`, key: `1sua03` }], [`path`, { d: `M16 17v4`, key: `1q0r14` }], [`path`, { d: `M21 12h-9`, key: `1o4lsq` }], [`path`, { d: `M21 19h-5`, key: `1rlt1p` }], [`path`, { d: `M21 5h-7`, key: `1oszz2` }], [`path`, { d: `M8 10v4`, key: `tgpxqk` }], [`path`, { d: `M8 12H3`, key: `a7s4jb` }] ]),
    p = e();

var React = i_react(r_react(), 1);

function m() {
  let e = c.useSearch(),
      s = i({ from: `/tools` }),
      m = e.category || `All`,
      h = e.trending === !0 || e.trending === `true`,
      g = e.search || ``,
      { data: _ = [], isLoading: v } = n({
        queryKey: [`tools`, { category: m, trending: h, q: g }],
        queryFn: async () => {
          let list = [];
          try {
            let req = r.from(`tools`).select(`*`).order(`is_trending`, { ascending: !1 }).order(`name`);
            if (h) req = req.eq(`is_trending`, !0);
            if (m !== `All`) req = req.eq(`category`, m);
            if (g) req = req.ilike(`name`, `%${g}%`);
            let { data: t } = await req;
            if (t && t.length > 0) list = t;
          } catch (err) {
            console.error(err);
          }

          if (!list || list.length === 0) {
            list = FEATURED_TOOLS_DATA.filter(item => {
              const matchCat = m === `All` || item.category === m;
              const matchTrend = !h || item.is_trending === true;
              const matchQuery = !g || item.name.toLowerCase().includes(g.toLowerCase()) || item.description.toLowerCase().includes(g.toLowerCase());
              return matchCat && matchTrend && matchQuery;
            });
          }

          return list;
        }
      });

  let [currentPath, setCurrentPath] = React.useState(typeof window !== `undefined` ? window.location.pathname : ``);

  React.useEffect(() => {
    let handleLocation = () => { setCurrentPath(window.location.pathname); };
    window.addEventListener(`popstate`, handleLocation);
    let t = setInterval(handleLocation, 100);
    return () => {
      window.removeEventListener(`popstate`, handleLocation);
      clearInterval(t);
    };
  }, []);

  let isDetailRoute = currentPath.startsWith(`/tools/`) && currentPath.slice(7).length > 0 && !currentPath.slice(7).includes(`index.html`);
  if (isDetailRoute) return (0, p.jsx)(ToolDetails, {});

  return (0, p.jsxs)(`div`, {
    className: `container mx-auto px-4 py-10`,
    children: [
      (0, p.jsxs)(a.div, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: `text-center`,
        children: [
          (0, p.jsx)(`h1`, { className: `font-display text-4xl font-bold md:text-5xl`, children: h ? `🔥 Trending Tools` : `All Premium Tools` }),
          (0, p.jsxs)(`p`, { className: `mt-2 text-muted-foreground`, children: [_.length, ` tools ready to ship with warranty.`] })
        ]
      }),
      (0, p.jsxs)(`div`, {
        className: `mt-8 space-y-4`,
        children: [
          (0, p.jsxs)(`div`, {
            className: `relative mx-auto max-w-xl`,
            children: [
              (0, p.jsx)(d, { className: `absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground` }),
              (0, p.jsx)(l, {
                placeholder: `Search tools (ChatGPT, Canva, Netflix...)...`,
                value: g,
                onChange: e => s({ search: t => ({ ...t, search: e.target.value || void 0 }) }),
                className: `pl-10`
              })
            ]
          }),
          (0, p.jsxs)(`div`, {
            className: `flex flex-wrap justify-center gap-2`,
            children: [
              (0, p.jsx)(t, {
                variant: h ? `default` : `outline`,
                size: `sm`,
                onClick: () => s({ search: { trending: h ? void 0 : !0, category: void 0 } }),
                children: `🔥 Trending`
              }),
              o.map(e => (0, p.jsx)(t, {
                variant: m === e && !h ? `default` : `outline`,
                size: `sm`,
                onClick: () => s({ search: { category: e === `All` ? void 0 : e, trending: void 0 } }),
                children: e
              }, e))
            ]
          })
        ]
      }),
      (0, p.jsx)(`div`, {
        className: `mt-10`,
        children: v ? (0, p.jsx)(`div`, {
          className: `grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,
          children: [...Array(8)].map((e, t) => (0, p.jsx)(`div`, { className: `h-56 animate-pulse rounded-2xl bg-muted` }, t))
        }) : _.length === 0 ? (0, p.jsxs)(`div`, {
          className: `py-16 text-center`,
          children: [
            (0, p.jsx)(f, { className: `mx-auto h-12 w-12 text-muted-foreground` }),
            (0, p.jsx)(`h3`, { className: `mt-4 font-display text-lg`, children: `No tools match` }),
            (0, p.jsx)(`p`, { className: `mt-1 text-muted-foreground`, children: `Try clearing filters or a different search.` })
          ]
        }) : (0, p.jsx)(`div`, {
          className: `grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,
          children: _.map((e, t) => (0, p.jsx)(u, { tool: e, index: t }, e.id))
        })
      })
    ]
  });
}

export { m as component };