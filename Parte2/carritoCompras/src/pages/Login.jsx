import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function iniciarSesion() {

    const USUARIO_CORRECTO = "mario";
    const PASSWORD_CORRECTO = "1234";   
    console.log("Usuario:", usuario);
    console.log("Password:", password);

  if (
    usuario === USUARIO_CORRECTO &&
    password === PASSWORD_CORRECTO
  ) {

    console.log(" Login correcto");

    sessionStorage.setItem(
      "usuario",
      usuario
    );
    navigate("/");
    
    console.log("Usuario de sesión:", usuario);
    } else {

    console.log("Usuario o contraseña incorrectos");

  }

}



  

  return (
    <div className="container mt-4">

      <h1> Iniciar sesión</h1>

      <div className="mb-3">

        <label>Usuario</label>

        <input
          type="text"
          className="form-control"
          value={usuario}
          onChange={(e) =>
            setUsuario(e.target.value)
          }
        />

      </div>

      <div className="mb-3">

        <label>Contraseña</label>

        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

      </div>

      <button
        className="btn btn-primary"
        onClick={iniciarSesion}
      >
        Ingresar
      </button>

    </div>
  );
}

export default Login;