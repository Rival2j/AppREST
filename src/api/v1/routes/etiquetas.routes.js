import { Router } from 'express';
import * as EtiquetasController from '../controllers/etiquetas.controller.js';

const router = Router();
router.get('/', EtiquetasController.getEtiquetasList);

export default router;
