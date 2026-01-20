let currentQuestion = 0;
let score = 0;

const questions = [
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
  },
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
  },
  {
    header: "From: events@university.edu",
    body: "Reminder: Cybersecurity webinar today at 3 PM.",
    answer: "legitimate",
    explanationCorrect: "Trusted domain and no request for personal data.",
    explanationWrong: "There are no phishing indicators present."
  }
];

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("dashboard").style.display = "none";
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestion >= questions.length) {
    showResults();
    return;
  }

  document.getElementById("emailHeader").innerText = questions[currentQuestion].header;
  document.getElementById("emailBody").innerText = questions[currentQuestion].body;
  document.getElementById("feedback").innerText = "";
}

function checkAnswer(choice) {
  const q = questions[currentQuestion];

  if (choice === q.answer) {
    score++;
    document.getElementById("feedback").innerText =
      "Correct! " + q.explanationCorrect;
  } else {
    document.getElementById("feedback").innerText =
      "Incorrect. " + q.explanationWrong;
  }

  currentQuestion++;
  setTimeout(loadQuestion, 2000);
}

function showResults() {
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("finalScore").innerText =
    `Score: ${score} / ${questions.length}`;

  const accuracy = Math.round((score / questions.length) * 100);
  document.getElementById("accuracy").innerText =
    `Accuracy: ${accuracy}%`;

  document.getElementById("riskScore").innerText =
    accuracy >= 80
      ? "Risk Level: Low"
      : accuracy >= 50
      ? "Risk Level: Medium"
      : "Risk Level: High";
}
