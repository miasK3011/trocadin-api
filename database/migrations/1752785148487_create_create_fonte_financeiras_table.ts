import { BaseSchema } from "@adonisjs/lucid/schema"


export default class extends BaseSchema {
  protected tableName = 'fontes_financeiras'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table
        .integer('usuario_id')
        .unsigned()
        .references('id')
        .inTable('usuarios')
        .onDelete('CASCADE')
        .notNullable()

      table.string('nome', 100).notNullable()
      table.string('tipo', 50).notNullable()
      table.string('instituicao', 100)
      table.string('ultimos_4_digitos', 4)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}