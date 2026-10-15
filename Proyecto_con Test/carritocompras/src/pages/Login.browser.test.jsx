
import {
  describe,
  it,
  expect,
  beforeEach,
} from "vitest";

import {
  render,
  screen,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./Login";

function renderLogin() {
  return render(
    <MemoryRouter initialEntries={["/login"]}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<h1>Página principal</h1>}
        />
      </Routes>
    </MemoryRouter>
  );
}

describe("Login en navegador real", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  // PF-01: mostrar formulario (tu prueba actual)
  it("PF-01: muestra los campos y el botón de ingreso", () => {
    renderLogin();

    expect(screen.getByLabelText("Usuario")).toBeInTheDocument();
    expect(screen.getByLabelText("Contraseña")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Ingresar" })
    ).toBeInTheDocument();
  });

  // PF-02: permitir escribir credenciales
  it("PF-02: permite ingresar usuario y contraseña", async () => {
    const user = userEvent.setup();
    renderLogin();

    await user.type(screen.getByLabelText("Usuario"), "mario");
    await user.type(screen.getByLabelText("Contraseña"), "1234");

    expect(screen.getByLabelText("Usuario")).toHaveValue("mario");
    expect(screen.getByLabelText("Contraseña")).toHaveValue("1234");
  });

  // PF-03: iniciar sesión con credenciales correctas
  it("PF-03: inicia sesión con credenciales válidas", async () => {
    const user = userEvent.setup();
    renderLogin();

    await user.type(screen.getByLabelText("Usuario"), "mario");
    await user.type(screen.getByLabelText("Contraseña"), "1234");

    await user.click(
      screen.getByRole("button", { name: "Ingresar" })
    );

    expect(sessionStorage.getItem("usuario")).toBe("mario");
  });

  // PF-04: rechazar credenciales incorrectas
  it("PF-04: rechaza credenciales incorrectas", async () => {
    const user = userEvent.setup();
    renderLogin();

    await user.type(screen.getByLabelText("Usuario"), "mario");
    await user.type(screen.getByLabelText("Contraseña"), "incorrecta");

    await user.click(
      screen.getByRole("button", { name: "Ingresar" })
    );

    expect(sessionStorage.getItem("usuario")).toBeNull();

    expect(
      screen.queryByRole("heading", { name: "Página principal" })
    ).not.toBeInTheDocument();
  });

  // PF-05: guardar la sesión
  it("PF-05: almacena el usuario en sessionStorage", async () => {
    const user = userEvent.setup();
    renderLogin();

    await user.type(screen.getByLabelText("Usuario"), "mario");
    await user.type(screen.getByLabelText("Contraseña"), "1234");

    await user.click(
      screen.getByRole("button", { name: "Ingresar" })
    );

    expect(sessionStorage.getItem("usuario")).toEqual("mario");
  });

  // PF-06: navegar a Inicio
  it("PF-06: navega a la página principal después del login", async () => {
    const user = userEvent.setup();
    renderLogin();

    await user.type(screen.getByLabelText("Usuario"), "mario");
    await user.type(screen.getByLabelText("Contraseña"), "1234");

    await user.click(
      screen.getByRole("button", { name: "Ingresar" })
    );

    expect(
      await screen.findByRole("heading", { name: "Página principal" })
    ).toBeInTheDocument();
  });
});
