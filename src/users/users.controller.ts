import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { PaginationQuery } from './decorators/pagination-query.decorator';
import { PaginationDto } from './dtos/pagination.dto';
import { UsersResultDto } from './dtos/users-result.dto';
import { UpdateUserRolesDto } from './dtos/update-user-roles.dto';
import { FilterQuery } from './decorators/filter-query.decorator';
import { FilterDto } from './dtos/filter.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(
    @PaginationQuery() pagination: PaginationDto,
    @FilterQuery() filter: FilterDto,
  ) {
    const { users, totalItems }: UsersResultDto =
      await this.usersService.getUsers(
        pagination.page,
        pagination.limit,
        filter.numberRolesFilter,
      );

    return {
      users,
      pagination: {
        page: pagination.page,
        totalItems: totalItems,
      },
    };
  }

  @Patch(':id/roles')
  async updateUserRoles(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserRolesDto: UpdateUserRolesDto,
  ) {
    return this.usersService.updateUserRoles(id, updateUserRolesDto.roles);
  }
}
