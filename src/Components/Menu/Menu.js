import React from 'react'
import { db } from '../Firebase'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import '../Menu/menu.css'

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() =>{
    const getMenu = async() => {
      try{
        const colRef = collection(db, 'Menu');
        const snapshots = await getDocs(colRef)
        
        const docs = snapshots.docs.map((doc) => {
          const data = doc.data()
          data.id = doc.id
          return data;
        })
        setMenu(docs)
      }catch(error){
        console.log(error);
      }
    }

    getMenu()
  }, []);

  return (
    <div className='container'>
     <h1 className='text-center mt-5 fw-bold'>Menu</h1>
     <div className='container2'>
    {
    menu.map(carta => (
      <div key={carta.id} className="drop" style={{color: '#ff0f5b'}}>
        <div className='content'>
          <img src={carta.image} alt=".." />
          <h2 className="">{carta.name} </h2>
          <p className="">{carta.description} </p>
          <h3 className="">${carta.price} </h3>
        </div>
  
      </div>
  ))}
  </div>
  </div>
  )
}

export default Menu