import React from 'react'
import '../Informacion/informacion.css'

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
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.ibb.co/LnPR2Nr/IMG-7049.jpg" class="d-block w-20" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/sV48RV5/IMG-7046.jpg" class="d-block w-20" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/jMVm88J/IMG-6902.jpg" class="d-block w-20" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </main>
  )
}

export default Informacion