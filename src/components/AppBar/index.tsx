import Icon from '../Icon'
import { marca } from '../../data/textos'
import styles from './AppBar.module.css'

/**
 * Barra superior · § 4.2. Idéntica en las diez pantallas.
 * El buscador, las notificaciones y la cuenta quedan inertes: sus pantallas
 * no entran en las diez.
 */
export default function AppBar() {
  return (
    <header className={styles.barra}>
      <span className={`title-large ${styles.marca}`}>{marca}</span>

      <div className={`body-medium ${styles.buscador}`} aria-hidden="true">
        <Icon nombre="search" size={18} />
        Buscar
      </div>

      <div className={styles.acciones}>
        <span className={`body-medium ${styles.accion}`} aria-disabled="true">
          <Icon nombre="notifications" size={24} />
          Notificaciones
        </span>
        <span className={`body-medium ${styles.accion}`} aria-disabled="true">
          <Icon nombre="account_circle" size={24} />
          Mi cuenta
        </span>
      </div>
    </header>
  )
}
