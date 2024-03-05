if (
  !localStorage.getItem("amountSMS") ||
  localStorage.getItem("amountSMS") == 0
) {
  localStorage.setItem("amountSMS", 500);
}
