/**
Muokkaa funktio getFullName function palauttamaan interpolation avulla so that it returns the person's full name by utilizing string interpolation.
 */

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Esimerkki - älä muokkaa
console.log(getFullName("Sam", "Doe")); // "Sam Doe"
console.log(getFullName("Alex", "Blue")); // "Alex Blue"

// Treenaa: Keksi itse samanlainen funktio eri nimellä

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
// Kutsu tekemääsi funktiota
console.log(getFullName("Jasmina", "Braushi"));
