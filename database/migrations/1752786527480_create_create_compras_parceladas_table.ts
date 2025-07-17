import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'compras_parceladas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('usuario_id').unsigned().notNullable().references('id').inTable('usuarios').onDelete('CASCADE')
      table.integer('fonte_id').unsigned().notNullable().references('id').inTable('fontes_financeiras').onDelete('CASCADE')
      table.integer('categoria_id').unsigned().references('id').inTable('categorias').onDelete('CASCADE')
      table.string('descricao', 255).notNullable()
      table.decimal('valor_total', 10, 2).notNullable()
      table.integer('parcelas').notNullable()
      table.date('data_compra').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}