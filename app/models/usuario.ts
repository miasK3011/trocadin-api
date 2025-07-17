import { BaseModel, column, hasMany } from "@adonisjs/lucid/orm"
import type { HasMany } from "@adonisjs/lucid/types/relations"
import { DateTime } from "luxon"
import ArquivoExtrato from "./arquivoExtrato.js"
import Assinatura from "./assinatura.js"
import Categoria from "./categoria.js"
import CompraParcelada from "./compraParcelada.js"
import FonteFinanceira from "./fonteFinanceira.js"
import Tag from "./tag.js"
import Transacao from "./transacao.js"


export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare email: string

  @column({ columnName: 'senha_hash' })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => FonteFinanceira)
  declare fontesFinanceiras: HasMany<typeof FonteFinanceira>

  @hasMany(() => Categoria)
  declare categorias: HasMany<typeof Categoria>

  @hasMany(() => Tag)
  declare tags: HasMany<typeof Tag>

  @hasMany(() => Assinatura)
  declare assinaturas: HasMany<typeof Assinatura>

  @hasMany(() => CompraParcelada)
  declare comprasParceladas: HasMany<typeof CompraParcelada>

  @hasMany(() => Transacao)
  declare transacoes: HasMany<typeof Transacao>

  @hasMany(() => ArquivoExtrato)
  declare arquivosExtrato: HasMany<typeof ArquivoExtrato>
}