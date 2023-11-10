import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'personnages'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.json('thumbnail')
      table.string('name').unique()
      table.string('subtitle')
      table.string('small_desc')
      table.text('history')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
