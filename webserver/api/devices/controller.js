const deviceModel = require("./model")

const createDevice = ({deviceName, deviceDescription, location, latitude, longitude}) => 
    new Promise((resolve, reject) => {
        deviceModel.create({deviceName, deviceDescription, location, latitude, longitude})
        .then(device => {
            console.log(device._id)
            resolve(device._id)
        })
        .catch(err => reject(err))
    })

const getAllDevices = () =>
    new Promise((resolve, reject) => {
        deviceModel
            .find()
            .then(devices => resolve(devices))
            .catch(err => reject(err))
    })

const getDevice = id => 
    new Promise((resolve, reject) => {
        deviceModel
            .findById(id)
            .then(device => {
                console.log(device);
                resolve(device);
            })
            .catch(err => reject(err))
    })

const updateDevice = (id, {deviceName, deviceDescription, location, latitude, longitude}) => 
    new Promise((resolve, reject) => {
        deviceModel
            .update(
                {
                    _id: id
                },
                {
                    deviceName,
                    deviceDescription,
                    location,
                    latitude,
                    longitude
                }
            )
            .then(data => resolve(data))
            .catch(err => reject(err));
    })

const deleteDevice = id => 
    new Promise((resolve, reject) => {
        deviceModel
            .deleteOne({_id: id})
            .exec()
            .then(data => resolve(data))
            .catch(err => reject(err))
    })

module.exports = {
    createDevice,
    getDevice,
    getAllDevices,
    updateDevice,
    deleteDevice
};
