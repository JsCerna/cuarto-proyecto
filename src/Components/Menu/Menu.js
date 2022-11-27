import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { db } from '../Firebase'
import '../Menu/menu.css'
import MenuPaginacion from './Paginacion/Paginacion'


const Menu = () => {
  const [ menu, setMenu ] = useState( [] );
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const getMenu = async () => {
      try {
        const colRef = collection( db, 'Menu' );
        const snapshots = await getDocs( colRef )

        const docs = snapshots.docs.map( ( doc ) => {
          const data = doc.data()
          data.id = doc.id
          return data;
        } )
        setMenu( docs )
        setLoading(false)
      } catch ( error ) {
        console.log( error );
        setLoading(false)
      }
    }

    getMenu()
  }, [] );

  return (
    <main>

      <Container>
      <h1 className='text-center mt-5 fw-bold'>Menú</h1>
      { loading ? (<Spinner animation="border" role="status" variant="light"></Spinner>) : 
      (<MenuPaginacion menu={ menu }>
      </MenuPaginacion>) }
    </Container>
    <div>
    <p>el</p>
    <p>footer</p>
    <p>no</p>
    <p>quiere</p>
    <p>bajar</p>
    </div>
    </main>
  )
}

export default Menu