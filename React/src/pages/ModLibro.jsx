import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Libros } from "../components/devolverTodosLibros";

function ModLibro() {
    const [books, setBooks] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      async function fetchBooks() {
        const fetchedBooks = await Libros();
        if (fetchedBooks) {
          setBooks(fetchedBooks);
        }
      }
      fetchBooks();
    }, []);
    const libro = books.find(book => String(book.id) === String(id));
    const titulo = libro ? libro.title : 'Libro no encontrado';
    const descripcion = libro ? libro.descripcion : 'Descripción no disponible';
    const autor = libro ? libro.autor : 'Autor no disponible';
    const anio = libro ? libro.anio : 'Año no disponible';
    const editorial = libro ? libro.editorial : 'Editorial no disponible';
    const isbn = libro ? libro.isbn : 'ISBN no disponible';
    const genero = libro ? libro.genero : 'Género no disponible';
    const paginas = libro ? libro.paginas : 'Páginas no disponible';
    const idioma = libro ? libro.idioma : 'Idioma no disponible';
    const disponibilidad = libro ? (libro.disponibilidad ? 'Disponible' : 'No disponible') : 'Disponibilidad no disponible';
    return (
      <>
        <h1>{titulo}</h1>
      </>
    );
}

export default ModLibro;