async function loadCart() {
  try {
    const response = await fetch('/cart.js');
    const cart = await response.json();

    console.log(cart, [91309109]); // 👈 see full cart in console

    renderCart(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadCart);