import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindUsersByGameIdUseCase } from "./FindUsersByGameIdUseCase";

class FindUsersByGameIdController {
    async handle(request: Request, response: Response): Promise<Response> {
      const {game_id} = request.params
      const findUsersByGameIdUseCase = container.resolve(FindUsersByGameIdUseCase);
      const users = await findUsersByGameIdUseCase.execute(game_id);
      return response.json(users);
    }
}

export { FindUsersByGameIdController };