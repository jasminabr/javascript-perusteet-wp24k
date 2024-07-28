/* Luo toiminnallisuus, jossa syötekentän arvo näytetään jatkuvasti ja päivitetään omalla alueellaan sivulla käyttäjän kirjoittaessa, käyttäen onchange-tapahtumaa. */

/* Ohjeet:

HTML:
- Luo perus-HTML
- Sisällytä <input type="text"> -elementti, johon käyttäjä voi kirjoittaa tekstiä.
- Lisää <div> -elementti, jolla on tunniste (esim. id="displayText"), joka näyttää syötekentän arvon.
- Muista yhdistää HTML- ja JS-tiedostot
*/

const input = document.querySelector("input");

const liveTyping = () => {
  const textArea = document.querySelector("#displayText");
  textArea.textContent = input.value;
};

input.addEventListener("input", liveTyping);
