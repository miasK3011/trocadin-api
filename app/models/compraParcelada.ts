import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Categoria from './categoria.js'
import FonteFinanceira from './fonteFinanceira.js'
import Transacao from './transacao.js'
import Usuario from './usuario.js'


export default class CompraParcelada extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare usuarioId: number

    @column()
    declare fonteId: number

    @column()
    declare categoriaId: number

    @column()
    declare descricao: string

    @column({ columnName: 'valor_total' })
    declare valorTotal: number

    @column({ columnName: 'quantidade_parcelas' })
    declare parcelas: number

    @column.date()
    declare dataCompra: DateTime

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

    @hasMany(() => Transacao)
    declare transacoes: HasMany<typeof Transacao>
}