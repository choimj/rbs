export const getWeek = () => {
  const currentDate = new Date();
  const theYear = currentDate.getFullYear();
  const theMonth = currentDate.getMonth();
  const theDate = currentDate.getDate();
  const theDayOfWeek = currentDate.getDay();

  let thisWeek = [];

  for (let i = 0; i < 7; i++) {
    const resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
    const yyyy = resultDay.getFullYear();
    let mm = Number(resultDay.getMonth() + 1);
    let dd = resultDay.getDate();
    let dayOfWeek = resultDay.getDay();
    let isToday = 0;

    mm = String(mm).length === 1 ? "0" + mm : mm;
    dd = String(dd).length === 1 ? "0" + dd : dd;

    if (currentDate.toDateString() === resultDay.toDateString()) {
      isToday = 1;
    }

    thisWeek[i] = {
      day: yyyy + "-" + mm + "-" + dd,
      date: dd,
      dayOfWeek: dayOfWeek,
      isToday: isToday
    };
  }

  return thisWeek;
};

export const getMonth = () => {
  const currentDate = new Date();
  const theMonth = currentDate.getMonth();

  return Number(theMonth) + 1;
};

export const isSameDate = (date1, date2) => {
  const date1Arr = date1.split("-");
  const date2Arr = date2.split("-");

  const dateObj1 = new Date(date1Arr[0], date1Arr[1], date1Arr[2]).toString();
  const dateObj2 = new Date(date2Arr[0], date2Arr[1], date2Arr[2]).toString();

  if (dateObj1 === dateObj2) {
    return true;
  } else {
    return false;
  }
};

export const getAfterDate = (op, date, num) => {
  // console.log(op, date, num);
  switch (op) {
    case "h":
      return new Date(date.setHours(date.getHours() + num));
    case "m":
      return new Date(date.setMonth(date.getMonth() + num));
    case "s":
    default:
      return;
  }
};

export const getDateString = (dateObj, gb) => {
  if (dateObj) {
    const year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let date = dateObj.getDate();

    if (month < 10) {
      month = "0" + month;
    }
    if (date < 10) {
      date = "0" + date;
    }

    return year + gb + month + gb + date;
  } else {
    return "";
  }
};
