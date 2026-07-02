/* =========================================================
   MELODIC ARTISAN — orders logic
   Order history = SEED_ORDERS (sample history) + any orders
   placed through checkout in this browser (localStorage).
   ========================================================= */

const ORDERS_KEY = "melodic_artisan_orders_v1";

function readCreatedOrders() {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function writeCreatedOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

function allOrders() {
  const created = readCreatedOrders();
  return created.concat(SEED_ORDERS).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getOrder(id) {
  return allOrders().find(o => o.id === id);
}

function orderTotal(order) {
  const subtotal = order.items.reduce((sum, i) => sum + i.unitPrice * i.qty, 0);
  const shipping = order.items.length ? 6.76 : 0;
  return { subtotal, shipping, total: subtotal + shipping };
}

function nextOrderId() {
  const nums = allOrders().map(o => parseInt(o.id.replace("MA-", ""), 10)).filter(n => !isNaN(n));
  const max = nums.length ? Math.max(...nums) : 10000;
  return "MA-" + (max + 1);
}

function createOrderFromCart(address) {
  const cartItems = readCart();
  const order = {
    id: nextOrderId(),
    date: new Date().toISOString().slice(0, 10),
    status: "Processing",
    address: address,
    items: cartItems.map(i => ({ productId: i.productId, variantLabel: i.variantLabel, unitPrice: i.unitPrice, qty: i.qty }))
  };
  const created = readCreatedOrders();
  created.push(order);
  writeCreatedOrders(created);
  clearCart();
  return order;
}

function statusIndex(status) {
  return ORDER_STATUS_STEPS.indexOf(status);
}

function statusClass(status) {
  return "status-" + status.toLowerCase();
}

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function initials(name) {
  return name.split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase();
}

function orderCardHTML(order) {
  const t = orderTotal(order);
  const thumbs = order.items.slice(0, 3).map(i => {
    const p = getProduct(i.productId);
    return p ? `<img src="${p.image}" alt="${p.title}">` : "";
  }).join("");
  const primary = getProduct(order.items[0]?.productId);
  const title = order.items.length > 1
    ? (primary ? primary.title.slice(0, 34) + "…" : "Order") + ` + ${order.items.length - 1} more`
    : (primary ? primary.title.slice(0, 48) : "Order");
  const totalQty = order.items.reduce((s, i) => s + i.qty, 0);

  return `
    <div class="order-card">
      <div class="order-card-thumbs">${thumbs}</div>
      <div class="order-card-body">
        <div class="order-card-header">
          <div class="order-card-name">${title}</div>
          <div class="order-card-total">${money(t.total)}</div>
        </div>
        <div class="order-card-bottom">
          <div class="order-card-meta">
            <span class="order-card-meta-item"><span class="order-card-meta-label">Date</span><span class="order-card-meta-val">${formatDate(order.date)}</span></span>
            <span class="order-card-meta-item"><span class="order-card-meta-label">Qty</span><span class="order-card-meta-val">${totalQty}</span></span>
            <span class="order-card-meta-item"><span class="status-badge ${statusClass(order.status)}">${order.status}</span></span>
          </div>
          <a href="order.html?id=${order.id}" class="order-card-link">View Order</a>
        </div>
      </div>
    </div>`;
}
