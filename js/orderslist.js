/* =========================================================
   MELODIC ARTISAN — orders list page logic
   Full order history, grouped by month, with a summary stat
   bar at the top (matches the dashboard order-card format).
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initPage("orders");

  const orders = allOrders();
  const summaryEl = document.getElementById("orders-summary");
  const listEl = document.getElementById("orders-list");

  if (!orders.length) {
    summaryEl.style.display = "none";
    listEl.innerHTML = `
      <div class="orders-empty">
        <div class="icon">🧪</div>
        <h2>No orders yet.</h2>
        <p>Time to fix that.</p>
        <a href="index.html" class="btn btn-primary">Browse the shop</a>
      </div>`;
    return;
  }

  const totalSpent = orders.reduce((s, o) => s + orderTotal(o).total, 0);
  const totalItems = orders.reduce((s, o) => s + o.items.reduce((s2, i) => s2 + i.qty, 0), 0);

  summaryEl.innerHTML = `
    <div class="stat-bar-item"><div class="val">${orders.length}</div><div class="lbl">Total Orders</div></div>
    <div class="stat-bar-divider"></div>
    <div class="stat-bar-item"><div class="val">${money(totalSpent)}</div><div class="lbl">Total Spent</div></div>
    <div class="stat-bar-divider"></div>
    <div class="stat-bar-item"><div class="val">${totalItems}</div><div class="lbl">Items Ordered</div></div>`;

  const groups = {};
  orders.forEach(o => {
    const key = new Date(o.date + "T00:00:00").toLocaleDateString(undefined, { month: "long", year: "numeric" });
    (groups[key] = groups[key] || []).push(o);
  });

  listEl.innerHTML = Object.entries(groups).map(([month, rows]) => `
    <div class="month-group">
      <div class="month-label">${month}</div>
      ${rows.map(orderCardHTML).join("")}
    </div>`).join("");
});
