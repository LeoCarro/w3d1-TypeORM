import { inject, injectable } from "tsyringe";
import { IFindUserByFullNameDTO, IFindUserWithGamesDTO } from "../../../users/dtos";
import { User } from "../../../users/entities/User";

import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class FindUsersByGameIdUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository
    ) {}

    async execute(id: string ): Promise<User[]>  {
        const users = await this.gamesRepository.findUsersByGameId(id);

        return users;
    }
}

export { FindUsersByGameIdUseCase }