import { BaseSchema } from "@adonisjs/lucid/schema"

export default class extends BaseSchema {
  protected tableName = 'transacoes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      // --- Chaves Estrangeiras ---
      table.integer('usuario_id').unsigned().references('id').inTable('usuarios').onDelete('CASCADE').notNullable()
      table.integer('fonte_id').unsigned().references('id').inTable('fontes_financeiras').onDelete('CASCADE').notNullable()

      table.integer('categoria_id').unsigned().references('id').inTable('categorias').onDelete('SET NULL')
      table.integer('compra_parcelada_id').unsigned().references('id').inTable('compras_parceladas').onDelete('SET NULL')
      table.integer('assinatura_id').unsigned().references('id').inTable('assinaturas').onDelete('SET NULL')

      // --- Demais Colunas ---
      table.string('tipo', 50).notNullable()
      table.string('descricao', 255).notNullable()
      table.decimal('valor', 10, 2).notNullable()
      table.date('data').notNullable()
      table.string('metodo_pagamento', 50)
      table.integer('numero_parcela')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}