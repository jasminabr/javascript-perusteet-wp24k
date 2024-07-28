/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `kirjasto`, joka edustaa kirjojen kokoelmaa.
Jokaisella kirjalla tulisi olla ominaisuudet `otsikko`, `kirjailija` ja `julkaisuvuosi`.
Lisää ainakin kaksi kirja-oliota tähän kokoelmaan.
*/
// Sinun koodisi tähän
let kirjasto = [
  {
    otsikko: "Twisted Love",
    kirjailija: "Ana Huang",
    julkaisuvuosi: 2022,
  },
  {
    otsikko: "Harry Potter ja viisasten kivi",
    kirjailija: "J.K. Rowling",
    julkaisuvuosi: 1997,
  },
];
console.log(kirjasto);

/* Tehtävä 2
Käytä `kirjaston` ensimmäisen kirjan `otsikko`-ominaisuutta ja tulosta se konsoliin.
Muuta toisen kirjan `julkaisuvuotta` uuteen vuoteen kokoelmassa ja kirjaa päivitetty kirja-olio konsoliin.
*/
// Sinun koodisi tähän
console.log("Ensimmäisen kirjan otsikko on:", kirjasto[0].otsikko);

kirjasto[1].julkaisuvuosi = "2020";
console.log("Päivitetty toinen kirja:", kirjasto[1].julkaisuvuosi);

/* Tehtävä 3
Käytä pistenotaatiota lisätäksesi uuden ominaisuuden `lajityypit` (merkkijonotaulukko) ensimmäiseen kirjaan `kirjasto`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-ominaisuuden `onSaatavilla` samaan kirjaan, ilmaisten sen saatavuuden.
*/
// Sinun koodisi tähän
kirjasto[0].lajityypit = ["Romaani", "Nuortenkirjallisuus"];
kirjasto[0]["onSaatavilla"] = true;
console.log(kirjasto);

/* Tehtävä 4
Määritä konstruktorifunktio nimeltä `Kirja`, joka voi luoda uusia kirja-olioita ominaisuuksilla `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit`.
Käyttäen `Kirja`-konstruktoria, luo uusi kirja-olio annetuilla syöttöarvoilla ja lisää se `kirjasto`-kokoelmaan.
*/
// Sinun koodisi tähän
class Kirja {
  constructor(otsikko, kirjailija, julkaisuvuosi, lajityypit) {
    this.otsikko = otsikko;
    this.kirjailija = kirjailija;
    this.julkaisuvuosi = julkaisuvuosi;
    this.lajityypit = lajityypit;
  }
}

let kirja1 = new Kirja("The Da Vinci Code", "Dan Brown", 2003, [
  "Mystery",
  "Thriller",
]);

let kirjat = [kirja1]; // Create an array to store multiple books

console.log(kirjat);

/* Tehtävä 5
Kirjoita funktio nimeltä `luoKirja`, joka ottaa parametrit `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit` (taulukko).
Funktion tulisi palauttaa uusi kirja-olio näillä ominaisuuksilla.
Testaa `luoKirja`-funktiota luomalla uusi kirja-olio käyttäjän antamilla syötteillä ja kirjaa uusi kirja-olio konsoliin.
*/
// Sinun koodisi tähän
function luoKirja(otsikko, kirjailija, julkaisuvuosi, lajityypit) {
  return {
    otsikko: otsikko,
    kirjailija: kirjailija,
    julkaisuvuosi: julkaisuvuosi,
    lajityypit: lajityypit,
  };
}
let käyttäjä = luoKirja("The Catcher in the Rye", "J.D. Salinger", 1951, [
  "Literary Fiction",
]);
console.log(käyttäjä);

/* Tehtävä 6
Muunna `kirjasto`-kokoelma JSON-merkkijonoksi ja kirjaa se konsoliin.
Tee JSON-merkkijonosta JavaScript-olio ja kirjaa ensimmäisen kirjan otsikko konsoliin.
*/
// Sinun koodisi tähän
const jsonMerkkijono = JSON.stringify(kirjasto);
console.log(jsonMerkkijono);

const jsonOlio = JSON.parse(jsonMerkkijono);
console.log(jsonOlio[0].otsikko);
