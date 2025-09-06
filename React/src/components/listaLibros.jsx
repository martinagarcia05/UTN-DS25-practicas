import React,  { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/listaLibros.css'
import Accordion from 'react-bootstrap/Accordion';
import { Libros } from "./devolverTodosLibros";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";

function Lista() {
  //const books = Libros(); //va await?
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const fetchedBooks = await Libros();
      if (fetchedBooks) {
        setBooks(fetchedBooks);
      }
    }
    fetchBooks();
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al inicio.

  // Muestra un mensaje de carga mientras los datos se obtienen de la API
  if (books.length === 0) {
    return <h1>Cargando libros...</h1>;
  }
  return (
    <>
    <NavbarBrand>Mi Biblioteca</NavbarBrand>
    <Accordion defaultActiveKey="0" flush>
      <h1>Lista de libros</h1>
      {books.map (book => 
      <Accordion.Item eventKey={book.id} key={book.id}>
        <Accordion.Header className="titulo"><Link to={`/libros/${book.id}`}>{book.title}</Link></Accordion.Header>
        <Accordion.Body>
           <h4>Descripción:</h4>
          <p>{book.descripcion}</p>
          <br />
        </Accordion.Body>
      </Accordion.Item>
      )}
      
    </Accordion>
    </>
  );
}

export default Lista;