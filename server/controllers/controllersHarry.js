const charactersService = require("../services/servicesHarry");

async function characterInfo(req, res) {
  const character = res.body;
  res.json(await charactersService.characterInfo(character));
}

async function checkTheHouse(req, res) {
  const character = req.body;
  res.json(await charactersService.checkTheHouse(character));
}

function checkTheHouse() {}
module.exports = {
  characterInfo,
  checkTheHouse,
};
