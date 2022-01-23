const quotes = [
    {
        quote: "You become what you believe.",
        author: "Oprah Winfrey",
    },
    {
        quote: "Ask and it will be given to you. Search, and you will find. Knock and the door will be opened for you.",
        author: "Jesus",
    },
    {
        quote: " Believe you can and you’re halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
    },
    {
        quote: "The mind is everything. What you think you become.",
        author: "Buddha",
    },
    {
        quote: "Either you run the day, or the day runs you.",
        author: "Jim Rohn",
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra",
    },
    {
        quote: "Remember no one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Change your thoughts and you change your world.",
        author: "Norman Vincent Peale",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); // or span:nth-child(2)
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //or .ceil() or .round()

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author; //[0]['author'] 이런식으로 안해도 된다...!
