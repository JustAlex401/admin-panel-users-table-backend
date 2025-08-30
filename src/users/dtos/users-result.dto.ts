import { UserDto } from './user.dto';

export class UsersResultDto {
  users: UserDto[];
  totalItems: number;
}
