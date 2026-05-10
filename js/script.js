// ===========================
// NAVEGACIÓN Y SCROLL SUAVE
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===========================
// FORMULARIO DE CONTACTO
// ===========================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validación básica
    if (!name || !email || !message) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un correo válido.');
      return;
    }
    
    // Simular envío del formulario
    alert(`¡Gracias ${name}! Tu mensaje ha sido recibido.\nNos pondremos en contacto pronto a ${email}`);
    
    // Limpiar formulario
    this.reset();
  });
}

// ===========================
// ANIMACIONES AL DESPLAZAR
// ===========================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar tarjetas de servicios y portafolio
document.querySelectorAll('.service-card, .portfolio-item').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// ===========================
// MENÚ RESPONSIVO
// ===========================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
  
  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
    });
  });
}

// ===========================
// SCROLL HIGHLIGHT NAVBAR
// ===========================

window.addEventListener('scroll', function() {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// ===========================
// INICIALIZAR
// ===========================

console.log('Web Studio MMC - Script cargado correctamente ✅');
