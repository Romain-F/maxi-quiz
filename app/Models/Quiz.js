'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Quiz extends Model {
  static get createdAtColumn() {
    return null
  }

  static get updatedAtColumn() {
    return null
  }
  
  themes(){
    return this.hasMany('App/Models/Theme', 'id', 'id')
  }

  // answers() {
  //   return this.belongsToMany('App/Models/Answer', 'id_quiz', 'id_answer')
  //     .withPivot(['has_correct_answer'])
  // }

  questions() {
    return this.belongsToMany('App/Models/Question', 'id_quiz', 'id_question')
  }

  users() {
    return this.belongsToMany('App/Models/User', 'id_quiz', 'id_user')
  }
}


module.exports = Quiz
