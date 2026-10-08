import { Navigate } from "react-router-dom";
import Carrito from "../components/Carrito";

function CarritoPage({
  carrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarDelCarrito
}) {

  // Revisamos si existe una sesión
  const usuario =
    sessionStorage.getItem("usuario");

  // Si NO está logueado
  if (!usuario) {

    return (
      <Navigate to="/login" />
    );

  }


  return (

    <div className="pagina-carrito">

      <h2>
        👋 Hola {usuario}
      </h2>

      <Carrito
        carrito={carrito}
        aumentarCantidad={aumentarCantidad}
        disminuirCantidad={disminuirCantidad}
        eliminarDelCarrito={eliminarDelCarrito}
      />

    </div>

  );

}

export default CarritoPage;