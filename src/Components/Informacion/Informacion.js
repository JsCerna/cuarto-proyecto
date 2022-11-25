import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './informacion.css';

const Informacion = () => {

  return (
    <main className='planilla'>
      <h1>Jauria Restaurant</h1>
      <h2>Desde 2019</h2>
      <p>El objetivo principal que dio pie para generar este emprendimiento fue la idea de brindar una alternativa gastronómica diferente,
        en un lugar donde no existia ningun restaurant, con el objetivos de
        enlazar y fortalecer la unión familiar en estos nobles espacios de compartir y departir con los más cercanos amigos.
      </p>
      <p> Vision : Ser un restaurant modelo en servicio gastronómico y turístico a nivel nacional, creando conciencia en la conservación de la identidad cultural,
        equidad social y ecoeficiencia, utilizando nuevas tecnologías ecológicas que permitan un crecimiento económico sostenible
      </p>
      <p>
        Mision : Ser un establecimiento que ofrezca servicios de calidad, donde satisfaga las necesidades de los clientes en forma rápida, eficiente y creativa.
      </p>
      <Container id='carrusel-container'>
        <Carousel>
          <Carousel.Item>
            <img src="https://i.ibb.co/LnPR2Nr/IMG-7049.jpg" className="d-block w-100" alt="..."
              height={ 400 } />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.ibb.co/sV48RV5/IMG-7046.jpg" className="d-block w-100" alt="..." height={ 400 } />

          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.ibb.co/jMVm88J/IMG-6902.jpg" className="d-block w-100" alt="..." height={ 400 } />
          </Carousel.Item>
        </Carousel>

      </Container>

    </main>
  )
}

export default Informacion