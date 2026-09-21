import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import styles from './Card.module.css'

export type CardTipo = 'tarjeta' | 'superficie' | 'aviso'

type CardProps = ComponentPropsWithoutRef<'div'> & {
  tipo: CardTipo
  /** Tono de error: fondo `error-container` y texto `on-error-container`. */
  tono?: 'error'
  children: ReactNode
}

/** Contenedor del sistema · § 4.12. */
export default function Card({
  tipo,
  tono,
  className,
  children,
  ...rest
}: CardProps) {
  const clases = [
    styles.card,
    styles[tipo],
    tono === 'error' && styles.error,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={clases} {...rest}>
      {children}
    </div>
  )
}
