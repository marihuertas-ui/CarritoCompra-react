import { useState } from "react";
import ListaProductos from "./components/ListaProductos";
import Carrito from "./components/Carrito";
function App() {

  const [carrito, setCarrito] = useState([]);

  console.log("STATE carrito:", carrito);

  function agregarAlCarrito(producto) {
    console.log("Agregando:", producto);

    setCarrito([
      ...carrito,
      producto
    ]);
  }

  return (
    <div>
      <h1>🍔 Food React</h1>

      <ListaProductos
        agregarAlCarrito={agregarAlCarrito}
      />

          <Carrito carrito={carrito} />
    </div>

 
  
    
  );
}

export default App;