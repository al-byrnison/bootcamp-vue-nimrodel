//MENU ACTIONS
const btnBurger = document.getElementById('toggle-burger');
const iconToggle = document.getElementById('icon-toggle');
btnBurger.addEventListener('click', function () {
  iconToggle.classList.toggle('fa-burger');
  iconToggle.classList.toggle('fa-drumstick-bite');
});

//FORM DATE-TIME ACTIONS
const reservationDate = document.getElementById('reservation-date');
const reservationHour = document.getElementById('reservation-time');
const date = new Date();
const threeWeeksLater = new Date(date.getTime() + 21 * 24 * 60 * 60 * 1000);
reservationDate.min = reservationDate.value = date.toISOString().split('T')[0];
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
      },
      false
    );
  });
})();
