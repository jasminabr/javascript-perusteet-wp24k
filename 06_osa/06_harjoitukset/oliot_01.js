// Tehtävä 1: Olion luominen ja tulostaminen
/*
Luo olio nimeltään `henkilö` ominaisuuksilla: `nimi` asetettuna "Aleksi" ja `ikä` asetettuna 30.
Tulosta tämä olio konsoliin.
*/
// Kirjoita olio tähän

let henkilo = {
  nimi: "Aleksi",
  ika: "30",
};
console.log(henkilo);

// Tehtävä 2: Olio-ominaisuuksien käyttäminen
/*
Käytä ja kirjaa `nimi` ja `ikä` henkilö-oliosta.
*/
// Kirjoita koodisi tähän

const nimi = henkilo.nimi;
const ika = henkilo.ika;

console.log(`Tämä henkilö nimi on: ${nimi} ja ikä on ${ika}`);

// Tehtävä 3: Olion ominaisuuksien muokkaaminen
/*
Päivitä `henkilö`-olio: aseta `ikä` arvoon 31. Lisää sitten uusi ominaisuus `maa` asetettuna "Kroatia".
Kirjaa päivitetty olio.
*/
// Kirjoita koodisi tähän
henkilo.maa = "Kroatia";
henkilo.ika = "31";

console.log(henkilo.ika);
console.log(henkilo.maa);

console.log(henkilo);

// Tehtävä 4: Sisäkkäiset oliot
/*
Luo olio `opiskelija` ominaisuuksilla: `nimi` arvolla "Emilia" ja `tiedot` oliona, jossa ominaisuudet `ikä` asetettuna 22 ja `kurssi` asetettuna "JavaScript".
Kirjaa `opiskelijan` `kurssi`.
Odotettu tulos: "Kurssi: JavaScript"
*/
// Kirjoita olio ja koodisi tähän

let opiskelija = { nimi: "Emilia" };
let tiedot = { ika: "22", kurssi: "JAvascript" };
let student = Object.assign({}, opiskelija, tiedot);

console.log(student.kurssi);

// Tehtävä 5: Ominaisuuksien poistaminen
/*
Poista `henkilö`-oliosta ominaisuus `ikä`. Kirjaa saatu olio.
Odotettu tulos: { nimi: "Aleksi", maa: "Kroatia" }
*/
// Kirjoita koodisi tähän
delete henkilo.ika;
console.log(henkilo);

// Tehtävä 6: Olion avaimet ja arvot
/*
Kirjaa kaikki ominaisuuden nimet (avaimet) `henkilö`-oliosta, sitten kirjaa kaikki ominaisuuden arvot.
Odotetut tulokset:
Avaimet: nimi, maa
Arvot: Aleksi, Kroatia
*/
// Kirjoita koodisi tähän

const avaimet = Object.keys(henkilo);
const arvot = Object.values(henkilo);

console.log("Avaimet:", avaimet.join(", "));
console.log("Arvot:", arvot.join(", "));

// Tehtävä 7: Olion metodien käyttäminen
/*
Määritä metodi `tervehdi` sisälle `henkilö`-olioon, joka palauttaa "Hei, nimeni on Aleksi".
Kutsu tätä metodia ja kirjaa tulos.
Odotettu tulos: "Hei, nimeni on Aleksi"
*/
// Muokkaa henkilö-oliota ja kirjoita metodin kutsuminen tähän

const henkiloo = {
  nimi: "Aleksi",
  maa: "Kroatia",
  tervehdi: function () {
    return "Hei, nimeni on " + this.nimi;
  },
};

// Kutsu metodia ja kirjaa tulos
const tervehdys = henkiloo.tervehdi();
console.log(tervehdys);
