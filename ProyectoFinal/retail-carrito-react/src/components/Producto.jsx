import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Producto({ producto, agregarAlCarrito }) {

  return (
    <Card className="producto-card">

      <Card.Body>

        <Card.Title>
          {producto.emoji} {producto.nombre}
        </Card.Title>

        <Card.Text>
          ${producto.precio}
        </Card.Text>

        <Button
          variant="danger"
          onClick={() => agregarAlCarrito(producto)}
        >
          Agregar al carrito
        </Button>

      </Card.Body>

    </Card>
  );
}

export default Producto;