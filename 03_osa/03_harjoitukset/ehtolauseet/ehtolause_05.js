/**
Täydennä funktio evenOrOdd siten, että se palauttaa merkkijonon "even", kun se saa parametriksi parillisen luvun, ja muuten "odd".
 */

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log(evenOrOdd(25)); // "odd"
console.log(evenOrOdd(18)); // "even"
console.log(evenOrOdd(-17)); // "odd"

// Treenaa: Keksi itse samanlainen funktio eri nimellä

function plusVaiMinus(number) {
  if (number < 0) {
    return "negative";
  } else {
    return "pozitive";
  }
}

console.log(plusVaiMinus(7));
console.log(plusVaiMinus(-2));
console.log(plusVaiMinus(6));
console.log(plusVaiMinus(-9));
console.log(plusVaiMinus(-5));
// Kutsu tekemääsi funktiota

function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log(evenOrOdd(5));
console.log(evenOrOdd(1));
console.log(evenOrOdd(-7));
console.log(evenOrOdd(0));
