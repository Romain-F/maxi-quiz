'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerQuestionsSchema extends Schema {
  up () {
    this.create('answer_question', (table) => {
      table.increments()
      table.integer('id_answer').unsigned().references('id').inTable('answers').onDelete('cascade')
      table.integer('id_question').unsigned().references('id').inTable('questions').onDelete('cascade')
      table.boolean('is_correct_answer')
      table.integer('id_user').unsigned().references('id').inTable('users').onDelete('cascade')
      table.string('user_answer')
      table.boolean('is_answer_egal_answer_user')
    })
  }

  down () {
    this.drop('answer_question')
  }
}

module.exports = AnswerQuestionsSchema
