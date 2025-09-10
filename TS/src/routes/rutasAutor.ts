import { Router } from "express";
import { postAutor } from "../controllers/AutorCcontroller";
import { de } from "zod/v4/locales/index.cjs";

const autorRoutes = Router();

autorRoutes.post("/crear", postAutor);

export default autorRoutes;