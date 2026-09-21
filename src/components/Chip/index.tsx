import type { ReactNode } from 'react'
import styles from './Chip.module.css'

type ChipProps = {
  activo?: boolean
  onClick?: () => void
  children: ReactNode
  className?: string
}

/** Chip · § 4.10. No navega ni filtra: sólo cambia de estado. */
export default function Chip({
  activo = false,
  onClick,
  children,
  className,
}: ChipProps) {
  const clases = [
    'label-medium',
    styles.chip,
    activo ? styles.seleccionado : styles.normal,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type="button" aria-pressed={activo} onClick={onClick} className={clases}>
      {children}
    </button>
  )
}
