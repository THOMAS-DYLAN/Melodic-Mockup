/* =========================================================
   MELODIC ARTISAN — order detail page logic
   ========================================================= */

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function timelineHTML(order) {
  const idx = statusIndex(order.status);
  return `<div class="timeline">${ORDER_STATUS_STEPS.map((step, i) => `
    <div class="tl-step ${i <= idx ? "done" : ""}">
      <div class="tl-line"></div>
      <div class="tl-dot"></div>
      <div class="tl-label">${step}</div>
    </div>`).join("")}</div>`;
}

function renderOrder() {
  const id = getParam("id");
  const order = getOrder(id) || allOrders()[0];
  if (!order) {
    document.getElementById("order-root").innerHTML = `<p style="color:var(--text-dim);">No orders found. <a href="index.html" style="color:var(--amber-glow);">Go shopping →</a></p>`;
    return;
  }

  document.title = "Order #" + order.id + " — Melodic Artisan";
  document.getElementById("order-page-title").innerHTML = `Order <em>#${order.id}</em>`;

  if (getParam("justPlaced")) {
    document.getElementById("confirm-banner-slot").innerHTML =
      `<div class="confirm-banner">✓ Order placed! Confirmation sent to ${CUSTOMER.email}. We'll start pouring resin shortly.</div>`;
  }

  const t = orderTotal(order);
  const a = order.address;

  const itemsHTML = order.items.map(i => {
    const p = getProduct(i.productId);
    if (!p) return "";
    return `
      <div class="checkout-summary-line">
        <img src="${p.image}" alt="${p.title}">
        <div class="t">${p.title}<br><span style="color:var(--text-faint);font-family:var(--font-mono);font-size:11px;">${i.variantLabel} · Qty ${i.qty}</span></div>
        <div class="p">${money(i.unitPrice * i.qty)}</div>
      </div>`;
  }).join("");

  document.getElementById("order-root").innerHTML = `
    <div class="panel-head" style="margin-bottom:22px;">
      <p style="color:var(--text-faint);font-family:var(--font-mono);font-size:12px;">Placed ${formatDate(order.date)}</p>
      <span class="status-badge ${statusClass(order.status)}" style="font-size:12px;padding:6px 14px;">${order.status}</span>
    </div>

    ${timelineHTML(order)}

    <div class="order-summary-block">
      <div class="panel">
        <div class="panel-head"><h3>Items</h3></div>
        ${itemsHTML}
        <button class="btn btn-outline" id="reorder-btn" style="margin-top:18px;">Reorder these items</button>
      </div>
      <div>
        <div class="panel">
          <div class="panel-head"><h3>Summary</h3></div>
          <div class="summary-row"><span>Subtotal</span><span class="mono">${money(t.subtotal)}</span></div>
          <div class="summary-row"><span>Shipping</span><span class="mono">${money(t.shipping)}</span></div>
          <div class="summary-row total"><span>Total</span><span class="val">${money(t.total)}</span></div>
        </div>
        <div class="addr-card">
          <div class="k">Shipping Address</div>
          ${a.name}<br>${a.line1}<br>${a.city}, ${a.region} ${a.zip}<br>${a.country}
        </div>
      </div>
    </div>
  `;

  document.getElementById("reorder-btn").addEventListener("click", () => {
    order.items.forEach(i => addToCart(i.productId, i.variantLabel, i.unitPrice, i.qty));
    showToast("Items added to your cart");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPage("orders");
  renderOrder();
});
