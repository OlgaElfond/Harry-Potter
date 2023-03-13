const router = require("express").Router();

const {
  characterInfo,
  checkTheHouse,
} = require("../controllers/controllersHarry");

router.get("/", characterInfo);
// router.get("/all", getCharacter);

router.post("/checkresult", checkTheHouse);
// router.post("/checkresult", (req, res) => {
//   console.log(req);
// });

module.exports = router;
