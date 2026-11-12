document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const fullName = document.getElementById('fullName');
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');
      const successNote = document.getElementById('formSuccess');

      const fields = [fullName, email, subject, message];
      let valid = true;

      fields.forEach((field) => {
        const value = field.value.trim();
        const errorElement = field.parentElement.querySelector('.error-message');

        if (!value) {
          valid = false;
          field.classList.add('error');
          errorElement.textContent = 'This field is required.';
        } else {
          field.classList.remove('error');
          errorElement.textContent = '';
        }
      });

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && email.value.trim() && !emailPattern.test(email.value.trim())) {
        valid = false;
        email.classList.add('error');
        email.parentElement.querySelector('.error-message').textContent = 'Please enter a valid email address.';
      }

      if (valid) {
        successNote.textContent = 'Thank you! Your enquiry has been received for this demo.';
        contactForm.reset();
      } else {
        successNote.textContent = '';
      }
    });
  }
});
