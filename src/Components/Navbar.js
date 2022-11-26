import { Container, Nav } from 'react-bootstrap'
import NavbarBT from 'react-bootstrap/Navbar'


const Navbar = () => {
  return (
    <NavbarBT id="navbar-bootstrap" bg='dark' variant='dark' expand="md">
      <Container>
        <NavbarBT.Brand href='/'>
          Inicio
        </NavbarBT.Brand>
        <NavbarBT.Toggle aria-controls="basic-navbar-nav"></NavbarBT.Toggle>
        <NavbarBT.Collapse id='basic-navbar-nav'>
          <Nav>
            <Nav.Link href='/informacion'>¿Quiénes somos?</Nav.Link>
            <Nav.Link href='/menu'>Menú</Nav.Link>
            <Nav.Link href='/reservacion'>Reservación</Nav.Link>
            <Nav.Link href='/ubicacion'>Ubicación</Nav.Link>
            <Nav.Link href='/contacto'>Contacto</Nav.Link>
          </Nav>
        </NavbarBT.Collapse>
      </Container>
    </NavbarBT>
  )
}

export default Navbar
