import { Injectable } from '@nestjs/common';

import { UsersResultDto } from './dtos/users-result.dto';
import { UserDto } from './dtos/user.dto';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUsers(page: number, limit: number): Promise<UsersResultDto> {
    const [users, totalItems] = await this.prismaService.$transaction([
      this.prismaService.user.findMany({
        skip: (page - 1) * limit,
        take: limit,
        include: {
          roles: {
            include: {
              role: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      }),
      this.prismaService.user.count(),
    ]);

    return {
      users: users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        roles: user.roles.map((userRole) => userRole.role),
      })),
      totalItems,
    };
  }

  async updateUserRoles(userId: number, roles: number[]): Promise<UserDto> {
    const user = await this.prismaService.user.update({
      where: { id: userId },
      data: {
        roles: {
          deleteMany: {},
          create: roles.map((id) => ({ roleId: id })),
        },
      },
      include: {
        roles: { include: { role: true } },
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles.map((userRole) => userRole.role),
    };
  }
}
