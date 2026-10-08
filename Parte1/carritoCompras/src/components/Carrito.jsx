function Carrito({ carrito }) {

  console.log("🛒 CARRITO RECIBIDO:", carrito);
  // Calculamos el total de todos los productos
  const total = carrito.reduce(
    (acumulado, producto) => acumulado + producto.precio,
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

