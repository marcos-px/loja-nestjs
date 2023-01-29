import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaProdutoDTO } from 'src/dtos/products/CriaProduto.dto';
import { ProdutoRepository } from 'src/repositories/produto.repository';

@Controller('/produtos')
export class ProdutosController {
  constructor(private produtosRepository: ProdutoRepository) {}

  @Post()
  async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
    this.produtosRepository.salvar(dadosDoProduto);
    // return { status: 'usuario criado!' };
    return dadosDoProduto;
  }
  @Get()
  async listaProdutos() {
    return this.produtosRepository.listar();
  }
}
