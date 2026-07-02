/* =========================================================
   MELODIC ARTISAN — cart page logic
   ========================================================= */

function renderCartPage() {
  const items = readCart();
  const layout = document.getElementById("cart-layout");

  if (!items.length) {
    layout.style.gridTemplateColumns = "1fr";
    layout.innerHTML = `
      <div class="empty-cart">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin:0 auto 18px;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <h3 style="margin-bottom:10px;">Your cart is empty</h3>
        <p style="margin-bottom:22px;">Nothing in here yet — go find a resin lamp or a hand-poured keycap worth taking home.</p>
        <a href="index.html" class="btn btn-primary">Browse the shop</a>
      </div>`;
    return;
  }

  layout.style.gridTemplateColumns = "";
  const lines = items.map(item => {
    const product = getProduct(item.productId);
    if (!product) return "";
    const lineTotal = item.unitPrice * item.qty;
    return `
      <div class="cart-item" data-key="${item.productId}::${item.variantLabel}">
        <a href="product.html?id=${product.id}"><img src="${product.image}" alt="${product.title}"></a>
        <div>
          <a href="product.html?id=${product.id}"><div class="title">${product.title}</div></a>
          <div class="variant">${item.variantLabel} · ${money(item.unitPrice)} each</div>
          <a class="remove-link" data-remove="${item.productId}" data-variant="${item.variantLabel}">Remove</a>
        </div>
        <div class="qty-stepper" style="height:38px;">
          <button type="button" data-dec="${item.productId}" data-variant2="${item.variantLabel}">−</button>
          <input type="text" value="${item.qty}" data-qty="${item.productId}" data-variant3="${item.variantLabel}" style="width:40px;">
          <button type="button" data-inc="${item.productId}" data-variant4="${item.variantLabel}">+</button>
        </div>
        <div class="line-price">${money(lineTotal)}</div>
      </div>`;
  }).join("");

  const subtotal = cartSubtotal();
  const shipping = items.length ? 6.76 * Math.min(items.length, 3) : 0;
  const total = subtotal + shipping;

  layout.innerHTML = `
    <div class="cart-items">${lines}</div>
    <div class="summary-card">
      <h3 style="margin-bottom:16px;">Order Summary</h3>
      <div class="summary-row"><span>Subtotal (${cartCount()} items)</span><span class="mono">${money(subtotal)}</span></div>
      <div class="summary-row"><span>Estimated shipping</span><span class="mono">${money(shipping)}</span></div>
      <div class="summary-row total"><span>Total</span><span class="val">${money(total)}</span></div>
      <button class="btn btn-primary btn-block" id="checkout-btn" style="margin-top:16px;">Proceed to checkout</button>
      <a href="index.html" class="btn btn-outline btn-block" style="margin-top:10px;">Continue shopping</a>
      <p style="font-family:var(--font-mono);font-size:11px;color:var(--text-faint);margin-top:16px;line-height:1.6;">Ships from Hải Dương, Vietnam. Customs &amp; import taxes are the buyer's responsibility.</p>
    </div>
  `;

  layout.addEventListener("click", handleCartClick);
  layout.querySelectorAll("[data-qty]").forEach(input => {
    input.addEventListener("change", () => {
      const qty = Math.max(0, parseInt(input.value, 10) || 0);
      updateCartQty(input.dataset.qty, input.dataset.variant3, qty);
      renderCartPage();
    });
  });

  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) checkoutBtn.addEventListener("click", () => window.openCheckoutModal && window.openCheckoutModal());
}

function handleCartClick(e) {
  const dec = e.target.closest("[data-dec]");
  const inc = e.target.closest("[data-inc]");
  const rem = e.target.closest("[data-remove]");
  if (dec) {
    const key = cartLineKey(dec.dataset.dec, dec.dataset.variant2);
    const item = readCart().find(i => cartLineKey(i.productId, i.variantLabel) === key);
    if (item) updateCartQty(dec.dataset.dec, dec.dataset.variant2, item.qty - 1);
    renderCartPage();
  } else if (inc) {
    const key = cartLineKey(inc.dataset.inc, inc.dataset.variant4);
    const item = readCart().find(i => cartLineKey(i.productId, i.variantLabel) === key);
    if (item) updateCartQty(inc.dataset.inc, inc.dataset.variant4, item.qty + 1);
    renderCartPage();
  } else if (rem) {
    removeFromCart(rem.dataset.remove, rem.dataset.variant);
    renderCartPage();
    showToast("Item removed");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initPage("cart");
  renderCartPage();
});
