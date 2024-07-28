//Tee ohjelma, joka tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä, esittäen ne seuraavalla tavalla
//2, 98, 4, 96, 6, 62 ja niin edelleen. Tulosta luvut samalle riville.

let result = [];
let start = 2;
let decrement = 98;

for (let i = 0; i < 50; i++) {
  result.push(start);
  result.push(decrement);
  start += 2;
  decrement -= 2;
}

console.log(result.join(" ")); // [2, 98, 4, 96, 6, 94]
