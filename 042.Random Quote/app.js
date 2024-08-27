const generatequoteBtn = document.getElementById('quoteBtn');
const quoteOutput = document.getElementById('quoteOutput');
const authorOutput = document.getElementById('authorOutput');

generatequoteBtn.addEventListener('click', () => {
    generateQuote();
});

const arrayofQuotes = [
    {
        author:  'Winston S. Churchill',
        quote: "History will be kind to me for I intend to write it."
    },
    {
        author:  'Virginia Woolf',
        quote: "I can only note that the past is beautiful because one never realises an emotion at the time. It expands later, and thus we don't have complete emotions about the present, only about the past."
    },
    {
        author:  'George Orwell',
        quote: "The most effective way to destroy people is to deny and obliterate their own understanding of their history."
    },
    {
        author:  ' Confucius',
        quote: "Study the past and you would define the future"
    },
    {
        author:  'B. C. Forbes',
        quote: "History has demonstrated that the most notable winners usually encountered heartbreaking obstacles before they triumphed. They won because they refused to become discouraged by their defeats."
    },
]

function generateQuote() {
    let random = Number.parseInt(Math.random() * arrayofQuotes.length + 1)
    quoteOutput.innerHTML = `<span>${arrayofQuotes[random].quote}</span>`
    authorOutput.innerHTML = `<small>-${arrayofQuotes[random].author}-</small>`;
}