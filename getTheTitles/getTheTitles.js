const getTheTitles = function (books) {
  allTitles = [];
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    allTitles[i] = book.title;
    console.log(book.title);
  }
  return allTitles;
};

module.exports = getTheTitles;
