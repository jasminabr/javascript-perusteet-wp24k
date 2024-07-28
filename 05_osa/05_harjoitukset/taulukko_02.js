// Harjoitus 1: Määritä taulukon pituus ja ehto tarkistus
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
/*
Luo funktio nimeltä myAlphabetLength, joka kirjaa taulukon pituuden.
Sisällytä myös if-lauseke tarkistaaksesi, onko taulukon pituus alle 5.
Odotettu tulos: 
"Taulukon myAlphabet pituus: 7"
"Taulukon pituus on suurempi tai yhtä suuri kuin 5."
*/
// Kirjoita funktiosi tähän

let pitus = myAlphabet.length;
if (pitus >= 5) {
  console.log("Taulukon pituus on suurempi tai yhtä suuri kuin 5.");
} else {
  console.log("Taulukon pitus on lyhyempi kuin 5");
}
console.log("Taulukon myAlphabet pituus:", pitus);

// Harjoitus 2: Käy läpi taulukko ja kirjaa jokainen alkio sen indeksillä
const planets = ["Merkurius", "Venus", "Maa", "Mars", "Jupiter"];
/*
Kirjaa jokainen planeetta taulukossa yhdessä sen indeksin kanssa.
Odotetut tulokset:
"Planeetta: Merkurius, Indeksi: 0"
...
"Planeetta: Jupiter, Indeksi: 4"
*/
// Kirjoita koodisi tähän

for (let i = 0; i < planets.length; i++) {
  console.log(`Planeetta: ${planets[i]}, Indeksi: ${i}`);
}

// Harjoitus 3: Kirjaa taulukon alkiot niiden tyyppeineen
const wowDatatypes = [1, "text", false, null, undefined];
/*
Käy läpi taulukko, kirjaten jokaisen alkion, sen indeksin ja datatyypin.
Odotetut tulokset:
"Alkio: 1, Indeksi: 0, Tyyppi: number"
"Alkio: text, Indeksi: 1, Tyyppi: string"
...
"Alkio: undefined, Indeksi: 4, Tyyppi: undefined"
*/
// Kirjoita koodisi tähän
for (let i = 0; i < wowDatatypes.length; i++) {
  const elementi = wowDatatypes[i];
  const indeksi = i;
  const tyyppi = typeof elementi;

  console.log(`Àlkio: ${elementi} ,indeksi: ${indeksi}  tyyppi: ${tyyppi}`);
}
// Harjoitus 4: Kirjaa taulukon alkiot ilman silmukkaa
let myArr = [1, 2, "One", true];
/*
Kirjaa jokainen alkio tässä taulukossa metodin avulla eli ilman silmukkaa.
Odotetut tulokset: 1, 2, "One", true
*/
// Kirjoita koodisi tähän

let result = myArr.join(", ");
console.log(result);

// Harjoitus 5: Etsi yhteiset kurssit kahden opiskelijan välillä
let student1Courses = ["Matematiikka", "Englanti", "Ohjelmointi"];
let student2Courses = ["Maantieto", "Espanja", "Ohjelmointi"];
/*
Tunnista ja kirjaa ylös kaikki kurssit, jotka ovat yhteisiä sekä student1Courses- että student2Courses-taulukossa.
Odotettu tulos: "Yhteinen kurssi: Ohjelmointi"
*/
// Kirjoita koodisi tähän
let common = student1Courses.filter(function (value) {
  return student2Courses.includes(value);
});

console.log("Yhteinen kurssi :", common);

// Harjoitus 6: Kirjaa jokainen taulukon alkion kirjain
let furniture = ["Pöytä", "Tuolit", "Matto"];
/*
Kirjaa ylös jokainen kirjain furniture-taulukon jokaisesta alkioista.
Odotetut tulokset:
"Kirjaimet 'Pöytä'-sanassa: P, ö, y, t, ä"
...
"Kirjaimet 'Matto'-sanassa: M, a, t, t, o"
*/
// Kirjoita koodisi tähän

for (let i = 0; i < furniture.length; i++) {
  const sana = furniture[i];
  const indeksi = i;
  const kirjaimet = sana.split("");

  console.log(`Kirjaimet "${sana}" -sanassa on: ${kirjaimet}`);
}

// Harjoitus 7: Suodata positiiviset lämpötilat
let temperatures = [-5, 3, -1, 22, -40, 5, 18];
/*
Kirjoita getPositiveTemperatures-funktio siten, että se palauttaa taulukon, joka sisältää positiiviset lämpötilat (lämpötilat, jotka ovat yli 0).
Odotettu tulos: [3, 22, 5, 18]
*/
// Kirjoita koodisi tähän
let getPositiveTemperatures = temperatures.filter((number) => number > 0);

console.log(getPositiveTemperatures);

// Harjoitus 8: Suodata parittomat vuodet
/*
Täydennä getOddYears-funktio siten, että se palauttaa kaikki vuodet, jotka ovat parittomia saamistaan vuosiparametreista. 
Vuodet annetaan taulukkona.
Odotetut tulokset:
getOddYears([2019, 2020, 2021]) -> [2019, 2021]
getOddYears([2000, 2015, 2018, 2020]) -> [2015]
*/

// Kirjoita koodisi tähän
function getOddYears(vuodet) {
  return vuodet.filter((vuosi) => vuosi % 2 !== 0);
}

// Testaus - Poista alta kommenttimerkinnät, niin voit testata funktion toimintaa
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]
