import React from 'react'
import './contacto.css'
import Button from '@mui/material/Button';
import { Send } from '@mui/icons-material'
import { addDoc, collection } from "firebase/firestore";
import { useState } from 'react';
import { db } from '../Firebase';
import InstagramIcon from '@mui/icons-material/Instagram';
import { pink } from '@mui/material/colors';
import swal from 'sweetalert';



export default function Contacto() {

  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    email: "",
    celular: "",
    contactReason: ""
  })

   async function handleSubmit(event) {
    event.preventDefault()
    console.log(formValues)

    if (formValues.name === "" || formValues.surname === "" || formValues.email === "" || formValues.celular === "" || formValues.contactReason === "") {
      swal('Faltan datos', 'Debes llenar todos los campos')
    } else {
      try {
        const docRef = await addDoc(collection(db, "Contactos"), formValues);
        swal('Enviado', 'Tu mensaje ha sido enviado');
        document.getElementById('name').value= "";
        document.getElementById('surname').value= "";
        document.getElementById('email').value= "";
        document.getElementById('celular').value= "";
        document.getElementById('contactReason').value= "";


      } catch (e) {
        console.error("Error adding document: ", e);

      }
      
    }

  }

  function handleFormChange(event) {
    const { target } = event
    const { name, value } = target
    const newValues = { ...formValues, [name]: value }
    setFormValues(newValues)

  }



  return (
    <main className='planilla'>
      <h1>¡Contáctanos!</h1>
      <h3>Puedes contactarnos a través de este formulario
        o en nuestras redes sociales.
      </h3>
      <form id="formu" onSubmit={handleSubmit}>
        <p><label htmlFor='name'>Nombre : </label>
          <input id='name' name='name' type="text" value={formValues.name} onChange={handleFormChange} ></input>
        </p>
        <p><label htmlFor='surname'>Apellido : </label>
          <input id='surname' name='surname' type="text" value={formValues.surname} onChange={handleFormChange}></input>
        </p>
        <p><label htmlFor='email'>Correo : </label>
          <input id='email' name='email' type="email" value={formValues.email} onChange={handleFormChange}></input>
        </p>
        <p><label htmlFor='celular'>Celular : </label>
          <input id='celular' name='celular' type="text" value={formValues.celular} onChange={handleFormChange}></input>
        </p>
        <p><label htmlFor='contactReason'>Motivo : </label>
          <textarea id='contactReason' name='contactReason' value={formValues.contactReason} onChange={handleFormChange}></textarea>
        </p>



        <Button type='submit' variant="contained" endIcon={<Send />}>
          Enviar
        </Button>
      </form>
      <section>
        <h1>Redes Sociales</h1>
        <p><InstagramIcon fontSize="small" sx={{ color: pink[500] }} /> instagram.com/jauria.maguillines</p>
      </section>
    </main>
  )
}

