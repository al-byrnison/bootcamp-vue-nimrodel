//MENU ACTIONS
const btnBurger = document.querySelector('#toggle-button');
const menu = document.querySelector('.menu');
const iconMenu = document.querySelector('#icon-toggle');

const toggleMenu = () => {
  menu.classList.toggle('active');
  iconMenu.classList.toggle('fa-burger');
  iconMenu.classList.toggle('fa-drumstick-bite');
};

btnBurger.addEventListener('click', toggleMenu);

//FORM ACTIONS
const reservationDate = document.getElementById('reservation-date');
const reservationHour = document.getElementById('reservation-time');
const btnSend = document.getElementById('btn-send');
const btnReservation = document.getElementById('btn-reservation');

const date = new Date();
const threeWeeksLater = new Date(date.getTime() + 21 * 24 * 60 * 60 * 1000);

reservationDate.min = reservationDate.value = date.toISOString().split('T')[0];
reservationDate.max = threeWeeksLater.toISOString().split('T')[0];
reservationHour.value = date.toLocaleTimeString('es-CL', {
  timeStyle: 'short',
});

btnSend.addEventListener('click', (e) => e.preventDefault());
btnReservation.addEventListener('click', (e) => e.preventDefault());
