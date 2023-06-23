import { Router } from "express";
import {methodsHTTP as categoriasController} from '../controllers/categorias.controllers.js';

const router = Router();

router.get("/api/categorias", categoriasController.getCategorias);

export default router;