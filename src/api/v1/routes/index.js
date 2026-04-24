import { Router } from 'express';
import config from '../../../config/config.js';
<<<<<<< HEAD
import etiquetasRoutes from './etiquetas.routes.js';
=======
>>>>>>> 8f9582e848ad5b04c2ff6600b14d78d363a0597d

// Importamos tus rutas de institutos
import institutosRoutes from './institutos.routes.js';

const routerAPI = (app) => {
    const router = Router();
    const api = config.API_URL; // Esto vale '/api/v1'

    app.use(api, router);

    // Todas las peticiones que vayan a /api/v1/institutos serán manejadas por institutosRoutes
    router.use('/institutos', institutosRoutes);
<<<<<<< HEAD
    router.use('/etiquetas', etiquetasRoutes);
=======
>>>>>>> 8f9582e848ad5b04c2ff6600b14d78d363a0597d

    return router;
};

<<<<<<< HEAD
export default routerAPI;
=======
export default routerAPI;
>>>>>>> 8f9582e848ad5b04c2ff6600b14d78d363a0597d
