/**
Muokkaa funktio capitalize palauttamaan saamansa sana kirjoitettuna vain isolla alkukirjaimella
 */

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Esimerkki - älä muokkaa
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"

// Treenaa: Keksi itse samanlainen funktio eri nimellä

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
// Kutsu tekemääsi funktiota

console.log(capitalize("jAsMIna"));
