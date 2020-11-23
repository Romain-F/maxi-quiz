'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('point').notNullable()
      table.integer('timer').notNullable()
      table.integer('id_theme').notNullable().unsigned().references('id').inTable('themes')
      table.integer('id_type').notNullable().unsigned().references('id').inTable('types')
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionSchema
