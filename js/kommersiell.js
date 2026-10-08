document.addEventListener('DOMContentLoaded', () => {
      // Uppdatera varukorgsräknare från LocalStorage
      let cart = JSON.parse(localStorage.getItem('cartCount') || '0');
      const cartCountEl = document.getElementById('cartCount');
      if (cartCountEl) cartCountEl.textContent = cart;

      // Klientvalidering av formulär (Säkerhet & UX)
      const serviceForm = document.getElementById('serviceForm');
      if (serviceForm) {
        serviceForm.addEventListener('submit', (e) => {
          if (!serviceForm.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
          } else {
            e.preventDefault();
            alert('Tack för din bokningsförfrågan! Vi bekräftar din tid via e-post.');
            serviceForm.reset();
            serviceForm.classList.remove('was-validated');
            return;
          }
          serviceForm.classList.add('was-validated');
        });
      }
    });