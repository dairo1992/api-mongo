import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario, UsuarioDocument } from './schemas/usuario.schema';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name)
    private readonly usuarioModel: Model<UsuarioDocument>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioModel.create(createUsuarioDto);
  }

  async findAll(request: Request): Promise<Usuario[]> {
    return this.usuarioModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string): Promise<Usuario> {
    try {
      console.log('buscando:' + id);
      return this.usuarioModel.findOne({ _id: id }).exec();
    } catch (error) {
      console.log(`Error ${error}}`);
    }
  }

  async update(
    id: string,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    return this.usuarioModel.findOneAndUpdate({ _id: id }, updateUsuarioDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.usuarioModel.findByIdAndDelete({ _id: id }).exec();
  }
}
