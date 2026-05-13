import { Router } from "express";
import { ProdutoController } from "../controller/ProdutoController.js";




const router = Router();
const produtoController = new ProdutoController();

router.get("/", produtoController.listAll);
router.post("/", produtoController.create);

export const productRoutes = router;