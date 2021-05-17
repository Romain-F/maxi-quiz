'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuizUsersSchema extends Schema {
  up () {
    this.create('quiz_users', (table) => {
      table.increments()
      table.integer('id_quiz').unsigned().references('id').inTable('quizzes').onDelete('cascade')
      table.integer('id_users').unsigned().references('id').inTable('users').onDelete('cascade')
    })
  }

  down () {
    this.drop('quiz_users')
  }
}

module.exports = QuizUsersSchema
