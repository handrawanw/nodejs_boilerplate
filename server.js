const express=require("express");
const app=express();

// const device = require('express-device');
// app.use(device.capture());

require("dotenv").config();


// const socketio=require("socket.io-client");
// const socket = socketio(process.env.WS_PEMILU, {
//   path: "/realtime",
//   autoConnect: true,
//   reconnection: 1000,
//   withCredentials: true,
//   query: `token=${"K0P4SUS_IND0N3S1A"}`
// });

// socket.on("connect",()=>{
//     console.log("IO Connected");
// });

// global path
global.root_dir=__dirname;
global.caches={};
// global.socketio=socket;
global.app=app;
// global path

const PORT=process.env.PORT||8000;

// req timeout
const {timeout,haltOnTimedout} = require("./middleware/timeout");
app.use(timeout(60000));// 1 minute timeout
app.use(haltOnTimedout);
// req timeout

const compression=require("compression");
app.use(compression());

// const device = require('express-device');
// app.use(device.capture());

// register request form 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// register request form

// cors
const cors=require("cors");
app.use(cors("*"));
// cors

// helmet
const helmet=require("helmet");
app.use(helmet());
app.use(helmet.hidePoweredBy("PHP 7.2.0"))
// helmet

const toobusy=require("toobusy-js");
app.use(function(req, res, next) {
    if (toobusy()) {
      res.status(503).json({
          code:503,
          message:"Server is busy, please try again later"
      });
    } else {
      next();
    }
});

const morgan = require("morgan");
app.use(morgan("dev"))

// router
app.use("/api",require("./router/index"));
app.use(require("./middleware/error_handler"));

app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server is running ${PORT}`);
});
