    document.addEventListener('DOMContentLoaded', () => {
      let cart = JSON.parse(localStorage.getItem('cartCount') || '0');
      const cartCountEl = document.getElementById('cartCount');
      if (cartCountEl) cartCountEl.textContent = cart;

      const addButtons = document.querySelectorAll('.add-to-cart-btn');
      addButtons.forEach(button => {
        button.addEventListener('click', () => {
          cart++;
          localStorage.setItem('cartCount', JSON.stringify(cart));
          if (cartCountEl) cartCountEl.textContent = cart;

          const productName = button.getAttribute('data-product');
          alert(`${productName} har lagts till i varukorgen!`);
        });
      });
    });