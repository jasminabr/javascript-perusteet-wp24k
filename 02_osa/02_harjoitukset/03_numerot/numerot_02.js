// Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.
// Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9
// Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.

function fahrenheitToCelsius(fahrenheit) {
  let Celsius = ((fahrenheit - 32) * 5) / 9;
  let roundedCelcius = Celsius.toFixed(1);
  return roundedCelcius;
}

// Esimerkki - älä muokkaa
console.log(fahrenheitToCelsius(21)); // haluttu tulos: "-6,1"
