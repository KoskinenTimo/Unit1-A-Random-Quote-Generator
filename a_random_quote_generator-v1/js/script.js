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
 * A collection of known quotes with 5 properties. 'quote' and 'source' are mandatory, 
 * 'year', 'cication' and 'tags' are optional.
***/

const quotes = [
    {
        quote:"Veni, vidi, vici!", 
        source:"Julius Caesar", 
        year:"47 BC",
        tags:"politics"
    },
    {
        quote:"Happiness is a choice that requires effort at times.", 
        source:"Aeschylus", 
        year:"500 BC"  
    },
    {
        quote:"I will either find a way, or make one.", 
        source:"Hannibal", 
        year:"210 BC",
        tags:"politics"
    },
    {
        quote:"I have seen all, I have heard all, I have forgotten all.", 
        source:"Marie Antoinette", 
        year:"1790 AD",
        tags:"humor"
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
 * Pulls a quotes randomly from 'quotes' array using Math.random().
 * Returns quote object.
***/

const getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
};

/***
 * `printQuote` function
 * Builds an HTML string and inputs the string to HTML element with id 
 * 'quote-box'.
 * Uses 'getRandomQuote()' to get quote object. 
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
    if(randomQuote.tags) {
        quoteHTML += `  <span class="year">${randomQuote.tags}</span>
        `;
    };
    quoteHTML += `</p>`;
    document.getElementById('quote-box').innerHTML = quoteHTML;
    randomBackgroundColor();   
    clearInterval(timer);
    timer = autoUpdateQuote();
};

/***
 * `randomBackgroundColor` function
 * Creates a random color code and updates the backgroundColor of the HTML element 
 * with id 'quote-box' each time the quote is pulled. 
***/

const randomBackgroundColor = () => {
    const randomNumber1 = Math.round(Math.random() * 255);
    const randomNumber2 = Math.round(Math.random() * 255);
    const randomNumber3 = Math.round(Math.random() * 255);
    document.querySelector("body").style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
}
// getElementById('quote-box').parentElement

/***
 * `autoUpdateQuote` function
 * This function return the interval to auto update quote every 10 seconds.
 * If the 'printQuote' is called, the variable this function will be stored
 * in, will be cleared and new setInterval will be set with this function.
***/

const autoUpdateQuote = () => {
    return setInterval(printQuote, 10000); 
};
let timer = autoUpdateQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", 
printQuote, false);