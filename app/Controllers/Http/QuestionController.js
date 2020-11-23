'use strict'

const Question = use('App/Models/Question');
const Database = use('Database')

class QuestionController {

    async index({ response }) {
        const questions = await Question.query().with('answers').fetch();
        const nb_questions = await Database.from('Questions').getCount();
        const responseObject = {
            nb_results: nb_questions,
            data : questions,
        }
        return response.json(responseObject)
    }

    async show({ params, response }) {
        const question = await Question.find(params.id)
        return response.json(question)
    }

    async store({ request, response }) {
        const question = await Question.create({
            name: request.post().name,
            point: request.post().point,
            timer: request.post().timer,
            id_theme: request.post().id_theme,
            id_type: request.post().id_type
        })
        response.json(question)
    }

    async update({ params, request, response }) {
        const question = await Question.find(params.id)
        question.name = request.post().name
        question.point = request.post().point
        question.timer = request.post().timer
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
