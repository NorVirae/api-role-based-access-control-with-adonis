// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async index({response, request}){
        console.log
        response.status(400).json({data: "hey user!"})

    }
}
