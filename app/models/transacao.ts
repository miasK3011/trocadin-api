import Assinatura from "#models/assinatura"
import { BaseModel, belongsTo, column, manyToMany } from "@adonisjs/lucid/orm"
import type { BelongsTo, ManyToMany } from "@adonisjs/lucid/types/relations"
import { DateTime } from "luxon"
import Categoria from "./categoria.js"
import CompraParcelada from "./compraParcelada.js"
import FonteFinanceira from "./fonteFinanceira.js"
import Tag from "./tag.js"
import Usuario from "./usuario.js"


export default class Transacao extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare usuarioId: number

    @column()
    declare fonteId: number

    @column()
    declare categoriaId: number

    @column()
    declare compraParceladaId: number

    @column()
    declare assinaturaId: number

    @column()
    declare tipo: 'RECEITA' | 'DESPESA'

    @column()
    declare descricao: string

    @column()
    declare valor: number

    @column.date()
    declare data: DateTime

    @column({ columnName: 'metodo_pagamento' })
    declare metodoPagamento: string

    @column({ columnName: 'numero_parcela' })
    declare numeroParcela: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true })
    declare updatedAt: DateTime

    @belongsTo(() => Usuario)
    declare usuario: BelongsTo<typeof Usuario>

    @belongsTo(() => FonteFinanceira)
    declare fonteFinanceira: BelongsTo<typeof FonteFinanceira>

    @belongsTo(() => Categoria)
    declare categoria: BelongsTo<typeof Categoria>

    @belongsTo(() => CompraParcelada)
    declare compraParcelada: BelongsTo<typeof CompraParcelada>

    @belongsTo(() => Assinatura)
    declare assinatura: BelongsTo<typeof Assinatura>

    @manyToMany(() => Tag, {
        pivotTable: 'transacao_tags',
    })
    declare tags: ManyToMany<typeof Tag>
}