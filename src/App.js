import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './Components/Contacto/Contacto';
import Informacion from './Components/Informacion/Informacion';
import Layout from './Components/Layout';
import Menu from './Components/Menu/Menu';
import Navbar from './Components/Navbar';
import Ubicacion from './Components/Ubicacion/Ubicacion';
import Home from './Views//Home/Home';
import Errorpage from './Views/Errorpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reservacion from './Components/Reservacion/Reservacion';
import Sociales from './Components/Sociales/Sociales';


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
            path="/reservacion"
            element={ <Reservacion /> }
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
          <Route
            path="/sociales"
            element={ <Sociales /> }
          />
        </Route>
        <Route path='*' element={ <Errorpage /> } />
      </Routes>
      <footer>Desarrollado por : José Cerna </footer>
    </>
  );
}

export default App;
