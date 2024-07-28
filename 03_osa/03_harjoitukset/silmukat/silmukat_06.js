/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/

let numerot = []; // Krijoni një varg për të ruajtur numerot e futur nga përdoruesi
let vastaus = "po"; // Vendosni fillimisht pergjigjen në 'po' për të filluar loop-un

// Filloni një loop që do të vazhdojë derisa përdoruesi të japë një përgjigje tjetër përveç 'po'
while (vastaus === "po") {
  let num = parseFloat(prompt("Futni një numër:")); // Merrni një numër nga përdoruesi dhe konvertoni në numër

  if (!isNaN(num)) {
    // Kontrolloni nëse num është i vlefshëm
    numerot.push(num); // Shtoni numn në varg
  } else {
    alert("Ju lutem futni një numër të vlefshëm!"); // Njoftoni përdoruesin nëse num është i pavlefshëm
  }

  // Pyetni përdoruesin nëse dëshiron të shtojë më shumë numra
  vastaus = prompt("Dëshironi të shtoni më shumë numra? (po/jo)").toLowerCase();
}

// Llogaritni mesataren e numrave të futur
let sum = 0;
for (let num of numerot) {
  sum += num;
}
let keskiarvo = sum / numerot.length;

// Printoni mesatarjen
console.log("Mesatarja e numrave të futur është: " + keskiarvo);
