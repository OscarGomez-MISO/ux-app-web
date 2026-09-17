import { Link } from 'react-router-dom'
import { appRoutes } from '../../app/routes'

export function NotFoundScreen() {
  return (
    <main className="screen-placeholder">
      <section>
        <p className="screen-placeholder__code">404</p>
        <h1>Página no encontrada</h1>
        <Link to={appRoutes.dashboard}>Volver al inicio</Link>
      </section>
    </main>
  )
}
