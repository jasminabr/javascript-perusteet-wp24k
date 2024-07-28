/* 
Kirjoita JavaScript-koodi, joka lisää tapahtumankäsittelijän napille.

Kun nappia klikataan, funktion tulisi:
- Hakea arvo syötekentästä.
- Luoda uusi <li> elementti ja asettaa sen tekstisisältö syötekentän arvoksi.
- Lisätä uusi <li> elementti hedelmälistan <ul>-elementtiin.

Varmista, että syötekenttä tyhjennetään hedelmän lisäämisen jälkeen.
*/

const button = document.querySelector("#addFruitBtn");
const addToList = () => {
  const fruitInput = document.querySelector("#fruitInput");
  const fruitList = document.querySelector("#fruitList");

  if (fruitInput.value) {
    const li = document.createElement("li");
    li.textContent = fruitInput.value;
    fruitList.appendChild(li);
    fruitInput.value = "";
    console.log(fruitInput);
  } else {
    alert("Lisää hedelmän nimi , kiitos");
  }
  document.querySelector("#fruitInput").value = "";
};

button.addEventListener("click", addToList);
