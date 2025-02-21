import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <Navbar expand="lg" id="bg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 brand">
          Shopping-Cart
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/category/women's clothing">
              Women Clothing
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/men's clothing">
              Men Clothing
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/electronics">
              Electronics
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/jewelery">
              Jewelry
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/addToCart" className="position-relative">
              <Button variant="outline-success">
                <FaShoppingCart size={25} />
                {cart.length > 0 && (
                  <span className="cart-badge">{cart.length}</span>
                )}
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
