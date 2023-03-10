import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

export class UserRO {
  id: string;
  username: string;
  crated: Date;
  token?: string;
}
