var express = require("express")

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    })
})
router.get("/api/burgers", function(req, res) {
    burger.selectAll(function(data) {
        res.json(data);
    })
})

router.post("/api/burgers", function(req, res) {
    res.json(req.body)
    burger.insertOne("burger_name", req.body.data , function(result) {
        res.json({ id: result.insertId });
    })
})

router.delete("/api/burgers/:id", function(req, res){
    burger.updateOne("devoured", 1, "id", req.params.id, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    } )
})

module.exports = router;