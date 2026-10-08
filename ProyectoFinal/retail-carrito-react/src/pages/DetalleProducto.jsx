import { useParams } from "react-router-dom";

import productos from "../data/productos";

function DetalleProducto() {

  const { id } = useParams();

  const producto = productos.find(
    producto => producto.id === Number(id)
  );

  if (!producto) {
    return (
      <h2>
        Producto no encontrado
      </h2>
    );
  }

  return (
    <div>

      <h1>
        {producto.emoji} {producto.nombre}
      </h1>

      <h2>
        ${producto.precio}
      </h2>

      <p>
        Producto seleccionado:
        {producto.nombre}
      </p>

    </div>
  );
}

export default DetalleProducto;