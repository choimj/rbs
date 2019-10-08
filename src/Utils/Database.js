export const groupBy = (arr, key) => {
  let tmpElement = { name: "", count: 0 };
  return arr.reduce((acc, element) => {
    let tmpKey = "";

    if (typeof element[key] === "object") {
      tmpKey = element[key].id;
      tmpElement = element[key];
    } else {
      tmpKey = element[key];
      tmpElement = element;
    }

    if (!acc[tmpKey]) {
      acc[tmpKey] = [];
    }

    acc[tmpKey].push(tmpElement);
    return acc;
  }, {});
};
