import { Pagination } from 'react-bootstrap'
import React from 'react'
import '../ItemMenu/menuitem.css'


const Menuitem = ({carta}) => {
let active = 1;
let items = [];
const onClick = (e) => {
    console.log(e);
}
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active} onClick={onClick}>
      {number}
    </Pagination.Item>,
  );
}
  return ( 
    <div>
        <Pagination size='lg'>
            {items}
        </Pagination>
    </div>
//   <Pagination.Item>
//      <div key={carta.id} className="drop" style={{color: '#ff0f5b'}}>
//         <div className='content'>
//           <img src={carta.image} alt=".." />
//           <h2 className="">{carta.name} </h2>
//           <p className="">{carta.description} </p>
//           <h3 className="">${carta.price} </h3>
//         </div>
//       </div>
//   </Pagination.Item>
  )
}

export default Menuitem