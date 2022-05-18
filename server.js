
const { response } = require('express');
const express = require('express');
const drinks = require('./models/drinks.js');
const app = express();
const port = 3000;
const food = require('./models/food.js')


console.log(drinks)

//index

app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs", {drinks});
});
app.get("/food", (req, res) => {
    res.render("food_index.ejs", {food});
})

app.get("/drinks/:id", (req, res) => {
    const { name, price, image } = drinks[req.params.id];
    res.render("drinks_show.ejs", {name, price, image})
});
app.get("/food/:id", (req, res) => {
    const { name, price, image } = food[req.params.id]
    res.render("food_show.ejs", {name, price, image})
})
app.listen(port, () =>{
    console.log(`Listening on port`, port)
});