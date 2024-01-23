const questions = [
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language"], correctAnswer: 0 },
  { question: "Which of the following is a CSS framework?", options: ["React", "Angular", "Bootstrap"], correctAnswer: 2 },
  { question: "What does CSS stand for?", options: ["Counter Strike: Source", "Corrective Style Sheet", "Cascading Style Sheet"], correctAnswer: 2 },
  { question: "What is the purpose of JavaScript?", options: ["Styling web pages", "Creating dynamic content", "Managing databases"], correctAnswer: 1 },
  { question: "Which programming language is commonly used for server-side development?", options: ["JavaScript", "Python", "Java"], correctAnswer: 2 },
  { question: "What is a responsive web design?", options: ["A design that looks good on any device", "A design with many colors", "A design with animations"], correctAnswer: 0 },
  { question: "What is the purpose of the 'alt' attribute in an HTML image tag?", options: ["To provide alternative text for screen readers", "To set the image alignment", "To apply a filter to the image"], correctAnswer: 0 },
  { question: "Which of the following is NOT a valid CSS unit?", options: ["px", "em", "gm"], correctAnswer: 2 },
  { question: "What does API stand for?", options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Processing Interface"], correctAnswer: 0 },
  { question: "Which of the following is a version control system?", options: ["Git", "Node.js", "MySQL"], correctAnswer: 0 },
];

const quizContainer = document.getElementById("quiz-container");
const resultsContainer = document.getElementById("results-container");

questions.forEach((question, index) => {
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  questionElement.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
  
  question.options.forEach((option, optionIndex) => {
    questionElement.innerHTML += `<label><input type="radio" name="q${index}" value="${optionIndex}">${option}</label><br>`;
  });

  quizContainer.appendChild(questionElement);
});

function showResults() {
  const radioButtons = document.querySelectorAll('input[type="radio"]:checked');

  if (radioButtons.length < questions.length) {
    alert("Please answer all questions before showing results.");
    return;
  }

  const userAnswers = Array.from(radioButtons).map((radio) => parseInt(radio.value));
  const correctAnswers = questions.map((question) => question.correctAnswer);
  const score = userAnswers.reduce((acc, answer, index) => (answer === correctAnswers[index] ? acc + 1 : acc), 0);

  resultsContainer.innerHTML = `<p>Your score: ${score}/${questions.length}</p>`;
  resultsContainer.style.display = "block";
}