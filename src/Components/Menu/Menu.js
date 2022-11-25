import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { db } from '../Firebase'
import '../Menu/menu.css'
import MenuPaginacion from './Paginacion/Paginacion'

const Menu = () => {
  const [ menu, setMenu ] = useState( [] );

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
      } catch ( error ) {
        console.log( error );
      }
    }

    getMenu()
  }, [] );

  return (
    <Container>
      <h1 className='text-center mt-5 fw-bold'>Menu</h1>
      <MenuPaginacion menu={ menu }>
      </MenuPaginacion>
    </Container>
  )
}

export default Menu