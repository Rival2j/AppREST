import EtiquetasModel from '../models/Etiquetas.js';

export const getEtiquetasList = async () => {
    return await EtiquetasModel.find();
};
