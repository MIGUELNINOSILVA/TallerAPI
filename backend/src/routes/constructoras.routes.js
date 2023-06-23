import { Router } from "express";
import {methodsHTTP as constructoraController} from '../controllers/constructoras.controllers.js';

const router = Router();

router.get("/api/constructoras", constructoraController.getConstructoras);

export default router;