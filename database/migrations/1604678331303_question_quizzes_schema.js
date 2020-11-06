'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionQuizzesSchema extends Schema {
  up () {
    this.create('question_quizzes', (table) => {
      table.increments()
      table.integer('id_question').unsigned().references('id').inTable('questions').onDelete('cascade')
      table.integer('id_quiz').unsigned().references('id').inTable('quizzes').onDelete('cascade')
    })
  }

  down () {
    this.drop('question_quizzes')
  }
}

module.exports = QuestionQuizzesSchema
