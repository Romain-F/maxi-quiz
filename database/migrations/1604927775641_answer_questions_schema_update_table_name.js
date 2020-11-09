'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerQuestionsSchema extends Schema {
  up () {
    this.rename('answer_questions', 'answer_question')
  }

  down () {
    this.rename('answer_question', 'answer_questions')
  }
}

module.exports = AnswerQuestionsSchema
