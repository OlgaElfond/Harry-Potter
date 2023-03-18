const { readFile, writeFile } = require("fs/promises");
const path = require("path");

// function to found a random character fetch
async function getAllCharacters() {
  const response = await fetch("https://hp-api.onrender.com/api/characters");
  const characters = await response.json();
  //console.log(characters);
  return characters.filter((character) => character.house && character.image);
}

async function getCharacter() {
  const allCharacters = await getAllCharacters();
  const charactersNumber = randomNumber();
  console.log(charactersNumber);
  const randomChoiceCharacter = allCharacters[charactersNumber];
  console.log(randomChoiceCharacter);
  return randomChoiceCharacter;
}

//function send id img name   // 19:00 distracted
async function characterInfo() {
  const element = await getCharacter();
  console.log(element);
  let shortInfo = {};
  shortInfo.id = element.id;
  shortInfo.name = element.name;
  shortInfo.image = element.image;
  console.log(shortInfo);

  return shortInfo;
}

// function for random choice
function randomNumber() {
  const min = 0;
  const max = 20;
  let random = Math.floor(min + Math.random() * (max + 1 - min));
  return random;
}

//function for checking which house does characters belong
async function checkTheHouse(obj) {
  console.log(obj.house);
  const allCharacters = await getAllCharacters();
  const theChosenCharacter = allCharacters.find(
    (allCharacters) => allCharacters.id === obj.id
  );
  console.log(theChosenCharacter);
  if (theChosenCharacter.house === obj.house) {
    console.log("you Win");
  } else {
    console.log("you lose");
  }
}
module.exports = {
  characterInfo,
  checkTheHouse,
};
