const express = require("express");
const router = express.Router();

const deviceController = require("./controller")
const Device = require("./model")

router.post("/", (req, res) => {
    deviceController
    .createDevice(req.body)
    .then(_id => res.send(_id))
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    })
})

// router.get("/", (req, res) => {
//     deviceController
//         .getAllDevices()
//         .then(data => {
//             console.log(data);
//             res.send(data)
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).send(err);
//         })
// })

router.get("/", (req, res) =>{
    Device
        .find({}, (err, data) => {
            if(err) res.send(err)
            res.send(data)
        })
})

router.get("/:id", (req, res) => {
    // deviceController
    //     .getDevice(req.param.id)
    //     .then(data => {
    //         // console.log(data);
    //         res.send(data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).send(err);
    //     })
    Device.findById(req.params.id, (err, data) => {
        // if(err) res.status(500).json({ success: 0, message: err })
        res.send(data);
    })
})

router.put("/:id", (req, res) => {
    deviceController
        .updateDevice(req.params.id, req.body)
        .then(data => res.send(data))
        .catch(err => {
            console.log(err),
            res.status(500).send(err);
        })
})

router.delete("/:id", (req, res) => {
    deviceController
        .deleteDevice(req.params.id)
        .then(data => res.send(data))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
})

module.exports = router;