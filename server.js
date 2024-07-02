require("dotenv").config();

const express=require("express");
const app=express();

const { Server }=require("socket.io");
const http=require("http");

const PORT=process.env.PORT||8001;

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

const server=http.createServer(app);
const IO=new Server(server,{
    path:"/realtime",
    allowEIO3: true,
    cors: {
        origin: ["*"],
        methods: ["GET", "POST"],
        credentials: true,
    }
});

// IO.use((socket, next) => {
//   const token = socket.handshake.query.token||null;

//   if (token&&token=="3c1452f7b04771fbfa36e08dc8571ee4") {
//     return next(); // Authentication succeeded
//   } else {
//     return next(new Error('Authentication failed'));
//   }
// });

IO.on("connection",(socket)=>{
  console.log("Client connected ",socket.id);

  socket.on('disconnect', () => {
      console.log("Client disconnected ",socket.id);
  });

});

app.use((req,res,next)=>{
  req.soketio = IO;
  next();
});

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Express API with Swagger",
      version: "0.1.0",
      description:
        "This is API documentation created with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          in: 'header',
          name: 'Authorization',
          description: 'Bearer token to access these api endpoints',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
        agentAuth: [],
      },
    ],
    servers: [
      {
        url: "http://localhost:8000",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.swagger.js"],
};

const specs = swaggerJsdoc(options);
const basicAuth = require("express-basic-auth");
app.use(
  "/api-docs",
  basicAuth({
    users: {
      "handrawan": "123456",
    },
    challenge: true,
  }),
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: true,
    swaggerOptions: {
      docExpansion: "none",
      showRequestHeaders: true,
    },
  })
);

app.use("/",require("./routes/index"));

server.listen(PORT,(err)=>{
  if(err) throw err;
  console.log(`Server is running ${PORT}`);
});
