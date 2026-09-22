import type { ReactNode } from 'react'
import Icon, { type IconName } from '../Icon'
import styles from './MetricCard.module.css'

export type MetricTone = 'default' | 'error' | 'success' | 'postponed'

type MetricCardProps = {
  cifra: string | number
  nombre: string
  desc?: string
  accion?: ReactNode
  icono?: IconName
  tono?: MetricTone
  className?: string
}

/** Tarjeta de recuento · ESPECIFICACION_WEB.md § 4.14. */
export default function MetricCard({
  cifra,
  nombre,
  desc,
  accion,
  icono,
  tono = 'default',
  className,
}: MetricCardProps) {
  const compacta = !desc && !accion
  const clases = [
    styles.tarjeta,
    compacta && styles.compacta,
    styles[tono],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={clases} aria-label={`${nombre}: ${cifra}`}>
      <div className={styles.cabecera}>
        <span className={`headline-large ${styles.cifra}`}>{cifra}</span>
        {icono && <Icon nombre={icono} size={24} />}
      </div>
      <p className={compacta ? 'body-small' : 'title-small'}>{nombre}</p>
      {desc && <p className={`body-small ${styles.descripcion}`}>{desc}</p>}
      {accion && <div className={styles.accion}>{accion}</div>}
    </article>
  )
}
