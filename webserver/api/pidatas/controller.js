const piDataModel = require("./model")

const getPiData = deviceId =>
    new Promise((resolve, reject) => {
        piDataModel
            .find({
                device: deviceId
            })
            .sort({_id: -1})
            .limit(10)
            .then(data => {
                // console.log(data);
                resolve(data)
            })
            .catch(err => reject(err))
    })

module.exports = {
    getPiData
}