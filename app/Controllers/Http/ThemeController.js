'use strict'

const Theme = use('App/Models/Theme');

class ThemeController {
    /**
 * Show a list of all quizzes.
 * GET quizzes
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 * @param {View} ctx.view
 */
    async get({response}) {
        const themes = await Theme.all()  
        return response.json(themes)
    }

    async post({request, response}) {
        const theme = await Theme.create({
            th_name: request.post().name
        })
        response.json(theme)
    }

    async put({params, request, response}) {
        const theme = await Theme.find(params.id)
        theme.th_name = request.post().name
        await theme.save()
        return response.json(theme)
    }

    async delete({ params, response }) {
        const theme = await Theme.find(params.id)
        await theme.delete()

        return response.json({ message: 'Le thème a été supprimé' })
    }
}

module.exports = ThemeController
