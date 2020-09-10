const Sequelize = require('sequelize')
const db = require('../db')

const Reaction = db.define('reaction', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = Reaction
