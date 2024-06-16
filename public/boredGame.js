const text = document.querySelector("#gameText");
const opt1 = document.querySelector("#opt1");
const opt2 = document.querySelector("#opt2");

const book = [
    {
        origin:"home",
        text: "You experience a feeling of nostalgia."
    },
    {
        origin: "the IBD library",
        text: "You're left with a pit in your stomach."
    },
    {
        origin: "the IBS library",
        text: "You have learned something new about our beautiful universe."
    },
    {
        origin: "the local library",
        text: "You have learned something new about the human condition."
    }
]

opt1.onclick = readBook
opt2.onclick = goOut

function readBook() {
    const random = Math.floor(Math.random() * book.length);
    text.innerText = `You picked a book from ${book[random].origin}. ${book[random].text}`;
    opt1.innerText = "Read another book.";
}
function goOut() {
    text.innerText = "You are now outside of your home.";
    opt1.innerText = "Walk down the street";
    opt2.innerText = "Wait for the bus";
    opt1.onclick = walkDown;
    opt2.onclick = waitForBus;
}
function walkDown() {
    text.innerText = "You reach downtown.";
    opt1.innerText = "Go shopping";
    opt2.innerText = "Get food";
    opt1.onclick = null;
    opt2.onclick = null;
}
function waitForBus() {
    text.innerText = "You sit in the bus shelter.";
    opt1.innerText = "Take the first bus"
    opt2.innerText = "Take the second bus"
    opt1.onclick = null;
    opt2.onclick = null;
}

