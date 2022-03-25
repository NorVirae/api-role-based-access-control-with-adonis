// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async index({response, }){

        response.status(400).json({data: "hey user!"})

    }
}
