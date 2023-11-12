/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/auth', 'AuthController.me')
Route.post('/auth/sign-in', 'AuthController.login')
//Route.post('/auth/sign-up', 'AuthController.register')
Route.post('/auth/sign-out', 'AuthController.logout').middleware(['auth'])

Route.group(() => {
  Route.post('', 'PersonnagesController.create').middleware(['auth'])
  Route.put('/:id', 'PersonnagesController.update').middleware(['auth'])
  Route.get('/:id', 'PersonnagesController.show')
  Route.get('', 'PersonnagesController.index')
}).prefix('/api/caracters')
