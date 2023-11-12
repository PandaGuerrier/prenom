import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthMiddleware {
  public async handle ({ auth }: HttpContextContract, next: () => Promise<void>) {
    if (!auth.isLoggedIn) {
      return 'Pas autorisé bg'
    }
    await next()
  }
}
