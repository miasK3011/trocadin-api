import { BaseSchema } from "@adonisjs/lucid/schema"

export default class extends BaseSchema {
  protected tableName = 'transacao_tags'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer('transacao_id')
        .unsigned()
        .references('id')
        .inTable('transacoes')
        .onDelete('CASCADE')

      table
        .integer('tag_id')
        .unsigned()
        .references('id')
        .inTable('tags')
        .onDelete('CASCADE')

      table.primary(['transacao_id', 'tag_id'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}