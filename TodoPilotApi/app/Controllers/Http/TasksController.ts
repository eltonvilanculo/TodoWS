// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Task from "App/Models/Task";

export default class TasksController {

  // TODO: CRUD for Tasks

  // TODO: POST(store) GET(index) PUT(edit)  DELETE(destroy)

  public async index(){


    try {
      return this.responseModel(await Task.all(),200)
    } catch (error) {

      return this.responseModel(null,500, error.code)
    }


  }

  public async showHellowWorld(){

    const hello = { uuid: 'djhsjhdshjdhjs',
                    name:"elton",
                    email:"@"
                  }

    return hello

    }



    responseModel(data:object|null, code:number, message:string|boolean="sucess"){

      return  {
        data,
        code,
        message,
      }

    }
}

