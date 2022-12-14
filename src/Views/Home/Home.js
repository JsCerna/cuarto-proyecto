import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import '../Home/home.css'


const Home = () => {
  return (
    <section>
      
    <main className='planilla'>
      <h1>Bienvenidos a Jauría Restaurant</h1>
      <p>Gastronomía marítima</p>
      <Container id='carrusel-container1'>
        <Carousel>
          <Carousel.Item>
            <img src="https://i.ibb.co/NWBPmQz/jauria.jpg" className="d-block w-100" alt="..."
              height={ 520 } />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.ibb.co/5n1gdkR/IMG-7048.jpg" className="d-block w-100" alt="..." height={ 520 } />

          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.ibb.co/85dvYfB/IMG-7047.jpg" className="d-block w-100" alt="..." height={ 520 } />
          </Carousel.Item>
        </Carousel>
      </Container>
    </main>
    </section>
  )
}

export default Home