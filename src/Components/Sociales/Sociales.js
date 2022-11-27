import React from 'react'
import '../Sociales/sociales.css'
import { Carousel, Container } from 'react-bootstrap';

const Sociales = () => {
  return (
    <section>  

    <article className='planilla'>
        <h1>Jauría Lovers</h1>
        <Container id='carrusel-container'>
        <Carousel>
          <Carousel.Item>
            <img src="https://i.ibb.co/Rj1Cxhx/IMG-7029.jpg" className="d-block w-100" alt="..."
              height={ 370 } />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.ibb.co/Q6sjLhp/IMG-7031.jpg" className="d-block w-100" alt="..." height={ 370 } />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.ibb.co/PY8X615/IMG-7030.jpg" className="d-block w-100" alt="..." height={ 370 } />
          </Carousel.Item>
        </Carousel>
      </Container>
      </article>

      <article className='planilla'>
      <Container id='carrusel-container'>
        <Carousel>
          <Carousel.Item>
            <img src="https://i.ibb.co/QNhBhvk/IMG-7034.jpg" className="d-block w-100" alt="..."
              height={ 370 } />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.ibb.co/0y36Yk6/IMG-7044.jpg" className="d-block w-100" alt="..." height={ 370 } />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.ibb.co/9cbPVFq/IMG-7084-1.jpg" className="d-block w-100" alt="..." height={ 370 } />
          </Carousel.Item>
        </Carousel>
      </Container>
      </article>

    </section>
  )
}

export default Sociales 

//  <div className='socialpick'>
//         <img src="https://i.ibb.co/Rj1Cxhx/IMG-7029.jpg" className="d-block w-100" alt="..." height={ 450 } />
//         <img src="https://i.ibb.co/Q6sjLhp/IMG-7031.jpg" className="d-block w-100" alt="..." height={ 450 } />
//         <img src="https://i.ibb.co/PY8X615/IMG-7030.jpg" className="d-block w-100" alt="..." height={ 450 } />
//         <img src="https://i.ibb.co/QNhBhvk/IMG-7034.jpg" className="d-block w-100" alt="..." height={ 450 } />
//         <img src="https://i.ibb.co/0y36Yk6/IMG-7044.jpg" className="d-block w-100" alt="..." height={ 450 } />
//         </div>