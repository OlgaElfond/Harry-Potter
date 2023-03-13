const { readFile, writeFile } = require("fs/promises");
const path = require("path");

// function to found a random character fetch
async function getAllCharacters() {
  const response = await fetch("https://hp-api.onrender.com/api/characters");
  const characters = await response.json();
  //console.log(characters);
  return characters;
}

async function getCharacter() {
  const allCharacters = await getAllCharacters();
  const charactersNumber = await randomNumber();
  console.log(charactersNumber);
  const randomChoiceCharacter = allCharacters[charactersNumber];
  return randomChoiceCharacter;
}

//function send id img name
async function characterInfo() {
  const element = await getCharacter();
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

async function checkTheHouse(theChosenCharacterObj) {
  const allCharacters = await getAllCharacters();
  const theChosenHouseCharacter = allCharacters.find(
    (character) => character.id === theChosenHouseCharacter.id
  );

  if (theChosenHouseCharacter.hose === theChosenCharacterObj.hose) {
    console.log("you Win");
    //return ???? to send win
  } else {
    console.log("you lose");
    //return ???? to send lose
  }
}
module.exports = {
  characterInfo,
  checkTheHouse,
};
