
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Transacao from './transacao.js'
import Usuario from './usuario.js'

export default class Tag extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare usuarioId: number

    @column()
    declare nome: string

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true })
    declare updatedAt: DateTime

    @belongsTo(() => Usuario)
    declare usuario: BelongsTo<typeof Usuario>

    @manyToMany(() => Transacao, {
        pivotTable: 'transacao_tags',
    })
    declare transacoes: ManyToMany<typeof Transacao>
}