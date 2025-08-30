export class UserDto {
  id: number;
  name: string;
  email: string;
  roles: { id: number; name: string }[];
}
