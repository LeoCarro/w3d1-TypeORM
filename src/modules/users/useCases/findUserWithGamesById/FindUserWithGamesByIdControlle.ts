import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserWithGamesByIdUseCase } from "./FindUserWithGamesByIdUseCase";



class FindUserWithGamesByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const  user_id  = request.params.id

    const findUserWithGamesByIdUseCase = container.resolve(FindUserWithGamesByIdUseCase)

    const user = await findUserWithGamesByIdUseCase.execute({user_id})

    return response.json(user)
  }
}

export { FindUserWithGamesByIdController }