import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { Link, useNavigate } from "react-router-dom";


function NavbarSuperior({ carrito }) {

  const navigate = useNavigate();

  // Revisamos si existe una sesión
  const usuario = sessionStorage.getItem("usuario");


  // Cantidad de productos
  const cantidadProductos = carrito.reduce(
    (total, producto) =>
      total + producto.cantidad,
    0
  );


  // ==========================================
  // CERRAR SESIÓN
  // ==========================================

  function cerrarSesion() {

    // Eliminamos la sesión
    sessionStorage.removeItem("usuario");

    // Volvemos al inicio
    navigate("/");

  }


  return (

    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="navbar-superior"
    >

      <Container fluid>

        {/* LOGO */}

        <Navbar.Brand as={Link} to="/">
          🍔 Food React
        </Navbar.Brand>


        <Navbar.Toggle
          aria-controls="navbar-principal"
        />


        <Navbar.Collapse id="navbar-principal">


          {/* ==================================
              USUARIO NO LOGUEADO
              ================================== */}

          {!usuario && (

            <Nav className="me-auto">

              <Nav.Link
                as={Link}
                to="/"
              >
                🏠 Inicio
              </Nav.Link>

            </Nav>

          )}


          {/* ==================================
              USUARIO LOGUEADO
              ================================== */}

          {usuario && (

            <Nav className="me-auto">

              <Nav.Link
                as={Link}
                to="/"
              >
                🏠 Inicio
              </Nav.Link>


              <Nav.Link
                as={Link}
                to="/productos"
              >
                🍔 Productos
              </Nav.Link>


              <Nav.Link
                as={Link}
                to="/ofertas"
              >
                🔥 Ofertas
              </Nav.Link>

            </Nav>

          )}


          {/* ==================================
              PARTE DERECHA
              ================================== */}

          <Nav>


            {/* CARRITO */}

            {usuario && (

              <Nav.Link
                as={Link}
                to="/carrito"
              >

                🛒 Carrito

                {cantidadProductos > 0 && (

                  <span className="contador-carrito">
                    ({cantidadProductos})
                  </span>

                )}

              </Nav.Link>

            )}


            {/* USUARIO */}

            {usuario && (

              <Nav.Link>
                👤 {usuario}
              </Nav.Link>

            )}


            {/* LOGIN */}

            {!usuario && (

              <Nav.Link
                as={Link}
                to="/login"
              >
                🔐 Iniciar sesión
              </Nav.Link>

            )}


            {/* LOGOUT */}

            {usuario && (

              <Nav.Link
                onClick={cerrarSesion}
                style={{
                  cursor: "pointer"
                }}
              >
                🚪 Cerrar sesión
              </Nav.Link>

            )}

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>

  );

}


export default NavbarSuperior;