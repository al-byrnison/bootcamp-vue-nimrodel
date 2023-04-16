//MENU ACTIONS
const btnBurger = document.getElementById('toggle-burger');
const iconToggle = document.getElementById('icon-toggle');
btnBurger.addEventListener('click', function () {
  iconToggle.classList.toggle('fa-burger');
  iconToggle.classList.toggle('fa-drumstick-bite');
});

//FORM SHOW
const contactLink = document.getElementById('contact-link');
const contactForm = document.getElementById('contact');
const reservationsLink = document.getElementById('reservations-link');
const reservationsForm = document.getElementById('reservations');

contactLink.addEventListener('click', function () {
  contactForm.classList.add('d-lg-block');
});
reservationsLink.addEventListener('click', function () {
  reservationsForm.classList.add('d-lg-block');
});

//FORM DATE-TIME ACTIONS
const reservationDate = document.getElementById('reservation-date');
const reservationHour = document.getElementById('reservation-time');
const date = new Date();
const tomorrow = new Date(date.getTime() + 1 * 24 * 60 * 60 * 1000);
const threeWeeksLater = new Date(date.getTime() + 21 * 24 * 60 * 60 * 1000);
reservationDate.ariaPlaceholder = date.toISOString().split('T')[0];
reservationDate.min = tomorrow.toISOString().split('T')[0];
reservationDate.max = threeWeeksLater.toISOString().split('T')[0];
reservationHour.value = date.toLocaleTimeString('es-CL', {
  timeStyle: 'short',
});

//VALIDATE FORM
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');

        const formContact = document.getElementById('form-contact');
        const formReservations = document.getElementById('form-reservations');
        const alertMessage = (name, mail) => {
          alert(
            `Muchas gracias ${name} hemos recibido su sugerencia y\nenviaremos una pronta respuesta al correo ${mail}`
          );
          location.reload();
        };

        if (form === formContact && form.checkValidity()) {
          event.preventDefault();
          const name = document.getElementById('contact-name').value;
          const email = document.getElementById('contact-mail').value;
          alertMessage(name, email);
        }
        if (form === formReservations && form.checkValidity()) {
          event.preventDefault();
          const name = document.getElementById('reservation-name').value;
          const email = document.getElementById('reservation-mail').value;
          alertMessage(name, email);
        }
      },
      false
    );
  });
})();

//SUBMIT
