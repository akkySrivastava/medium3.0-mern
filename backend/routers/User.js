const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const userDB = require("../models/User");
const storyDB = require("../models/Stories")

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
      .find().sort({created_at: -1})
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

router.post('/list/:id', async(req, res) => {
  console.log(req.body.userid, req.params.id)
  await userDB.findOneAndUpdate({_id: req.body.userid}, {$addToSet: {
    reading_list: req.params.id
  }}).then((data) => {
    res.status(201).send({
      status: true,
      message: 'Stories added to the reading list'
    })
  }).catch((err) => {
    res.status(400).send({
      status: true,
      message: 'Error while adding stories'
    })
  })
}) 

router.get('/get-list/:id', async(req, res) => {
  let userData = await userDB.findOne({_id: mongoose.Types.ObjectId(req.params.id)})

  if(!userData){
    throw 'User data not found'
  }

  let reading_add = []
  let done = false
  userData.reading_list.map(async(id, index) => {
    await storyDB.findOne({_id: mongoose.Types.ObjectId(id)}).then((doc) => {
      reading_add.push(doc)
    }).catch((err) => {
      throw err.toString()
    })

    if(reading_add.length == userData.reading_list.length){
      done = true
          return res.status(200).send({
            status: true,
            data: reading_add
          })
    }

   
  })


})

module.exports = router;
