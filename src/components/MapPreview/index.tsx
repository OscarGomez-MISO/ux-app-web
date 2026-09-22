import Icon from '../Icon'
import styles from './MapPreview.module.css'

type MapPreviewProps = {
  label: string
}

/** Vista previa local del mapa. El prototipo no usa mapas ni servicios externos. */
export default function MapPreview({ label }: MapPreviewProps) {
  return (
    <section className={styles.mapa} aria-label={label}>
      <span className={styles.icono} aria-hidden="true">
        <Icon nombre="location_on" size={24} />
      </span>
      <p className="body-medium">{label}</p>
    </section>
  )
}
