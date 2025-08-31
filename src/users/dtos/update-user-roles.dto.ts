import { ArrayNotEmpty, IsArray, IsInt, Min } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class UpdateUserRolesDto {
  @IsArray()
  @ArrayNotEmpty()
  @Transform(({ value }): number[] => {
    if (Array.isArray(value)) {
      return value.map((v) => Number(v));
    }
    if (typeof value === 'string') {
      return value
        .split(',')
        .map((v) => v.trim())
        .filter((v) => v.length > 0)
        .map((v) => Number(v));
    }
    return [];
  })
  @Type(() => Number)
  @IsInt({ each: true })
  @Min(1, { each: true })
  roles!: number[];
}
