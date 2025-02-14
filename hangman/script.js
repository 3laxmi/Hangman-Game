const randomAnimalsNames = [
    "Aardvark", "Albatross", "Alligator", "Alpaca", "Ant", "Anteater",
    "Antelope", "Ape", "Armadillo", "Donkey", "Baboon", "Badger",
    "Barracuda", "Bat", "Bear", "Beaver", "Bee", "Bison", "Boar",
    "Buffalo", "Butterfly", "Camel", "Capybara", "Caribou", "Cassowary",
    "Cat", "Caterpillar", "Cattle", "Chamois", "Cheetah", "Chicken",
    "Chimpanzee", "Chinchilla", "Chough", "Clam", "Cobra", "Cockroach",
    "Cod", "Cormorant", "Coyote", "Crab", "Crane", "Crocodile", "Crow",
    "Curlew", "Deer", "Dinosaur", "Dog", "Dogfish", "Dolphin", "Dotterel",
    "Dove", "Dragonfly", "Duck", "Dugong", "Dunlin", "Eagle", "Echidna",
    "Eel", "Eland", "Elephant", "Elk", "Emu", "Falcon", "Ferret", "Finch",
    "Fish", "Flamingo", "Fly", "Fox", "Frog", "Gaur", "Gazelle", "Gerbil",
    "Giraffe", "Gnat", "Gnu", "Goat", "Goldfinch", "Goldfish", "Goose",
    "Gorilla", "Goshawk", "Grasshopper", "Grouse", "Guanaco", "Gull",
    "Hamster", "Hare", "Hawk", "Hedgehog", "Heron", "Herring",
    "Hippopotamus", "Hornet", "Horse", "Human", "Hummingbird", "Hyena",
    "Ibex", "Ibis", "Jackal", "Jaguar", "Jay", "Jellyfish", "Kangaroo",
    "Kingfisher", "Koala", "Kookabura", "Kouprey", "Kudu", "Lapwing",
    "Lark", "Lemur", "Leopard", "Lion", "Llama", "Lobster", "Locust",
    "Loris", "Louse", "Lyrebird", "Magpie", "Mallard", "Manatee",
    "Mandrill", "Mantis", "Marten", "Meerkat", "Mink", "Mole", "Mongoose",
    "Monkey", "Moose", "Mosquito", "Mouse", "Mule", "Narwhal", "Newt",
    "Nightingale", "Octopus", "Okapi", "Opossum", "Oryx", "Ostrich",
    "Otter", "Owl", "Oyster", "Panther", "Parrot", "Partridge", "Peafowl",
    "Pelican", "Penguin", "Pheasant", "Pig", "Pigeon", "Pony",
    "Porcupine", "Porpoise", "Quail", "Quelea", "Quetzal", "Rabbit",
    "Raccoon", "Rail", "Ram", "Rat", "Raven", "Red deer", "Red panda",
    "Reindeer", "Rhinoceros", "Rook", "Salamander", "Salmon", "Sand Dollar",
    "Sandpiper", "Sardine", "Scorpion", "Seahorse", "Seal", "Shark",
    "Sheep", "Shrew", "Skunk", "Snail", "Snake", "Sparrow", "Spider",
    "Spoonbill", "Squid", "Squirrel", "Starling", "Stingray", "Stinkbug",
    "Stork", "Swallow", "Swan", "Tapir", "Tarsier", "Termite", "Tiger",
    "Toad", "Trout", "Turkey", "Turtle", "Viper", "Vulture", "Wallaby",
    "Walrus", "Wasp", "Weasel", "Whale", "Wildcat", "Wolf", "Wolverine",
    "Wombat", "Woodcock", "Woodpecker", "Worm", "Wren", "Yak", "Zebra",
];
let totalChances = 0;
const hangstandChildern  = document.querySelector(".hangstand").children;


for (let index = 0; index < hangstandChildern.length; index++) {
    const element =  hangstandChildern[index];
    element.classList.add("display-none");
    
}

let randomAnimalName = null;

function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

function giveMeButtonOnScreen() {
    const rootE1 = document.querySelector(".buttons-parent");
    let i = 65;
    const buttonsDataArray = Array(26).fill(null).map(() => String.fromCharCode(i++));
    buttonsDataArray.forEach((el) => {
        const btn = document.createElement("button");
        btn.textContent = el;
        rootE1.appendChild(btn);
    });
}

function chooseRandomAnimalName() {
    const blankParentEl = document.querySelector(".blanks_parent");
    const randomNumber = getRandomNumber(0, randomAnimalsNames.length);
    randomAnimalName = randomAnimalsNames[randomNumber].toUpperCase();

    for (let index = 0; index < randomAnimalName.length; index++) {
        const letter = randomAnimalName[index];
        const alpha = document.createElement("p");
        const para = document.createElement("span");
        para.textContent = letter;
        alpha.appendChild(para);
        blankParentEl.appendChild(alpha);
    }
}

giveMeButtonOnScreen();
chooseRandomAnimalName();
let checkstatus =0;

const buttonsParentEl = document.querySelector(".buttons-parent");
buttonsParentEl.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        const letterClicked = e.target.textContent;
        const allLettersEls = document.getElementsByTagName("span");
        let foundMatch = false;

        for (let index = 0; index < allLettersEls.length; index++) {
            const spanEl = allLettersEls[index];
            if (letterClicked === spanEl.textContent) {
                spanEl.parentElement.textContent = letterClicked;
                foundMatch = true;
                checkstatus++;
            }
        }

        if (foundMatch) {
            e.target.classList.add("greenbtn");
        } else {
            totalChances++;
           document.querySelector(`.class-${totalChances}`).classList.remove("display-none");


            e.target.classList.add("redbtn");
        }
        e.target.disabled = true; // Disable button after click
    }
    if(totalChances== 10){
        alert("you lost the Game");
        location.reload();
    }
    if(checkstatus == randomAnimalName.length){
        alert("Congratulations!, you won the game");
        location.reload();
    }
});





























// const randomAnimalsNames=[
//     "Aardvark",
//   "Albatross",
//   "Alligator",
//   "Alpaca",
//   "Ant",
//   "Anteater",
//   "Antelope",
//   "Ape",
//   "Armadillo",
//   "Donkey",
//   "Baboon",
//   "Badger",
//   "Barracuda",
//   "Bat",
//   "Bear",
//   "Beaver",
//   "Bee",
//   "Bison",
//   "Boar",
//   "Buffalo",
//   "Butterfly",
//   "Camel",
//   "Capybara",
//   "Caribou",
//   "Cassowary",
//   "Cat",
//   "Caterpillar",
//   "Cattle",
//   "Chamois",
//   "Cheetah",
//   "Chicken",
//   "Chimpanzee",
//   "Chinchilla",
//   "Chough",
//   "Clam",
//   "Cobra",
//   "Cockroach",
//   "Cod",
//   "Cormorant",
//   "Coyote",
//   "Crab",
//   "Crane",
//   "Crocodile",
//   "Crow",
//   "Curlew",
//   "Deer",
//   "Dinosaur",
//   "Dog",
//   "Dogfish",
//   "Dolphin",
//   "Dotterel",
//   "Dove",
//   "Dragonfly",
//   "Duck",
//   "Dugong",
//   "Dunlin",
//   "Eagle",
//   "Echidna",
//   "Eel",
//   "Eland",
//   "Elephant",
//   "Elk",
//   "Emu",
//   "Falcon",
//   "Ferret",
//   "Finch",
//   "Fish",
//   "Flamingo",
//   "Fly",
//   "Fox",
//   "Frog",
//   "Gaur",
//   "Gazelle",
//   "Gerbil",
//   "Giraffe",
//   "Gnat",
//   "Gnu",
//   "Goat",
//   "Goldfinch",
//   "Goldfish",
//   "Goose",
//   "Gorilla",
//   "Goshawk",
//   "Grasshopper",
//   "Grouse",
//   "Guanaco",
//   "Gull",
//   "Hamster",
//   "Hare",
//   "Hawk",
//   "Hedgehog",
//   "Heron",
//   "Herring",
//   "Hippopotamus",
//   "Hornet",
//   "Horse",
//   "Human",
//   "Hummingbird",
//   "Hyena",
//   "Ibex",
//   "Ibis",
//   "Jackal",
//   "Jaguar",
//   "Jay",
//   "Jellyfish",
//   "Kangaroo",
//   "Kingfisher",
//   "Koala",
//   "Kookabura",
//   "Kouprey",
//   "Kudu",
//   "Lapwing",
//   "Lark",
//   "Lemur",
//   "Leopard",
//   "Lion",
//   "Llama",
//   "Lobster",
//   "Locust",
//   "Loris",
//   "Louse",
//   "Lyrebird",
//   "Magpie",
//   "Mallard",
//   "Manatee",
//   "Mandrill",
//   "Mantis",
//   "Marten",
//   "Meerkat",
//   "Mink",
//   "Mole",
//   "Mongoose",
//   "Monkey",
//   "Moose",
//   "Mosquito",
//   "Mouse",
//   "Mule",
//   "Narwhal",
//   "Newt",
//   "Nightingale",
//   "Octopus",
//   "Okapi",
//   "Opossum",
//   "Oryx",
//   "Ostrich",
//   "Otter",
//   "Owl",
//   "Oyster",
//   "Panther",
//   "Parrot",
//   "Partridge",
//   "Peafowl",
//   "Pelican",
//   "Penguin",
//   "Pheasant",
//   "Pig",
//   "Pigeon",
//   "Pony",
//   "Porcupine",
//   "Porpoise",
//   "Quail",
//   "Quelea",
//   "Quetzal",
//   "Rabbit",
//   "Raccoon",
//   "Rail",
//   "Ram",
//   "Rat",
//   "Raven",
//   "Red deer",
//   "Red panda",
//   "Reindeer",
//   "Rhinoceros",
//   "Rook",
//   "Salamander",
//   "Salmon",
//   "Sand Dollar",
//   "Sandpiper",
//   "Sardine",
//   "Scorpion",
//   "Seahorse",
//   "Seal",
//   "Shark",
//   "Sheep",
//   "Shrew",
//   "Skunk",
//   "Snail",
//   "Snake",
//   "Sparrow",
//   "Spider",
//   "Spoonbill",
//   "Squid",
//   "Squirrel",
//   "Starling",
//   "Stingray",
//   "Stinkbug",
//   "Stork",
//   "Swallow",
//   "Swan",
//   "Tapir",
//   "Tarsier",
//   "Termite",
//   "Tiger",
//   "Toad",
//   "Trout",
//   "Turkey",
//   "Turtle",
//   "Viper",
//   "Vulture",
//   "Wallaby",
//   "Walrus",
//   "Wasp",
//   "Weasel",
//   "Whale",
//   "Wildcat",
//   "Wolf",
//   "Wolverine",
//   "Wombat",
//   "Woodcock",
//   "Woodpecker",
//   "Worm",
//   "Wren",
//   "Yak",
//   "Zebra",


// ];
// let randomAnimalName = null;


// function getRandomNumber(min, max){
//     return Math.trunc(Math.random()*(max-min)+min); 
// }


// function giveMeButtonOnScreen(){
// const rootE1 = document.querySelector(".buttons-parent");
// let buttonsDataArray =  Array(26).fill(null);
// let i = 65;
// buttonsDataArray = buttonsDataArray.map((value)=>{
//     return String.fromCharCode(i++);
// });
// buttonsDataArray.forEach((el)=>{
//     const btn = document.createElement("button");
//     btn.textContent = el;
//     rootE1.appendChild(btn);
// });

// }
// function chooseRandonAnimalName(){
//     const blankParentEl = document.querySelector(".blanks_parent")
//     const randomNumber = getRandomNumber(0, randomAnimalsNames.length);

//     randomAnimalName = randomAnimalsNames[randomNumber]
//      .toUpperCase();
//      console.log(randomAnimalsNames);

//      for(let index = 0; index < randomAnimalName.length;index++){
//         const letter = randomAnimalName[index];
//         const alpha  = document.createElement("p");
//         const para = document.createElement("span");
//         para.textContent =letter
//         alpha.appendChild(para);
//         blankParentEl.appendChild(alpha);
//      }
// }

// giveMeButtonOnScreen();
// chooseRandonAnimalName();


// const buttonsParentEl = document.querySelector(".buttons-parent");
// const buttonParentClickFunction = function (e) {
//     if(e.target.textContent.length ===1){
//         const letterClicked = e.target.textContent;
//         const allLettersEls = document.getElementsByTagName("span");
//         console.log(randomAnimalName);
        
//         for (let index = 0; index <  allLettersEls.length; index++) {
//             const spanEl =  allLettersEls[index];

//             if(letterClicked === spanEl.textContent)
//             {
//                 spanEl.parentElement.textContent = letterClicked;
//                  e.target.classList.add("greenbtn");
               
//             } else {
//                 e.target.classList.add("redbtn");
//             }
//         }
    

       
       

//     } 
   
// };

// buttonsParentEl.addEventListener("click", buttonParentClickFunction);