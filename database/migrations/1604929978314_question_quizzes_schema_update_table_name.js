'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionQuizzesSchema extends Schema {
  up () {
    this.rename('question_quizzes', 'question_quiz')
  }

  down () {
    this.rename('question_quiz', 'question_quizzes')
  }
}

module.exports = QuestionQuizzesSchema
