const charactersService = require("../services/servicesHarry");

async function characterInfo(req, res) {
  const character = res.body;
  res.json(await charactersService.characterInfo(character));
}

async function checkTheHouse(req, res) {
  console.log("check!!");
  const character = req.body;
  console.log(character);
  res.json(await charactersService.checkTheHouse(character));
}
module.exports = {
  characterInfo,
  checkTheHouse,
};
