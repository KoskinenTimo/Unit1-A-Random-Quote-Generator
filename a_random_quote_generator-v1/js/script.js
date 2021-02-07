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
        author:"Julius Caesar", 
        year:"47 BC"
    },
    {
        quote:"Happiness is a choice that requires effort at times.", 
        author:"Aeschylus", 
        year:"500 BC"  
    },
    {
        quote:"I will either find a way, or make one.", 
        author:"Hannibal", 
        year:"210 BC"
    },
    {
        quote:"I have seen all, I have heard all, I have forgotten all.", 
        author:"Marie Antoinette", 
        year:"1790 AD"
    },
    {
        quote:"Where there is love there is life.", 
        author:"Mahatma Gandhi", 
        year:"1900 AD"
    },
    {
        quote:"I'll have what she's having", 
        author:"Estelle Reiner", 
        year:"1989 AD",
        source: "When Harry met Sally - movie"
    },
    {
        quote:"You talking to me?", 
        author:"Robert de Niro", 
        year:"1976 AD",
        source:"Taxi driver - movie"
    }

];

/***
 * `getRandomQuote` function
***/


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", 
printQuote, false);