'use strict'
const Quiz = use('App/Models/Quiz')

class QuizController {

  async index({ view }) {
    const quiz = await Quiz.all()
    return view.render('index', {
      quizzes: quiz.toJSON()
    })
  }

  async create({ view }) {
    return view.render('quizzes.create-quiz')
  }

  async store({ request, auth, session, response }) {
    const quiz = await Quiz.create({
      name: request.input('name'),
      id_theme: 0 
    })
    session.flash({ 'successmessage': 'Le quiz à bien été créé' })
    return response.redirect('/')
  }

  async show({ params, view }) {
    const quiz = await Quiz.find(params.id)
    return view.render('quizzes.quiz', {
      quiz: quiz.toJSON()
    })
  }

  async edit({ params, view }) {
    const quiz = await Quiz.find(params.id)
    return view.render('quizzes.edit-quiz', {
      quiz: quiz.toJSON()
    })
  }

  async update({ params, request, response, session }) {
    const quiz = await Quiz.find(params.id)
    quiz.name = request.input('name')
    await quiz.save()
    session.flash({ 'successmessage': 'Le quiz à été mise à jour' })
    return response.redirect('/')
  }

  async destroy({ params, response, session }) {
    const quiz = await Quiz.find(params.id)
    await quiz.delete()
    session.flash({ 'successmessage': 'Le quiz à été supprimé' })
    return response.redirect('/')
  }
}
module.exports = QuizController
