import { BaseModel, belongsTo, column } from "@adonisjs/lucid/orm"
import type { BelongsTo } from "@adonisjs/lucid/types/relations"
import { DateTime } from "luxon"
import FonteFinanceira from "./fonteFinanceira.js"
import Usuario from "./usuario.js"

export default class ArquivoExtrato extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare usuarioId: number

    @column()
    declare fonteId: number

    @column({ columnName: 'nome_arquivo' })
    declare nomeArquivo: string

    @column({ columnName: 'caminho_arquivo' })
    declare caminhoArquivo: string

    @column()
    declare status: string

    @column.dateTime({ columnName: 'data_upload' })
    declare dataUpload: DateTime

    @belongsTo(() => Usuario)
    declare usuario: BelongsTo<typeof Usuario>

    @belongsTo(() => FonteFinanceira)
    declare fonteFinanceira: BelongsTo<typeof FonteFinanceira>
}