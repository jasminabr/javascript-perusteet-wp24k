// Kehitä ohjelma, joka jatkaa käyttäjän pyytämistä syöttämään numeroita, kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää kaikkien syötettyjen numeroiden keskiarvo.
function keskiarvo() {
  const numbers = [];
  while (true) {
    try {
      const user_input = parseFloat(prompt("Syötä luku (0 lopettaa):"));
      if (user_input === 0) {
        break;
      }
      numbers.push(user_input);
    } catch (error) {
      console.error("Virheellinen syöte. Syötä luku.");
    }
  }

  if (numbers.length > 0) {
    const keskiarvo =
      numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    console.log(`Syötettyjen numeroiden keskiarvo: ${keskiarvo.toFixed(2)}`);
  } else {
    console.log("Et syöttänyt yhtään numeroa.");
  }
}

keskiarvo();
