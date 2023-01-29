import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from 'src/repositories/produto.repository';

@Controller('/produtos')
export class ProdutosController {
  constructor(private produtosRepository: ProdutoRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoProduto) {
    this.produtosRepository.salvar(dadosDoProduto);
    // return { status: 'usuario criado!' };
    return dadosDoProduto;
  }
  @Get()
  async listaUsuarios() {
    return this.produtosRepository.listar();
  }
}
