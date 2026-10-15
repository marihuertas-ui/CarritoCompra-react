import productos from "../data/productos";
import Producto from "./Producto"; 


function ListaProductos( {agregarAlCarrito}) 
{ return ( 
<div> { productos.map(item => (

   <Producto
          key={item.id}
          producto={item}
          agregarAlCarrito={agregarAlCarrito}
        /> 
         ))}
      </div>
    ); 
} 

export default ListaProductos;