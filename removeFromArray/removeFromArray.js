const removeFromArray = function (array = [], ...items) {
  items.forEach((item) => {
    const indexOfItem = array.indexOf(item);
    if (array[indexOfItem] === item) array.splice(indexOfItem, 1);
  });
  return array;
};

module.exports = removeFromArray;
