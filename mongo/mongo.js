console.log("start")

const express = require("express");
const app = express();
const jsonParser = express.json();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fruitsScheme = new Schema({name: String, origin: String});
const fruits = mongoose.model("fruits", fruitsScheme);
const uri = "mongodb://root:example@localhost:27017/";

mongoose.connect(uri,
    function (err) {
        if (err) return console.log("!!!" + err);
        app.listen(3000, function () {
            console.log("Server running http://localhost:3000");
        });
    });

function findAll(res) {
    fruits.find({}, function (err, fruits1) {
        if (err) {
            console.log(err)
            return
        }
        console.log(fruits1)
        res?.send(fruits1)
    })
}

findAll()

app.get("/", function (req, res) {
    console.log("/")
    findAll(res);
});




