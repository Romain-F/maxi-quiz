'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Quiz extends Model {
  themes(){
    return this.hasMany('App/Models/Theme', 'id', 'id')
  }

  questions() {
    return this.belongsToMany('App/Models/Question', 'id_quiz', 'id_question')
  }

  users() {
    return this.belongsToMany('App/Models/User', 'id_quiz', 'id_user')
  }
}

module.exports = Quiz
