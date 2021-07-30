import { inject, injectable } from "tsyringe";
import { IFindUserWithGamesDTO } from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";



@injectable()
class FindUserWithGamesByIdUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(user_id: IFindUserWithGamesDTO): Promise<User> {
    const user = await this.usersRepository.findUserWithGamesById(user_id)
    return user
  }
}

export { FindUserWithGamesByIdUseCase }