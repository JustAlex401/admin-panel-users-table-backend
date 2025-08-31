import {
  IsString,
  IsOptional,
  IsArray,
  IsInt,
  Min,
} from 'class-validator';

export class FilterDto {
  @IsOptional()
  @IsString()
  rolesFilter?: string;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  @Min(1, { each: true })
  numberRolesFilter?: number[];
}
