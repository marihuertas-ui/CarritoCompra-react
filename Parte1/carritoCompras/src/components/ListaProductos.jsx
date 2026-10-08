import Producto from "./Producto";
import productos from "../data/productos";

function ListaProductos({ agregarAlCarrito }) {
  return (
    <div>
      {productos.map(item => (
        <Producto
          key={item.id}
          producto={item}
          agregarAlCarrito={agregarAlCarrito}
         // nombre={item.nombre}
         // precio={item.precio}
         // emoji={item.emoji}
        />
      ))}
    </div>
  );
}

export default ListaProductos;