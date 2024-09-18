import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({
    example: 'Dairo Barrios Ramos',
  })
  @IsString()
  readonly nombre: string;

  @ApiProperty({
    example: 'CC',
  })
  @IsString()
  readonly tipo_documento: string;

  @ApiProperty({
    example: '123456789',
  })
  @IsNumber()
  readonly documento: number;

  @ApiProperty({
    example: 'Masculino',
  })
  @IsString()
  readonly sexo: string;
}
