/**Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma
 * antaa satunnaisen vastauksen 8-pallosta. Toteuta ohjelma käyttämällä ehtolauseita valitsemaan ja näyttämään yksi useista ennalta määritellyistä vastauksista. */

const responses = ["Kyllä", "Ei"];

function getResponse() {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

const eightBall = document.getElementById("eight-ball");
const answerElement = document.getElementById("answer");
const questionInput = document.getElementById("question-input");
const askButton = document.getElementById("ask-button");

askButton.addEventListener("click", () => {
  const question = questionInput.value.trim();
  if (question.endsWith("?")) {
    answerElement.textContent = getResponse();
  } else {
    answerElement.textContent = "Please ask a yes or no question.";
  }
  questionInput.value = ""; // pastron fushen ku behet pytja
});
