const express = require("express");
const router = express.Router();

const userRouter = require("./User");
const storiesRouter = require("./Stories");

router.get("/", (req, res) => {
  res.send("This api is reserved for medium clone");
});

router.use("/user", userRouter);
router.use("/stories", storiesRouter);

module.exports = router;
