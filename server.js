var express = require('express');
var path = require('path');
var router = express.Router();
var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//Setup for public folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

/* GET home page. */
app.get("/", function(req, res, next){
  res.render("index", {});
})

app.get("/api/whoami", function(req, res, next){
  "use strict";
  let json_response = {
    ip: req.headers["x-forwarded-for"],
    language: req.headers["accept-language"].split(",")[0],
    software: req.headers["user-agent"].match(/\((.*?)\)/g)[0].replace(/(\(|\))/g, "")
  }
  res.json(json_response);
});

app.get("/api", function(req, res, next){
  res.render("index", {});
})

module.exports = router;
