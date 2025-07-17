import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'categorias'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('usuario_id').unsigned().notNullable().references('id').inTable('usuarios').onDelete('CASCADE')
      table.string('nome', 100).notNullable()
      table.unique(['usuario_id', 'nome'])
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}