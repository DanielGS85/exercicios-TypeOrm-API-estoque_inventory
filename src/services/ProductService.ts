import { Produto } from "../entities/Product.js";
import { AppDataSource } from "../data-source.js";
import { DataSource, type DataSourceOptions } from "typeorm";

export class ProdutoService{
    private ProdutoRepository = AppDataSource.getRepository(Produto);
  
  // dificuldade em encontrar a solucao
  listAll = async () => {
      return await this.ProdutoRepository.find();
    };
    create = async (name: string, quantity: number,price: number ,) => {
        
        return await this.ProdutoRepository.save({ name, quantity, price });
    };
}