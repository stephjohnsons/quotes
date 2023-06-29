const button = document.querySelector("button");
const language = document.getElementById("language");
const reset = document.getElementById("reset");

/* Quotes */ // Powered by Quotable  
// https://github.com/lukePeavey/quotable

const quoteURL = "https://api.quotable.io/random";
async function updateQuote() {
  const result = await fetch(quoteURL);
  const data = await result.json();
  quote.innerHTML = data.content;
  author.innerHTML = ` — ${data.author}`;
  console.log(data);

  language.classList.remove('invisible');
  language.classList.add('visible');
};

button.addEventListener("click", updateQuote);

function resetQuote() { // Resetting quotes.
  window.location.href = window.location.href;
};

reset.addEventListener("click", resetQuote);