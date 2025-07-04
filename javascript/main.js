document.addEventListener('DOMContentLoaded', function() {
  // Active navigation link
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Form submission handling
  const contactForm = document.querySelector('.contact-form');
  if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('¡Gracias por tu mensaje! Te responderemos pronto.');
      this.reset();
    });
  }

  const newsletterForm = document.querySelector('.newsletter-form');
  if(newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('¡Gracias por suscribirte a nuestro boletín!');
      this.reset();
    });
  }

  // Simple animation on scroll
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        section.classList.add('active-section');
      }
    });
  });

  // Form validation for contact and tour forms
  const forms = document.querySelectorAll('.needs-validation');
  
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        alert('¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.');
        form.reset();
      }
      
      form.classList.add('was-validated');
    }, false);
  });

  // Product quantity buttons
  const quantityBtns = document.querySelectorAll('.input-group button');
  
  if(quantityBtns.length > 0) {
    quantityBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        let value = parseInt(input.value);
        
        if(this.textContent === '+') {
          value++;
        } else if(this.textContent === '-' && value > 1) {
          value--;
        }
        
        input.value = value;
      });
    });
  }

  // Color options in product modals
  const colorOptions = document.querySelectorAll('.color-option');
  
  if(colorOptions.length > 0) {
    colorOptions.forEach(option => {
      option.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.querySelectorAll('.color-option').forEach(opt => {
          opt.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  }

  // Product tabs
  const productTabs = document.querySelectorAll('#products-tab button');
  
  if(productTabs.length > 0) {
    productTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        productTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }

  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});