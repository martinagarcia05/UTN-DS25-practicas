"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const rutasLibros_1 = __importDefault(require("./routes/rutasLibros"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)()); // Habilitar CORS para todas las rutas
app.use(express_1.default.json()); // Para que Express entienda JSON
app.use("/api/books", rutasLibros_1.default);
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
