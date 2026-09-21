import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import Icon, { type IconName } from '../Icon'
import StatusLabel, { type Estado } from '../StatusLabel'
import styles from './ListRow.module.css'

type ListRowProps = ComponentPropsWithoutRef<'div'> & {
  titulo: string
  desc?: string
  /** Pinta un StatusLabel a la derecha. Se puede combinar con `accion`. */
  estado?: Estado
  /** Botón, enlace o control a la derecha, después del estado. */
  accion?: ReactNode
  /** Icono a la izquierda, 24. Para una casilla, usar `delante`. */
  icono?: IconName
  /** Casilla u otro control a la izquierda. Tiene prioridad sobre `icono`. */
  delante?: ReactNode
  alto?: 56 | 64
}

/** Fila de lista · § 4.13. */
export default function ListRow({
  titulo,
  desc,
  estado,
  accion,
  icono,
  delante,
  alto = 56,
  className,
  ...rest
}: ListRowProps) {
  const clases = [styles.fila, alto === 64 && styles.alto64, className]
    .filter(Boolean)
    .join(' ')

  const izquierda = delante ?? (icono ? <Icon nombre={icono} size={24} /> : null)

  return (
    <div className={clases} {...rest}>
      {izquierda && <div className={styles.delante}>{izquierda}</div>}

      <div className={styles.texto}>
        <span className={`title-medium ${styles.titulo}`}>{titulo}</span>
        {desc && <span className={`body-small ${styles.desc}`}>{desc}</span>}
      </div>

      {(estado || accion) && (
        <div className={styles.detras}>
          {estado && <StatusLabel estado={estado} />}
          {accion}
        </div>
      )}
    </div>
  )
}
