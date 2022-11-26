import { Pagination } from '@mui/material';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemMenu from './ItemMenu/ItemMenu';
import './paginacion.css';

  const MenuPaginacion = ( { menu } ) => {
  const [ paginaActiva, setPaginaActiva ] = useState( 1 )
  const [ platosPorPagina ] = useState( 3 );
  const [ items, setItems ] = useState( menu.slice( 0, paginaActiva * platosPorPagina ) )
  const cantidadItems = menu.length
  const paginas = Math.ceil( cantidadItems / platosPorPagina )
  const handleChange = ( _, value ) => {
    console.log( `🚀 ~ value`, value );
    const ultimoItem = value * platosPorPagina;
    const primerItem = ultimoItem - platosPorPagina;
    setPaginaActiva( value );
    setItems( menu.slice( primerItem, ultimoItem ) )
  };

  return (
    <Container>
      <Pagination id='pagination' key={ 1 } count={ paginas } page={ paginaActiva } onChange={ handleChange } />
      <Container id="container-items">
        {
          items.map( ( plato ) => (
            <ItemMenu key={ plato.id } plato={ plato }>
            </ItemMenu>
          ) )
        }
      </Container>
    </Container>
  )
}

export default MenuPaginacion