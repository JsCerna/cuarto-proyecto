import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Container, Spinner, Table } from 'react-bootstrap'
import { db } from '../../Firebase'
import './lista-reservas.css'

export default function ListaReservas(){

const [reservas, setReservas] = useState ([])
const [loadingData, setLoadingData] = useState (true)




useEffect(() => {
    const obtenerReservaciones = async () => {
        const reservasCollectionRef = collection (db, 'Reservas' )
        const querySnapshot = await getDocs (reservasCollectionRef)
        const reservas = querySnapshot.docs.map(
            doc => { return {id:doc.id, ...doc.data()}
            })
            setReservas(reservas)
            setLoadingData(false)
    }
    try {
        obtenerReservaciones()
    } catch (error) {
        setLoadingData(false)
        console.log(error)
    }
}, [])

return (
<Container>
    <p> A continuación, se podrá ver la lista de reservaciones realizadas:
    </p>
   {
    loadingData ? (
        <Spinner animation='border' role={'status'}></Spinner>
    ) :  <Table striped bordered hover variant='dark'>
    <thead>
        <tr>
            <th>Reservado por:</th>
            <th>Cantidad de personas:</th>
            <th>Fecha de Reserva</th>
            <th>Hora de Reserva</th>
        </tr>
    </thead>
    <tbody>
        {
            reservas.length === 0 ?
            <tr>
                <td colSpan={4}>No hay reservaciones</td>
            </tr>
            : reservas.map(reserva => (
                <tr key={reserva.id}>
                    <td>
                    { reserva.name}
                    </td>
                    <td>
                    { reserva.mesa}
                    </td>
                    <td>
                    { reserva.dates}
                    </td>
                    <td>
                    { reserva.time}
                    </td>
                </tr>
            ))
        }
    </tbody>
</Table>
   }
</Container>
)
}