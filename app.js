//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb+srv://UmarMongoDBAtlas:Umar-123@cluster0.exjln.mongodb.net/todoListDB");

const itemSchema = new mongoose.Schema({
  name : String
});

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
  name : "Welcome !"
});
const item2 = new Item({
  name : "Hit the + icon to add items."
});
const item3 = new Item({
  name : "<-- check box to delete and item"
});

const defaultItems = [item1, item2, item3];

// Item.insertMany(defaultItems);

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema]
});

const List = mongoose.model("List", listSchema);


app.get("/", async function(req, res) {

  const foundItems = await Item.find();

  if(foundItems.length === 0){
    Item.insertMany(defaultItems);
    res.redirect("/");
  }
  else{
    res.render("list", {listTitle: "Today", newListItems: foundItems});
  }

  // mongoose.connection.close();

});

app.post("/", async function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name : itemName
  });

  
  if(listName === "Today"){
    item.save();
    res.redirect("/");
  }
  else{
    const foundList = await List.findOne({name: listName});
    foundList.items.push(item);
    foundList.save();
    res.redirect("/" + listName);
  }

  // mongoose.connection.close();


});

app.post("/delete", async function(req, res){

  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if(listName === "Today"){

    await Item.findByIdAndDelete(checkedItemId);

    res.redirect("/");

  }
  else{
    await List.findOneAndUpdate({name: listName}, {$pull : {items : {_id : checkedItemId}}});
    res.redirect("/" + listName);
  }


  // mongoose.connection.close();

});

app.get("/:customListName", async function(req,res){


  const customListName = _.capitalize(req.params.customListName);

  const foundList = await List.findOne({name: customListName});

  if(!foundList){

    const list = new List({
    name: customListName,
    items: defaultItems
    });

    list.save();

    res.redirect("/" + customListName);
  }
  else{
    res.render("list", {listTitle: foundList.name, newListItems : foundList.items});
  }
  // mongoose.connection.close();

});

app.get("/about", function(req, res){
  res.render("about");
  // mongoose.connection.close();

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
