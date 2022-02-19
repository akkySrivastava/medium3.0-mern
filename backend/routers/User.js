const express = require("express");
const router = express.Router();
const userDB = require("../models/User");

router.post("/", async (req, res) => {
  try {
    await userDB
      .create({
        displayName: req.body.displayName,
        email: req.body.email,
        providerId: req.body.providerId,
        photoURL: req.body.photoURL,
        uid: req.body.uid,
        phoneNumber: req.body.phoneNumber,
      })
      .then((data) => {
        res.status(201).send({
          status: true,
          data: data,
          message: "User created successfully",
        });
      })
      .catch((err) => {
        res.status(400).send({
          status: false,
          message: "Error: Bad request",
        });
      });
  } catch (err) {
    res.status(500).send({
      status: "false",
      message: "Internal server error",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    await userDB
      .find()
      .then((doc) => {
        res.status(200).send({
          status: true,
          data: doc,
        });
      })
      .catch((err) => {
        res.status(400).send({
          status: false,
          message: "Error getting user",
        });
      });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Unexpected error",
    });
  }
});

router.get("/:uid", async (req, res) => {
  try {
    await userDB
      .findOne({ email: req.params.uid })
      .then((doc) => {
        if (doc) {
          res.status(200).send({
            status: true,
            data: doc,
          });
        } else {
          res.status(200).send({
            status: false,
            message: "User not found",
            data: doc,
          });
        }
      })
      .catch((err) => {
        res.status(400).send({
          status: false,
          message: "User not found",
        });
      });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Unexpected error",
    });
  }
});

module.exports = router;
