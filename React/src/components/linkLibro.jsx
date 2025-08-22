import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/linkLibro.css'

function LinkB(){
  const { id } = useParams();

  return (
    <div>
      <h2 id='detalle'>Detalle del libro</h2>
      <p>Este libro tiene ID: {id}</p>
    </div>
  );
}
export default LinkB;