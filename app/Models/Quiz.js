'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Quiz extends Model {
  theme(){
    return this.hasOne('App/Models/Theme')
  }

  question() {
    return this.belongsToMany('App/Models/Question')
  }
}

module.exports = Quiz
