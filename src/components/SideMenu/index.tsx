import { Link } from 'react-router-dom'
import Icon, { type IconName } from '../Icon'
import { menu, sincronizacion } from '../../data/textos'
import styles from './SideMenu.module.css'

type Entrada = {
  id: string
  label: string
  icono: IconName
  ruta: string
}

/** Menú lateral · § 4.3. La entrada activa no navega. */
export default function SideMenu({ activa }: { activa: string }) {
  return (
    <nav className={styles.menu}>
      {(menu as Entrada[]).map((entrada) => {
        const seleccionada = entrada.id === activa

        if (seleccionada) {
          return (
            <span
              key={entrada.id}
              aria-current="page"
              className={`body-medium ${styles.entrada} ${styles.activa}`}
            >
              <Icon nombre={entrada.icono} size={24} />
              {entrada.label}
            </span>
          )
        }

        return (
          <Link
            key={entrada.id}
            to={entrada.ruta}
            className={`body-medium ${styles.entrada}`}
          >
            <Icon nombre={entrada.icono} size={24} />
            {entrada.label}
          </Link>
        )
      })}

      <p className={`body-small ${styles.pie}`}>{sincronizacion}</p>
    </nav>
  )
}
