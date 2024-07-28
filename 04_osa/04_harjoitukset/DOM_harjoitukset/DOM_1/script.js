/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön painamalla nappia tekstiksi "Hei, maailma!".
*/

document.getElementById("button").addEventListener("click", function () {
  document.getElementById("content").textContent = "Hei maailma!";
});

// method 2   Laura metodi

const changeText = () => {
  const textPlacement = document.getElementById("content");
  textPlacement.innerHTML = "HEI MAAILMA !";
};
