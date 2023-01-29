import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario.module';
import { ProdutosModule } from './modules/produtos.modules';

@Module({
  imports: [UsuarioModule, ProdutosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
