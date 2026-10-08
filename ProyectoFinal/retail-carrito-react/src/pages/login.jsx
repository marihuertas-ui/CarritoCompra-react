import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  function iniciarSesion(e) {

    e.preventDefault();


    // Login básico para nuestro ejercicio
    if (
      usuario === "mario" &&
      password === "1234"
    ) {

      // Guardamos solamente el usuario
      sessionStorage.setItem(
        "usuario",
        usuario
      );

      // Vamos al carrito
      navigate("/carrito");

    } else {

      alert(
        "Usuario o contraseña incorrectos"
      );

    }

  }


  return (

    <div className="login-container">

      <div className="login-card">

        <h2>
          👤 Iniciar sesión
        </h2>


        <form onSubmit={iniciarSesion}>

          {/* USUARIO */}

          <div className="mb-3">

            <label>
              Usuario
            </label>

            <input
              type="text"
              className="form-control"
              value={usuario}
              onChange={(e) =>
                setUsuario(e.target.value)
              }
              placeholder="Ingresa tu usuario"
            />

          </div>


          {/* CONTRASEÑA */}

          <div className="mb-3">

            <label>
              Contraseña
            </label>

            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Ingresa tu contraseña"
            />

          </div>


          <button
            type="submit"
            className="btn btn-danger w-100"
          >
            Ingresar
          </button>

        </form>


        <p className="mt-3 text-muted">
          Usuario: <strong>mario</strong>
          <br />
          Contraseña: <strong>1234</strong>
        </p>

      </div>

    </div>

  );

}

export default Login;