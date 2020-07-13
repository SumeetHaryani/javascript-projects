const quoteBox = document.getElementById("quote-box");
const quoteText = document.getElementById("text");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("tweet-quote");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function showLoadingSpinner() {
  loader.hidden = false;
  quoteBox.hidden = true;
}
function removeLoadingSpinner() {
  if (!loader.hidden) {
    quoteBox.hidden = false;
    loader.hidden = true;
  }
}
//get Quote from API
async function getQuote() {
  showLoadingSpinner();
  const proxyURL = "https://cors-anywhere.herokuapp.com/";
  const apiURL =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyURL + apiURL);
    const data = await response.json();

    //check if author is blank
    if (data.quoteAuthor === "") {
      authorText.innerText = "Unknown";
    } else {
      authorText.innerText = data.quoteAuthor;
    }

    // Reduce font size for long quotes
    if (quoteText.innerText.length > 120) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }
    quoteText.innerText = data.quoteText;
    removeLoadingSpinner();
  } catch (error) {
    // getQuote();
  }
}
//Tweet Quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterURL = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  encodeURIComponent(twitterURL);
  window.open(twitterURL, "_blank");
}
// Event Listeners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

//on Load
getQuote();
