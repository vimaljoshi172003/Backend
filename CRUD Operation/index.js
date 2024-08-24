const express = require("express");
const app = express();
const Usermodel = require("./model/usermodel");

app.get("/", (req, res) => {
    res.send("Hello how are you");
})
app.get("/create", async (req, res) => {
    let createUser = await Usermodel.create({
        name: "Vimal",
        email: "vimaljoshi939@gmail.com",
        username: "allabout_joshi"
    })
    res.send(createUser);
})
app.get("/update", async (req, res) => {
    let UpadteUser = await Usermodel.findOneAndUpdate({ username: "allabout_joshi" }, { name: "Vimal Joshi" }, { new: true })
    res.send(UpadteUser);
})
app.get("/read", async (req, res) => {
    let readUser = await Usermodel.find()
    res.send(readUser);
})
app.get("/readOne", async (req, res) => {
    let readOne = await Usermodel.findOne({ name: "Vimal Joshi" })
    res.send(readOne);
})
app.get("/delete", async (req, res) => {
    let Delete = await Usermodel.findOneAndDelete({ name: "Vimal Joshi" })
    res.send(Delete);
})
app.listen(3000, () => {
    console.log("Server is start now");
})