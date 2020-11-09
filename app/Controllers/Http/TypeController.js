'use strict'

const Type = use('App/Models/Type');

class TypeController {
  async getTypes({ request, response }) {
    let types = await Type.all()
    return response.json(types)
  }

  async create() {
  }

  async store({ request, auth, response }) {
    try {
      let type = await Type.create(request.all())
      await type.load('user');
      return response.json(type)
    } catch (e) {
      console.log(e)
      return response.json({ message: 'Non autorisé' })
    }
  }

  async update({ auth, params, response }) {
    let type = await Type.find(params.id)
    type.name = request.input('name')
    await type.save()
    await type.load('user');
    return response.json(type)
  }

  async delete({ auth, params, response }) {
    await Type.find(params.id).delete()
    return response.json({ message: 'Type supprimé' })
  }
}

module.exports = TypeController
