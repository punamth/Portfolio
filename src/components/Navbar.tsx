// Navbar.tsx
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = () => (
  <Navbar expand="lg" bg="white" variant="light" fixed="top" className="shadow-sm py-3">
    <Container>
      <Navbar.Brand href="#home" className="fw-bold fs-4 text-primary">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
          <Nav.Link href="#about" className="mx-2">About</Nav.Link>
          <Nav.Link href="#skills" className="mx-2">Skills</Nav.Link>
          <Nav.Link href="#projects" className="mx-2">Projects</Nav.Link>
          <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavbar;
