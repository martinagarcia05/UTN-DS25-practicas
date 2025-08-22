import React from "react";
import { Link } from 'react-router-dom';
import '../styles/listaLibros.css'
import Accordion from 'react-bootstrap/Accordion';
import { Libros } from "./devolverTodosLibros";

function Lista() {
    const books = Libros(); //va await?
  return (
    <Accordion defaultActiveKey="0" flush>
      <h1>Lista de libros</h1>
      {books.map (book => 
      <Accordion.Item eventKey={book.id} key={book.id}>
        <Accordion.Header className="titulo"><Link to={`/books/${book.id}`}>{book.title}</Link></Accordion.Header>
        <Accordion.Body>
           <h4>Descripción:</h4>
          <p>{book.descripcion}</p>
          <br />
        </Accordion.Body>
      </Accordion.Item>
      )}
      
    </Accordion>
  );
}

export default Lista;