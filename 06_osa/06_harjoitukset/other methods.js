// olio 2

// tehtava 1

// console.log("method 2");
// const kirjasto = [
//  kirja1 (otsikko,kirjailija,julkaisuvuosi)
//   {
//     otsikko: "Harry Potter ja viisasten kivi",
//     kirjailija: "J.K. Rowling",
//     julkaisuvuosi: 1997,
//   },
// ];
// console.log(kirjasto);
function createBook(title, author, yearPublished, genres) {
  return {
    title: title,
    author: author,
    yearPublished: yearPublished,
    genres: genres,
  };
}

let userBook = createBook("The Catcher in the Rye", "J.D. Salinger", 1951, [
  "Literary Fiction",
]);
console.log(userBook);
