import {  Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Views/Home';
import Layout from './Components/Layout';
import Errorpage from './Views/Errorpage';
import Perfil from './Views/Perfil';
import Informacion from './Components/Informacion/Informacion';
import Contacto from './Components/Contacto/Contacto';
import Ubicacion from './Components/Ubicacion/Ubicacion';
import Menu from './Components/Menu/Menu';
import Reserva from './Components/Reservas/Reserva';


function App() {
  return (
    <Routes>
    <Route 
    path="/"
    element={<Layout />}
  >
    <Route 
      index
      element={<Home />}
    />
    <Route 
      path="/menu" 
      element={<Menu />}
    />
    <Route 
      path="/reserva" 
      element={<Reserva />}
    />
    <Route 
    path="/informacion"
    element={<Informacion />}
    />
    <Route 
      path="/contacto" 
      element={<Contacto />}
    />
    <Route 
      path="/ubicacion" 
      element={<Ubicacion />}
    />
  </Route>
  <Route path='*' element={<Errorpage />} />
</Routes>
  );
}

export default App;
