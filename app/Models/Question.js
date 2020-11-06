'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Question extends Model {
    answer() {
        return this.belongsToMany('App/Models/Answer')
            .withPivot(['is_correct_answer'])
    }
    quiz() {
        return this.belongsToMany('App/Models/Quiz')
    }
}

module.exports = Question
