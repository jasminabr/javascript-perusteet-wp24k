/**
Kehitä funktio nimeltä assignGrade, joka:

Hyväksyy yhden argumentin, numeerisen pistemäärän.
Palauttaa kirjainarvosanan pistemäärän perusteella seuraavasti:
- 'A' pistemäärille 90 tai enemmän.
- 'B' pistemäärille 80-89.
- 'C' pistemäärille 70-79.
- 'D' pistemäärille 60-69.
- 'F' pistemäärille alle 60.

*/

points = 98;

if (points >= 90) {
  grade = "A";
  console.log("Sinä sait " + grade);
}

function assignGrade(points) {
  if (points >= 90) {
    return "A";
  } else if (points < 90 && points >= 80) {
    return "B";
  } else if (points < 80 && points >= 70) {
    return "C";
  } else if (points < 70 && points > 60) {
    return "D";
  } else if (points <= 60) {
    return "F";
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log("Sinä sait " + assignGrade(95)); // Sinä sait A
console.log("Sinä sait " + assignGrade(81)); // Sinä sait B
console.log("Sinä sait " + assignGrade(72)); // Sinä sait C
console.log("Sinä sait " + assignGrade(64)); // Sinä sait D
console.log("Sinä sait " + assignGrade(42)); // Sinä sait F

// Treenaa: Keksi itse samanlainen funktio eri nimellä. Pisterajoja voi olla vähemmän kuin yllä.

function tax(salary) {
  if (salary <= 1000) {
    return "8%";
  } else if (salary > 1000 && salary <= 2000) {
    return "10%";
  } else if (salary > 2000 && salary <= 3000) {
    return "15%";
  } else if (salary > 3000 && salary <= 4000) {
    return "18%";
  } else if (salary > 4000) {
    return "20%";
  }
}

// Kutsu tekemääsi funktiota

console.log("tuloverosi on " + tax(800));
console.log("tuloverosi on " + tax(3600));
console.log("tuloverosi on " + tax(4500));
console.log("tuloverosi on " + tax(2050));
console.log("tuloverosi on " + tax(2300));
console.log("tuloverosi on " + tax(1200));
console.log("tuloverosi on " + tax(3100));

//menyre tjeter per ta bere te njejtin ushtrim ...

points = 98;

if (points >= 90) {
  grade = "A";
  console.log("Sinä sait " + grade);
}
