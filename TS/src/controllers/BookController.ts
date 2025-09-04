import { Request, Response } from "express";
import { Book } from "../models/Books";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// let books: Book[] = [
//   { id: 1, title: 'Cien años de soledad', autor: 'Gabrien Garcia Marquez', descripcion: 'Cien años de soledad es una novela del escritor colombiano ganador del Premio Nobel de Literatura Gabriel García Márquez. Es opinión general que se trata de una obra maestra de la literatura hispanoamericana y universal, y es una de las obras más traducidas y leídas en español.'},
//   { id: 2, title: '1984', autor: 'George Owell', descripcion: '1984 es una novela política de ficción distópica, escrita por George Orwell entre 1947 y 1948 y publicada el 8 de junio de 1949.'},
//   { id: 3, title: 'El principito', autor: 'Antoine de Saint-Exupéry', descripcion: 'El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry.'},
//   {id: 4, title: 'Farenheit 451', autor: 'Ray Bradbury', descripcion: 'Fahrenheit 451 es una novela distópica del escritor estadounidense Ray Bradbury, publicada en 1953 y considerada una de sus mejores obras. La novela presenta una sociedad estadounidense del futuro en la que los libros están prohibidos y existen «bomberos» que queman cualquiera que encuentren.'}
// ]

export const getBook = async(req: Request, res: Response) =>{
    try {
        const books = await prisma.book.findMany();
        res.json(books);
  } catch (error) {
        res.status(500).json({ error: "Error al obtener los libros" });
  }
}
export const getBookID = async (req: Request, res: Response) =>{
    const idB = parseInt(req.params.id); //parse int: convierte a int
    const book = await prisma.book.findUnique({
        where: { id: idB }
    });
    if (!book) {
        return res.status(404).json({message: "libro no encontrado"});
    }
    res.json(book);
}
export const postBook = async (req: Request, res: Response) =>{
    const { titulo, descripcion, autor } = req.body;
    const nuevo = await prisma.book.create({
        data: {
            titulo,
            descripcion,
            autor
        }
    });
    res.status(200).json({message: 'newBook', nuevo});
}
export const putBook = async (req: Request, res: Response) => {
  const idB = parseInt(req.params.id);
  const { titulo, descripcion, autor } = req.body;

  try {
    const updatedBook = await prisma.book.update({
      where: { id: idB },
      data: {
        titulo,
        descripcion,
        autor,
      },
    });
    res.status(200).json({ message: "libro actualizado", updatedBook });
  } catch (error) {
    res.status(404).json({ message: "libro no encontrado" });
  }
};
export const deleteBook = async(req: Request, res: Response) =>{
    const idB = parseInt(req.params.id);
    const book = await prisma.book.findUnique({
        where: { id: idB }
    });
    if (!book) {
        return res.status(404).json({ message: "libro no encontrado" });
    }
    await prisma.book.delete({
        where: { id: idB }
    });
    res.status(200).json({message: "libro eliminado"});
}