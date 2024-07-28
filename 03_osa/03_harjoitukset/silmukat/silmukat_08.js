// Tee ohjelma, joka kysyy aluksi käyttäjältä, kuinka monta numeroa he haluavat syöttää.
//Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään jokainen näistä numeroista.
//Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja näyttää käyttäjän antamista numeroista pienin ja suurin.

function main() {
  try {
    const n = parseInt(prompt("Kuinka monta numeroa haluat syöttää?"));

    let smallest = Infinity;
    let largest = -Infinity;

    for (let i = 0; i < n; i++) {
      const numero = parseFloat(prompt(`Syötä ${i + 1}. numero:`));
      smallest = Math.min(smallest, numero);
      largest = Math.max(largest, numero);
    }

    console.log(`Pienin syöttämistäsi numeroista on ${smallest}`);
    console.log(`Suurin syöttämistäsi numeroista on ${largest}`);
  } catch (error) {
    console.error("Virheellinen syöte. Syötä lukuja.");
  }
}

main();
