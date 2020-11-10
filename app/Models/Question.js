'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Question extends Model {
    answers() {
        return this.belongsToMany('App/Models/Answer', 'id_question', 'id_answer')
            .withPivot(['is_correct_answer'])
            
    }
    quiz() {
        return this.belongsToMany('App/Models/Quiz', 'id_question', 'id_quiz')
    }
}

module.exports = Question
