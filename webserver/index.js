const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const PiData = require("./api/pidatas/model");
const Device = require("./api/devices/model")

const config = require("./config-local.json");


const app = express();

const deviceRouter = require("./api/devices/router")
const piDataRouter = require("./api/pidatas/router")

app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "ALLOWALL");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS"
  );

  // const acceptedOrigins =  ["http://localhost:3000", "http://localhost:6969"];
  // if (req.headers.origin && acceptedOrigins.includes(req.headers.origin)) {
  //     res.setHeader("Access-Control-Allow-Credentials", req.headers.origin);
  // }
  if (req.headers.origin) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  }

  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

// mongoose.connect("mongodb://tank:123123qwe@ds135726.mlab.com:35726/ecommerce", {
//   useNewUrlParser: true,
//   useCreateIndex: true
// })
//   .then(() => {
//     console.log('\x1b[36m%s\x1b[32m', "Connect to mongoDB successfully!");
//   }).catch(err => {
//     console.log("Cannot connect to mongoDB: \n", err);
//   }
// );

mongoose.connect(config.mongoPath, err => {
  if (err) console.error(err);
  else console.log("Database connect successful");
});

const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(6969);

app.use("/api/device", deviceRouter);
app.use("/api/pidata", piDataRouter);

app.get('/', (req, res) => res.send("hello"))

// PiData.find().sort({_id: -1}).limit(5).then(piData => console.log(piData));

io.sockets.on('connection', function (socket) {
  // once a client has connected, we expect to get a ping from them saying what room they want to join
  console.log("device connect")
  socket.on('join-channel', function (data) {
    console.log(data.room);
    socket.join(data.room);
  });
  socket.on("send-data", (data) => {
    console.log(data);
    let item = new PiData(data);
    item.save();
    io.emit('data-mockup', item);
  });
  socket.emit('rr', {hello: 'hello'});
  // socket.emit('data-mockup', {hello: 'hello'});
  socket.on("create-device", (data) => {
    let item = new Device(data);
    item.save((err, doc) => {
      console.log(doc)
      socket.emit("rr",doc);
    });
  })
  socket.on('disconnect', function(){
    console.log("device disconnect")
  });
});

