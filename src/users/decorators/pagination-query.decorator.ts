import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';
import { PaginationDto } from '../dtos/pagination.dto';

export const PaginationQuery = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const query = request.query;

    const pagination = new PaginationDto();
    pagination.page = parseInt(query.page as string, 10) || 1;
    pagination.limit = parseInt(query.limit as string, 10) || 10;

    return pagination;
  },
);
