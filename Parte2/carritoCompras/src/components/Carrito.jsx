function Carrito({ carrito , aumentarCantidad , disminuirCantidad , eliminarDelCarrito }) {

  //console.log("🛒 CARRITO RECIBIDO:", carrito);
  // Calculamos el total de todos los productos
const total = carrito.reduce(
  (acumulado, producto) =>
    acumulado + producto.precio * producto.cantidad,
  0
);


  return (
    <div>
      <h2>🛒 Mi carrito</h2>


      {carrito.map((producto) => (
        <div key={producto.id}>
          <p>
            {producto.emoji} {producto.nombre}
          </p>


          <p>
            ${producto.precio}
          </p>
  <button
  onClick={() => disminuirCantidad(producto.id)}
>
  -
</button>
  <span>
    {producto.cantidad}
  </span>

 <button
      onClick={() => aumentarCantidad(producto.id)}
    >
      +
    </button>

    <button
  onClick={() => eliminarDelCarrito(producto.id)}
>
  🗑️ Eliminar
</button>

    
  


        </div>
      ))}

  
      <hr />


      <h3>
        Total: ${total}
      </h3>
    </div>
  );
}


export default Carrito;

