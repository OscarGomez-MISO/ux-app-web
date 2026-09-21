import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Icon, { type IconName } from '../../components/Icon'
import StatusLabel, { type Estado } from '../../components/StatusLabel'
import { appRoutes } from '../../app/routes'
import {
  entradilla,
  notas,
  permisos,
  servicios,
  sincronizacion,
} from '../../data/integraciones'
import { titulos } from '../../data/textos'
import styles from './IntegrationsScreen.module.css'

type Servicio = {
  icono: IconName
  nombre: string
  detalle: string
  estado: Estado
  acciones: string[]
}

/**
 * W06 · Integraciones y dispositivos · § 5.6.
 * Conectar, Desconectar y Sincronizar ahora cambian el StatusLabel y no navegan.
 * Ver permisos sí navega, a /privacidad.
 */
export function IntegrationsScreen() {
  const fichas = servicios as Servicio[]

  // Estado de cada ficha. Se pierde al navegar: el prototipo no guarda nada.
  const [estados, setEstados] = useState<Estado[]>(
    fichas.map((ficha) => ficha.estado),
  )

  const alternar = (indice: number) => {
    setEstados((previos) =>
      previos.map((estado, i) => {
        if (i !== indice) return estado
        // Al reconectar vuelve a su estado original: «Copia en la nube» es alDia.
        return estado === 'noConectado' ? fichas[i].estado : 'noConectado'
      }),
    )
  }

  const sincronizar = () => {
    setEstados((previos) =>
      previos.map((estado) => (estado === 'noConectado' ? estado : 'sincronizado')),
    )
  }

  return (
    <main className={styles.pantalla}>
      <h1 className="headline-medium">{titulos[appRoutes.integrations]}</h1>
      <p className={`body-large ${styles.entradilla}`}>{entradilla}</p>

      <div className={styles.fichas}>
        {fichas.map((ficha, indice) => {
          const estado = estados[indice]
          const conectado = estado !== 'noConectado'

          return (
            <Card key={ficha.nombre} tipo="tarjeta" className={styles.ficha}>
              <span className={`title-medium ${styles.nombre}`}>
                <Icon nombre={ficha.icono} size={24} />
                {ficha.nombre}
              </span>
              <span className={`body-small ${styles.detalle}`}>
                {ficha.detalle}
              </span>
              <span className={styles.estado}>
                <StatusLabel estado={estado} />
              </span>
              <div className={styles.acciones}>
                <Button
                  tipo={conectado ? 'secundario' : 'primario'}
                  onClick={() => alternar(indice)}
                >
                  {conectado ? 'Desconectar' : 'Conectar'}
                </Button>
                <Button tipo="terciario" to={appRoutes.settings}>
                  Ver permisos
                </Button>
              </div>
            </Card>
          )
        })}
      </div>

      <div className={styles.sincronizacion}>
        <span className={`body-medium ${styles.sincronizacionTexto}`}>
          {sincronizacion.texto}
        </span>
        <Button tipo="secundario" onClick={sincronizar}>
          {sincronizacion.accion}
        </Button>
      </div>

      <Card tipo="superficie">
        <div className={styles.permisosCabecera}>
          <h2 className="title-large">{permisos.titulo}</h2>
          <Link
            to={appRoutes.settings}
            className={`body-small ${styles.permisosNota}`}
          >
            {permisos.nota}
          </Link>
        </div>

        <div className={styles.permisosColumnas}>
          {permisos.filas.map((fila) => (
            <div key={fila.servicio}>
              <p className={`title-small ${styles.permisoServicio}`}>
                {fila.servicio}
              </p>
              <p className={`body-small ${styles.permisoPide}`}>{fila.pide}</p>
              <p className={`body-small ${styles.permisoNoHace}`}>
                {fila.noHace}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.notas}>
          {notas.map((nota) => (
            <p key={nota} className="body-small">
              {nota}
            </p>
          ))}
        </div>
      </Card>
    </main>
  )
}
