import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'


function Cabecera() {
  const handleAgregarLibro = () => {
    // Lógica para agregar un libro
    
  }
  return (
    <>
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid" >
    <a class="navbar-brand" href='/'>Librería</a>

      <button class="btn btn-outline-success" type="submit" onClick={handleAgregarLibro}>Agregar Libro</button>
    
  </div>
</nav>
    </>
  );
}

export default Cabecera;