import { Router } from "express";
import { postAutor } from "../controllers/AutorCcontroller";

const autorRoutes = Router();

autorRoutes.post("/crear", postAutor);

export default autorRoutes;