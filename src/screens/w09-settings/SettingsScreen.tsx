import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import ListRow from '../../components/ListRow'
import Switch from '../../components/Switch'
import Table from '../../components/Table'
import { appRoutes } from '../../app/routes'
import {
  entradilla,
  filas,
  retencion,
  zonaDestructiva,
} from '../../data/privacidad'
import { titulos } from '../../data/textos'
import styles from './SettingsScreen.module.css'

type FilaPermiso = {
  titulo: string
  desc: string
  accion?: string
  ruta?: string
  switch?: boolean
}

/**
 * W09 · Privacidad y permisos · § 5.9.
 * Revisar, Cambiar, Ver detalle y Eliminar quedan inertes: sus pantallas no
 * entran en las diez. Sólo «Ir a Integraciones» navega.
 */
export function SettingsScreen() {
  const lista = filas as FilaPermiso[]
  const [compartir, setCompartir] = useState(false)

  /** La última fila lleva interruptor; de las otras, sólo una navega. */
  const accionDe = (fila: FilaPermiso) => {
    if (fila.switch !== undefined) {
      return (
        <Switch
          on={compartir}
          onChange={setCompartir}
          aria-label={fila.titulo}
        />
      )
    }
    if (fila.ruta) {
      return (
        <Button tipo="terciario" to={fila.ruta}>
          {fila.accion}
        </Button>
      )
    }
    return (
      <Button tipo="terciario" aria-disabled="true">
        {fila.accion}
      </Button>
    )
  }

  return (
    <main className={styles.pantalla}>
      <h1 className="headline-medium">{titulos[appRoutes.settings]}</h1>
      <p className={`body-large ${styles.entradilla}`}>{entradilla}</p>

      <Card tipo="tarjeta">
        {lista.map((fila) => (
          <ListRow
            key={fila.titulo}
            alto={64}
            titulo={fila.titulo}
            desc={fila.desc}
            accion={accionDe(fila)}
          />
        ))}
      </Card>

      <Card tipo="tarjeta" tono="error" className={styles.zona}>
        <div className={styles.zonaTextos}>
          <p className={`title-medium ${styles.zonaTitulo}`}>
            {zonaDestructiva.titulo}
          </p>
          <p className={`body-small ${styles.zonaDesc}`}>
            {zonaDestructiva.desc}
          </p>
        </div>
        <Button tipo="destructivo" aria-disabled="true">
          {zonaDestructiva.accion}
        </Button>
      </Card>

      <Card tipo="superficie">
        <div className={styles.retencionCabecera}>
          <h2 className="title-large">{retencion.titulo}</h2>
          <span className={`body-small ${styles.retencionNota}`}>
            {retencion.nota}
          </span>
        </div>

        <Table
          compacta
          columnas={[
            { id: 'dato', label: '', ancho: 416 },
            { id: 'plazo', label: '' },
            { id: 'nota', label: '', alineacion: 'derecha' },
          ]}
          filas={retencion.filas.map((fila) => ({
            id: fila.dato,
            dato: fila.dato,
            plazo: <span className={styles.plazo}>{fila.plazo}</span>,
            nota: <span className={styles.nota}>{fila.nota}</span>,
          }))}
        />
      </Card>
    </main>
  )
}
