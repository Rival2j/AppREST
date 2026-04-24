import * as EtiquetasServices from '../services/Etiquetas.service.js';
import boom from '@hapi/boom';

export const getEtiquetasList = async (req, res, next) => {
    try {
        const etiquetasList = await EtiquetasServices.getEtiquetasList();
        if (!etiquetasList) {
            throw boom.notFound('No se encontraron etiquetas.');
        }
        res.status(200).json({
            success: true,
            data: [{ dataRes: etiquetasList }]
        });
    } catch (error) {
        next(error);
    }
};
