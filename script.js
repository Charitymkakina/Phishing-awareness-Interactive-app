let currentQuestion = 0;
let score = 0;
let questions = [];
let selectedDifficulty = "";

/*Question banks*/
const beginnerquestions = [
  {
    header: "From: support@paypa1.com",
    body: "Your account has been limited. Click the link to verify immediately.",
    answer: "phishing",
    explanationCorrect: "The sender domain is misspelled and creates urgency.",
    explanationWrong: "Legitimate companies do not pressure users or use fake domains."
  },
  {
    header: "From: hr@company.com",
    body: "Please review the attached updated leave policy.",
    answer: "legitimate",
    explanationCorrect: "The email is professional and does not request sensitive data.",
    explanationWrong: "There are no suspicious links or urgency indicators."
  }
];
const intermediateQuestions = [
  {
    header: "From: bank-alert@secure-login.net",
    body: "Unusual activity detected. Login now to secure your account.",
    answer: "phishing",
    explanationCorrect: "Generic greeting and suspicious domain indicate phishing.",
    explanationWrong: "Banks do not ask users to login via email links."
  },
  {
    header: "From: netflix@billing.com",
    body: "Payment failed. Update billing details now.",
    answer: "phishing",
    explanationCorrect: "Threat-based messaging and unclear sender domain.",
    explanationWrong: "Always log in directly to the official website."
  }
];
const advancedQuestions =[
  {
    header: "From: events@university.edu",
    body: "Reminder: Cybersecurity webinar today at 3 PM.",
    answer: "legitimate",
    explanationCorrect: "Trusted domain and no request for personal data.",
    explanationWrong: "There are no phishing indicators present."
  }
];
/*Quiz start*/

function startQuiz(level) {
  selectedDifficulty = level;
  currentQuestion = 0;
  score = 0;

  if (level === "beginner") {
    questions = beginnerquestions;
  } else if (level ==="intermediate") {
    questions = intermediateQuestions;
  } else if (level === "advanced") {
    questions = advancedQuestions;
  }
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("progressBar").style.width = "0%";
document.getElementById("progressBar").style.backgroundColor = "#22c55e";
document.getElementById("questionCounter").innerText =
  `Question 1 of ${questions.length}`;

  loadQuestion();

}
/*UI helpers*/

function updateProgressBar() {
  const progress = (currentQuestion / questions.length) * 100;
  const bar = document.getElementById("progressBar");

  bar.style.width = `${progress}%`;

  if (progress < 40) {
    bar.style.backgroundColor = "#22c55e"; // green
  } else if (progress < 70) {
    bar.style.backgroundColor = "#facc15"; // yellow
  } else {
    bar.style.backgroundColor = "#ef4444"; // red
  }
}


function updateQuestionCounter() {
  const counter = document.getElementById("questionCounter");
  counter.innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
}

/*Question loading */

function loadQuestion() {
  if (currentQuestion >= questions.length) {
    showResults();
    return;
  }
  updateProgressBar();
  updateQuestionCounter();


  const card = document.getElementById("quizCard");

  // Start hidden
  card.classList.remove("fade-in");
  card.classList.add("fade-out");

  setTimeout(() => {
    document.getElementById("emailHeader").innerText =
      questions[currentQuestion].header;

    document.getElementById("emailBody").innerText =
      questions[currentQuestion].body;

    document.getElementById("feedback").innerText = "";

    // Fade in
    card.classList.remove("fade-out");
    card.classList.add("fade-in");
  }, 400);
}
/*Answer handling*/

function checkAnswer(choice) {
  const q = questions[currentQuestion];
  const card = document.getElementById("quizCard");

  if (choice === q.answer) {
    score++;
    document.getElementById("feedback").innerText =
      "Correct! " + q.explanationCorrect;
  } else {
    document.getElementById("feedback").innerText =
      "Incorrect. " + q.explanationWrong;
  }

  // Start fade-out after feedback
  card.classList.remove("fade-in");
  card.classList.add("fade-out");

  currentQuestion++;

  // WAIT before loading next question (THIS is the timing)
  setTimeout(loadQuestion, 1200);
}
/*Results and History*/

function showResults() {
  document.getElementById("dashboard").style.display = "block";

  document.getElementById("finalScore").innerText =
    `Score: ${score} / ${questions.length}`;

  const accuracy = Math.round((score / questions.length) * 100);
  document.getElementById("accuracy").innerText =
    `Accuracy: ${accuracy}%`;

  const risk =
    accuracy >= 80
      ? "Low"
      : accuracy >= 50
      ? "Medium"
      : "High";

  document.getElementById("riskScore").innerText =
    `Risk Level: ${risk}`;

  savePerformance (score, accuracy, risk);
  loadHistory();
}

function savePerformance(score, accuracy, risk) {
  const history =
    JSON.parse(localStorage.getItem("phishguardHistory")) || [];

  history.push({
    date: new Date().toLocaleString(),
    difficulty: selectedDifficulty,
    score: `${score}/${questions.length}`,
    accuracy: accuracy + "%",
    risk: risk
  });

  localStorage.setItem("phishguardHistory", JSON.stringify(history));
}
function loadHistory() {
  const history =
    JSON.parse(localStorage.getItem("phishguardHistory")) || [];

  const container = document.getElementById("historyList");
  container.innerHTML = "";

  history.forEach(item => {
    const div = document.createElement("div");
    div.innerText = `${item.date} | ${item.difficulty} | ${item.score}`;
    container.appendChild(div);
  });
  }



  