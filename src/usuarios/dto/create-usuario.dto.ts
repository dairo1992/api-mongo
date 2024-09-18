import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({
    example: 'Dairo Barrios Ramos',
  })
  readonly nombre: string;

  @ApiProperty({
    example: 'CC',
  })
  readonly tipo_documento: string;

  @ApiProperty({
    example: '123456789',
  })
  readonly documento: number;

  @ApiProperty({
    example: 'Masculino',
  })
  readonly sexo: string;
}
