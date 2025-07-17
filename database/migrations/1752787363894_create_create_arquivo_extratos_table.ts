import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'arquivo_extratos'

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

      table
        .integer('fonte_id')
        .unsigned()
        .references('id')
        .inTable('fontes_financeiras')
        .onDelete('CASCADE')
        .notNullable()

      table.string('nome_arquivo', 255).notNullable()
      table.string('caminho_arquivo', 255).notNullable()
      table.string('status', 50).notNullable()
      table.timestamp('data_upload', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}