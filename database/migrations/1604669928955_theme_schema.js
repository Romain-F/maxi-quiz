'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ThemeSchema extends Schema {
  up () {
    this.create('themes', (table) => {
      table.increments()
      table.string('name', 40).notNullable()
    })
  }

  down () {
    this.drop('themes')
  }
}

module.exports = ThemeSchema
