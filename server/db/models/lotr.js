const Sequelize = require('sequelize')
const db = require('../db')

const LotrWord = db.define('lotrWord', {
  word: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = LotrWord
