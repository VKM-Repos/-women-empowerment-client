export const formatDateTime = (inputDate: any) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateObj = new Date(inputDate);
  const year = dateObj.getFullYear();
  const month = months[dateObj.getMonth()];
  const date = dateObj.getDate();

  // Convert to 12-hour time format
  const hours =
    dateObj.getHours() > 12 ? dateObj.getHours() - 12 : dateObj.getHours();
  const minutes = (dateObj.getMinutes() < 10 ? "0" : "") + dateObj.getMinutes();
  const meridiem = dateObj.getHours() >= 12 ? "PM" : "AM";

  const formattedTime = `${hours}:${minutes} ${meridiem}`;

  return `${month} ${date}, ${year} at ${formattedTime}`;
};

export const formatDateRange = (inputDate: any) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const startDate = new Date(inputDate);
  const endDate = new Date(inputDate);
  endDate.setDate(endDate.getDate() + 6); // Add 6 days for a week

  const startDayOfWeek = daysOfWeek[startDate.getDay()];
  const endDayOfWeek = daysOfWeek[endDate.getDay()];
  const startMonth = months[startDate.getMonth()];
  const endMonth = months[endDate.getMonth()];

  const formattedStartDate = `${startDayOfWeek}, ${startMonth} ${startDate.getDate()}`;
  const formattedEndDate = `${endDayOfWeek}, ${endMonth} ${endDate.getDate()}, ${endDate.getFullYear()}`;

  return `${formattedStartDate} - ${formattedEndDate}`;
};
