import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Categoria from './categoria.js'
import FonteFinanceira from './fonteFinanceira.js'
import Usuario from './usuario.js'

export default class Assinatura extends BaseModel {
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

    @column()
    declare valor: number

    @column({ columnName: 'dia_cobranca' })
    declare diaCobranca: number

    @column()
    declare ativa: boolean

    @column.date()
    declare dataInicio: DateTime

    @column.date()
    declare dataFim: DateTime

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
}