import React from "react";
import { Link } from 'react-router-dom';
import '../styles/listaLibros.css'


function Lista(){
  const books = [
  { id: 1, title: 'Cien años de soledad' },
  { id: 2, title: '1984' },
  { id: 3, title: 'El principito' },
  {id: 4, title: 'Farenheit'}
];
  return (
    <div>
      <h1>Lista de libros</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );

}
export default Lista;