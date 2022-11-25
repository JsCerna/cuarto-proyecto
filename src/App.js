import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './Components/Contacto/Contacto';
import Informacion from './Components/Informacion/Informacion';
import Layout from './Components/Layout';
import Menu from './Components/Menu/Menu';
import Navbar from './Components/Navbar';
import Reserva from './Components/Reservas/Reserva';
import Ubicacion from './Components/Ubicacion/Ubicacion';
import Home from './Views//Home/Home';
import Errorpage from './Views/Errorpage';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={ <Layout /> }
        >
          <Route
            index
            element={ <Home /> }
          />
          <Route
            path="/menu"
            element={ <Menu /> }
          />
          <Route
            path="/reserva"
            element={ <Reserva /> }
          />
          <Route
            path="/informacion"
            element={ <Informacion /> }
          />
          <Route
            path="/contacto"
            element={ <Contacto /> }
          />
          <Route
            path="/ubicacion"
            element={ <Ubicacion /> }
          />
        </Route>
        <Route path='*' element={ <Errorpage /> } />
      </Routes>
      <footer>Desarrollado por: José Cerna</footer>
    </>
  );
}

export default App;
