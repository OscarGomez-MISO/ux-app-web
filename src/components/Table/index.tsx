import type { ReactNode } from 'react'
import styles from './Table.module.css'

export type Columna = {
  id: string
  label: string
  ancho?: number
  /** Las numéricas van a la derecha; por defecto, izquierda. */
  alineacion?: 'izquierda' | 'derecha'
}

export type Fila = { id: string } & Record<string, ReactNode>

type TableProps = {
  columnas: Columna[]
  filas: Fila[]
  className?: string
}

/** Tabla del sistema · § 4.15. No ordena ni filtra: sólo presenta. */
export default function Table({ columnas, filas, className }: TableProps) {
  const clases = [styles.tabla, className].filter(Boolean).join(' ')

  return (
    <table className={clases}>
      <thead>
        <tr>
          {columnas.map((columna) => (
            <th
              key={columna.id}
              scope="col"
              style={columna.ancho ? { width: columna.ancho } : undefined}
              className={[
                'label-small',
                'versales',
                styles.encabezado,
                columna.alineacion === 'derecha' && styles.derecha,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {columna.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {filas.map((fila) => (
          <tr key={fila.id} className={styles.fila}>
            {columnas.map((columna) => (
              <td
                key={columna.id}
                className={[
                  'body-medium',
                  styles.celda,
                  columna.alineacion === 'derecha' && styles.derecha,
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {fila[columna.id]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
