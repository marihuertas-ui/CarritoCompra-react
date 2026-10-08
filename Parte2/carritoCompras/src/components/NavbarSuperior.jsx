import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

function NavbarSuperior() {

  const location = useLocation();
  const navigate = useNavigate();

  const usuario =
    sessionStorage.getItem("usuario");

  function cerrarSesion() {

    console.log(" Cerrando sesión de:", usuario);

    sessionStorage.removeItem("usuario");

    console.log(" Usuario eliminado de sessionStorage");

    navigate("/login");
  }

  return (
    <nav className="navbar navbar-dark bg-dark px-4">

      {/* LOGO */}
      <Link
        to="/"
        className="navbar-brand"
      >
        🍔 Food React
      </Link>

      {/* MENÚ */}
      <div className="d-flex gap-3">

        <Link
          to="/"
          className="nav-link text-white"
        >
          🏠 Inicio
        </Link>

        <Link
          to="/productos"
          className="nav-link text-white"
        >
          🍔 Productos
        </Link>

        <Link
          to="/ofertas"
          className="nav-link text-white"
        >
          🔥 Ofertas
        </Link>

        <Link
          to="/carrito"
          className="nav-link text-white"
        >
          🛒 Carrito
        </Link>

        {/* USUARIO / LOGIN */}
        {usuario ? (

          <>

            <span className="nav-link text-white">
              👤 {usuario}
            </span>

            <button
              className="btn btn-link nav-link text-white"
              onClick={cerrarSesion}
            >
              🚪 Cerrar sesión
            </button>

          </>

        ) : (

          <Link
            to="/login"
            className="nav-link text-white"
          >
            👤 Ingresar
          </Link>

        )}

      </div>

    </nav>
  );
}

export default NavbarSuperior;