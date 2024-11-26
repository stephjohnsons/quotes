const button = document.querySelector("button");
const language = document.getElementById("language");
const reset = document.getElementById("reset");

const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=1&cat=famous';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '8c0274f42amsh44d91c860b8291cp1cc65ajsnaef3874e862d',
		'x-rapidapi-host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: {}
};

async function updateQuote() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    quote.innerText = data[0].quote || "No quote found.";
    author.innerText = data[0].author ? `— ${data[0].author}` : "— Unknown";
    console.log(data);

    language.classList.remove('invisible');
    language.classList.add('visible');
  } catch (error) {
    console.error("Error fetching or displaying the quote:", error);
  }
}

button.addEventListener("click", updateQuote);

function resetQuote() { // Resetting quotes.
  window.location.href = window.location.href;
};

reset.addEventListener("click", resetQuote);