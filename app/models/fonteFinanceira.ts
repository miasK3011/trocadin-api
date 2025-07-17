import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Transacao from './transacao.js'
import Usuario from './usuario.js'

export default class FonteFinanceira extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare usuarioId: number

    @column()
    declare nome: string

    @column()
    declare tipo: string

    @column()
    declare instituicao: string

    @column({ columnName: 'ultimos_4_digitos' })
    declare ultimos4Digitos: string

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true })
    declare updatedAt: DateTime

    @belongsTo(() => Usuario)
    declare usuario: BelongsTo<typeof Usuario>

    @hasMany(() => Transacao)
    declare transacoes: HasMany<typeof Transacao>
}