import Carrito from "../components/Carrito";


function CarritoPage({
  carrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarDelCarrito
}) {
  
 
    
  return (
    <div>
      <h1>🛒 Mi carrito</h1>

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