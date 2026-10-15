import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Producto from "../components/Producto";

describe("Componente Producto", () => {
  it("muestra el producto y su precio", () => {
    const producto = {
      id: 2,
      nombre: "Pizza",
      precio: 7990,
      emoji: "🍕"
    };

    render(
      <Producto
        producto={producto}
        agregarAlCarrito={vi.fn()}
      />
    );

    expect(screen.getByText(/Pizza/)).toBeInTheDocument();
    expect(screen.getByText(/7990/)).toBeInTheDocument();
  });

  it("llama a agregarAlCarrito al hacer clic", async () => {
    const usuario = userEvent.setup();
    const producto = {
      id: 2,
      nombre: "Pizza",
      precio: 7990,
      emoji: "🍕"
    };
    const agregarAlCarrito = vi.fn();

    render(
      <Producto
        producto={producto}
        agregarAlCarrito={agregarAlCarrito}
      />
    );

    await usuario.click(
      screen.getByRole("button", {
        name: /Agregar al carrito/
      })
    );

    expect(agregarAlCarrito).toHaveBeenCalledWith(producto);
  });
});
