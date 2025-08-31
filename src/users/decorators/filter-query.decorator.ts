import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { FilterDto } from '../dtos/filter.dto';
import { plainToInstance } from 'class-transformer';

function parseRoles(raw?: string) {
  if (Array.isArray(raw)) {
    return raw.map((v) => Number(v));
  }

  if (typeof raw === 'string' && raw.length) {
    return raw.split(',').map((v) => Number(v.trim()));
  }

  return [];
}

export const FilterQuery = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const filterDto = plainToInstance(
      FilterDto,
      { rolesFilter: request.query.rolesFilter },
      {
        enableImplicitConversion: true,
      },
    );

    filterDto.numberRolesFilter = parseRoles(filterDto.rolesFilter);

    return filterDto;
  },
);
