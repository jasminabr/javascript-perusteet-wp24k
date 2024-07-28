// Alkuperäinen joukko tiimin jäseniä
let teamMembers = ["Jukka", "Emilia", "Miikka", "Saara"];

// Harjoitus 1: Käy läpi `teamMembers` ja kirjaa jokainen nimi konsoliin.
// Kirjoita koodisi tähän:

console.log(teamMembers);

// Harjoitus 2: Poista ensimmäinen jäsen taulukosta.
// Kirjoita koodisi tähän:
teamMembers.shift();
console.log(teamMembers);

// Harjoitus 3: Poista taulukon viimeinen jäsen.
// Kirjoita koodisi tähän:
teamMembers.unshift("Jukka");
teamMembers.pop("Saara");
console.log(teamMembers);

// Harjoitus 4: Lisää uusi jäsen "Aleksi" taulukon alkuun.
// Kirjoita koodisi tähän:
teamMembers.push("Saara");
teamMembers.unshift("Aleksi");
console.log(teamMembers);

// Harjoitus 5: Lisää uusi jäsen "Linda" taulukon loppuun.
// Kirjoita koodisi tähän:
teamMembers.push("Linda");
console.log(teamMembers);

// Harjoitus 6: Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä.
// Kirjoita koodisi tähän:
teamMembers.shift();
teamMembers.shift();

console.log(teamMembers);

// Harjoitus 7: Etsi "Miikka" indeksi taulukossa.
// Kirjoita koodisi tähän:

const etsittäväNimi = "Miikka";
const indeksi = teamMembers.indexOf(etsittäväNimi);

if (indeksi !== -1) {
  console.log(`"${etsittäväNimi}" löytyy taulukosta indeksistä ${indeksi}.`);
} else {
  console.log(`"${etsittäväNimi}" ei löydy taulukosta.`);
}

// Harjoitus 8: Yritä löytää "Jaakko" indeksi (joka ei ole taulukossa).
// Kirjoita koodisi tähän:

const etsittäväNimi1 = "Jakko";
const indeksi1 = teamMembers.indexOf(etsittäväNimi1);

if (indeksi !== -1) {
  console.log(`"${etsittäväNimi1}" löytyy taulukosta indeksistä ${indeksi1}.`);
} else {
  console.log(`"${etsittäväNimi1}" ei löydy taulukosta.`);
}

// Harjoitus 9: Käytä `splice` poistaaksesi "Miikka" ja lisätäksesi "Karoliina" ja "Bettina" hänen tilalleen.
// Kirjoita koodisi tähän:
teamMembers.splice(1, 1, "Karoliina", "Bettina");
console.log(teamMembers);

// Harjoitus 10: Liitä uusi jäsen "Hemmo" taulukon loppuun ja luo uusi taulukko.
// Kirjoita koodisi tähän:

const newMembers = "Hemmo";
console.log(newMembers);
teamMembers.push(newMembers);

let teamMembersNew = [...teamMembers];
console.log(teamMembersNew);

// Harjoitus 11: Käyttäen `slice` kopioidaksesi koko taulukon
// Kirjoita koodisi tähän:
let teamMembersCopy = teamMembers.slice();

teamMembersCopy.unshift("Elisa");
console.log("Ensimainen tauluku on :", teamMembers);
console.log("Kopioittu tauluku on :", teamMembersCopy);

// Harjoitus 12: Yhdistä taulukot käyttäen `concat`
// Oletetaan, että `newMembers`-taulukko on määritelty
let newMember = ["Tiina", "Daniel"];
// Kirjoita koodisi tähän:
let newGroup = teamMembers.concat(newMember);
console.log(newGroup);

// Harjoitus 13: Etsi kaikki Jukan esiintymät
// Kirjoita koodisi tähän:
const löydetty = teamMembers.indexOf((elementi) => elementi == "Jukka");
console.log("Jukan esiintymat on :", löydetty);

// Harjoitus 14: Muuta jäsenet `map` avulla kirjoitettavaksi ISOILLA KIRJAIMILLA
// Kirjoita koodisi tähän:

let ISOILLA = teamMembers.map((jäsen) => jäsen.toUpperCase());

console.log("Jäsenet isolla kirjaimella:", ISOILLA);
