// LWS Tools Hub — Social Proof, Dashboard Nav & Admin Easter Egg
// Safe version: NO MutationObserver (was breaking React SSR hydration)
(function () {
  'use strict';

  const SUPABASE_KEY = 'sb-fgojtnpkpgnmqfngegmq-auth-token';
  const path = window.location.pathname;

  function getSession() {
    try { return JSON.parse(localStorage.getItem(SUPABASE_KEY)); } catch { return null; }
  }

  function isLoggedIn() {
    const s = getSession();
    return !!(s && s.user);
  }

  function getRelativePath(file) {
    const depth = (path.match(/\//g) || []).length - 1;
    const prefix = depth > 0 ? '../'.repeat(depth) : './';
    return prefix + file;
  }

  const dashPath = getRelativePath('dashboard/index.html');
  const adminPath = getRelativePath('lws-control-726/index.html');

  // ── 1. AUTH PAGE: Only redirect polling, no DOM changes ──────────────────
  if (path.includes('/auth')) {
    const t = setInterval(() => {
      if (isLoggedIn()) { clearInterval(t); window.location.href = dashPath; }
    }, 600);
    return; // STOP — don't touch React DOM on auth page
  }

  // ── 2. SAFE NAV UPDATE (via polling, not MutationObserver) ───────────────
  function updateNav() {
    if (!isLoggedIn()) return;

    // A. ONLY replace Sign In button INSIDE nav (not hero CTA buttons)
    const signInLinks = document.querySelectorAll('nav a[href*="auth"], header a[href*="auth"]');
    signInLinks.forEach(link => {
      if (link.dataset.lwsReplaced) return;
      link.dataset.lwsReplaced = '1';
      link.href = dashPath;
      link.innerHTML = `
        <button style="display:inline-flex;align-items:center;gap:6px;background:#f43f5e;color:white;border:none;border-radius:8px;padding:6px 14px;font-size:12px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
          Dashboard
        </button>`;
    });

    // B. Change "Hi, friend!" in navbar → "Dashboard" link (ONLY in nav spans)
    document.querySelectorAll('nav span').forEach(el => {
      if (el.dataset.lwsDash || el.children.length > 0) return;
      const t = el.textContent.trim();
      if (t === 'Hi, friend!' || t === 'Hi, friend') {
        el.dataset.lwsDash = '1';
        el.innerHTML = `<a href="${dashPath}" style="color:#f43f5e;font-weight:700;text-decoration:none;font-family:Inter,sans-serif;">Dashboard</a>`;
      }
    });
  }

  // ── 3. FLOATING BUTTON: DISABLED ─────────────────────────────────────────

  // ── 4. LOGO DOUBLE-CLICK/TAP → ADMIN PANEL ───────────────────────────────
  function setupLogoEgg() {
    document.querySelectorAll('nav a, nav img').forEach(el => {
      if (el.dataset.lwsEgg) return;
      const isLogo = (el.src || '').includes('techno-tools-logo') ||
                     el.textContent.includes('LWS Tools Hub') ||
                     (el.innerHTML || '').includes('techno-tools-logo');
      if (!isLogo) return;
      el.dataset.lwsEgg = '1';
      el.addEventListener('dblclick', e => { e.preventDefault(); window.location.href = adminPath; });
      let lastTap = 0;
      el.addEventListener('touchstart', e => {
        const now = Date.now();
        if (now - lastTap < 300) { e.preventDefault(); window.location.href = adminPath; }
        lastTap = now;
      }, { passive: false });
    });
  }

  // Run after DOM ready, poll a few times to catch React-rendered elements
  function runAll() {
    updateNav();
    setupLogoEgg();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      runAll();
      // Poll 3 more times to catch React hydration
      [500, 1200, 2500].forEach(d => setTimeout(runAll, d));
    });
  } else {
    runAll();
    [500, 1200, 2500].forEach(d => setTimeout(runAll, d));
  }

  // ── 5. LIVE SOCIAL PROOF TOASTS ──────────────────────────────────────────
  const NAMES  = ['Zeeshan','Aisha','Bilal','Hamza','Fatimah','Zainab','Omer','Sana','Mustafa','Ali','Usman','Amna','Kamran','Mariam','Saad','Hira'];
  const CITIES = ['Karachi','Lahore','Islamabad','Rawalpindi','Faisalabad','Multan','Peshawar','Quetta','Sialkot','Gujranwala'];
  const TOOLS  = ['ChatGPT Plus','Canva Pro','Midjourney Pro','Netflix Premium','YouTube Premium','Spotify Duo','CapCut Pro','Semrush Guru','Elementor Pro','Adobe CC'];
  const ACTS   = ['just purchased','renewed subscription for','unlocked access to','bought 1-month access to'];
  const r = a => a[Math.random() * a.length | 0];

  const css = `
    #lws-sp{position:fixed;bottom:20px;left:20px;z-index:99998;max-width:300px;pointer-events:none;
      background:rgba(255,255,255,.94);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
      border:1px solid rgba(244,63,94,.18);border-radius:16px;padding:12px 14px;
      box-shadow:0 12px 32px -8px rgba(0,0,0,.1);display:flex;align-items:center;gap:10px;
      font-family:Inter,sans-serif;color:#18181b;
      transform:translateY(120%);opacity:0;transition:all .5s cubic-bezier(.16,1,.32,1);}
    #lws-sp.show{transform:translateY(0);opacity:1;}
    #lws-sp .ic{width:36px;height:36px;border-radius:10px;background:rgba(244,63,94,.08);
      border:1px solid rgba(244,63,94,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
    #lws-sp .nm{font-size:11px;line-height:1.4;}
    #lws-sp .tm{font-size:10px;color:#71717a;margin-top:2px;}
    #lws-sp .hl{color:#f43f5e;font-weight:700;}`;

  const sEl = document.createElement('style');
  sEl.textContent = css;
  document.head.appendChild(sEl);

  const toast = document.createElement('div');
  toast.id = 'lws-sp';
  toast.innerHTML = '';
  document.body.appendChild(toast);

  function showToast() {
    const secs = 15 + (Math.random() * 45 | 0);
    toast.innerHTML = `
      <div class="ic"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#f43f5e" width="18" height="18"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg></div>
      <div><div class="nm"><strong>${r(NAMES)}</strong> from ${r(CITIES)}<br>${r(ACTS)} <span class="hl">${r(TOOLS)}</span></div>
      <div class="tm">${secs}s ago &nbsp;•&nbsp; ✅ Verified</div></div>`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 6000);
  }

  setTimeout(showToast, 7000);
  setInterval(showToast, (30 + (Math.random() * 20 | 0)) * 1000);

})();
