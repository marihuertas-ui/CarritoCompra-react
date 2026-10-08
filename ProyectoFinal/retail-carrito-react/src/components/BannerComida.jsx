import Carousel from "react-bootstrap/Carousel";
// Importamos las imágenes
import completo from "../images/completo.jpg";
import hamburguesa from "../images/hamburguesa.jpg";
import pizza from "../images/pizza.jpg";
function BannerComida() {

  return (

    <Carousel
      interval={2000}
      controls={true}
      indicators={true}
      pause="hover"
    >

      {/* COMPLETO */}
      <Carousel.Item>

        <img
         className="banner-imagen" 
         src={completo}
          alt="Completo"
        />

        <Carousel.Caption>

          <h2>
                      </h2>

          <p>
            Completos recién preparados
          </p>

          <h3>
            Desde $3.990
          </h3>

        </Carousel.Caption>

      </Carousel.Item>


      {/* HAMBURGUESA */}
      <Carousel.Item>

        <img
         className="banner-imagen"
          src={hamburguesa}
          alt="Hamburguesa"
        />

        <Carousel.Caption>

          <h2>
            🍔 Hamburguesas
          </h2>

          <p>
            Sabor, calidad y mucho queso
          </p>

          <h3>
            Desde $5.990
          </h3>

        </Carousel.Caption>

      </Carousel.Item>


      {/* PIZZA */}
      <Carousel.Item>

        <img
          className="banner-imagen"
           src={pizza}
          alt="Pizza"
        />

        <Carousel.Caption>

          <h2>
            🍕 Pizza para compartir
          </h2>

          <p>
            Ideal para disfrutar con amigos
          </p>

          <h3>
            Desde $7.990
          </h3>

        </Carousel.Caption>

      </Carousel.Item>

    </Carousel>

  );
}

export default BannerComida;

