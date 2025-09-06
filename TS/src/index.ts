import express from "express";
import cors from "cors";
import booksRoutes from "./routes/rutasLibros";

const app = express();
const PORT = 3000;

app.use(cors()); // Habilitar CORS para todas las rutas
app.use(express.json()); // Para que Express entienda JSON


app.use("/api/libros", booksRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});