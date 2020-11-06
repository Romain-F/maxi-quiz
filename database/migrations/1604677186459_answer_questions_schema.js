'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerQuestionsSchema extends Schema {
  up () {
    this.create('answer_questions', (table) => {
      table.increments()
      table.integer('id_answer').unsigned().references('id').inTable('answers').onDelete('cascade')
      table.integer('id_question').unsigned().references('id').inTable('questions').onDelete('cascade')
      table.boolean('is_correct_answer')
    })
  }

  down () {
    this.drop('answer_questions')
  }
}

module.exports = AnswerQuestionsSchema
