const express = require("express");
const router = express.Router();

const piDataController = require("./controller")
const piData = require("./model")

router.get("/:id", (req, res) => {
    piDataController
        .getPiData(req.params.id)
        .then(data => res.send(data))
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
})

module.exports = router