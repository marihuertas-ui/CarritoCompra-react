import Producto from "./Producto";
import productos from "../data/productos";

function ListaProductos({ agregarAlCarrito }) {

  return (
    <div className="lista-productos">

      {productos.map(producto => (

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