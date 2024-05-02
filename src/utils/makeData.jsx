export const makeDate = (date) => {
  newDate = new Date(date);
  console.log(newDate);
};

export const makeToday = () => {
  const now = new Date();
  let year = now.getFullYear().toString();
  let month = (now.getMonth() + 1).toString();
  let day = now.getDate().toString();

  //두 자리 수 맞추기
  month = month.length == 1 ? "0"+ month : month;
  day = day.length == 1 ? "0" + day : day;

  return year + month + day;
};
