/* =========================================================
   MELODIC ARTISAN — dashboard logic
   ========================================================= */

function accountInfoRowsHTML() {
  const a = CUSTOMER.address;
  const rows = [
    { label: "Email", val: CUSTOMER.email },
    { label: "Name", val: CUSTOMER.name },
    { label: "Address", val: a.line1 },
    { label: "City", val: `${a.city}, ${a.region} ${a.zip}` },
    { label: "Country", val: a.country }
  ];
  return rows.map(r => `
    <div class="info-row">
      <div class="info-label">${r.label}</div>
      <div class="info-val">${r.val}</div>
    </div>`).join("") + `
    <div class="info-row">
      <div class="info-label">Member Since</div>
      <div class="info-locked">${new Date(CUSTOMER.memberSince).toLocaleDateString(undefined, { month: "long", year: "numeric" })} 🔒</div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  initPage("dashboard");

  document.getElementById("dash-name").textContent = CUSTOMER.name.split(" ")[0];
  document.getElementById("dash-since").textContent = "Member since " + new Date(CUSTOMER.memberSince).getFullYear();

  const orders = allOrders();
  const totalSpent = orders.reduce((sum, o) => sum + orderTotal(o).total, 0);

  document.getElementById("stat-orders").textContent = orders.length;
  document.getElementById("stat-spent").textContent = money(totalSpent);
  document.getElementById("stat-points").textContent = Math.round(totalSpent * 10).toLocaleString();

  document.getElementById("orders-panel").innerHTML =
    orders.slice(0, 4).map(orderCardHTML).join("") ||
    `<div class="orders-empty"><p>No orders yet.</p><a href="index.html" class="btn btn-primary">Browse the shop</a></div>`;

  document.getElementById("account-panel").innerHTML = accountInfoRowsHTML();
});
