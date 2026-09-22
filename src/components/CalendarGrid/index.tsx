import { Link } from 'react-router-dom'
import styles from './CalendarGrid.module.css'

export type CalendarBlockTone = 'primario' | 'neutro' | 'error' | 'exito'

export type CalendarBlock = {
  titulo: string
  dia: number
  hora: number
  tono: CalendarBlockTone
}

type CalendarGridProps = {
  dias: string[]
  horas: string[]
  bloques: CalendarBlock[]
  diaSeleccionado: number | null
  onSeleccionarDia: (indice: number) => void
  toBloque: string
}

/** Calendario semanal · ESPECIFICACION_WEB.md § 4.16. */
export default function CalendarGrid({
  dias,
  horas,
  bloques,
  diaSeleccionado,
  onSeleccionarDia,
  toBloque,
}: CalendarGridProps) {
  return (
    <section className={styles.calendario} aria-label="Calendario semanal">
      <div className={styles.cabecera}>
        {dias.map((dia, indice) => {
          const seleccionado = diaSeleccionado === indice

          return (
            <button
              key={dia}
              type="button"
              className={`label-medium ${styles.dia} ${
                seleccionado ? styles.diaSeleccionado : ''
              }`}
              aria-pressed={seleccionado}
              onClick={() => onSeleccionarDia(indice)}
            >
              {dia}
            </button>
          )
        })}
      </div>

      <div className={styles.cuerpo}>
        <div className={styles.horas} aria-hidden="true">
          {horas.map((hora, indice) => (
            <span
              key={hora}
              className={`body-small ${styles.hora}`}
              style={{ top: indice * 56 - 8 }}
            >
              {hora}
            </span>
          ))}
        </div>

        <div className={styles.rejilla}>
          {horas.map((hora, indice) => (
            <span
              key={hora}
              className={styles.linea}
              style={{ top: indice * 56 }}
              aria-hidden="true"
            />
          ))}

          {bloques.map((bloque) => (
            <Link
              key={bloque.titulo}
              to={toBloque}
              className={`label-medium ${styles.bloque} ${styles[bloque.tono]}`}
              style={{
                left: `calc(${bloque.dia} * (100% / 7))`,
                top: bloque.hora * 56 + 8,
              }}
              aria-label={`${bloque.titulo}, ${dias[bloque.dia]}, ${horas[bloque.hora]}`}
            >
              {bloque.titulo}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
