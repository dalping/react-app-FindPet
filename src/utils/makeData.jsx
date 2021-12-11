export const makeDate = (date) => {
  newDate = new Date(date);

  console.log(newDate);
};

export const makeToday = () => {
  const now = new Date();
  const year = now.getFullYear().toString();
  const month = (now.getMonth() + 1).toString();
  const day = now.getDate().toString();

  return year + month + day;
};
