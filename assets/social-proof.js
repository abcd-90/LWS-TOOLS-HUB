// LWS Tools Hub — Social Proof, Mobile Nav & Dashboard Sync
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

  function getUser() {
    const s = getSession();
    return s && s.user ? s.user : null;
  }

  function getRelativePath(file) {
    const cleanPath = path.replace(/\/index\.html$/, '/');
    const segments = cleanPath.split('/').filter(Boolean);
    const depth = segments.length;
    const prefix = depth > 0 ? '../'.repeat(depth) : './';
    return prefix + file;
  }

  const homePath = getRelativePath('index.html');
  const toolsPath = getRelativePath('tools/index.html');
  const contactPath = getRelativePath('contact/index.html');
  const cartPath = getRelativePath('cart/index.html');
  const dashPath = getRelativePath('dashboard/index.html');
  const authPath = getRelativePath('auth/index.html');
  const adminPath = getRelativePath('lws-control-726/index.html');

  window.lwsLogout = function () {
    try { localStorage.removeItem(SUPABASE_KEY); } catch (e) {}
    window.location.href = homePath;
  };

  // ── 1. AUTH PAGE: Only redirect polling, no DOM changes ──────────────────
  if (path.includes('/auth')) {
    const t = setInterval(() => {
      if (isLoggedIn()) { clearInterval(t); window.location.href = dashPath; }
    }, 600);
    return; // STOP — don't touch React DOM on auth page
  }

  // ── 2. SAFE NAV UPDATE (Header Dashboard Button for Mobile & Desktop) ──────
  function updateNav() {
    const userLoggedIn = isLoggedIn();
    const signInLinks = document.querySelectorAll('nav a[href*="auth"], header a[href*="auth"]');

    signInLinks.forEach(link => {
      if (userLoggedIn) {
        link.dataset.lwsReplaced = '1';
        link.href = dashPath;
        // Unhide so that Dashboard button shows on mobile header as well as desktop!
        link.classList.remove('hidden');
        link.style.display = 'inline-flex';
        link.innerHTML = `
          <button style="display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg, #f43f5e, #e11d48);color:white;border:none;border-radius:8px;padding:6px 14px;font-size:12px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif;box-shadow:0 2px 10px rgba(244,63,94,0.3);">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
            Dashboard
          </button>`;
      }
    });

    // Handle "Hi, friend" or user name spans
    document.querySelectorAll('nav span').forEach(el => {
      if (el.dataset.lwsDash || el.children.length > 0) return;
      const t = el.textContent.trim();
      if (t === 'Hi, friend!' || t === 'Hi, friend') {
        el.dataset.lwsDash = '1';
        el.innerHTML = `<a href="${dashPath}" style="color:#f43f5e;font-weight:700;text-decoration:none;font-family:Inter,sans-serif;">Dashboard</a>`;
      }
    });

    setupMobileDrawer();
  }

  // ── 3. MOBILE DRAWER MENU & HAMBURGER CLICK LISTENER ────────────────────
  function setupMobileDrawer() {
    let drawer = document.getElementById('lws-mobile-drawer');
    const userLoggedIn = isLoggedIn();
    const user = getUser();
    const email = user && user.email ? user.email : '';

    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'lws-mobile-drawer';
      document.body.appendChild(drawer);
    }

    const navItems = [
      { name: 'Home', path: homePath, icon: '<svg style="width:20px;height:20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>' },
      { name: 'All Tools', path: toolsPath, icon: '<svg style="width:20px;height:20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' },
      { name: 'Contact Us', path: contactPath, icon: '<svg style="width:20px;height:20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>' },
      { name: 'Trending Tools', path: toolsPath + '_trending_%22true%22', icon: '<svg style="width:20px;height:20px;color:#f43f5e;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/></svg>' },
      { name: 'Shopping Cart', path: cartPath, icon: '<svg style="width:20px;height:20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>' }
    ];

    let userSection = '';
    if (userLoggedIn) {
      userSection = `
        <div style="padding:16px;background:#fff1f2;border-radius:16px;border:1px solid #ffe4e6;margin-top:16px;">
          <div style="font-size:11px;font-weight:700;color:#9f1239;text-transform:uppercase;letter-spacing:0.5px;">Account Signed In</div>
          <div style="font-size:13px;font-weight:600;color:#111827;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${email || 'Active Member'}</div>
          
          <a href="${dashPath}" onclick="window.closeLwsDrawer()" style="display:flex;align-items:center;justify-content:center;gap:8px;background:linear-gradient(135deg, #f43f5e, #e11d48);color:white;text-decoration:none;font-weight:700;font-size:14px;padding:12px;border-radius:12px;margin-top:12px;box-shadow:0 4px 14px rgba(244,63,94,0.35);">
            <svg style="width:18px;height:18px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z"/></svg>
            Dashboard
          </a>

          <button onclick="window.lwsLogout()" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;background:white;color:#e11d48;border:1px solid #fecdd3;font-weight:600;font-size:13px;padding:10px;border-radius:10px;margin-top:8px;cursor:pointer;">
            <svg style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
            Sign Out
          </button>
        </div>
      `;
    } else {
      userSection = `
        <div style="margin-top:16px;padding-top:16px;border-top:1px solid #f3f4f6;">
          <a href="${authPath}" onclick="window.closeLwsDrawer()" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#18181b;color:white;text-decoration:none;font-weight:700;font-size:14px;padding:12px;border-radius:12px;">
            <svg style="width:18px;height:18px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>
            Sign In / Register
          </a>
        </div>
      `;
    }

    const logoSrc = getRelativePath('assets/techno-tools-logo-DMxFsREq.jpg');

    drawer.innerHTML = `
      <div id="lws-drawer-backdrop" onclick="window.closeLwsDrawer()"></div>
      <div id="lws-drawer-panel">
        <div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:16px;border-bottom:1px solid #f3f4f6;">
          <div style="display:flex;align-items:center;gap:10px;">
            <img src="${logoSrc}" alt="Logo" style="width:36px;height:36px;border-radius:10px;object-fit:cover;">
            <span style="font-family:'Fredoka',sans-serif;font-weight:700;font-size:18px;color:#111827;">LWS Tools Hub</span>
          </div>
          <button onclick="window.closeLwsDrawer()" style="background:none;border:none;padding:6px;cursor:pointer;color:#6b7280;">
            <svg style="width:24px;height:24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <div style="margin-top:16px;display:flex;flex-direction:column;gap:6px;">
          ${navItems.map(item => `
            <a href="${item.path}" onclick="window.closeLwsDrawer()" style="display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:12px;color:#374151;text-decoration:none;font-weight:600;font-size:14px;transition:background 0.2s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background='transparent'">
              <span style="display:flex;align-items:center;justify-content:center;width:24px;">${item.icon}</span>
              ${item.name}
            </a>
          `).join('')}
        </div>

        ${userSection}
      </div>
    `;

    // Attach click handlers to hamburger menu buttons
    const allButtons = Array.from(document.querySelectorAll('button'));
    allButtons.forEach(btn => {
      const isMenuBtn = btn.querySelector('.lucide-menu') || btn.classList.contains('lucide-menu') || (btn.innerHTML && btn.innerHTML.includes('lucide-menu'));
      if (isMenuBtn && !btn.dataset.lwsDrawerAttached) {
        btn.dataset.lwsDrawerAttached = '1';
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          window.openLwsDrawer();
        });
      }
    });
  }

  window.openLwsDrawer = function() {
    setupMobileDrawer();
    const drawer = document.getElementById('lws-mobile-drawer');
    if (drawer) drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeLwsDrawer = function() {
    const drawer = document.getElementById('lws-mobile-drawer');
    if (drawer) drawer.classList.remove('open');
    document.body.style.overflow = '';
  };

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

  function runAll() {
    updateNav();
    setupLogoEgg();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      runAll();
      [500, 1200, 2500].forEach(d => setTimeout(runAll, d));
    });
  } else {
    runAll();
    [500, 1200, 2500].forEach(d => setTimeout(runAll, d));
  }

  // ── 5. STYLES FOR MOBILE DRAWER & TOASTS ──────────────────────────────────
  const css = `
    #lws-mobile-drawer {
      position: fixed;
      inset: 0;
      z-index: 999999;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    #lws-mobile-drawer.open {
      pointer-events: auto;
      opacity: 1;
    }
    #lws-drawer-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.45);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
    #lws-drawer-panel {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 290px;
      max-width: 85vw;
      background: white;
      box-shadow: -8px 0 25px rgba(0, 0, 0, 0.15);
      padding: 20px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.32, 1);
      font-family: 'Inter', sans-serif;
    }
    #lws-mobile-drawer.open #lws-drawer-panel {
      transform: translateX(0);
    }
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

  // ── 6. LIVE SOCIAL PROOF TOASTS ──────────────────────────────────────────
  const NAMES  = ['Zeeshan','Aisha','Bilal','Hamza','Fatimah','Zainab','Omer','Sana','Mustafa','Ali','Usman','Amna','Kamran','Mariam','Saad','Hira'];
  const CITIES = ['Karachi','Lahore','Islamabad','Rawalpindi','Faisalabad','Multan','Peshawar','Quetta','Sialkot','Gujranwala'];
  const TOOLS  = ['ChatGPT Plus','Canva Pro','Midjourney Pro','Netflix Premium','YouTube Premium','Spotify Duo','CapCut Pro','Semrush Guru','Elementor Pro','Adobe CC'];
  const ACTS   = ['just purchased','renewed subscription for','unlocked access to','bought 1-month access to'];
  const r = a => a[Math.random() * a.length | 0];

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
