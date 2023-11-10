import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthSignInValidator from 'App/Validators/AuthSignInValidator'
import AuthSignUpValidator from 'App/Validators/AuthSignUpValidator'
import User from 'App/Models/User'

export default class AuthController {
  public async me({ auth, response }: HttpContextContract) {
    return response.json(auth.user)
  }
  public async login({ request, response, auth }: HttpContextContract) {
    const { uid, password, rememberMe } = await request.validate(AuthSignInValidator)

    try {
      await auth.attempt(uid, password, rememberMe)
    } catch (_error) {
      return response.status(400).json({ message: 'Email or password is incorrect' })
    }

    return response.json({ message: `Welcome back!` })
  }

  public async register({ request, response, auth }: HttpContextContract) {
    const data = await request.validate(AuthSignUpValidator)
    const user = await User.create(data)

    await auth.login(user)
    return response.json({ message: 'Thanks for joining!' })
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()
    return response.json({ message: 'You have been signed out' })
  }
}
