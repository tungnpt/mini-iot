// Khai báo các Module, Model, Route sử dụng trong 
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const PiData = require("./api/pidatas/model");
const Device = require("./api/devices/model")
const config = require("./config-local.json");
const app = express();
const deviceRouter = require("./api/devices/router")
const piDataRouter = require("./api/pidatas/router")

// Tạo middleware cho phép CORS (request đến một port khác)
app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "ALLOWALL");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS"
  );
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

// Sử dụng mô đun bodyParse để nhận request body dưới dạng Json
app.use(bodyParser.json());
// Connect với database qua đường dẫn trong Connect
mongoose.connect("mongodb+srv://bosstung:bosstung@cluster0-zmsmv.mongodb.net/test", err => {
  if (err) console.error(err);
  else console.log("Database connect successful");
});

// Khởi tạo server và Socketio
const server = require("http").Server(app);
const io = require("socket.io")(server);

// Sau khi ReactJS được build và bundle lại một phiên bản nhẹ hơn, server sẽ access
// vào front-end thông qua một folder static tại ./public
app.use(express.static('./public'));

// server lắng nghe tại process enviroment hoặc mặc định ở port 6969
const port = process.env.PORT || 6969;
server.listen(port, err => {
  if (err) console.log(err);
  console.log("Server started at port " + port);
});

// Khởi tạo Route Device để xử lý các request về Thiết bị
app.use("/api/device", deviceRouter);
// Khởi tạo Route Device để xử lý các request về nhiệt độ, độ ẩm của thiết bị
app.use("/api/pidata", piDataRouter);
// Khởi tạo giao diện mặc định khi truy cập web
app.get('/', (req, res) => res.sendFile('./public/index.html'))

// Sokcet lắng nghe các thiết bị kết nối
io.sockets.on('connection', function (socket) {
  console.log("device connect")
  
  // Nêw webserver nhận được event "send-data" được emit từ Pi (Bao gồm thông tin về DeviceID, Nhiệt độ, Độ ảnh, Thời gian đo)
  // thì nó sẽ lưu dự liệu nhận được vào database
  socket.on("send-data", (data) => {
    console.log(data);
    let item = new PiData(data);
    item.save();
    // io.emit('data-mockup', item);
  });
  // socket.emit('rr', {hello: 'hello'});
  
  socket.on("create-device", (data) => {
    let item = new Device(data);
    item.save((err, doc) => {
      console.log(doc)
      socket.emit("rr",doc);
    });
  })

  // Nếu webserver nhận được event "ledOn" từ webclient yêu cầu bật tắt đèn trên Pi
  // thị nó sẽ emit event Led cho Pi để bật đèn
  socket.on('ledOn', (data) => {
    console.log(data)
    io.sockets.emit('led', data);
  })
  // Socket lắng nghe khi có 1 thiết bị ngắt kết nối
  socket.on('disconnect', function(){
    console.log("device disconnect")
  });
});   

