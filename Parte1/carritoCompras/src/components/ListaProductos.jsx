import productos from "../data/productos";
import Producto from "./Producto";

function ListaProductos({ agregarAlCarrito }) {
  return (
    <div>
      {productos.map((producto) => (
        
        <Producto
            key={producto.id}
          producto={producto}
         agregarAlCarrito={agregarAlCarrito}
        />

      ))}
    </div>
  );
}

export default ListaProductos;