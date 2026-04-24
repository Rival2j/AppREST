import mongoose from "mongoose";

// Definición del esquema para Institutos
const institutosSchema = new mongoose.Schema({
    IdInstitutoOK: { type: String, required: true },
    IdInstitutoBK: { type: String, required: true },
    DesInstituto: { type: String, required: true },
    Alias: { type: String, required: false },
    Matriz: { type: String, required: false },
<<<<<<< HEAD
    IdTipoGiroOK: { type: String, required: false },
=======
    Giro: { type: String, required: false },
>>>>>>> 8f9582e848ad5b04c2ff6600b14d78d363a0597d
    IdInstitutoSupOK: { type: String, required: false }
});

// Exportamos el modelo
export default mongoose.model(
    'cat_institutos',
    institutosSchema,
    'cat_institutos'
<<<<<<< HEAD
);
=======
);
>>>>>>> 8f9582e848ad5b04c2ff6600b14d78d363a0597d
