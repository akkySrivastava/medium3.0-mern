const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const storiesDB = require("../models/Stories");

router.post("/", async (req, res) => {
  try {
    await storiesDB
      .create({
        title: req.body.title,
        content: req.body.content,
        userId: req.body.userId,
      })
      .then((doc) => {
        res.status(201).send({
          status: true,
          data: doc._id,
          message: "Stories added successfully",
        });
      })
      .catch(() => {
        res.status(400).send({
          status: false,
          message: "Error while adding stories",
        });
      });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Unexpected error occurred",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    await storiesDB
      .aggregate([
        {
          $lookup: {
            from: "users", //collection to join
            localField: "userId", //field from input document
            foreignField: "_id",
            as: "userDetails", //output array field
          },
        },
      ]).sort({created_at: -1})
      .exec()
      .then((doc) => {
        res.status(200).send({
          status: true,
          data: doc,
        });
      })
      .catch(() => {
        res.status(400).send({
          status: false,
          message: "Error in fetching stories",
        });
      });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Unexpected error occurred",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    await storiesDB
      .aggregate([
        {
          $match: { _id: mongoose.Types.ObjectId(req.params.id) },
        },
        {
          $lookup: {
            from: "users", //collection to join
            localField: "userId", //field from input document
            foreignField: "_id",
            as: "userDetails", //output array field
          },
        },
      ])
      .then((doc) => {
        res.status(200).send({
          status: true,
          data: doc[0],
        });
      })
      .catch(() => {
        res.status(400).send({
          status: false,
          message: "Error in fetching stories",
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: false,
      message: "Unexpected error occurred",
    });
  }
});

router.get("/user/:uid", async (req, res) => {
  try {
    await storiesDB
      .aggregate([
        {
          $match: { userId: mongoose.Types.ObjectId(req.params.uid) },
        },
        //   {
        //     $lookup: {
        //       from: "users", //collection to join
        //       localField: "userId", //field from input document
        //       foreignField: "_id",
        //       as: "userDetails", //output array field
        //     },
        //   },
      ])
      .exec()
      .then((doc) => {
        res.status(200).send({
          status: true,
          data: doc,
        });
      })
      .catch(() => {
        res.status(400).send({
          status: false,
          message: "Error in fetching stories",
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: false,
      message: "Unexpected error occurred",
    });
  }
});

module.exports = router;
