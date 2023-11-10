import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { responsiveAttachment, ResponsiveAttachmentContract } from '@ioc:Adonis/Addons/ResponsiveAttachment'

export default class Personnage extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @responsiveAttachment({
    folder: 'caracters',
    preComputeUrls: true
  })
  public thumbnail: ResponsiveAttachmentContract

  @column()
  public name: string

  @column()
  public subtitle: string

  @column()
  public smallDesc: string

  @column()
  public history: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
