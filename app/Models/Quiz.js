'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Quiz extends Model {
  theme(){
    return this.hasMany('App/Models/Theme')
  }

  questions() {
    return this.belongsToMany('App/Models/Question', 'id_quiz', 'id_question')
  }
}

module.exports = Quiz
