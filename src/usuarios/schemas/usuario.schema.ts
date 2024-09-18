import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop()
  nombre: string;

  @Prop()
  tipo_documento: string;

  @Prop()
  documento: number;

  @Prop()
  sexo: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
