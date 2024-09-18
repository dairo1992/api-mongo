import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @ApiProperty({
    example: 'Dairo Barrios Ramos',
  })
  nombre: string;

  @ApiProperty({
    example: 'CC',
  })
  tipo_documento: string;

  @ApiProperty({
    example: '123456789',
  })
  readonly documento: number;

  @ApiProperty({
    example: 'Masculino',
  })
  sexo: string;
}
