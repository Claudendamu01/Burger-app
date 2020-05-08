var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        })
    },
    insertOne: function(table, col, val, cb) {
        var queryString = "INSERT INTO " + table + " (" + col + " ) VALUES ( ? )" ;
        connection.query(queryString, val, function(err, result) {
            if(err) {
                throw err;
            }
            
            cb(result);
        }) 
    },
    updateOne: function(table, col, colAim, target, val, cb) {
        var queryString = "UPDATE " + table + " SET " + col + " = " + val + " WHERE " + colAim + "=" + target;
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }

            cb(result);
        })

        
    }
}

module.exports = orm;