import Navbar from "./Navbar"
import {Outlet} from 'react-router-dom'


const Layout = (props) => {
    return (
        <div className="contenedor">
            <Navbar />
        <body>
            
        
        <main>
            
            <Outlet />               
        </main>
        </body>
        <footer>Desarrollado por: José Cerna</footer>
            
        </div>
        
    )
}

export default Layout