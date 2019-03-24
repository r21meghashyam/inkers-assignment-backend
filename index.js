"use strict";


const express  = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const dbConfig = require("./dbconfig");


const PORT = "3003";
const app = express();
const con = mysql.createConnection(dbConfig);
//Sessions
app.set('trust proxy', 0) // trust first proxy
app.use(session({
  secret: String(Date.now()*Math.random()),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly:true },
  
}))

con.connect((err)=>{
    if (err)
        throw err;
    console.log("Connected to mysql");
});

//Enabling cros for localhost
app.use(cors({
    origin: [
      /^(https?:\/\/)(localhost|(192\.168\.\d{1,3}\.\d{1,3}))(:\d{1,5})*$/,
    ],
    credentials: true,
  }));

//Enable body parser
app.use(bodyParser.json());

//Handle unauthorized requests
app.use((req,res,next)=>{    
    if(!req.path.match(/^\/api\//)||req.url=='/api/login')
        next();
    else{
        let username = req.session.username;
        if(!username)
            res.json({
                status: 401,
                message: 'Forbidden'
            })
        else
            next();
    }
})


app.get("/api/bargraph",(req,res,next)=>{
    con.query("SELECT * FROM bargraph", function (err, result, fields) {
        if (err)
            res.json({
                status: 500,
                message: "Some error occured"
            })
        else
            res.json({
                status: 200,
                message: "Success",
                data: result.map(row=>row.point)
            })
          
      });
    
});

app.get("/api/piechart",(req,res,next)=>{
    con.query("SELECT * FROM piechart", function (err, result, fields) {
        if (err)
            res.json({
                status: 500,
                message: "Some error occured"
            })
        else
            res.json({
                status: 200,
                message: "Success",
                data: result.map(row=>row.point)
            })
        
      });
    
});
app.post("/api/login",(req,res,next)=>{
    if(!req.body.username||!req.body.password){
        res.status(400);
        res.json({
            status: 400,
            message: "Bad Request: Username or password is missing"
        });
        return;
    }
    let username = req.body.username;
    let password = req.body.password;

    if(username!=="admin"){
        res.status(401);
        res.json({
            status: 401,
            message: "Bad Request: Unknown username"
        });
        return;
    }
    let date = new Date();
    let months = ["january","febuary","march","april","may","june","july","august","september","october","november","december"];
    let currentPassword = date.getDate()+months[date.getMonth()]+date.getFullYear();
    if(password!==currentPassword){
        res.status(401);
        res.json({
            status: 401,
            message: "Bad Request: Password did not match"
        });
        return;
    }
    req.session.username = username;
    res.json({
        status: 200,
        message: "Success",
        data:{
            username
        }
    });
});

app.get("/api/logout",(req,res,next)=>{
    req.session.destroy();
    res.json({
        status: 200,
        message: "Success"
    });
});


app.use(express.static(__dirname+"/app"));

app.use((req,res,next)=>{
    if(req.path.match(/^\/api\//i)){
        res.status(404);
        res.json({
            status:404,
            message:"Not found"
        })
    }
    else
        next();
})

app.use((req,res,next)=>{
    res.sendFile(__dirname+"/app/index.html");
})
app.use((req,res,next)=>{
    console.log(`${res.statusCode} ${req.method} ${req.url}`);
   
})
app.listen(PORT,()=>{
    console.info(`Server running on port ${PORT}`);
});