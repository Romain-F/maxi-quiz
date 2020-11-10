'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'QuizController.index').as('index')
Route.get('/register', 'AuthController.registrationView').as('register.create')
Route.post('/register-store', 'AuthController.postRegister').as('register.store').validator('Register')
Route.get('/login', 'AuthController.loginView').as('login.create')
Route.post('/login-store', 'AuthController.postLogin').as('login.store')
Route.get('/view-quiz/:id', 'QuizController.show').as('view.quiz')
Route.get('/test', 'QuizController.test').as('test.quiz')

Route.resource('/quizzes', 'QuizController').apiOnly()
Route.resource('/questions', 'QuestionController').apiOnly()
//Route.get('/themes', 'ThemeController.get').as('get.type')
//Route.post('store-theme', 'ThemeController.post').as('post.theme')
//Route.put('update-theme/:id', 'ThemeController.put').as('update.theme')
//Route.delete('delete-theme/:id', 'ThemeController.delete').as('delete.theme')
Route.resource('/themes', 'ThemeController').apiOnly()

//Route.get('/types', 'TypeController.getTypes').as('get.type')
//Route.post('/store-type', 'TypeController.store').as('store.type')
//Route.post('/update-type/:id', 'TypeController.update').as('update.type')
//Route.get('/delete-type/:id', 'TypeController.destroy').as('delete.type')
Route.resource('/types', 'TypeController').apiOnly()

Route.resource('/answers', 'AnswerController').apiOnly()

Route.group(() => {
    Route.get('/create-quiz', 'QuizController.create').as('create.quiz')
    Route.post('/store-quiz', 'QuizController.store').as('store.quiz')
    Route.get('/edit-quiz/:id', 'QuizController.edit').as('edit.quiz')
    Route.post('/update-quiz/:id', 'QuizController.update').as('update.quiz')
    Route.get('/delete-quiz/:id', 'QuizController.destroy').as('delete.quiz')
    Route.post('/logout', 'AuthController.logout').as('logout')
}).middleware(['auth'])

//Route.on('/').render('index')
