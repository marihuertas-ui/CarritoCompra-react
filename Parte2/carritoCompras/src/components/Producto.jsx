
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Producto({ producto , agregarAlCarrito  }) {
 // console.log("Producto recibido:", producto);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>

        <Card.Title>
          {producto.emoji} {producto.nombre}
        </Card.Title>

        <Card.Text>
          ${producto.precio}
        </Card.Text>

      <Button
  onClick={() => agregarAlCarrito(producto)}
>
  Agregar al carrito
</Button>

      </Card.Body>
    </Card>
  );
}

export default Producto;


/*function Producto({ nombre, precio, emoji }) {
//unction Producto(props) {
 // console.log(props);
  console.log("Nombre:", nombre);
  console.log("Precio:", precio);
  console.log("Emoji:", emoji);

  return (
    <div>
      <h3>{emoji} {nombre}</h3>
      <p>Precio: ${precio}</p>
    </div>
  );
}

export default Producto;*/