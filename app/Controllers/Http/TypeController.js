'use strict'

const Type = use('App/Models/Type');

class TypeController {
  /**
* Show a list of all quizzes.
* GET quizzes
*
* @param {object} ctx
* @param {Request} ctx.request
* @param {Response} ctx.response
* @param {View} ctx.view
*/
  async index({ response }) {
    const types = await Type.all()
    return response.json(types)
  }

  async store({ request, response }) {
    const type = await Type.create({
      ty_name: request.post().name
    })
    response.json(type)
  }

  async update({ params, request, response }) {
    const type = await Type.find(params.id)
    type.ty_name = request.post().name
    await type.save()
    return response.json(type)
  }

  async destroy({ params, response }) {
    const type = await Type.find(params.id)
    await type.delete()

    return response.json({ message: 'Le type a été supprimé' })
  }
}

module.exports = TypeController
