import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UsersResultDto } from './dtos/users-result.dto';

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
}
