import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async index({response, request}:HttpContextContract){
        console.log(request);
        response.status(400).json({data: "hey user!"});

    }

    public async store({response, request}:HttpContextContract){
        console.log(request);
        response.status(400).json({data: "hey user!"});
        
    }

    public async show({response, request}:HttpContextContract){
        console.log(request);
        response.status(400).json({data: "hey user!"});
        
    }

    public async update({response, request}:HttpContextContract){
        console.log(request);
        response.status(400).json({data: "hey user!"});
        
    }

    public async index({response, request}:HttpContextContract){
        console.log(request);
        response.status(400).json({data: "hey user!"});
        
    }

    public async index({response, request}:HttpContextContract){
        console.log(request);
        response.status(400).json({data: "hey user!"});
        
    }

    public async index({response, request}:HttpContextContract){
        console.log(request);
        response.status(400).json({data: "hey user!"});
        
    }

    public async index({response, request}:HttpContextContract){
        console.log(request);
        response.status(400).json({data: "hey user!"});
        
    }
}
