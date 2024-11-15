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
        text: "You have learned something new about the universe."
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
    opt1.onclick = goShopping;
    opt2.onclick = getFood;
}
function waitForBus() {
    text.innerText = "You sit in the bus shelter.";
    opt1.innerText = "Take the first bus"
    opt2.innerText = "Take the second bus"
    opt1.onclick = null;
    opt2.onclick = null;
}
function goShopping() {
    text.innerText = "You enter the store. The lights are bright and the floor is shiny.";
    opt1.innerText = "Go to the clothing department";
    opt2.innerText = "Go to the homewares department";
    opt1.onclick = clothesShop;
    opt2.onclick = null;
}
function clothesShop() {
    text.innerText = "You stand in the women's clothing department. The clothes are unfamiliar yet beautiful.";
    opt1.innerText = "Pick dress suit";
    opt2.innerText = "Pick shift dress";
    opt1.onclick = dressSuit;
    opt2.onclick = shiftDress;
}
function dressSuit() {
    text.innerText = "You try on the dress suit. You like its refined charm.";
    opt1.innerText = "Buy the suit";
    opt2.innerText = "Try on the shift dress";
    opt1.onclick = buySuit;
    opt2.onclick = shiftDress;
}
function shiftDress() {
    text.innerText = "You try on the shift dress. You like its sleek";
    opt1.innerText = "Buy the dress";
    opt2.innerText = "Try on the suit";
    opt1.onclick = buyDress;
    opt2.onclick = dressSuit;
}

function buySuit() {
    text.innerText = "You buy the dress suit. Your stomach growls.";
    opt1.innerText = "Go to restaurant";
    opt2.innerText = "Go home";
    opt1.onclick = getFood;
    opt2.onclick = goHome;
}
function getFood() {
    text.innerText = "You enter the diner and sit at a booth.";
    opt1.innerText = "Order cheeseburger";
    opt2.innerText = "Order fish and chips";
    opt1.onclick = burger;
    opt2.onclick = fishNChips;
}
function burger() {
    text.innerText = "You order the cheeseburger. The cheese is a fun blend and the meat is juicy.";
    opt1.innerText = "Order dessert";
    opt2.innerText = "Go home";
    opt1.onclick = dessert;
    opt2.onclick = goHome;
}
function fishNChips() {
    text.innerText = "You order the fish and chips. The fish is bland, but the outside is crispy.";
    opt1.innerText = "Order dessert";
    opt2.innerText = "Go home";
    opt1.onclick = dessert;
    opt2.onclick = goHome;
}
function dessert() {
    text.innerText = "You order a slice of pumpkin pie. It tastes like a crisp autumn evening.";
    opt1.innerText = "Take a walk";
    opt2.innerText = "Go home";
    opt1.onclick = takeWalk;
    opt2.onclick = goHome;
}
function takeWalk() {
    text.innerText = "You take a walk through the park.";
    opt1.innerText = "Go home";
    opt2.style.display = "none";
    opt1.onclick = goHome;
    opt2.onclick = null/*end*/;
}
function goHome() {
    text.innerText = "You walk home.";
    opt1.style.display = "none";
    opt2.style.display = "none";
    opt1.onclick = null/*end*/;
    opt2.onclick = null/*end*/;
}
