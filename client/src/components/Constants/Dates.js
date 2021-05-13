export const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export const WeatherAppContents = [
  {
    Date: 8
  },
  {
    Date: 9
  },
  {
    Date: 10
  },
  {
    Date: 11
  },
  {
    Date: 12
  },
  {
    Date: 13
  },
  {
    Date: 14
  },
  {
    Date: 15
  },
  {
    Date: 16
  }
];

export const Daysago = days =>
  days > 0
    ? days + " day" + (Math.abs(days) === 1 ? "" : "s") + " later"
    : days < 0
    ? -days + "  day" + (Math.abs(days) === 1 ? "" : "s") + "  ago"
    : "today";
