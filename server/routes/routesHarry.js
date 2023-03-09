const router = require("express").Router();

const { characterInfo } = require("../controllers/controllersHarry");

router.get("/", characterInfo);
// router.get("/all", getCharacter);

module.exports = router;
