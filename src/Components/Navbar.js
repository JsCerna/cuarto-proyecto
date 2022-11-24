import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/informacion">¿Quienes somos?</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/reserva">Reserva</NavLink>
        <NavLink to="/ubicacion">Ubicación</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>

        
    </nav>
}

export default Navbar