const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");


dotenv.config();
//connect database
mongoose.connect((process.env.MONGODB_URL), () =>{
    console.log("Connected to MongooDB");
});

app.use(bodyParser.json({limit:"5mb"}));
app.use(cors());
app.use(morgan("common"));


app.get("/api", (req,res)=>{
    res.status(200).json("Hello");
});

app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.listen(3000, () => {
    console.log("server is running ...");

});