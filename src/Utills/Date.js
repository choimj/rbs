

export const getWeek = () => {
  const currentDate = new Date();
  const theYear = currentDate.getFullYear();
  const theMonth = currentDate.getMonth();
  const theDate = currentDate.getDate();
  const theDayOfWeek = currentDate.getDay();

  let thisWeek = [];

  for(let i=0; i<7; i++) {
    const resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
    const yyyy = resultDay.getFullYear();
    let mm = Number(resultDay.getMonth() + 1);
    let dd = resultDay.getDate();
    let dayOfWeek = resultDay.getDay();
    let isToday = 0;

    mm = String(mm).length === 1 ? "0" + mm : mm;
    dd = String(dd).length === 1 ? "0" + dd : dd;

    if(currentDate.toDateString() === resultDay.toDateString()){ isToday = 1; }

    thisWeek[i] = {day : yyyy + "-" + mm + "-" + dd, dayOfWeek: dayOfWeek, isToday: isToday};
  }

  return thisWeek;
}

export const getMonth = () => {
  const currentDate = new Date();
  const theMonth = currentDate.getMonth();

  return Number(theMonth) + 1;
}