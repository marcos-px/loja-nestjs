import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/users/usuario.module';
import { ProdutosModule } from './modules/products/produtos.modules';

@Module({
  imports: [UsuarioModule, ProdutosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
