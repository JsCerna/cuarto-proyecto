import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; // Importa addDoc y collection para Firebase 9+
import { db } from '../../Firebase';
import './formulario-reserva.css'


const FormularioReserva = () => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [email, setEmail] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto de reserva con los datos del formulario
    const nuevaReserva = {
      nombre: nombre,
      fecha: new Date(fecha), // Convertir la fecha en un objeto Date
      email: email,
    };

    try {
      // Agregar la nueva reserva a Firestore en la colección 'DB'
      await addDoc(collection(db, 'DB'), nuevaReserva);
      console.log('Reserva agregada');
      setNombre('');
      setFecha('');
      setEmail('');
    } catch (error) {
      console.error('Error al agregar la reserva: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label>Fecha:</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Agregar Reserva</button>
    </form>
  );
};

export default FormularioReserva;

