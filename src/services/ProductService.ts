import { Produto } from "../entities/Product.js";
import { AppDataSource } from "../data-source.js";
import { DataSource, type DataSourceOptions } from "typeorm";

export class ProdutoService {
    private ProdutoRepository = AppDataSource.getRepository(Produto);
    // dificuldade na criacao basica do crud
    listAll = async () => {
        return await this.ProdutoRepository.find();
    };

    create = async (name: string, quantity: number, price: number,) => {
        return await this.ProdutoRepository.save({ name, quantity, price });
    };

    update = async (produtoId: number, name: string, quantity: number, price: number) => {
        const produto = await this.ProdutoRepository.findOne({
            where: { id: produtoId }
        });
        if (!produto) {
            throw new Error("Produto nao encontrado")
        }
        return this.ProdutoRepository.merge(produto, {name, quantity, price})
        
    };
    delete = async (produtoId: number) => {
        const produto = await this.ProdutoRepository.findOne({
            where: { id: produtoId },
        });
        if (!produto) {
            throw new Error("Produto nao encontrado")
        }
        this.ProdutoRepository.delete(produto)
    };
}