const express = require('express')
const http = require("http");
const app = express();
const socketIo = require("socket.io");
const server = http.createServer(app);
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var Chat = require("./models/chat.model");

var productRoutes = require('./routes/product');
var newsRoutes = require('./routes/news');
var userRoutes = require('./routes/user');
var chatRoutes = require('./routes/chat');
var emailRoutes = require('./routes/email');

mongoose.connect('mongodb://localhost:27017/Shop', { useNewUrlParser: true , useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

var cors = require('cors');
const { create } = require('./models/chat.model');
app.use(bodyParser.json());
app.use(cookieParser('secret'));

const io = socketIo(server);

app.use(function(req, res, next) {
  res.header('application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use("/products", productRoutes);
app.use("/news", newsRoutes);
app.use("/users", userRoutes);
app.use("/chat", chatRoutes);
app.use("/email", emailRoutes);
app.use(cors());
app.options('*', cors());


io.on('connection', async function (socket) {
  socket.on('join', async function (data) {
    if (data.isAdmin === true) {
      socket.join('admin')
      const allchat = await Chat.find();
      io.in('admin').emit('send-all-chat', allchat)
    } 
    else if (data.isAdmin === false){
      socket.join(data.sessionId)
      Chat.find({ sessionId: data.sessionId }).then(function(chat) {
        socket.emit('sendFirstInfo', chat);
      })
    }
  })
  
  socket.on('firstMessage', async function(data) {

    socket.join('test')

    let roomIds = socket.rooms;

    await Chat.create(data)
    const allchat = await Chat.find();
    io.in('admin').emit('client-msg', {
      userChatInfo: [data],
      allchat: allchat
    });
  })

  socket.on('messageSend', async function(data) {
    Chat.findOne({ sessionId: data.sessionId })
      .updateOne({$push: { chatContent: {text: data.text, time: data.time} }})
      .exec()
    const userChatInfo = await Chat.find({ sessionId : data.sessionId })
    const allchat = await Chat.find();
    setTimeout(() => {
      io.in('admin').emit('client-msg', {
        userChatInfo: userChatInfo,
        allchat: allchat
      })
    }, 100)
  })

  socket.on('messageSend-admin',function(data) {
    Chat.findOne({ sessionId: data.roomId })
      .updateOne({$push: { chatContent: {fromAdmin: true, text: data.text, time: data.time} }})
      .exec()
    socket.to('test').emit('admin-msg', data); 
  })

})

server.listen(4000, () => console.log(`Listening on port ${4000}`));