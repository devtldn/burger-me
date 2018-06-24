const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: (burgersCol, burgersVal, cb) => {
        orm.insertOne("burgers", burgersCol, burgersVal, (res) => {
            cb(res);
        });
    },

    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    },

    deleteOne: (condition, cb) => {
        orm.deleteOne("burgers", condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;