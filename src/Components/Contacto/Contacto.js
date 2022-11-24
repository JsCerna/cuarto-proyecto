import React from 'react'
import Button from '@mui/material/Button';
import {Instagram, Send} from '@mui/icons-material'
import { addDoc, collection } from "firebase/firestore";
import { useState } from 'react';
import { db } from '../Firebase';



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
        try {
            const docRef = await addDoc(collection(db, "Contactos"), formValues);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
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
      <h1>¡Contactanos!</h1>
      <h3>Puedes contactarnos a traves de este formulario
        o en nuestras redes sociales.
      </h3>
      <form onSubmit={handleSubmit}>
                    <p><label htmlFor='name'>Nombre</label>
                    <input id='name' name='name' type="text" value={formValues.name} onChange={handleFormChange} ></input>
</p>
                    <p><label htmlFor='surname'>Apellido</label>
                    <input id='surname' name='surname' type="text" value={formValues.surname} onChange={handleFormChange}></input>
</p>
                    <p><label htmlFor='email'>Correo</label>
                    <input id='email' name='email' type="email" value={formValues.email} onChange={handleFormChange}></input>
</p>
                    <p><label htmlFor='contactReason'>Motivo</label>
                    <textarea id='contactReason' name='contactReason' value={formValues.contactReason} onChange={handleFormChange}></textarea>
</p>
                    <button type='submit'>Enviar</button>
                    </form>
          
    <Button variant="contained" endIcon={<Send />}>
    Send
    </Button>
    <section>
      <h1>Redes Sociales</h1>
      
    </section>
    </main>
  )
}

