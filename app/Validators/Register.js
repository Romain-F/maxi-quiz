'use strict'
<<<<<<< HEAD

class Register {
  get rules () {
    return {
      // validation rules
=======
class Register {
  get rules() {
    return {
>>>>>>> 3b445fccce67e565b3b8ca80f2e28909ae315069
      name: 'required',
      email: 'required|email|unique:users',
      password: 'required|min:8'
    }
  }
<<<<<<< HEAD
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

=======

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
>>>>>>> 3b445fccce67e565b3b8ca80f2e28909ae315069
module.exports = Register
