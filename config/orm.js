const connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    };

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf("") >= 0) {
                value = `'${value}'`;
            }
        }

        arr.push(`${key}=${value}`);
    }

    return arr.toString();
}

const orm = {
    selectAll: (burgersTable, cb) => {
        let queryString = "SELECT * FROM ??";

        connection.query(queryString, [burgersTable], (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    insertOne: (burgersTable, burgersCol, burgersVal, cb) => {
        let queryString = `INSERT INTO ${burgersTable}`;

        queryString += " (";
        queryString += burgersCol.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(burgersVal.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, burgersVal, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: (burgersTable, objColVals, condition, cb) => {
        let queryString = `UPDATE ${burgersTable}`;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;