const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const deviceSchema = new Schema({
  deviceName: {
    type: String,
    required: true
  },
  deviceDescription: {
    type: String
  },
});


const Device = mongoose.model("Device", deviceSchema);



module.exports = Device;