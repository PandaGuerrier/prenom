import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Personnage from 'App/Models/Personnage'
import CaracterValidator from 'App/Validators/CaracterValidator'
import {ResponsiveAttachment} from "adonis-responsive-attachment/build/src/Attachment";

export default class PersonnagesController {
  public async index({response}: HttpContextContract) {
    const caracters = await Personnage.all()

    return response.json({
      caracters: caracters
    })
  }

  public async create({request, response}: HttpContextContract) {
    const data = await request.validate(CaracterValidator)
    const caracter: Personnage = await Personnage.create({})
    const thumbnail = data.thumbnail ? await ResponsiveAttachment.fromFile(data.thumbnail) : caracter.thumbnail

    await caracter.merge({
      ...data,
      thumbnail: thumbnail
    }).save()

    return response.status(200).json({
      caracter: caracter
    })
  }

  public async update({ request, params, response }: HttpContextContract) {
    const caracter = await Personnage.query().where('id', params.id).firstOrFail()
    const data = await request.validate(CaracterValidator)
    const thumbnail = data.thumbnail ? await ResponsiveAttachment.fromFile(data.thumbnail) : caracter.thumbnail

    await caracter.merge({
      ...data,
      thumbnail: thumbnail
    }).save()

    return response.json({
      message: 'success',
      caracter: caracter
    })
  }

  public async show({ params, response}: HttpContextContract) {
    const caracter = await Personnage.query().where('id', params.id).firstOrFail()

    return response.json({
      caracter: caracter
    })
  }
}
