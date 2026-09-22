import { useState } from 'react'
import { Link } from 'react-router-dom'
import { appRoutes } from '../../app/routes'
import Button from '../../components/Button'
import CalendarGrid, { type CalendarBlock } from '../../components/CalendarGrid'
import Card from '../../components/Card'
import ListRow from '../../components/ListRow'
import SubNav from '../../components/SubNav'
import {
  bloques,
  compromisos,
  controles,
  horas,
  nuevaAlerta,
  semanaActual,
  semanas,
  tituloCompromisos,
} from '../../data/semana'
import { titulos } from '../../data/textos'
import styles from './PlanningScreen.module.css'

type Semana = {
  rango: string
  dias: string[]
}

type Compromiso = {
  titulo: string
  desc: string
}

/**
 * W02 · Planificación semanal · ESPECIFICACION_WEB.md § 5.2.
 * Los controles recorren las tres semanas del prototipo y Hoy vuelve a la actual.
 */
export function PlanningScreen() {
  const [indiceSemana, setIndiceSemana] = useState(semanaActual)
  const [diaSeleccionado, setDiaSeleccionado] = useState<number | null>(null)
  const semana = (semanas as Semana[])[indiceSemana]

  const cambiarSemana = (direccion: -1 | 1) => {
    setIndiceSemana((indice) =>
      Math.min(Math.max(indice + direccion, 0), semanas.length - 1),
    )
    setDiaSeleccionado(null)
  }

  const volverAHoy = () => {
    setIndiceSemana(semanaActual)
    setDiaSeleccionado(null)
  }

  return (
    <main className={styles.pantalla}>
      <h1 className="headline-medium">{titulos[appRoutes.planning]}</h1>

      <div className={styles.subnav}>
        <SubNav juego="planificacion" activa="Semana" />
      </div>

      <div className={styles.controles}>
        <div className={styles.navegacionSemanas}>
          <Button
            tipo="secundario"
            disabled={indiceSemana === 0}
            onClick={() => cambiarSemana(-1)}
          >
            {controles.anterior}
          </Button>
          <Button
            tipo="secundario"
            disabled={indiceSemana === semanas.length - 1}
            onClick={() => cambiarSemana(1)}
          >
            {controles.siguiente}
          </Button>
        </div>

        <p className={`title-medium ${styles.rango}`} aria-live="polite">
          {semana.rango}
        </p>

        <Button tipo="secundario" className={styles.hoy} onClick={volverAHoy}>
          {controles.hoy}
        </Button>
      </div>

      <div className={styles.contenido}>
        <CalendarGrid
          dias={semana.dias}
          horas={horas}
          bloques={bloques as CalendarBlock[]}
          diaSeleccionado={diaSeleccionado}
          onSeleccionarDia={setDiaSeleccionado}
          toBloque={appRoutes.history}
        />

        <Card tipo="superficie" className={styles.compromisos}>
          <h2 className="title-large">{tituloCompromisos}</h2>

          <div className={styles.listaCompromisos}>
            {(compromisos as Compromiso[]).map((compromiso) => (
              <Link
                key={compromiso.titulo}
                to={appRoutes.history}
                className={styles.enlaceCompromiso}
              >
                <ListRow
                  titulo={compromiso.titulo}
                  desc={compromiso.desc}
                  alto={64}
                  className={styles.filaCompromiso}
                />
              </Link>
            ))}
          </div>

          <Button
            tipo="primario"
            icono="add"
            to={appRoutes.createAlert}
            className={styles.nuevaAlerta}
          >
            {nuevaAlerta}
          </Button>
        </Card>
      </div>
    </main>
  )
}
