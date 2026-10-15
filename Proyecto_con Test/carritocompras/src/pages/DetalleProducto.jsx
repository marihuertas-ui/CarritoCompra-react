
import { useParams, Link } from "react-router-dom";
import productos from "../data/productos";

function DetalleProducto() {
  const { id } = useParams();

  console.log("ID recibido desde la URL:", id);
  console.log("Tipo de dato del ID:", typeof id);

  const producto = productos.find(
    (item) => item.id === Number(id)
  );

  console.log("Producto encontrado:", producto);

  if (!producto) {
    console.log("No existe un producto con ese ID");

    return (
      <div>
        <h2>Producto no encontrado</h2>
        <Link to="/productos">Volver a productos</Link>
      </div>
    );
  }

  console.log("Nombre del producto:", producto.nombre);
  console.log("Precio del producto:", producto.precio);

  return (
    <div>
      <h1>{producto.emoji} {producto.nombre}</h1>
      <p>Precio: ${producto.precio}</p>
      <p>ID recibido desde la URL: {id}</p>
      <Link to="/productos">Volver a productos</Link>
    </div>
  );
}

export default DetalleProducto;
