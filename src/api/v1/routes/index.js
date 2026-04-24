import { Router } from 'express';
import config from '../../../config/config.js';
import institutosRoutes from './institutos.routes.js';
import etiquetasRoutes from './etiquetas.routes.js';

const routerAPI = (app) => {
    const router = Router();
    const api = config.API_URL;
    app.use(api, router);
    router.use('/institutos', institutosRoutes);
    router.use('/etiquetas', etiquetasRoutes);
    return router;
};
export default routerAPI;
