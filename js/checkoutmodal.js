/* =========================================================
   MELODIC ARTISAN — checkout popup
   Opens over the cart page. Renders shipping form + order
   summary from the current cart, creates an order on submit
   (no real payment processing — this is a preview build).
   ========================================================= */

function checkoutModalHTML() {
  const items = readCart();
  const subtotal = cartSubtotal();
  const shipping = items.length ? 6.76 * Math.min(items.length, 3) : 0;
  const total = subtotal + shipping;

  const linesHTML = items.map(i => {
    const p = getProduct(i.productId);
    if (!p) return "";
    return `
      <div class="checkout-summary-line">
        <img src="${p.image}" alt="${p.title}">
        <div class="t">${p.title.slice(0, 38)}${p.title.length > 38 ? "…" : ""}<br><span style="color:var(--text-faint);font-family:var(--font-mono);font-size:11px;">${i.variantLabel} · Qty ${i.qty}</span></div>
        <div class="p">${money(i.unitPrice * i.qty)}</div>
      </div>`;
  }).join("");

  return `
    <button type="button" class="modal-close" id="checkout-close" aria-label="Close">✕</button>
    <div class="checkout-modal-grid">
      <form id="checkout-form">
        <h3 style="margin-bottom:4px;">Checkout</h3>
        <p style="color:var(--text-faint);font-family:var(--font-mono);font-size:11.5px;margin-bottom:22px;">Secure order — takes about a minute.</p>

        <div class="field full" style="margin-bottom:16px;"><label>Email</label><input type="email" id="f-email" required placeholder="you@email.com"></div>

        <div class="form-grid">
          <div class="field full"><label>Full Name</label><input type="text" id="f-name" required placeholder="Jordan Ellis"></div>
          <div class="field full"><label>Address</label><input type="text" id="f-address" required placeholder="412 Birchwood Ave"></div>
          <div class="field"><label>City</label><input type="text" id="f-city" required placeholder="Kansas City"></div>
          <div class="field"><label>State / Region</label><input type="text" id="f-region" required placeholder="MO"></div>
          <div class="field"><label>ZIP / Postal Code</label><input type="text" id="f-zip" required placeholder="64105"></div>
          <div class="field">
            <label>Country</label>
            <select id="f-country">
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Australia</option>
              <option>Vietnam</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div class="form-grid" style="margin-top:16px;">
          <div class="field full"><label>Card Number</label><input type="text" placeholder="•••• •••• •••• ••••" disabled></div>
          <div class="field"><label>Expiry</label><input type="text" placeholder="MM / YY" disabled></div>
          <div class="field"><label>CVC</label><input type="text" placeholder="•••" disabled></div>
        </div>
        <div class="payment-stub">Payment processing connects here at launch. Card fields are disabled in this preview build.</div>

        <button type="submit" class="btn btn-primary btn-block" style="margin-top:22px;padding:15px;">Place Order — <span id="modal-total-btn">${money(total)}</span></button>
      </form>

      <div class="checkout-modal-summary">
        <h4 style="font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-faint);margin-bottom:14px;">Order Summary</h4>
        ${linesHTML}
        <div class="summary-row" style="margin-top:10px;"><span>Subtotal</span><span class="mono">${money(subtotal)}</span></div>
        <div class="summary-row"><span>Shipping</span><span class="mono">${money(shipping)}</span></div>
        <div class="summary-row total"><span>Total</span><span class="val">${money(total)}</span></div>
      </div>
    </div>
  `;
}

function openCheckoutModal() {
  if (!readCart().length) {
    showToast("Your cart is empty");
    return;
  }
  const box = document.getElementById("checkout-box");
  box.innerHTML = checkoutModalHTML();
  document.getElementById("checkout-modal").classList.add("show");
  document.body.style.overflow = "hidden";

  document.getElementById("f-email").value = CUSTOMER.email;
  document.getElementById("f-name").value = CUSTOMER.address.name;
  document.getElementById("f-address").value = CUSTOMER.address.line1;
  document.getElementById("f-city").value = CUSTOMER.address.city;
  document.getElementById("f-region").value = CUSTOMER.address.region;
  document.getElementById("f-zip").value = CUSTOMER.address.zip;

  document.getElementById("checkout-close").addEventListener("click", closeCheckoutModal);
  document.getElementById("checkout-form").addEventListener("submit", handleCheckoutSubmit);
}

function closeCheckoutModal() {
  document.getElementById("checkout-modal").classList.remove("show");
  document.body.style.overflow = "";
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const address = {
    name: document.getElementById("f-name").value.trim() || CUSTOMER.address.name,
    line1: document.getElementById("f-address").value.trim() || CUSTOMER.address.line1,
    city: document.getElementById("f-city").value.trim() || CUSTOMER.address.city,
    region: document.getElementById("f-region").value.trim() || CUSTOMER.address.region,
    zip: document.getElementById("f-zip").value.trim() || CUSTOMER.address.zip,
    country: document.getElementById("f-country").value
  };
  const order = createOrderFromCart(address);
  closeCheckoutModal();
  window.location.href = `order.html?id=${order.id}&justPlaced=1`;
}

window.openCheckoutModal = openCheckoutModal;

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("checkout-modal");
  if (overlay) {
    overlay.addEventListener("click", e => { if (e.target === overlay) closeCheckoutModal(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeCheckoutModal(); });
  }
});
