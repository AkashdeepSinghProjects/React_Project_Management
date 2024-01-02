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

export default function DateFormat() {
  const todayDate = new Date().toLocaleDateString();
  const tempDate = todayDate.split("/");
  const formattedDate =
    months[tempDate[0] - 1] + " " + tempDate[1] + ", " + tempDate[2];
  return formattedDate;
}
