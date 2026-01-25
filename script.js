let currentQuestion = 0;
let score = 0;
let questions = [];

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

function startQuiz(level) {
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

  loadQuestion();
}
function updateProgressBar() {
  const progress = (currentQuestion / questions.length) * 100;
  document.getElementById("progressBar").style.width = `${progress}%`;
}


function loadQuestion() {
  if (currentQuestion >= questions.length) {
    showResults();
    return;
  }
  updateProgressBar();

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

  savePerformance(score, accuracy, risk);
}

function savePerformance(score, accuracy, risk) {
  const history =
    JSON.parse(localStorage.getItem("phishguardHistory")) || [];

  history.push({
    date: new Date().toLocaleDateString(),
    difficulty: document.getElementById("difficulty").value,
    score: score,
    accuracy: accuracy + "%",
    risk: risk
  });

  localStorage.setItem("phishguardHistory", JSON.stringify(history));
}
function savePerformance(score, accuracy, risk) {
  const history =
    JSON.parse(localStorage.getItem("phishguardHistory")) || [];

  history.push({
    date: new Date().toLocaleDateString(),
    difficulty: document.getElementById("difficulty").value,
    score: score,
    accuracy: accuracy + "%",
    risk: risk
  });

  localStorage.setItem("phishguardHistory", JSON.stringify(history));
}
function savePerformance(score, accuracy, risk) {
  const history =
    JSON.parse(localStorage.getItem("phishguardHistory")) || [];

  history.push({
    date: new Date().toLocaleDateString(),
    difficulty: document.getElementById("difficulty").value,
    score: score,
    accuracy: accuracy + "%",
    risk: risk
  });

  localStorage.setItem("phishguardHistory", JSON.stringify(history));
}
function savePerformance(score, accuracy, risk) {
  const history =
    JSON.parse(localStorage.getItem("phishguardHistory")) || [];

  history.push({
    date: new Date().toLocaleDateString(),
    difficulty: document.getElementById("difficulty").value,
    score: score,
    accuracy: accuracy + "%",
    risk: risk
  });

  localStorage.setItem("phishguardHistory", JSON.stringify(history));
}
function savePerformance(score, accuracy, risk) {
  const history =
    JSON.parse(localStorage.getItem("phishguardHistory")) || [];

  history.push({
    date: new Date().toLocaleDateString(),
    difficulty: document.getElementById("difficulty").value,
    score: score,
    accuracy: accuracy + "%",
    risk: risk
  });

  localStorage.setItem("phishguardHistory", JSON.stringify(history));
}
function savePerformance(score, accuracy, risk) {
  const history =
    JSON.parse(localStorage.getItem("phishguardHistory")) || [];

  history.push({
    date: new Date().toLocaleDateString(),
    difficulty: document.getElementById("difficulty").value,
    score: score,
    accuracy: accuracy + "%",
    risk: risk
  });

  localStorage.setItem("phishguardHistory", JSON.stringify(history));
}
