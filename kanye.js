
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQoutes(data))
}

const displayQoutes = (quote) => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quote.quote;
}



loadQuotes();