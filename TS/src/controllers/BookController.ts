import { Request, Response } from "express";
import { Book } from "../models/Books";
//import { title } from "process";

let books: Book[] = [
  { id: 1, title: 'Cien años de soledad', autor: 'Gabrien Garcia Marquez', descripcion: 'Cien años de soledad es una novela del escritor colombiano ganador del Premio Nobel de Literatura Gabriel García Márquez. Es opinión general que se trata de una obra maestra de la literatura hispanoamericana y universal, y es una de las obras más traducidas y leídas en español.'},
  { id: 2, title: '1984', autor: 'George Owell', descripcion: '1984 es una novela política de ficción distópica, escrita por George Orwell entre 1947 y 1948 y publicada el 8 de junio de 1949.'},
  { id: 3, title: 'El principito', autor: 'Antoine de Saint-Exupéry', descripcion: 'El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry.'},
  {id: 4, title: 'Farenheit 451', autor: 'Ray Bradbury', descripcion: 'Fahrenheit 451 es una novela distópica del escritor estadounidense Ray Bradbury, publicada en 1953 y considerada una de sus mejores obras. La novela presenta una sociedad estadounidense del futuro en la que los libros están prohibidos y existen «bomberos» que queman cualquiera que encuentren.'}
]

export const getBook = (req: Request, res: Response) =>{
    res.json(books);
}
export const getBookID = (req: Request, res: Response) =>{
    const idB = parseInt(req.params.id); //parse int: convierte a int
    const book = books.find(b=> b.id===idB);
    if (!book) {
        return res.status(404).json({message: "libro no encontrado"});
    }
    res.json(book);
}
export const postBook = (req: Request, res: Response) =>{
    const ultimoID: number= books[books.length -1].id;
    const { titulo, autor, desc } = req.body;
    const nuevo:Book = {id: ultimoID +1, title: titulo, autor: autor, descripcion: desc};
    books.push(nuevo);
    res.status(200).json({message: 'newBook'});
}
export const putBook = (req: Request, res: Response) =>{
    const idB: number= parseInt(req.params.id)
    const book = books.find(b=> b.id===idB);
    if (!book) {
        return res.status(404).json({message: "libro no encontrado"});
    }
    const { titulo, autor, desc } = req.body;
    book.title = titulo ?? book.title; //con ?? se mantiene el valor anterior si no te mandan ese campo
    book.autor = autor ?? book.autor;
    book.descripcion = desc ?? book.descripcion;

    res.status(200).json({message: 'libro actualizado', book})
}
export const deleteBook = (req: Request, res: Response) =>{
    const idB = parseInt(req.params.id); 
    const posicion = books.findIndex(b => b.id===idB);
     if (posicion === -1) {
        return res.status(404).json({ message: "libro no encontrado" });
    }
    books.splice(posicion, 1);
    res.status(200).json({message: "libro eliminado"});
}