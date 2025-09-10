import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/linkLibro.css'

function LinkB(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await fetch(`http://localhost:3000/api/libros/${id}`);
        if (response.ok) {
          const bookData = await response.json();
          setBook(bookData);
        } else {
          alert("Libro no encontrado");
          navigate('/');
        }
      } catch (error) {
        alert("Error al cargar el libro: " + error.message);
        navigate('/');
      } finally {
        setLoading(false);
      }
    }
    fetchBook();
  }, [id, navigate]);

  const handleDarDeBaja = async () => {
    const validacion = window.confirm("¿Estás seguro de que deseas eliminar este libro?");
    if (!validacion) return;
    
    try {
      const response = await fetch(`http://localhost:3000/api/libros/${id}`, { 
        method: 'DELETE' 
      });
      if (response.ok) {
        alert("Libro eliminado exitosamente.");
        navigate('/');
      } else {
        alert("Error al eliminar el libro");
      }
    } catch (error) {
      alert("Error al eliminar el libro: " + error.message);
    }
  } 

  const handleModALibro = () => {
    navigate(`/modificar-libro/${id}`);
  }

  if (loading) {
    return <h2>Cargando libro...</h2>;
  }

  if (!book) {
    return <h2>Libro no encontrado</h2>;
  }

  return (
    <div>
      <h2 id='detalle'>Detalle del libro</h2>
      <div className="book-detail">
        <h3>{book.titulo}</h3>
        <p><strong>Descripción:</strong> {book.descripcion}</p>
        <p><strong>Autor:</strong> {book.nomYapAutor}</p>
        {book.autor && (
          <p><strong>Fecha de nacimiento del autor:</strong> {new Date(book.autor.nacimiento).toLocaleDateString()}</p>
        )}
      </div>
      <div className="container-fluid" >
        <button className="btn btn-outline-danger" type="button" onClick={handleDarDeBaja}>Eliminar Libro</button>
        <button className="btn btn-outline-primary" type="button" onClick={handleModALibro}>Modificar Libro</button>
      </div>
    </div>
  );
}
export default LinkB;