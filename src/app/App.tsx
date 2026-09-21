import { Outlet, useLocation } from 'react-router-dom'
import AppBar from '../components/AppBar'
import SideMenu from '../components/SideMenu'
import { seccionDeRuta } from '../data/textos'

/** Marco de la aplicación · § 3.3. Idéntico en las diez pantallas. */
export function App() {
  const { pathname } = useLocation()
  const activa = seccionDeRuta[pathname as keyof typeof seccionDeRuta]

  return (
    <>
      <AppBar />
      <SideMenu activa={activa} />
      <div className="page">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  )
}
