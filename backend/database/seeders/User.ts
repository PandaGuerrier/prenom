import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Personnage from 'App/Models/Personnage'

export default class extends BaseSeeder {
  public async run () {
    await User.create({
      email: 'admin@admin.fr',
      isAdmin: true,
      password: "admin"
    })

    await Personnage.createMany([
      {
        history: "L'histoire de la vie",
        name: 'Jules',
        smallDesc: "Lavie",
        subtitle: "Le vrai"
      },
      {
        history: "L'histoire de la vie",
        name: 'Panda',
        smallDesc: "Mort",
        subtitle: "Le ererg"
      }
    ])
  }
}
