    document.getElementById('whatsappForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
      const texto = `Hola, mi nombre es ${nombre}. Mi teléfono es ${telefono}. Me gustaría: ${mensaje}`;
      const numero = '5217751267530'; 
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank');
    });

    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('nav-menu');
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });