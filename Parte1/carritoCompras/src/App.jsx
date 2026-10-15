import { useState } from "react";
import ListaProductos from "./components/ListaProductos";
import Carrito from "./components/Carrito";
import Titulo from "./components/Titulo";
function App() {

  const [carrito, setCarrito] = useState([]);

  console.log("STATE carrito:", carrito);

 function agregarAlCarrito(producto) {

  const productoExiste = carrito.find(
    item => item.id === producto.id
  );

  if (productoExiste) {

    setCarrito(
      carrito.map(item =>
        item.id === producto.id
          ? {
              ...item,
              cantidad: item.cantidad + 1
            }
          : item
      )
    );

  } else {

    setCarrito([
      ...carrito,
      {
        ...producto,
        cantidad: 1
      }
    ]);

  }
}

  return (
  
<div>
  <Titulo />
  <ListaProductos
    agregarAlCarrito={agregarAlCarrito}
  />
  {/*
    <ListaProductos
      agregarAlCarrito={agregarAlCarrito}
    />
  */}

  <Carrito carrito={carrito} />
</div>

 
  
    
  );
}

export default App;