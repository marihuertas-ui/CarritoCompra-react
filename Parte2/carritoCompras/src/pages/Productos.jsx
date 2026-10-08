import ListaProductos from "../components/ListaProductos";

function Productos({ agregarAlCarrito }) {
  return (
    <div>
      <h1>🍔 Productos</h1>

      <ListaProductos
        agregarAlCarrito={agregarAlCarrito}
      />
    </div>
  );
}

export default Productos;