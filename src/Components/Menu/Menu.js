import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { db } from '../Firebase';
import '../Menu/menu.css';
import MenuPaginacion from './Paginacion/Paginacion';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMenu = async () => {
      setLoading(true);
      try {
        const colRef = collection(db, 'Menu');
        const snapshots = await getDocs(colRef);

        const docs = snapshots.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setMenu(docs);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      } finally {
        setLoading(false);
      }
    };

    getMenu();
  }, []);

  return (
    <main>
      <Container>
        <h1 className="text-center mt-5 fw-bold">Menú</h1>
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: '50vh' }}
          >
            <Spinner animation="border" role="status" variant="light" aria-label="Cargando menú"></Spinner>
          </div>
        ) : menu.length === 0 ? (
          <p className="text-center">No hay elementos en el menú por ahora.</p>
        ) : (
          <MenuPaginacion menu={menu} />
        )}
      </Container>
      <footer className="mt-5 text-center">
        <p>Este es el footer de la página.</p>
      </footer>
    </main>
  );
};

export default Menu;
