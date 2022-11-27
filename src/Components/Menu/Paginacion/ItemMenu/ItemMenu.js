import React from 'react'
import './item-menu.css'


const ItemMenu = ( { plato } ) => {
  return (
    <div className="drop" style={ { color: '#ff0f5b' } }>
      <div className='content'>
        <img src={ plato.image } alt=".." />
        <h2 className="">{ plato.name } </h2>
        <p className="">{ plato.description } </p>
        <h3 className="">${ plato.price } </h3>
      </div>
    </div>
  )
}

export default ItemMenu