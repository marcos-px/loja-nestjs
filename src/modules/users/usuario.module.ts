import { Module } from '@nestjs/common';
import { UsuarioController } from 'src/controllers/users/usuario.controller';
import { UsuarioRepository } from 'src/repositories/usuario.repository';
import { UniqueEmailValidator } from 'src/validations/unique-email.validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, UniqueEmailValidator],
})
export class UsuarioModule {}
