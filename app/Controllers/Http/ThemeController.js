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
    async index({response}) {
        const themes = await Theme.all()  
        return response.json(themes)
    }

    async show({params, response}) {
        const theme = await Theme.find(params.id)
        return response.json(theme)
    }
    
    async store({request, response}) {
        const theme = await Theme.create({
            th_name: request.post().name
        })
        response.json(theme)
    }

    async update({params, request, response}) {
        const theme = await Theme.find(params.id)
        theme.th_name = request.post().name
        await theme.save()
        return response.json(theme)
    }

    async destroy({ params, response }) {
        const theme = await Theme.find(params.id)
        await theme.delete()

        return response.json({ message: 'Le thème a été supprimé' })
    }
}

module.exports = ThemeController
