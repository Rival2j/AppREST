import { Router } from 'express';
// SEG: Importamos el controlador de institutos
import * as InstitutosController from '../controllers/institutos.controller.js';

const router = Router();

// SEG: Rutas para obtener datos (GET)
router.get('/', InstitutosController.getInstitutosList);
router.get('/:id', InstitutosController.getInstitutoItem);

// SEG: Ruta para agregar nuevos datos (POST) - Individual
router.post('/', InstitutosController.postInstitutoItem);

// SEG: Ruta para agregar MUCHOS institutos para WEB/PWA
router.post('/many-pwa', InstitutosController.postInstitutoItem);

// SEG: Ruta para modificar un instituto existente (PUT)
router.put('/:id', InstitutosController.putInstitutoItem);

// SEG: Ruta para eliminar un instituto existente (DELETE)
router.delete('/:id', InstitutosController.deleteInstitutoItem);

export default router;