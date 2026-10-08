import { Link } from "react-router-dom";

function Inicio() {

  return (
    <div className="container mt-4">

      <h1>🍔 Bienvenido a Food React</h1>

      <p>
        Encuentra tus productos favoritos.
      </p>

      <Link
        to="/carrito"
        className="btn btn-primary"
      >
        🛒 Ir al carrito
      </Link>

    </div>
  );
}

export default Inicio;