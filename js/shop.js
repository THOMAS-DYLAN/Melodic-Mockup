/* =========================================================
   MELODIC ARTISAN — shop page logic
   ========================================================= */

let activeCategory = "all";
let activeSort = "featured";
let activeSearch = "";

function starString(rating) {
  const full = Math.round(rating);
  return "\u2605".repeat(full) + "\u2606".repeat(5 - full);
}

function productCardHTML(p) {
  const off = pctOff(p);
  return `
    <a class="card" href="product.html?id=${p.id}">
      <div class="card-media">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ""}
        ${off > 0 ? `<span class="card-off">-${off}%</span>` : ""}
      </div>
      <div class="card-body">
        <span class="card-cat">${getCategoryLabel(p.category)}</span>
        <span class="card-title">${p.title}</span>
        <span class="card-rating"><span class="star-ic">${starString(p.rating)}</span> ${p.rating.toFixed(1)}${p.reviews ? " (" + p.reviews + ")" : ""}</span>
        <div class="card-price-row">
          <span class="price">${money(p.price)}</span>
          <span class="price-og">${money(p.originalPrice)}</span>
        </div>
        <span class="card-cta" data-add="${p.id}">Add to cart</span>
      </div>
    </a>`;
}

function renderGrid() {
  let items = PRODUCTS.slice();

  if (activeCategory !== "all") {
    items = items.filter(p => p.category === activeCategory || (activeCategory === "clearance" && p.category === "clearance"));
  }
  if (activeSearch.trim()) {
    const q = activeSearch.toLowerCase();
    items = items.filter(p => p.title.toLowerCase().includes(q) || getCategoryLabel(p.category).toLowerCase().includes(q));
  }
  if (activeSort === "price-asc") items.sort((a, b) => a.price - b.price);
  else if (activeSort === "price-desc") items.sort((a, b) => b.price - a.price);
  else if (activeSort === "rating") items.sort((a, b) => b.rating - a.rating);

  const grid = document.getElementById("product-grid");
  const count = document.getElementById("result-count");
  count.textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;

  if (!items.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-faint);font-family:var(--font-mono);">No pieces match that search — try a different filter.</div>`;
    return;
  }
  grid.innerHTML = items.map(productCardHTML).join("");
}

function buildChips() {
  const row = document.getElementById("chip-row");
  row.innerHTML = CATEGORIES.map(c =>
    `<button class="chip ${c.id === activeCategory ? "active" : ""}" data-chip="${c.id}">${c.label}</button>`
  ).join("");
  row.querySelectorAll("[data-chip]").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.chip;
      buildChips();
      renderGrid();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildChips();
  renderGrid();

  document.getElementById("search-input").addEventListener("input", e => {
    activeSearch = e.target.value;
    renderGrid();
  });
  document.getElementById("sort-select").addEventListener("change", e => {
    activeSort = e.target.value;
    renderGrid();
  });

  // event-delegated "add to cart" from grid cards
  document.getElementById("product-grid").addEventListener("click", e => {
    const btn = e.target.closest("[data-add]");
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const p = getProduct(btn.dataset.add);
    const variant = p.variants[0];
    addToCart(p.id, variant.label, variant.price, 1);
    showToast(`Added "${p.title.slice(0, 40)}${p.title.length > 40 ? "\u2026" : ""}" to cart`);
  });
});
