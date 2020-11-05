'use strict'

class Register {
  get rules () {
    return {
      // validation rules
      name: 'required',
      email: 'required|email|unique:users',
      password: 'required|min:8'
    }
  }
  get messages() {
    return {
      'name.required': 'Le nom est obligatoire',
      'email.required': 'L\'email est obligatoire',
      'email.unique': 'L\'email existe déjà',
      'password.required': 'Le mot de passe est obligatoire',
      'password.min': 'Le mot de passe doit contenir au moins 8 caractères'
    }
  }
}

module.exports = Register
