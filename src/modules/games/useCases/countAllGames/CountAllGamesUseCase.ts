import { inject, injectable } from "tsyringe";

import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class CountAllGamesUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository
    ) {}

    async execute(): Promise<[{ count: string }]> {
        const count = await this.gamesRepository.countAllGames();

        return count;
    }
}

export { CountAllGamesUseCase };
