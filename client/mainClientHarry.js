let start = document.querySelector(".start");
start.addEventListener("click", startFunction);

let houseButton = document.querySelectorAll(".house-button");
houseButton.forEach((element) =>
  element.addEventListener("click", checkResult)
);

let character = {};

async function checkResult(event) {
  let house = "";
  if (event.target.attributes["data-house"]) {
    house = event.target.attributes["data-house"].value;
  } else {
    house = event.target.parentElement.attributes["data-house"].value;
  }
  console.log(house);
  character.house = house;
  console.log(character);
  //console.log(character);
  const response = await fetch(
    "http://localhost:3030/api/character/checkresult",
    {
      method: "POST",
      body: JSON.stringify(character),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
}

async function startFunction(event) {
  const char = await (
    await fetch("http://localhost:3030/api/character")
  ).json();
  createImg(char);
  character = char;
  console.log("DOM fully loaded and parsed", char);
}

function createImg(char) {
  const img = document.getElementById("char");
  img.src = char.image;
  console.log(img.src);
}

// async function getCharacterFromServerAsync() {
//   const response = await fetch("http://localhost:3030/api/character");
//   const character = await response.json();
//   //console.log(character);
//   return character;
// }

// function showCharacter() {
//   const character = getCharacterFromServerAsync();
//   const imgCharacter = document.querySelector(".character");
//   imgCharacter = character.image;
//   console.log(imgCharacter);
// }

// window.addEventListener("DOMContentLoaded", async (event) => {
//   const char = await (
//     await fetch("http://localhost:3030/api/character")
//   ).json();

//   const img = document.getElementById("char");
//   img.src = char.image ?? "http";

//   console.log("DOM fully loaded and parsed", char);
// });
