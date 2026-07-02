/* =========================================================
   MELODIC ARTISAN — shared site chrome
   One nav, one banner, one footer, built once here and
   mounted on every page. Keeps header/footer markup from
   drifting out of sync across pages.
   ========================================================= */

const NAV_TABS = [
  { href: "index.html",     label: "Shop",      icon: "◈", page: "shop" },
  { href: "dashboard.html", label: "Dashboard",  icon: "⌂", page: "dashboard" },
  { href: "orders.html",    label: "Orders",     icon: "☰", page: "orders" }
];

function buildNav(activePage) {
  const links = NAV_TABS.map(t =>
    `<a href="${t.href}" class="nav-link${activePage === t.page ? " active" : ""}">
       <span class="nav-icon">${t.icon}</span><span class="nav-label">${t.label}</span>
     </a>`).join("");

  return `
    <div class="nav-inner">
      <a href="index.html" class="nav-brand">
        <img src="${SHOP.shopIcon}" alt="${SHOP.name}">
        <div>
          <div class="brand-name">${SHOP.name}</div>
          <div class="brand-sub">Resin Workshop · Est. ${SHOP.founded}</div>
        </div>
      </a>
      <div class="nav-links">${links}</div>
      <div class="nav-right">
        <a href="cart.html" class="cart-nav-btn">
          <span class="nav-icon">⊕</span><span class="nav-label">Cart</span>
          <span class="cart-badge-count" data-cart-count>0</span>
        </a>
      </div>
    </div>`;
}

function buildBanner() {
  return `<p>FREE SHIPPING on orders over $75 <span>— Buy 1 Get 1 Free on select pieces, no code needed</span></p>`;
}

function buildFooter() {
  return `
    <div class="footer-inner">
      <a href="index.html" class="footer-brand"><img src="${SHOP.shopIcon}" alt="${SHOP.name}"></a>
      <div class="footer-copy">© 2026 ${SHOP.name}. All rights reserved. · Handmade in ${SHOP.location}</div>
      <div class="footer-links"><a href="dashboard.html">Dashboard</a></div>
    </div>`;
}

function initPage(activePage) {
  const navEl = document.getElementById("nav-mount");
  const bannerEl = document.getElementById("banner-mount");
  const footerEl = document.getElementById("footer-mount");
  if (navEl) navEl.innerHTML = buildNav(activePage);
  if (bannerEl) bannerEl.innerHTML = buildBanner();
  if (footerEl) footerEl.innerHTML = buildFooter();
  updateCartBadge();
}
