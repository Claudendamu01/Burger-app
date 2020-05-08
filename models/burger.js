const orm = require("../config/orm.js")

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res){
            cb(res)
        })
    },
    updateOne: function(col, val, colAim, target, cb) {
        orm.updateOne("burgers", col, colAim, target, val, function(res){
            cb(res)
        })
    }
}

module.exports = burger