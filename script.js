// Floating hearts & flowers generator
const bg = document.querySelector(".floating-bg");

const symbols = ["💖", "🌸", "🌼", "💜", "💛", "🌺"];

for (let i = 0; i < 30; i++) {
  let span = document.createElement("span");
  span.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (5 + Math.random() * 5) + "s";
  span.style.fontSize = (20 + Math.random() * 30) + "px";
  bg.appendChild(span);
}

// Step functions
function showQuestion() {
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("questionBox").classList.remove("hidden");
}

function showResult() {
  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
}

function openEnvelope() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("envelopeSection").classList.remove("hidden");
}

function openLetter() {
  document.getElementById("envelopeSection").classList.add("hidden");
  document.getElementById("letterBox").classList.remove("hidden");
}
