
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Producto({ producto , agregarAlCarrito  }) 
{
  console.log("Producto recibido:", producto);

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
          onClick={() =>
            agregarAlCarrito(producto)
          }
        >
          Agregar al carrito
        </Button>

      </Card.Body>
    </Card>
  );
}

export default Producto;

//parte 1
//function Producto({ nombre, precio, emoji }) {
/*
function Producto(props) {
  console.log("Datos recibidos:", props.producto);

  return (
    <div>
      <h3>
        {props.producto.emoji} {props.producto.nombre}
      </h3>

      <p>Precio: ${props.producto.precio}</p>
    </div>
  );
}

export default Producto;
*/