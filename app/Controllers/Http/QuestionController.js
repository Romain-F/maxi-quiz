'use strict'

const Question = use('App/Models/Question');

class QuestionController {

    async index({ response }) {
        const questions = await Question.all()
        return response.json(questions)
    }

    async show({ params, response }) {
        const question = await Question.find(params.id)
        return response.json(question)
    }

    async store({ request, response }) {
        const question = await Question.create({
            q_name: request.post().name,
            q_point: request.post().point,
            q_timer: request.post().timer,
            id_theme: request.post().id_theme,
            id_type: request.post().id_type
        })
        response.json(question)
    }

    async update({ params, request, response }) {
        const question = await Question.find(params.id)
        question.th_name = request.post().name
        question.q_point = request.post().point
        question.q_timer = request.post().timer
        question.id_theme = request.post().id_theme
        question.id_type = request.post().id_type
        await question.save()
        return response.json(question)
    }

    async destroy({ params, response }) {
        const question = await Question.find(params.id)
        await question.delete()

        return response.json({ message: 'La question a été supprimée' })
    }
}

module.exports = QuestionController
