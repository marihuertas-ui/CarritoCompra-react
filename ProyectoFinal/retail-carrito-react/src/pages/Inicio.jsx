import BannerComida from "../components/BannerComida";
import ListaProductos from "../components/ListaProductos";
import { Link } from "react-router-dom";


function Inicio({ agregarAlCarrito }) {

  const usuario =
    sessionStorage.getItem("usuario");


  return (

    <div>

      {/* BANNER */}

      <BannerComida />


      {!usuario ? (

        /* ==============================
           USUARIO NO LOGUEADO
           ============================== */

        <div className="text-center mt-4">

          <h2>
            🍔 Bienvenido a Food React
          </h2>

          <p>
            Inicia sesión para acceder
            a nuestros productos.
          </p>

          <Link
            to="/login"
            className="btn btn-danger"
          >
            🔐 Iniciar sesión
          </Link>

        </div>

      ) : (

        /* ==============================
           USUARIO LOGUEADO
           ============================== */

        <div>

          <h2 className="productos-titulo">
            🍔 Nuestros productos
          </h2>

          <ListaProductos
            agregarAlCarrito={
              agregarAlCarrito
            }
          />

        </div>

      )}

    </div>

  );

}


export default Inicio;