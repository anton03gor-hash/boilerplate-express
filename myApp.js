let express = require('express');
let app = express();
// 1 
// console.log("Hello World");

// 4
app.use("/public", express.static(__dirname + "/public"));

// 2
// app.get("/", (req, res)=>{
//     // res.send("Hello Express");
//     // 3
//     absolutePath = __dirname + "/views/index.html";
//     res.sendFile(absolutePath);
// });

// 5
app.get("/json", (req, res)=>{
    res.json({"message": "Hello json"});
})
































 module.exports = app;
