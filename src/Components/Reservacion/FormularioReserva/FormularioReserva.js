
import React from 'react'
import './formulario-reserva.css'
import Button from '@mui/material/Button';
import { Send } from '@mui/icons-material'
import { addDoc, collection } from "firebase/firestore";
import { useState } from 'react';

import swal from 'sweetalert';
import { db } from '../../Firebase';


export default function FormularioReserva() {

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        celular: "",
        mesa: "",
        dates: "",
        time: ""
    })

    async function handleSubmit(event) {
        event.preventDefault()
        console.log(formValues)

        if (formValues.name === "" || formValues.email === "" || formValues.celular === "" || formValues.mesa === "" || formValues.dates === "" || formValues.time === "") {
            swal('Faltan datos', 'Debes llenar todos los campos')
        } else {
            try {
                const docRef = await addDoc(collection(db, "Reservas"), formValues);
                swal('Enviada', 'Tu reserva ha sido enviada')
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('celular').value = "";
                document.getElementById('mesa').value = "";
                document.getElementById('dates').value = "";
                document.getElementById('time').value = ""

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
            <h1>¡Reserva!</h1>
            <h3>Puedes hacer una reservación a través de este formulario.
            </h3>
            <form onSubmit={handleSubmit}>
                <p><label htmlFor='name'>Nombre</label>
                    <input id='name' name='name' type="text" value={formValues.name} onChange={handleFormChange} ></input>
                </p>
                <p><label htmlFor='email'>Correo</label>
                    <input id='email' name='email' type="email" value={formValues.email} onChange={handleFormChange}></input>
                </p>
                <p><label htmlFor='celular'>Celular</label>
                    <input id='celular' name='celular' type="text" value={formValues.celular} onChange={handleFormChange}></input>
                </p>
                <p><label htmlFor='mesa'>Nº de personas</label>
                    <input id='mesa' name='mesa' type="text" value={formValues.mesa} onChange={handleFormChange}></input>
                </p>
                <p><label htmlFor='dates'>Fecha de reserva</label>
                    <input id='dates' name='dates' type="date" min='2022-11-01' max='2025-12-31' value={formValues.dates} onChange={handleFormChange}></input>
                </p>
                <p><label htmlFor='time'>Hora de reserva</label>
                    <input id='time' name='time' type="time" min='08:00' max='22:00' value={formValues.time} onChange={handleFormChange}></input>
                </p>

                <Button type='submit' variant="contained" endIcon={<Send />}>
                    Reservar
                </Button>
            </form>

        </main>
    )
}
