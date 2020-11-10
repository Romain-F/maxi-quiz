'use strict'

const Answer = use('App/Models/Answer');

class AnswerController {
  async index({ response }) {
    const answers = await Answer.all()
    return response.json(answers)
  }

  async show({ params, response }) {
    const answer = await Answer.find(params.id)
    return response.json(answer)
  }

  async store({ request, response }) {
    const answer = await Answer.create({
      A_name: request.post().name
    })
    response.json(answer)
  }

  async update({ params, request, response }) {
    const answer = await Answer.find(params.id)
    answer.A_name = request.post().name
    await answer.save()
    return response.json(answer)
  }

  async destroy({ params, response }) {
    const answer = await Answer.find(params.id)
    await answer.delete()

    return response.json({ message: 'La réponse a été supprimé' })
  }
}

module.exports = AnswerController
