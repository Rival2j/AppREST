import mongoose from 'mongoose';

const EtiquetasSchema = new mongoose.Schema({
    IdEtiquetaOK: String,
    DesEtiqueta: String,
    valores: Array,
    detail_row: Object
}, { collection: 'cat_etiquetas' });

const EtiquetasModel = mongoose.model('cat_etiquetas', EtiquetasSchema);
export default EtiquetasModel;
