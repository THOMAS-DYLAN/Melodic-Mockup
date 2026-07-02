/* =========================================================
   MELODIC ARTISAN — cart logic
   Persists to localStorage so the cart survives across pages
   and reloads without any backend/database.
   ========================================================= */

const CART_KEY = "melodic_artisan_cart_v1";

function readCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function writeCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartBadge();
}

function cartLineKey(productId, variantLabel) {
  return productId + "::" + (variantLabel || "");
}

function addToCart(productId, variantLabel, unitPrice, qty) {
  qty = qty || 1;
  const items = readCart();
  const key = cartLineKey(productId, variantLabel);
  const existing = items.find(i => cartLineKey(i.productId, i.variantLabel) === key);
  if (existing) {
    existing.qty += qty;
  } else {
    items.push({ productId, variantLabel, unitPrice, qty });
  }
  writeCart(items);
  return items;
}

function updateCartQty(productId, variantLabel, qty) {
  let items = readCart();
  const key = cartLineKey(productId, variantLabel);
  if (qty <= 0) {
    items = items.filter(i => cartLineKey(i.productId, i.variantLabel) !== key);
  } else {
    const existing = items.find(i => cartLineKey(i.productId, i.variantLabel) === key);
    if (existing) existing.qty = qty;
  }
  writeCart(items);
  return items;
}

function removeFromCart(productId, variantLabel) {
  return updateCartQty(productId, variantLabel, 0);
}

function clearCart() {
  writeCart([]);
}

function cartCount() {
  return readCart().reduce((sum, i) => sum + i.qty, 0);
}

function cartSubtotal() {
  return readCart().reduce((sum, i) => sum + i.unitPrice * i.qty, 0);
}

function updateCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? "inline-flex" : "none";
  });
}

function showToast(message) {
  let toast = document.getElementById("ma-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "ma-toast";
    toast.className = "ma-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove("show");
  void toast.offsetWidth;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 2400);
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
