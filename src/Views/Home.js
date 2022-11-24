import React from 'react'
import jauria from '../assets/img/jauria.jpeg'

const Home = () => {
  return (
    <main className='planilla'>
      <h1>Bienvenidos al restaurant Jauria</h1>
      <div className='foto'> 
      <img src={jauria} />
      </div>
    </main>
  )
}

export default Home