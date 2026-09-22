import { useState } from 'react'
import { Link } from 'react-router-dom'
import { appRoutes } from '../../app/routes'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Icon, { type IconName } from '../../components/Icon'
import ListRow from '../../components/ListRow'
import MetricCard, { type MetricTone } from '../../components/MetricCard'
import StatusLabel, { type Estado } from '../../components/StatusLabel'
import {
  bienvenida,
  metricas,
  proximas,
  resumen,
  verPendientes,
} from '../../data/dashboard'
import { franjaRoles, titulos } from '../../data/textos'
import styles from './DashboardScreen.module.css'

const presentacionMetricas: Array<{ icono: IconName; tono: MetricTone }> = [
  { icono: 'event_note', tono: 'default' },
  { icono: 'notification_important', tono: 'error' },
  { icono: 'task_alt', tono: 'success' },
  { icono: 'snooze', tono: 'postponed' },
]

const iconosAlertas: IconName[] = ['schedule', 'location_on', 'timer', 'event']

type ProximaAlerta = {
  titulo: string
  desc: string
  estado: Estado
}

/**
 * W01 · Dashboard · ESPECIFICACION_WEB.md § 5.1.
 * El único estado local controla el aviso de bienvenida y se pierde al navegar.
 */
export function DashboardScreen() {
  const [bienvenidaVisible, setBienvenidaVisible] = useState(true)

  return (
    <main className={styles.pantalla}>
      <h1 className="headline-medium">{titulos[appRoutes.dashboard]}</h1>

      <Card tipo="aviso" className={styles.franjaRoles}>
        <Icon nombre="info" size={20} />
        <p className="body-medium">{franjaRoles}</p>
      </Card>

      <div
        className={`${styles.bienvenidaArea} ${
          bienvenidaVisible ? '' : styles.bienvenidaAreaCompacta
        }`}
      >
        <div
          className={`${styles.bienvenidaRegion} ${
            bienvenidaVisible ? '' : styles.bienvenidaOculta
          }`}
          aria-hidden={!bienvenidaVisible}
        >
          <Card tipo="tarjeta" className={styles.bienvenida}>
            <div>
              <h2 className="title-medium">{bienvenida.titulo}</h2>
              <p className={`body-medium ${styles.bienvenidaDescripcion}`}>
                {bienvenida.desc}
              </p>
            </div>
            <Button tipo="terciario" onClick={() => setBienvenidaVisible(false)}>
              {bienvenida.ocultar}
            </Button>
          </Card>
        </div>
        <div className={styles.nuevaAlerta}>
          <Button tipo="primario" icono="add" to={appRoutes.createAlert}>
            {bienvenida.accion}
          </Button>
        </div>
      </div>

      <section className={styles.metricas} aria-label="Resumen de alertas">
        {metricas.map((metrica, indice) => (
          <MetricCard
            key={metrica.nombre}
            cifra={metrica.cifra}
            nombre={metrica.nombre}
            icono={presentacionMetricas[indice].icono}
            tono={presentacionMetricas[indice].tono}
          />
        ))}
      </section>

      <div className={styles.columnas}>
        <section className={styles.alertas} aria-labelledby="proximas-alertas">
          <h2 id="proximas-alertas" className="title-large">
            Próximas alertas
          </h2>
          <Card tipo="superficie" className={styles.listaAlertas}>
            {(proximas as ProximaAlerta[]).map((alerta, indice) => (
              <Link
                key={alerta.titulo}
                to={appRoutes.history}
                className={styles.enlaceAlerta}
              >
                <ListRow
                  titulo={alerta.titulo}
                  desc={alerta.desc}
                  icono={iconosAlertas[indice]}
                  alto={64}
                  className={styles.filaAlerta}
                  accion={
                    <StatusLabel
                      estado={alerta.estado}
                      className={styles.estadoAlerta}
                    />
                  }
                />
              </Link>
            ))}
          </Card>
          <div className={styles.verPendientes}>
            <Button tipo="terciario" to={appRoutes.history}>
              {verPendientes}
            </Button>
          </div>
        </section>

        <section className={styles.resumen} aria-labelledby="resumen-dashboard">
          <h2 id="resumen-dashboard" className="title-large">
            Resumen
          </h2>
          <Card tipo="aviso" className={styles.cumplimiento}>
            <p className="label-small versales">{resumen.rotulo}</p>
            <p className={`headline-large ${styles.cumplimientoCifra}`}>
              {resumen.cifra}
            </p>
            <p className="body-small">{resumen.desc}</p>
          </Card>
          <Card tipo="tarjeta" className={styles.depuracion}>
            <div className={styles.depuracionTexto}>
              <Icon nombre="delete_sweep" size={24} />
              <p className="body-medium">{resumen.avisoDepuracion}</p>
            </div>
            <Button tipo="secundario" to={appRoutes.cleanup}>
              {resumen.accionDepuracion}
            </Button>
          </Card>
        </section>
      </div>
    </main>
  )
}
