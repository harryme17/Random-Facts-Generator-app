const facts = [
    "I am 20 years old and have a passion for exploring mountains.",
    "I love hiking and have traveled to five national parks.",
    "I am an avid reader and read around 20 books per year.",
    "I speak three languages fluently.",
    "I am learning to play the guitar in my free time"
];

function generateFact() {
    const factDisplay = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}
