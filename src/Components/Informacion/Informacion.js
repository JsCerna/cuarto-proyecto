import React from 'react'
// import spot from '../assets/img/spot.jpg'

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
      <div className='foto2'>
      {/* <img src={spot}  /> */}
      </div>
    </main>
  )
}

export default Informacion