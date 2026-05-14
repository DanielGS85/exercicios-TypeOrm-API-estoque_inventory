import type {Request, Response } from "express";
import { ProdutoService } from "../services/ProductService.js";
import { Produto } from "../entities/Product.js";

//dificuldade para criar o get, focou confuso os exercicios anterios mais simpes e
// o mais complexo em typeOrm nao estou encontrando com facilidade os get no typeOrm

export class ProdutoController {
  private produtoService = new ProdutoService();

  listAll = async (req: Request, res: Response) => {
    try {
      const produto = await this.produtoService.listAll();
      return res.json(produto);
    } catch (error: unknown) {
      res.status(201).json({ error: "Erro ao buscar produtos!" });
    }
  };
    

  create = async (req: Request, res: Response) => {
    try {
      const { name, quantity, price } = req.body;
      const produto = await this.produtoService.create(name, quantity, price);
      res.status(201).json(produto);
    } catch (error: unknown) {
      res.status(201).json({ error });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const produtoId = Number(req.params.id);
      const { name, quantity, price } = req.body;
      const produto = await this.produtoService.update(produtoId, name, quantity, price);
      res.status(200).json(produto)
    } catch (error: unknown) {
      res.status(200).json({ error: "Erro ao buscar produto!" });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      await this.produtoService.delete(id);
      res.status(204).send();
      } catch (error: unknown) {
      res.status(200).json({ error: "Erro ao deletar produto!" });
    }

  };


}