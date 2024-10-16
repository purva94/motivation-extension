const quotes = [
  "Believe in yourself and all that you are.",
  "You are stronger than you think.",
  "Every day is a second chance.",
  "The best time to plant a tree was 20 years ago. The second-best time is now.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Dream big and dare to fail.",
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

document.getElementById("quote").innerText = getRandomQuote();
