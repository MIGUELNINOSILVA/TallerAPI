import {Router} from 'express';
import {methodsHTTP as empleadosControllers} from '../controllers/empleados.controllers.js';

const router = Router();

router.get("/api/empleados", empleadosControllers.getEmpleados);

export default router;