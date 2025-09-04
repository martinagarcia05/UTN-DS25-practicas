import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/linkLibro.css'
import BMlibro from '../pages/ModLibro';
import { useNavigate } from 'react-router-dom';

function LinkB(){
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDarDeBaja = () => {
    const validacion = window.confirm("¿Estás seguro de que deseas dar de baja a este libro?");
    if (!validacion) return;
    const fetchBaja = async () => {
    const response = await fetch(`${bajaURL}/${id}`, { method: 'DELETE' });
    if (response.ok) {
          setSocios(prevSocios => prevSocios.filter(socio => socio.id !== id));
          alert("Socio eliminado exitosamente.");
    }
      };
      fetchBaja();
  } 
  const handleModALibro = () => {
    navigate(`/modificar-libro/${id}`);
  }
  return (
    <div>
      <h2 id='detalle'>Detalle del libro</h2>
      <p>Este libro tiene ID: {id}</p>
      <div className="container-fluid" >
        <button className="btn btn-outline-success" type="button" onClick={handleDarDeBaja}>Eliminar Libro</button>
        <button className="btn btn-outline-success" type="button" onClick={handleModALibro}>Modificar Libro</button>
      </div>
    </div>
  );
}
export default LinkB;