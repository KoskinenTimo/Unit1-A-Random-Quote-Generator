/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - 
// https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
    {
        quote:"Veni, vidi, vici!", 
        source:"Julius Caesar", 
        year:"47 BC"
    },
    {
        quote:"Happiness is a choice that requires effort at times.", 
        source:"Aeschylus", 
        year:"500 BC"  
    },
    {
        quote:"I will either find a way, or make one.", 
        source:"Hannibal", 
        year:"210 BC"
    },
    {
        quote:"I have seen all, I have heard all, I have forgotten all.", 
        source:"Marie Antoinette", 
        year:"1790 AD"
    },
    {
        quote:"Where there is love there is life.", 
        source:"Mahatma Gandhi", 
        year:"1900 AD"
    },
    {
        quote:"I'll have what she's having", 
        source:"Estelle Reiner", 
        year:"1989 AD",
        citation: "When Harry met Sally - movie"
    },
    {
        quote:"You talking to me?", 
        source:"Robert de Niro", 
        year:"1976 AD",
        citation:"Taxi driver - movie"
    }

];

/***
 * `getRandomQuote` function
***/

const getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
};

/***
 * `printQuote` function
***/

const printQuote = () => {
    const randomQuote = getRandomQuote();
    let quoteHTML = `
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
        `;
    if(randomQuote.citation) {
        quoteHTML += `  <span class="citation">${randomQuote.citation}</span>
        `;
    };
    if(randomQuote.year) {
        quoteHTML += `  <span class="year">${randomQuote.year}</span>
        `;
    };
    quoteHTML += `</p>`;
    document.getElementById('quote-box').innerHTML = quoteHTML;
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", 
printQuote, false);