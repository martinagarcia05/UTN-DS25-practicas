import { Router } from "express";
import { getBook, getBookID, postBook, putBook, deleteBook } from "../controllers/BookController";

const booksRoutes = Router();

booksRoutes.get("/", getBook);
booksRoutes.get("/:id", getBookID);
booksRoutes.post("/", postBook);
booksRoutes.put("/:id", putBook);
booksRoutes.delete("/:id", deleteBook);

export default booksRoutes;
