import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const updatedUser = this.usersRepository.findById(user_id);
    if (!updatedUser) {
      throw new Error("User not found");
    }
    updatedUser.admin = true;
    updatedUser.updated_at = new Date();
    return updatedUser;
  }
}

export { TurnUserAdminUseCase };
