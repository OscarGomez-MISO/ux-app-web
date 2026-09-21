import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Chip from '../../components/Chip'
import Icon, { type IconName } from '../../components/Icon'
import StatusLabel, { type Estado } from '../../components/StatusLabel'
import SubNav from '../../components/SubNav'
import Table from '../../components/Table'
import { appRoutes } from '../../app/routes'
import {
  chips,
  columnas,
  cumplimiento,
  filas,
  paginacion,
  periodo,
  verDetalle,
} from '../../data/historico'
import { titulos } from '../../data/textos'
import styles from './HistoryScreen.module.css'

type Fila = {
  titulo: string
  tipo: string
  activacion: string
  pospuesta: number
  estado: Estado
}

/** Iconos de la banda de cumplimiento, en el orden de la sección 5.7. */
const iconosCumplimiento: IconName[] = [
  'task_alt',
  'snooze',
  'cancel',
  'schedule',
]

/**
 * W07 · Histórico y cumplimiento · § 5.7.
 * Los chips y el selector de periodo cambian de estado con useState y
 * no filtran la tabla.
 */
export function HistoryScreen() {
  const [chipActivo, setChipActivo] = useState(chips[0])

  const columnasTabla = [
    { id: 'titulo', label: columnas[0], ancho: 300 },
    { id: 'tipo', label: columnas[1] },
    { id: 'activacion', label: columnas[2] },
    { id: 'pospuesta', label: columnas[3] },
    { id: 'estado', label: columnas[4] },
    { id: 'accion', label: '' },
  ]

  const filasTabla = (filas as Fila[]).map((fila) => ({
    id: fila.titulo,
    titulo: fila.titulo,
    tipo: fila.tipo,
    activacion: fila.activacion,
    // CW-04. Sin esta columna el histórico no distingue a quien pospone
    // de quien no responde. El color hace que se lea de un vistazo.
    pospuesta: (
      <span className={fila.pospuesta > 0 ? styles.pospuesta : undefined}>
        {fila.pospuesta}
      </span>
    ),
    estado: <StatusLabel estado={fila.estado} />,
    accion: (
      <Button tipo="terciario" to={appRoutes.createAlert}>
        {verDetalle}
      </Button>
    ),
  }))

  return (
    <main className={styles.pantalla}>
      <h1 className="headline-medium">{titulos[appRoutes.history]}</h1>

      <SubNav juego="recordatorios" activa="Histórico y cumplimiento" />

      <div className={styles.filtros}>
        <div className={styles.chips}>
          {(chips as string[]).map((chip) => (
            <Chip
              key={chip}
              activo={chip === chipActivo}
              onClick={() => setChipActivo(chip)}
            >
              {chip}
            </Chip>
          ))}
        </div>

        <Button tipo="secundario" icono="calendar_today">
          {periodo}
        </Button>
      </div>

      <Card tipo="tarjeta">
        <Table columnas={columnasTabla} filas={filasTabla} />
      </Card>

      <div className={styles.paginacion}>
        <span className={`body-medium ${styles.registros}`}>
          {paginacion.texto}
        </span>
        <div className={styles.botonesPagina}>
          <Button tipo="secundario">{paginacion.anterior}</Button>
          <Button tipo="secundario">{paginacion.siguiente}</Button>
        </div>
      </div>

      <Card tipo="superficie">
        <div className={`body-small ${styles.cumplimientoCabecera}`}>
          <h2 className="body-small">{cumplimiento.titulo}</h2>
          <span>{cumplimiento.nota}</span>
        </div>

        <div className={styles.cumplimientoColumnas}>
          {cumplimiento.columnas.map((columna, indice) => (
            <div key={columna.cifra} className={styles.columna}>
              <Icon nombre={iconosCumplimiento[indice]} size={20} />
              <div>
                <p className={`title-medium ${styles.cifra}`}>
                  {columna.cifra}
                </p>
                <p className={`body-small ${styles.porcentaje}`}>
                  {columna.porcentaje}
                </p>
                <p className={`body-small ${styles.nota}`}>{columna.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </main>
  )
}
