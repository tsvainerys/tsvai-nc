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
    opt1.onclick = firstBus;
    opt2.onclick = null;
}
function firstBus() {
    text.innerText = "You take the first bus. It is crowded, and seems to be going to the local mall.";
    opt1.innerText = "People-watch";
    opt2.innerText = "Look out the window";
    opt1.onclick = peopleWatch;
    opt2.onclick = lookOutWindow;
}
const bus1Passengers = [
    {
        description:"a woman with large hair",
        action: "She's reading a magazine",
        opinion: "It seems trashy. She chews her gum far too loudly"
    },
    {
        description: "a man with a prominent nose",
        action: "He's looking out the window, watching the houses and businesses zoom by",
        opinion: "He's very handsome, but his suit is too fine for your tastes"
    },
    {
        description: "a woman with her son",
        action: "Both of them are having a lively conversation about what they will do at the mall",
        opinion: "You hope that someday you can have that kind of life"
    }
]
let clickState = 0;
function peopleWatch() {
    opt1.innerText = "People-watch";
    opt2.innerText = "Look out the window";
    opt1.onclick = peopleWatch;
    opt2.onclick = lookOutWindow;
    clickState++;

    if (clickState == 1 ) {
        text.innerText = `You see ${bus1Passengers[0].description}. ${bus1Passengers[0].action}. ${bus1Passengers[0].opinion}.`;
    } else if (clickState == 2 ) {
        text.innerText = `You see ${bus1Passengers[1].description}. ${bus1Passengers[1].action}. ${bus1Passengers[1].opinion}.`;
    } else if (clickState == 3 ) {
        text.innerText = `You see ${bus1Passengers[2].description}. ${bus1Passengers[2].action}. ${bus1Passengers[2].opinion}.`;
    } else {
        text.innerText = "You don't find anyone else on the bus particularly interesting. You itch for something else to do.";
        opt1.innerText = "Sit with your thoughts";
        opt2.innerText = "Look out the window";
        opt1.onclick = sitBus;
        opt2.onclick = lookOutWindow;
    } 
}
function lookOutWindow() {
    text.innerText = "You look out the window of the bus. Little greenery passes you by, as the landscape has been overtaken by post-war development. You feel as though you can taste the radioactive carbon and strontium in the atmosphere, even though you know that's impossible.";
    opt1.innerText = "Sit with your thoughts";
    opt2.style.display = "none";
    opt1.onclick = null;
}
/*function sitBus() {
    text.innerText = "";
    opt1.innerText = "";
    opt2.innerText = "";
    opt1.onclick = ;
    opt2.onclick = ;
}*/
function goShopping() {
    text.innerText = "You enter the store. The lights are bright and the floor is shiny.";
    opt1.innerText = "Go to the clothing department";
    opt2.innerText = "Go to the housewares department";
    opt1.onclick = clothesShop;
    opt2.onclick = housewares;
}
function housewares() {
    text.innerText = "You step into the housewares department. Bright colors and quirky patterns assault your eyes.";
    opt1.innerText = "Look at the stereo console";
    opt2.innerText = "Look at the wallpaper";
    opt1.onclick = stereoConsole;
    opt2.onclick = wallpaper;
}
function stereoConsole() {
    text.innerText = "You stand in front of a stereo console. It has a spot for a radio and a record player. You think fondly of the idea of having a record player to play all the new Terran music you've heard at work, but dread having to deal with the bulk.";
    opt1.innerText = "Buy the stereo console";
    opt2.innerText = "Look at the wallpaper";
    opt1.onclick = buyStereo;
    opt2.onclick = wallpaper;
}
function buyStereo() {
    text.innerText = "You buy the stereo console and ask the clerk for delivery. You think that the first record you'll buy will be that Supremes one that came out a little while ago. Your stomach growls.";
    opt1.innerText = "Get food";
    opt2.innerText = "Go home";
    opt1.onclick = getFood;
    opt2.onclick = goHome;
}
function wallpaper() {
    text.innerText = "You stand in the wallpaper department. A simple design calls to you, but its asymmetric starbursts remind you of home.";
    opt1.innerText = "Buy a roll of the wallpaper";
    opt2.innerText = "Look at the stereo console";
    opt1.onclick = buyWallpaper;
    opt2.onclick = stereoConsole;
}
function buyWallpaper() {
    text.innerText = "You buy a roll of the starburst wallpaper. You consider going into the city someday to get matching faceplates. Your stomach growls.";
    opt1.innerText = "Get food";
    opt2.innerText = "Go home";
    opt1.onclick = getFood;
    opt2.onclick = goHome;
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
    text.innerText = "You try on the shift dress. You like its sleek silhouette.";
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
    opt1.innerText = "Restart?";
    opt2.style.display = "none";
    opt1.onclick = restart;
    opt2.onclick = null/*end*/;
}
function restart() {
    opt2.style.display = "initial";
    text.innerText = "You sit in your living room.";
    opt1.innerText = "Read a book";
    opt2.innerText = "Leave the house";
    opt1.onclick = readBook;
    opt2.onclick = goOut;
}