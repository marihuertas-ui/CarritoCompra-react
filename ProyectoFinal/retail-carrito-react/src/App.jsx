import { useState, useEffect } from "react";
import Login from "./pages/login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NavbarSuperior from "./components/NavbarSuperior";
import Productos from "./pages/Productos";
import Ofertas from "./pages/Ofertas";
import Inicio from "./pages/Inicio";
import CarritoPage from "./pages/CarritoPage";

import {
  guardarCarrito,
  obtenerCarrito
} from "./utils/localStorage";


function App() {


  // ==========================================
  // STATE DEL CARRITO
  // ==========================================

  const [carrito, setCarrito] = useState(
    obtenerCarrito()
  );


  // ==========================================
  // GUARDAR CARRITO EN LOCALSTORAGE
  // ==========================================

  useEffect(() => {

    guardarCarrito(carrito);

  }, [carrito]);


  // ==========================================
  // AGREGAR PRODUCTO
  // ==========================================

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


  // ==========================================
  // AUMENTAR CANTIDAD
  // ==========================================

  function aumentarCantidad(id) {

    setCarrito(
      carrito.map(producto =>
        producto.id === id
          ? {
              ...producto,
              cantidad: producto.cantidad + 1
            }
          : producto
      )
    );

  }


  // ==========================================
  // DISMINUIR CANTIDAD
  // ==========================================

  function disminuirCantidad(id) {

    setCarrito(

      carrito
        .map(producto =>
          producto.id === id
            ? {
                ...producto,
                cantidad: producto.cantidad - 1
              }
            : producto
        )
        .filter(producto => producto.cantidad > 0)

    );

  }


  // ==========================================
  // ELIMINAR PRODUCTO
  // ==========================================

  function eliminarDelCarrito(id) {

    setCarrito(
      carrito.filter(
        producto => producto.id !== id
      )
    );

  }


  // ==========================================
  // RENDER
  // ==========================================

  return (

    <BrowserRouter>


      {/* ======================================
          NAVBAR
          ====================================== */}

      <NavbarSuperior
        carrito={carrito}
      />


      {/* ======================================
          RUTAS
          ====================================== */}

      <main className="contenido-principal">

        <Routes>


          {/* ==================================
              INICIO
              ================================== */}

          <Route
            path="/"
            element={
              <Inicio
                agregarAlCarrito={
                  agregarAlCarrito
                }
              />
            }
          />


          {/* ==================================
              CARRITO
              ================================== */}

          <Route
            path="/carrito"
            element={

              <CarritoPage

                carrito={carrito}

                aumentarCantidad={
                  aumentarCantidad
                }

                disminuirCantidad={
                  disminuirCantidad
                }

                eliminarDelCarrito={
                  eliminarDelCarrito
                }

              />

            }
          />
<Route
  path="/login"
  element={<Login />}
/>
<Route
  path="/productos"
  element={
    <Productos
      agregarAlCarrito={agregarAlCarrito}
    />
  }
/>


<Route
  path="/ofertas"
  element={
    <Ofertas
      agregarAlCarrito={agregarAlCarrito}
    />
  }
/>
        </Routes>

      </main>


    </BrowserRouter>

  );

}


export default App;