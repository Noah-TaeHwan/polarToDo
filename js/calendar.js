const calendarDays = document.querySelector('.column__info--days');
const calendarDate = document.querySelector('.column__info--date');

function getDays() {
  const date = new Date();
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = daysOfWeek[date.getDay()];

  calendarDays.innerText = `${day}`;
}

function getDate() {
  const date = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[date.getMonth()];
  const day = date.getDay();
  const year = String(date.getFullYear());

  calendarDate.innerText = `${month} ${day}, ${year}`;
}

getDays();
getDate();
