import ListaProductos from "../components/ListaProductos";

function Productos({ agregarAlCarrito }) {

  const usuario =
    sessionStorage.getItem("usuario");

  return (

    <div>

      <h2 className="productos-titulo">
        🍔 Todos nuestros productos
      </h2>

      <p className="text-center">
        Explora nuestro catálogo de productos.
      </p>

      <ListaProductos
        agregarAlCarrito={agregarAlCarrito}
      />

    </div>

  );

}

export default Productos;