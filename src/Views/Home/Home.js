import React from 'react'
import '../Home/home.css'


const Home = () => {
  return (
    <main className='planilla'>
      <h1>Bienvenidos a Jauria Restaurant</h1>
      <p>Gastronomía marítima</p>
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/NWBPmQz/jauria.jpg" className="d-block image" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/5n1gdkR/IMG-7048.jpg" className="d-block image" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/85dvYfB/IMG-7047.jpg" className="d-block image" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </main>
  )
}

export default Home