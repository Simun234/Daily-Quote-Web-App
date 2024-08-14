const questionAndAnswer = [
  {
    question: "What is the best way to strat the day?",
    answer: " A healthy breakfast!",
  },
  {
    question: "How do you stay motivated?",
    answer: "Set small, achievable goals!",
  },
  {
    question: "What's the key to success?",
    answer: "Persistence and hard work!",
  },
  {
    question: "What is the key to achieving your goals",
    answer: "Consistent effort and dedication",
  },
  {
    question: "How do you maintain a positive mindset",
    answer: "Focus on the good and practice gratitude!",
  },
  {
    question: "How do you turn a bad day around",
    answer: "Shift your focus to something positive and take a break!",
  },
  {
    question: "What is the first step towards success",
    answer: "Taking action, no matter how small!",
  },
];

function updateQuote() {
  const today = new Date();
  const index = today.getDate() % questionAndAnswer.length;

  document.getElementById("question-text").innerText =
    questionsAndAnswers[index].question;
  document.getElementById("answer-text").innerText =
    questionsAndAnswers[index].answer;
}

updateQuote();
