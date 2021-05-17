'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResultSchema extends Schema {
  up () {
    this.create('results', (table) => {
      table.increments()
      table.integer('id_answer').unsigned().references('id').inTable('answers').onDelete('cascade')
      table.integer('id_question').unsigned().references('id').inTable('questions').onDelete('cascade')
      table.integer('id_user').unsigned().references('id').inTable('users').onDelete('cascade')
      table.integer('id_quiz').unsigned().references('id').inTable('quizzes').onDelete('cascade')
      table.boolean('has_correct_answer')
      table.string('user_answer')
    })
  }

  down () {
    this.drop('results')
  }
}

module.exports = ResultSchema
