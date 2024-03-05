if (
  !localStorage.getItem("amountSMS") ||
  localStorage.getItem("amountSMS") == 0
) {
  localStorage.setItem("amountSMS", 500);
}

const months = [
  "ene",
  "feb",
  "mar",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

const today = new Date(Date.now());
const dates = document.querySelectorAll(".actualDate");
dates.forEach((date) => {
  date.innerHTML = `${today.getDate()} ${months[today.getMonth()]}.`;
});
