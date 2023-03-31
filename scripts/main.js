const reservationDate = document.getElementById('reservation-date');
const reservationHour = document.getElementById('reservation-time');

let btnSend = document.getElementById('btn-send');
let btnReservation = document.getElementById('btn-reservation');

let date = new Date(Date.now());

reservationDate.value = date.toISOString('es-CL').substring(0, 10);
reservationDate.min = date.toISOString('es-CL').substring(0, 10);
reservationDate.max = new Date(date.setDate(date.getDate() + 3 * 7));

reservationHour.value = date.toLocaleTimeString('es-CL').substring(0, 5);

btnSend.addEventListener('click', function (e) {
  e.preventDefault();
});
btnReservation.addEventListener('click', function (e) {
  e.preventDefault();
});
