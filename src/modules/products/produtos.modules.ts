import { Module } from '@nestjs/common';
import { ProdutosController } from 'src/controllers/products/produto.controller';
import { ProdutoRepository } from 'src/repositories/produto.repository';

@Module({
  controllers: [ProdutosController],
  providers: [ProdutoRepository],
})
export class ProdutosModule {}
