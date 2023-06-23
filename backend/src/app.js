import express from 'express';
import constructoraRouter from './routes/constructoras.routes.js';
import empleadosRouter from './routes/empleados.routes.js';
import categoriasRouter from './routes/categorias.routes.js';
import productosRouter from './routes/productos.routes.js';

const app = express();

app.set('port', 7000);

//Routes
app.use(constructoraRouter);
app.use(empleadosRouter);
app.use(categoriasRouter);
app.use(productosRouter);

export default app;