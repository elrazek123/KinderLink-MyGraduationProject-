function getWeekStart() {
  const today = new Date();
  let day = today.getDay();
  day = (day + 1) % 7;  // Adjust for Saturday as 0 and Friday as 6
  return day;
  }
  export default getWeekStart;