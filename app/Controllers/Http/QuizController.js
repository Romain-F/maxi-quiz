'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Question = use('App/Models/Question');
const Quiz = use('App/Models/Quiz');
const Theme = use('App/Models/Theme');
/**
 * Resourceful controller for interacting with quizzes
 */
class QuizController {
  /**
   * Show a list of all quizzes.
   * GET quizzes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({response}) {
    const quizzes = await Quiz.all()
    return response.json(quizzes)
  }

  /**
   * Create/save a new quiz.
   * POST quizzes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth, session, response }) {
    const quiz = await Quiz.create({
      name: request.post().name,
      id_theme: request.post().id_theme
    })
    return response.json(quiz)
  }

  /**
   * Display a single quiz.
   * GET quizzes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const quiz = await Quiz.find(params.id)
    return response.json(quiz)
  }

  /**
   * Update quiz details.
   * PUT or PATCH quizzes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, session }) {
    const quiz = await Quiz.find(params.id)
    quiz.name = request.post().name
    quiz.id_theme = request.post().id_theme
    await quiz.save()
    
    return response.json(quiz)
  }

  /**
   * Delete a quiz with id.
   * DELETE quizzes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response, session }) {
    const quiz = await Quiz.find(params.id)
    await quiz.delete()
    
    return response.json({ message: 'Le quiz a été supprimé' })
  }

  async test({ params, request, response, session }) {
    //test tables d'association
    const question = await Question.query().with('answers').fetch();
    //const answers = await question.answers()

    const quiz = await Quiz.first()
    const theme = await Theme.find(quiz.id_theme);
    //console.log(question)
    console.log(quiz.theme())
    return response.send();
  }

  //si route commence par /api(voir dans objet request), return json, sinon return response template pour admin
}

module.exports = QuizController
