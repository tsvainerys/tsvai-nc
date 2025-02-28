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
    opt1.onclick = sitBus;
}
function sitBus() {
    text.innerText = "Sometimes you miss home. You miss the warm sand and the cold evenings, the spicy food and the refreshing desserts. You think about your family, and how they urged you to study something other than nuclear physics. You think about your days at the IBDA and how quickly you were assigned to Earth. You think about your job, you think about the state of the world you live on – political, environmental, everything approaching disaster – and suddenly sitting on the bus is so insignificant you feel like throwing up.";
    opt1.innerText = "Get off the bus";
    opt2.style.display = "initial";
    opt2.innerText = "Stay on the bus";
    opt1.onclick = getOffBus;
    opt2.onclick = null/*stayOnBus*/;
}
function getOffBus() {
    text.innerText = "You get off the bus, feeling a little dizzy. The mall is large, but bland and relatively unimposing.";
    opt1.innerText = "Walk around";
    opt2.innerText = "Stay outside";
    opt1.onclick = walkAround;
    opt2.onclick = null/*stayOutside*/;
}
function walkAround() {
    text.innerText = "You go inside the mall. You enter through the Sears, in the women's clothing section. ";
    opt1.innerText = "Look at the clothes";
    opt2.innerText = "Go to see other stores";
    opt1.onclick = searsClothes;
    opt2.onclick = null/*otherStore*/;
}
function searsClothes() {
    text.innerText = "You look at the clothes. While examining a wool coat, you spot the children's section on the other side of the floor.";
    opt1.innerText = "Try on the coat";
    opt2.innerText = "Go to the children's section";
    opt1.onclick = null/*tryCoat*/;
    opt2.onclick = childrensSection;
}
/*function tryCoat() {
    text.innerText = "";
    opt1.innerText = "";
    opt2.innerText = "";
    opt1.onclick = ;
    opt2.onclick = ;
}*/
function childrensSection() {
    text.innerText = "You go to the children's section. You have no children of your own, but you realize the idea of having some has been on your mind lately. You think of your sister back home and her toddler, how small he felt in your hands. You think of your coworker, the one at the desk next to yours, who kept a framed picture of his young daughter on his desk. You wonder if that could be you, but you also know you couldn't be like them, couldn't leave this planet in good faith, couldn't start a family here in good faith, either.";
    opt1.innerText = "Go back to the coat";
    opt2.innerText = "Get a breath of fresh air";
    opt1.onclick = null/*tryCoat*/;
    opt2.onclick = freshAir;
}
function freshAir() {
    text.innerText = "You go outside to get some air. The polluted air of the suburban center fills your lungs. You think of the mission. You hate the IBD and IBS, hate how they view humans as reckless children who don't know any better. You hate how they have their strange prime directive, where non-interference is of the utmost importance until they think they can recruit a species to fight their eternal war. The bus pulls up as your stew in your anger.";
    opt1.innerText = "Take the bus home";
    opt2.style.display = "none";
    opt1.onclick = takeBusHome;
    opt2.onclick = null;
}
function takeBusHome() {
    text.innerText = "You take the bus home. The sunset paints the inside orange and gold, and you feel like everything will be okay.";
    opt1.innerText = "Restart?";
    opt2.style.display = "none";
    opt1.onclick = restart;
    opt2.onclick = null;
}
/*function otherStore() {
    text.innerText = "";
    opt1.innerText = "";
    opt2.innerText = "";
    opt1.onclick = ;
    opt2.onclick = ;
}*/
/*function stayOutside() {
    text.innerText = "";
    opt1.innerText = "";
    opt2.innerText = "";
    opt1.onclick = ;
    opt2.onclick = ;
}*/
/*function stayOnBus() {
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