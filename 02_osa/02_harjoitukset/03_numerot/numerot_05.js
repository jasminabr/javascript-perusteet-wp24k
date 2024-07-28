/** Tehtävä: Ostoskori
 * Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
 * - Määrittele muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.
 * - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
 * - Tulosta yhteishinta konsoliin.
 */

const omenaHinta = 2.3;
const baananiHinta = 1.7;
const kiwiHinta = 4.4;
const mansikkaHinta = 1.3;

let yhteisHinta = omenaHinta + baananiHinta + kiwiHinta + mansikkaHinta;

console.log(`Yhteishinta  on : ${yhteisHinta.toFixed(2)}`);
