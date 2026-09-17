import { Link } from 'react-router-dom'
import { appRoutes } from '../app/routes'

type ScreenPlaceholderProps = {
  code: `W${number}`
  title: string
}

export function ScreenPlaceholder({ code, title }: ScreenPlaceholderProps) {
  return (
    <main className="screen-placeholder">
      <section aria-labelledby="screen-title">
        <p className="screen-placeholder__code">{code}</p>
        <h1 id="screen-title">{title}</h1>
        <p>
          Esta ruta está preparada para implementar el mockup correspondiente.
        </p>
        {code !== 'W01' && <Link to={appRoutes.dashboard}>Volver al inicio</Link>}
      </section>
    </main>
  )
}
