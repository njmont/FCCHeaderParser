var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next){
  res.render("index", {});
})

router.get("/api/whoami", function(req, res, next){
  "use strict";
  let json_response = {
    software: req.headers["user-agent"].match(/\((.*?)\)/g)[0].replace(/(\(|\))/g, ""),
    language: req.headers["accept-language"].split(",")[0],
    ip: req.ip
  }
  res.json(json_response);
});

router.get("/api", function(req, res, next){
  res.render("index", {});
})

module.exports = router;
