'use strict'
class Register {
  get rules() {
    return {
      name: 'required',
      email: 'required|email|unique:users',
      password: 'required|min:8'
    }
  }

  get messages() {
    return {
      'name.required': 'Un nom est obligatoire',
      'email.required': 'Un email est obligatoire',
      'email.unique': 'Cette email existe déjà',
      'password.required': 'Un mot de passe est obligatoire',
      'password.min': 'Le mot de passe doit faire au moins 8 caractères'
    }
  }
}
module.exports = Register
