import { Module } from '@nestjs/common';
import { UsuarioController } from 'src/controllers/usuario.controller';

@Module({
  controllers: [UsuarioController],
})
export class UsuarioModule {}
