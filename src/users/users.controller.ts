import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { PaginationQuery } from './decorators/pagination-query.decorator';
import { PaginationDto } from './dtos/pagination.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(
    @PaginationQuery() pagination: PaginationDto,
    // @PaginationQuery() pagination: PaginationDto,
    // @PaginationQuery() pagination: PaginationDto,
  ) {
    return this.usersService.getUsers();
  }
}
