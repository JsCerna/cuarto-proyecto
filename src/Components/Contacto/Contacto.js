import React from 'react'
import Button from '@mui/material/Button';
import {Instagram, Send} from '@mui/icons-material'

const Contacto = () => {
  return (
    <main className='planilla'>
      <h1>¡Contactanos!</h1>
      <h3>Puedes contactarnos a traves de este formulario
        o en nuestras redes sociales.
      </h3>
    <input type="text" id="nombre"  placeholder="Nombre" />
    <input type="text" id="apellido"  placeholder="Apellido" />
    <input type="text" id="correo"  placeholder="Ejemplo@gmail.com" />
    <Button variant="contained" endIcon={<Send />}>
    Send
    </Button>
    <section>
      <h1>Redes Sociales</h1>
      
    </section>
    </main>
  )
}

export default Contacto