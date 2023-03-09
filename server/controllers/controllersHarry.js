const charactersService = require("../services/servicesHarry");

async function characterInfo(req, res) {
  const character = res.body;
  res.json(await charactersService.characterInfo(character));
}
module.exports = {
  characterInfo,
};
