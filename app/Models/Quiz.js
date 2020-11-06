'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Quiz extends Model {
  theme(){
    return this.hasOne('App/Models/Theme')
  }
}

module.exports = Quiz
