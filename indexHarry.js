const express = require("express");
const app = express();
const cors = require("cors");

const characterRouter = require("./server/routes/routesHarry");

app.use(express.json());
app.use(cors({}));
app.use("/api/character", characterRouter);
app.listen(3030, () => console.log("Server running on port 3030"));
