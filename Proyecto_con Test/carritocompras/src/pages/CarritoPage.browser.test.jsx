
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CarritoPage from "./CarritoPage";

const producto = {
  id: 1,
  nombre: "Hamburguesa",
  precio: 5990,
  cantidad: 2,
  emoji: "🍔",
};

function renderCarrito(carrito = [producto]) {
  const aumentarCantidad = vi.fn();
  const disminuirCantidad = vi.fn();
  const eliminarDelCarrito = vi.fn();

  render(
    <CarritoPage
      carrito={carrito}
      aumentarCantidad={aumentarCantidad}
      disminuirCantidad={disminuirCantidad}
      eliminarDelCarrito={eliminarDelCarrito}
    />
  );

  return {
    aumentarCantidad,
    disminuirCantidad,
    eliminarDelCarrito,
  };
}

describe("Carrito", () => {
  it("PF-10: muestra los productos agregados", () => {
    renderCarrito();

    expect(screen.getByText(/hamburguesa/i)).toBeInTheDocument();
  });

  it("PF-11: permite aumentar la cantidad", async () => {
    const user = userEvent.setup();
    const { aumentarCantidad } = renderCarrito();

    await user.click(
      screen.getByRole("button", { name: /aumentar cantidad/i })
    );

    expect(aumentarCantidad).toHaveBeenCalled();
  });

  it("PF-12: permite disminuir la cantidad", async () => {
    const user = userEvent.setup();
    const { disminuirCantidad } = renderCarrito();

    await user.click(
      screen.getByRole("button", { name: /disminuir cantidad/i })
    );

    expect(disminuirCantidad).toHaveBeenCalled();
  });

  it("PF-13: permite eliminar un producto", async () => {
    const user = userEvent.setup();
    const { eliminarDelCarrito } = renderCarrito();

    await user.click(
      screen.getByRole("button", { name: /eliminar/i })
    );

    expect(eliminarDelCarrito).toHaveBeenCalled();
  });

  it("PF-14: calcula el total del carrito", () => {
    renderCarrito();

    // Dos hamburguesas a $5.990 = $11.980.
    expect(screen.getByText(/11\.980|11980/)).toBeInTheDocument();
  });

  it("PF-15: muestra el estado vacío", () => {
    renderCarrito([]);

    // Ajusta el mensaje a lo que muestre realmente tu interfaz.
    expect(screen.getByText(/carrito vacío/i)).toBeInTheDocument();
  });
});
