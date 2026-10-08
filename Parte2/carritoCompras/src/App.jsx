import { useState, useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Ofertas from "./pages/Ofertas";
import CarritoPage from "./pages/CarritoPage";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import NavbarSuperior from "./components/NavbarSuperior";

import {
  guardarCarrito,
  obtenerCarrito
} from "./utils/localStorage";


function App() {

  // ==========================================
  // STATE DEL CARRITO
  // ==========================================

const carritoInicial = obtenerCarrito();

console.log(
  "Carrito recuperado desde localStorage:",
  carritoInicial
);

const [carrito, setCarrito] = useState(
  carritoInicial
);


  // ==========================================
  // GUARDAR CARRITO EN LOCALSTORAGE
  // ==========================================

  useEffect(() => {
  console.log(
    " Guardando carrito en localStorage:",
    carrito
  );
    console.log(
    " Formato JSON:",
    JSON.stringify(carrito)
  );
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

      console.log(
        "Cantidad anterior:",
        productoExiste.cantidad
      );

      console.log(
        "Cantidad nueva:",
        productoExiste.cantidad + 1
      );

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

    const productoEliminado = carrito.find(
      producto => producto.id === id
    );

    console.log(
      "Producto encontrado:",
      productoEliminado
    );

    const nuevoCarrito = carrito.filter(
      producto => producto.id !== id
    );

    setCarrito(nuevoCarrito);
  }


  // ==========================================
  // RUTAS
  // ==========================================

  return (

    <BrowserRouter>

      <NavbarSuperior />

      <Routes>

        {/* INICIO */}

        <Route
          path="/"
          element={
            <Inicio />
          }
        />


        {/* PRODUCTOS */}

        <Route
          path="/productos"
          element={
    <ProtectedRoute>
      <Productos
        agregarAlCarrito={agregarAlCarrito}
      />
    </ProtectedRoute>
  }
        />


        {/* OFERTAS */}

        <Route
          path="/ofertas"
          element={
    <ProtectedRoute>
      <Ofertas />
    </ProtectedRoute>
  }
        />


        {/* CARRITO */}

        <Route
          path="/carrito"
          element={
    <ProtectedRoute>
      <CarritoPage
        carrito={carrito}
        aumentarCantidad={aumentarCantidad}
        disminuirCantidad={disminuirCantidad}
        eliminarDelCarrito={eliminarDelCarrito}
      />
    </ProtectedRoute>
  }
        />


        {/* LOGIN */}

        <Route
          path="/login"
          element={
            <Login />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;