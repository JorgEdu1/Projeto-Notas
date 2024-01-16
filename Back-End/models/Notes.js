const {DataTypes} = require('sequelize');

const db = require('../db/conn');

const Notes = db.define('notes', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    note: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    }
});

module.exports = Notes;