'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Quiz = use('App/Models/Quiz')
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
  async index ({ request, response, view }) {
    const quiz = await Quiz.all()
    return view.render('index', {
      quizzes: quiz.toJSON()
    })
  }

  /**
   * Render a form to be used for creating a new quiz.
   * GET quizzes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('quizzes.create-quiz')
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
      name: request.input('name'),
      id_theme: 0
    })
    session.flash({ 'successmessage': 'Le quiz a été créé !' })
    return response.redirect('/')
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
    return view.render('quizzes.quiz', {
      quiz: quiz.toJSON()
    })
  }

  /**
   * Render a form to update an existing quiz.
   * GET quizzes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    const quiz = await Quiz.find(params.id)
    return view.render('quizzes.edit-quiz', {
      quiz: quiz.toJSON()
    })
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
    quiz.name = request.input('name')
    await quiz.save()
    session.flash({ 'successmessage': 'Le quiz a été mis à jour !' })
    return response.redirect('/')
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
    session.flash({ 'successmessage': 'Le quiz a été supprimé !' })
    return response.redirect('/')
  }
}

module.exports = QuizController
