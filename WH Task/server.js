const _ = require('lodash')
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require("./database/mongoose");
var {Smartie} =  require('./schema');

var app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*")
  next();
});

app.post('/smarties', (req, res) => {
console.log(req.body)

  var smartie = new Smartie({
    id: 1,
    pink: 3,
    orange: 3,
    blue: 3,
    green: 3,
    yellow: 4,
    purple: 5,
    brown: 6,
    red: 6
  })

  smartie.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.send(err);
  })
});


app.get('/smarties', (req, res) => {

  Smartie.find({id: 1}).then((smartie)=>{
    console.log(smartie)
    res.send(smartie)
  })
});

app.post("/smarties/update", (req, res) => {
  console.log("send info is....", req.body)
  Smartie.findOneAndUpdate({id: req.body.id}, req.body, {new: true, overwrite: true}).then((smarties)=>{
    if(!smarties) {
      res.status(404).send()
    } else { {
        res.status(200).send()
      }
    }
  })
})

app.listen(port, () => {
  console.log(`Started on port ${port}`)
});