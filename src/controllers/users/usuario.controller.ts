import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaUsuarioDTO } from 'src/dtos/users/CriaUsuario.dto';
import { UsuarioRepository } from 'src/repositories/usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    // return { status: 'usuario criado!' };
    return dadosDoUsuario;
  }
  @Get()
  async listaUsuarios() {
    return this.usuarioRepository.listar();
  }
}
