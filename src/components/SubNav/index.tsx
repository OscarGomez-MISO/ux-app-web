import { Link } from 'react-router-dom'
import { subnav } from '../../data/textos'
import styles from './SubNav.module.css'

export type JuegoSubNav = 'planificacion' | 'recordatorios'

type Pestana = { label: string; ruta: string }

type SubNavProps = {
  juego: JuegoSubNav
  /** Etiqueta de la pestaña activa, tal cual aparece en textos.js. */
  activa: string
}

/**
 * Sub-navegación · § 4.4.
 * CW-02: es la corrección de la sesión de testeo. No se quita de ninguna
 * pantalla de Planificación.
 */
export default function SubNav({ juego, activa }: SubNavProps) {
  const pestanas = (subnav as Record<JuegoSubNav, Pestana[]>)[juego]

  return (
    <nav className={styles.barra}>
      {pestanas.map((pestana) => {
        const seleccionada = pestana.label === activa

        if (seleccionada) {
          return (
            <span
              key={pestana.label}
              aria-current="page"
              className={`title-small ${styles.pestana} ${styles.activa}`}
            >
              {pestana.label}
            </span>
          )
        }

        return (
          <Link
            key={pestana.label}
            to={pestana.ruta}
            className={`title-small ${styles.pestana}`}
          >
            {pestana.label}
          </Link>
        )
      })}
    </nav>
  )
}
