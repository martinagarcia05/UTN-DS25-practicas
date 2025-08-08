import { Request, Response } from "express";
import { Book } from "../models/Books";
import { title } from "process";

let books: Book[] = [
  { id: 1, title: 'Cien años de soledad', autor: 'Gabrien Garcia Marquez'},
  { id: 2, title: '1984', autor: 'George Owell'},
  { id: 3, title: 'El principito', autor: 'Antoine de Saint-Exupéry'},
  {id: 4, title: 'Farenheit 451', autor: 'Ray Bradbury'}
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
    const nuevo:Book = {id: ultimoID +1, title: `${req.params.title}`, autor: `${req.params.autor}` };
    books.push(nuevo);
    res.status(200).json({message: 'newBook'});
}
export const putBook = (req: Request, res: Response) =>{
    const idB: number= parseInt(req.params.id)
    const book = books.find(b=> b.id===idB);
    if (!book) {
        return res.status(404).json({message: "libro no encontrado"});
    }
    book.title = req.body.title ?? book.title; //con ?? se mantiene el valor anterior si no te mandan ese campo
    book.autor = req.body.autor ?? book.autor;

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