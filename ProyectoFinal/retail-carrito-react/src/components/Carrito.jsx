import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function Carrito({
  carrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarDelCarrito
}) {

  // Calculamos el total de la compra
  const total = carrito.reduce(
    (acumulado, producto) =>
      acumulado +
      producto.precio * producto.cantidad,
    0
  );

  // Calculamos la cantidad total de productos
  const cantidadProductos = carrito.reduce(
    (acumulado, producto) =>
      acumulado + producto.cantidad,
    0
  );

  return (
    <div>

      <h2>🛒 Mi carrito</h2>

      {carrito.length === 0 ? (

        <p>
          El carrito está vacío
        </p>

      ) : (

        carrito.map((producto) => (

          <div key={producto.id}>

            {/* Nombre */}
            <h4>
              {producto.emoji} {producto.nombre}
            </h4>

            {/* Precio unitario */}
            <p>
              Precio unitario: ${producto.precio}
            </p>

            {/* Control de cantidad */}
            <div>

              <Button
                variant="outline-secondary"
                onClick={() =>
                  disminuirCantidad(producto.id)
                }
              >
                -
              </Button>

              <span className="mx-3">
                {producto.cantidad}
              </span>

              <Button
                variant="outline-secondary"
                onClick={() =>
                  aumentarCantidad(producto.id)
                }
              >
                +
              </Button>

            </div>

            {/* Subtotal */}
            <p>
              Subtotal: $
              {producto.precio * producto.cantidad}
            </p>

            {/* Eliminar */}
            <Button
              variant="danger"
              onClick={() =>
                eliminarDelCarrito(producto.id)
              }
            >
              🗑️ Eliminar
            </Button>

            <hr />

          </div>

        ))

      )}

      {/* Resumen */}
      <p>
        Productos en carrito: {cantidadProductos}
      </p>

      <h3>
        Total: ${total}
      </h3>
         <Link
  to="/"
  className="btn-seguir-comprando"
>
  ← Seguir comprando
</Link> 

    </div>

  );
}

export default Carrito;