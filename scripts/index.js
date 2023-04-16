//MENU ACTIONS
const btnBurger = document.getElementById('toggle-burger');
const iconToggle = document.getElementById('icon-toggle');
btnBurger.addEventListener('click', function () {
  iconToggle.classList.toggle('fa-burger');
  iconToggle.classList.toggle('fa-drumstick-bite');
});

//MODAL CARD
$('.card').on('click', function () {
  const $modal = $('#cardModal');
  const $card = $(this);

  const title = $card.find('.card-title').text();
  const text = $card.find('.card-text').text();
  const imgUrl = $card.find('img').attr('src');

  $modal.find('.modal-title').text(title);
  $modal.find('.modal-body p').text(text);
  $modal.find('.modal-body img').attr('src', imgUrl);

  $modal.modal('show');
});
$('.modal-header .close').on('click', function () {
  const $modal = $(this).closest('.modal');
  $modal.modal('hide');
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

  // Validación de formulario de contacto
  const formContact = $('#form-contact');
  formContact.on('submit', (event) => {
    if (!formContact[0].checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    formContact.addClass('was-validated');
    if (formContact[0].checkValidity()) {
      event.preventDefault();
      const name = $('#contact-name').val();
      const email = $('#contact-mail').val();
      alert(
        `Muchas gracias ${name} hemos recibido su sugerencia y\nenviaremos una pronta respuesta al correo ${email}`
      );
      location.reload();
    }
  });

  // Validación de formulario de reservaciones
  const formReservations = $('#form-reservations');
  formReservations.on('submit', (event) => {
    if (!formReservations[0].checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    formReservations.addClass('was-validated');
    if (formReservations[0].checkValidity()) {
      event.preventDefault();
      const name = $('#reservation-name').val();
      const email = $('#reservation-mail').val();
      const diners = $('#reservation-diners').val();
      alert(
        `Estimado/a ${name} agradecemos por reservar con nosotros.\nHemos registrado ${diners} asistentes. Se ha enviado el código de confirmación al correo ${email}\nGracias por preferirnos`
      );
      location.reload();
    }
  });
})();

//SUBMIT
