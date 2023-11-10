import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CaracterValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    thumbnail: schema.file.optional({
      extnames: ['jpg', 'png', 'jpeg', 'webp']
    }),
    name: schema.string(),
    subtitle: schema.string(),
    smallDesc: schema.string(),
    history: schema.string()
  })

  public messages: CustomMessages = {}
}
