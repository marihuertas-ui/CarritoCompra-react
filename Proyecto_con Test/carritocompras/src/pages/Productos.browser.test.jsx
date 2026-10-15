
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Productos from "./Productos";

describe("Productos", () => {
  it("PF-07: muestra el catálogo", () => {
    render(<Productos agregarAlCarrito={vi.fn()} />);

    expect(screen.getByText(/hamburguesa/i)).toBeInTheDocument();
    expect(screen.getByText(/pizza/i)).toBeInTheDocument();
  });

  it("PF-08: muestra el precio de un producto", () => {
    render(<Productos agregarAlCarrito={vi.fn()} />);

    // Ajusta este selector al formato real del precio.
    expect(screen.getByText(/5990|5\.990/)).toBeInTheDocument();
  });

  it("PF-09: agrega un producto al carrito", async () => {
    const user = userEvent.setup();
    const agregarAlCarrito = vi.fn();

    render(<Productos agregarAlCarrito={agregarAlCarrito} />);

    const botones = screen.getAllByRole("button", {
      name: /agregar al carrito/i,
    });

    await user.click(botones[0]);

    expect(agregarAlCarrito).toHaveBeenCalledTimes(1);
  });
});
