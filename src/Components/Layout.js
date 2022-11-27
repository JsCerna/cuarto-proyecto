import { Outlet } from 'react-router-dom'


const Layout = ( props ) => {
  return (
        <main>
        <Outlet />
        </main>
  )
}

export default Layout