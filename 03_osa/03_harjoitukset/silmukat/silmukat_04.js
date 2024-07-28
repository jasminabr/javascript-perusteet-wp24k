// Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty,
//ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

let summa = 0;
let laskuri = 0;

do {
  let syote = Number(prompt("Syötä luku"));
  summa += syote;
  laskuri++;
  if (syote % 2 === 0) {
    parillisetLuvut++;
  }
} while (laskuri !== 20);
{
  console.log(parillisetLuvut++);
}
console.log(`Parillisia lukuja oli ${parillisetLuvut}`);

//  // Alustetaan muuttuja parillisten lukujen laskemiseen
let p = 0;

//  // Pyydetään käyttäjältä 20 lukua
for (let i = 0; i < 20; i++) {
  const luku = parseInt(prompt(`Syötä luku ${i + 1}:`));

  //Tarkistetaan, onko luku parillinen
  if (luku % 2 === 0) {
    parillisetLuvut++;
  }
}

//  // Tulostetaan parillisten lukujen määrä
console.log(`Parillisia lukuja oli ${parillisetLuvut} kpl.`);

//method 2
let parilliset = 0;

for (kertaLaskuri = 0; kertaLaskuri < 10; kertaLaskuri++) {
  let syote = Number(prompt("syötä numero"));

  console.log("Syote on:", syote);

  if (syote == NaN) {
    i--;
  }
  if (syote % 2 == 0) {
    parilliset++;
  }
}
console.log("parilliset määrä:", parilliset);

// method 3

let laskur = 0;
let parillisetLuvut = 0;

while (laskur < 20) {
  let input = Number(prompt("Anna lisää lukuja"));
  if (input % 2 == 0) {
    parillisetLuvut++;
  }
  laskur++;
}
console.log("Parillisia lukuja oli :", +parillisetLuvut);
