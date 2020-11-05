'use strict'
<<<<<<< HEAD

const User = use('App/Models/User')

class AuthController {
    loginView({ view }) {
        return view.render('auth.login')
    }
    registrationView({ view }) {
        return view.render('auth.register')
    }

    async postLogin({ request, auth, response }) {
        await auth.attempt(request.input('email'), request.input('password'))
        return response.route('index')
    }

    async postRegister({ request, session, response }) {
        const user = await User.create({
            username: request.input('name'),
            email: request.input('email'),
            password: request.input('password')
        })
        session.flash({ successmessage: 'User have been created successfully' })
        return response.route('login.create');
    }

    async logout({ auth, response }) {
        await auth.logout()
        return response.route('/')
    }
}

=======
const User = use('App/Models/User')
class AuthController {

  loginView({ view }) {
    return view.render('auth.login')
  }
  registrationView({ view }) {
    return view.render('auth.register')
  }

  async postLogin({ request, auth, response }) {
    await auth.attempt(request.input('email'), request.input('password'))
    return response.route('index')
  }

  async postRegister({ request, session, response }) {
    const user = await User.create({
      username: request.input('name'),
      email: request.input('email'),
      password: request.input('password')
    })
    session.flash({ successmessage: 'User have been created successfully' })
    return response.route('login.create');
  }

  async logout({ auth, response }) {
    await auth.logout()
    return response.route('/')
  }
}
>>>>>>> 3b445fccce67e565b3b8ca80f2e28909ae315069
module.exports = AuthController
