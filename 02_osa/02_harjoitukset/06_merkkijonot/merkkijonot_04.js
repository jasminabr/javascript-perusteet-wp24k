/**
Muokkaa funktio getFirstCharacter palauttamaan saamansa merkkijonon ensimmäinen merkki
 */

function getFirstCharacter(name) {
  return name.charAt();
}

// Esimerkki - älä muokkaa
console.log(getFirstCharacter("Amsterdam")); // "A"
console.log(getFirstCharacter("Japan")); // "J"

// Treenaa: Keksi itse samanlainen funktio eri nimellä

function getFirstCharacter(str) {
  return str.charAt();
}

// Kutsu tekemääsi funktiota
console.log(getFirstCharacter("Braushi"));
