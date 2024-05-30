export const formatTimeAgo = (timestamp) => {
  const now = Date.now();
  const delta = now - timestamp;

  const secondsInMinute = 60 * 1000;
  const minutesInHour = 60;
  const hoursInDay = 24;
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (delta < 0) {
    return "future date";
  }

  const seconds = Math.floor(delta / secondsInMinute);
  const minutes = Math.floor(seconds / minutesInHour);
  const hours = Math.floor(minutes / hoursInDay);
  const days = Math.floor(hours / daysInMonth[new Date().getMonth()]);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return years + " Tahun" + (years > 1 ? "s" : "") + " yang lalu";
  } else if (days > 0) {
    return days + " Hari" + (days > 1 ? "s" : "") + " yang lalu";
  } else if (hours > 0) {
    return hours + " Jam" + (hours > 1 ? "s" : "") + " yang lalu";
  } else if (minutes > 0) {
    return minutes + " Menit" + (minutes > 1 ? "s" : "") + " yang lalu";
  } else {
    return "Baru saja";
  }
};
