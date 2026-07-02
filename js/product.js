/* =========================================================
   MELODIC ARTISAN — product page logic
   Reads ?id=<product-id> from the URL and renders everything
   from PRODUCTS in data.js. No backend, no page reload needed
   to switch products.
   ========================================================= */

function starString(rating) {
  const full = Math.round(rating);
  return "\u2605".repeat(full) + "\u2606".repeat(5 - full);
}

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function renderRelated(product) {
  const heading = document.getElementById("related-heading");
  heading.textContent = "More " + getCategoryLabel(product.category);
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const pool = related.length ? related : PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);
  document.getElementById("related-grid").innerHTML = pool.map(p => `
    <a class="card" href="product.html?id=${p.id}">
      <div class="card-media">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ""}
        <span class="card-off">-${pctOff(p)}%</span>
      </div>
      <div class="card-body">
        <span class="card-cat">${getCategoryLabel(p.category)}</span>
        <span class="card-title">${p.title}</span>
        <div class="card-price-row">
          <span class="price">${money(p.price)}</span>
          <span class="price-og">${money(p.originalPrice)}</span>
        </div>
      </div>
    </a>`).join("");
}

function renderProduct() {
  const id = getParam("id");
  const product = getProduct(id) || PRODUCTS[0];

  document.title = product.title.slice(0, 60) + " — Melodic Artisan";
  document.getElementById("breadcrumb").innerHTML =
    `<a href="index.html">Shop</a> / <a href="index.html">${getCategoryLabel(product.category)}</a> / <span style="color:var(--text-dim)">${product.title.slice(0, 40)}…</span>`;

  const off = pctOff(product);
  const gallery = product.gallery && product.gallery.length ? product.gallery : [product.image];

  const variantOptions = product.variants.map((v, i) =>
    `<option value="${i}">${v.label} — ${money(v.price)}</option>`).join("");

  document.getElementById("product-root").innerHTML = `
    <div class="product-gallery">
      <div class="gallery-main"><img id="main-img" src="${product.image}" alt="${product.title}"></div>
      <div class="gallery-thumbs" id="thumbs">
        ${gallery.map((g, i) => `<img src="${g}" class="${g === product.image ? "active" : ""}" data-src="${g}">`).join("")}
      </div>
    </div>
    <div class="product-info">
      <div class="cat-tag">${getCategoryLabel(product.category)} ${product.badge ? " · " + product.badge : ""}</div>
      <h1>${product.title}</h1>
      <div class="rating-row">
        <span class="stars">${starString(product.rating)}</span>
        <span>${product.rating.toFixed(1)} ${product.reviews ? "(" + product.reviews + " reviews)" : "(new listing)"}</span>
        <span>·</span>
        <span style="color:var(--amber-glow)">★ Star Seller</span>
      </div>

      <div class="price-block">
        <span class="price" id="live-price">${money(product.variants[0].price)}</span>
        <span class="price-og">${money(product.originalPrice)}</span>
        <span class="off-tag">-${off}% OFF</span>
      </div>

      <div class="field">
        <label class="field-label">Style / Size</label>
        <select class="variant-select" id="variant-select">${variantOptions}</select>
      </div>

      <div class="field">
        <label class="field-label">Quantity</label>
        <div class="qty-stepper">
          <button type="button" id="qty-minus">−</button>
          <input type="text" id="qty-input" value="1" inputmode="numeric">
          <button type="button" id="qty-plus">+</button>
        </div>
      </div>

      <div class="action-row">
        <button class="btn btn-primary btn-block" id="add-to-cart-btn">Add to cart — <span id="btn-total">${money(product.variants[0].price)}</span></button>
      </div>
      <div class="stock-note">Only a few left in this style · handmade to order in Hải Dương, Vietnam</div>

      <div class="desc-block">
        <h3>Item details</h3>
        <p>${product.description}</p>
        <div class="spec-row"><span class="k">Materials</span><span class="v">${product.materials}</span></div>
        <div class="spec-row"><span class="k">Ships from</span><span class="v">Hải Dương, Vietnam</span></div>
        <div class="spec-row"><span class="k">Returns</span><span class="v">Accepted within 30 days</span></div>
        <div class="spec-row"><span class="k">Made by</span><span class="v">MelodicArtisan</span></div>
      </div>

      <div class="seller-card">
        <img src="${SHOP.shopIcon}" alt="Melodic Artisan">
        <div class="grow">
          <div class="name">Melodic Artisan Factory</div>
          <div class="meta">${SHOP.location} · 4.9★ (${SHOP.reviewCount.toLocaleString()}) · ${SHOP.sales.toLocaleString()} sales</div>
        </div>
        <button class="btn btn-outline" disabled title="Messaging is coming soon">Message</button>
      </div>
    </div>
  `;

  // gallery thumb swap
  document.getElementById("thumbs").addEventListener("click", e => {
    const img = e.target.closest("img[data-src]");
    if (!img) return;
    document.getElementById("main-img").src = img.dataset.src;
    document.querySelectorAll("#thumbs img").forEach(t => t.classList.remove("active"));
    img.classList.add("active");
  });

  const variantSelect = document.getElementById("variant-select");
  const qtyInput = document.getElementById("qty-input");
  const livePrice = document.getElementById("live-price");
  const btnTotal = document.getElementById("btn-total");

  function currentVariant() {
    return product.variants[parseInt(variantSelect.value, 10)];
  }
  function refreshPrice() {
    const v = currentVariant();
    const qty = Math.max(1, parseInt(qtyInput.value, 10) || 1);
    livePrice.textContent = money(v.price);
    btnTotal.textContent = money(v.price * qty);
  }
  variantSelect.addEventListener("change", refreshPrice);
  qtyInput.addEventListener("input", () => {
    qtyInput.value = qtyInput.value.replace(/[^0-9]/g, "");
    refreshPrice();
  });
  document.getElementById("qty-minus").addEventListener("click", () => {
    qtyInput.value = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
    refreshPrice();
  });
  document.getElementById("qty-plus").addEventListener("click", () => {
    qtyInput.value = Math.min(20, (parseInt(qtyInput.value, 10) || 1) + 1);
    refreshPrice();
  });

  document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    const v = currentVariant();
    const qty = Math.max(1, parseInt(qtyInput.value, 10) || 1);
    addToCart(product.id, v.label, v.price, qty);
    showToast(`Added ${qty} × ${product.title.slice(0, 30)}… to cart`);
  });

  renderRelated(product);
}

document.addEventListener("DOMContentLoaded", () => {
  initPage("shop");
  renderProduct();
});
