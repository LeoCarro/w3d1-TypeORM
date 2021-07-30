import { inject, injectable } from "tsyringe";
import { IFindUserWithGamesDTO } from "../../../users/dtos";
import { IGamesRepository } from "../../repositories/IGamesRepository";



@injectable()
class FindByTitleContainingUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  async execute(param: string): Promise<Game[]> {
    const games = await this.gamesRepository.findByTitleContaining(param)
    return games
  }
}

export { FindByTitleContainingUseCase }