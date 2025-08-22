import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'

function Cabecera() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="#" id='navbar'>Bienvenido</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Cabecera;