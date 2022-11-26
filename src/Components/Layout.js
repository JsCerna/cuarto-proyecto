import { Outlet } from 'react-router-dom'


const Layout = ( props ) => {
  return (
        <section>
        <main>
        <Outlet />
        </main>
        <footer>Desarrollado por : José Cerna & Esteban Poblete</footer>
        </section>
  )
}

export default Layout