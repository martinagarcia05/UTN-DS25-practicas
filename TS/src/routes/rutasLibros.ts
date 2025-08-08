import { Router } from "express";
import { getBook, getBookID, postBook, putBook, deleteBook } from "../controllers/BookController";

const router = Router();

router.get("/", getBook);
router.get("/:id", getBookID);
router.post("/", postBook);
router.put("/:id", putBook);
router.delete("/:id", deleteBook);

export default router;
