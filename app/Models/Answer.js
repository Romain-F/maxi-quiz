'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Answer extends Model {
    question(){
        return this.belongsToMany('App/Models/Question')
            .withPivot(['is_correct_answer'])
    }
}



module.exports = Answer
