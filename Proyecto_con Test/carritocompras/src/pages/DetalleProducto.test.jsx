import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./DetalleProducto";

describe("DetalleProducto", () => {
  it("muestra la Pizza cuando recibe el ID 2", () => {
    render(
      <MemoryRouter initialEntries={["/productos/2"]}>
        <Routes>
          <Route
            path="/productos/:id"
            element={<DetalleProducto />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /Pizza/ })
    ).toBeInTheDocument();

    expect(
      screen.getByText("ID recibido desde la URL: 2")
    ).toBeInTheDocument();
  });
});
