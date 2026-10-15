export function guardarCarrito(carrito) {

  localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
  );

}

export function obtenerCarrito() {

  const carritoGuardado =
    localStorage.getItem("carrito");

  if (carritoGuardado) {
    return JSON.parse(carritoGuardado);
  }

  return [];
}
