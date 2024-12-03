import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'; // Importa getDocs y collection para Firebase 9+
import './lista-reservas.css'
import { db } from '../../Firebase';

const ListaReservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        // Obtén las reservas desde Firestore
        const querySnapshot = await getDocs(collection(db, 'DB'));
        const reservasData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            nombre: data.nombre,
            fecha: data.fecha.toDate().toLocaleString(),  // Convierte el timestamp
            email: data.email
          };
        });
        setReservas(reservasData);
      } catch (error) {
        console.error("Error al obtener las reservas: ", error);
      }
    };

    fetchReservas();
  }, []);

  return (
    <div>
      <h2>Lista de Reservas</h2>
      <ul>
        {reservas.map((reserva) => (
          <li key={reserva.id}>
            {reserva.nombre} - {reserva.fecha} - {reserva.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaReservas;
