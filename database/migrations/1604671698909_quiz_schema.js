'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuizSchema extends Schema {
  up() {
    this.create('quizzes', (table) => {
      table.increments()
      table.string('name', 40).notNullable()
      table.integer('id_theme').notNullable().unsigned().references('id').inTable('themes')
    })
  }

  down () {
    this.drop('quizzes')
  }
}

module.exports = QuizSchema
