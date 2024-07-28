/**
Toteuta funktio canVote siten, että se palauttaa arvon true aina kun ikä on 18 tai enemmän ja false muissa tapauksissa.
*/

function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
// Esimerkkikäyttö - älä muuta
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function tyypi(num) {
  if (num > 0) {
    return "posivit";
  } else {
    return "negativ";
  }
}
// Kutsu tekemääsi funktiota
console.log(tyypi(7));
console.log(tyypi(15));
console.log(tyypi(-4));
console.log(tyypi(-20));
console.log(tyypi(9));
