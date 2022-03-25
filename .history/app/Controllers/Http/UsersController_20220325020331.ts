import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async index({response, request}:HttpContextContract){
        console.log(request);
        response.status(200).json({data: "GET all users!"});

    }

    public async store({response, request}:HttpContextContract){
        console.log(request);
        response.status(400).json({data: "store user!"});
        
    }

    public async show({response, request, params}:HttpContextContract){
        console.log(request);
        response.status(400).json({data: "show user user!"});
        
    }

    public async update({response, request}:HttpContextContract){
        console.log(request);
        response.status(400).json({data: "hey user!"});
        
    }

    public async destroy({response, request}:HttpContextContract){
        console.log(request);
        response.status(400).json({data: "hey user!"});
        
    }

}
