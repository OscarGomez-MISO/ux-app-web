import { useState } from 'react'
import { appRoutes } from '../../app/routes'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Icon from '../../components/Icon'
import ListRow from '../../components/ListRow'
import SubNav from '../../components/SubNav'
import type { Estado } from '../../components/StatusLabel'
import {
  diasSemana,
  excepciones,
  rutinas as rutinasIniciales,
  titulos as textos,
} from '../../data/rutinas'
import { titulos } from '../../data/textos'
import styles from './RoutinesScreen.module.css'

type Rutina = {
  titulo: string
  desc: string
  estado: Estado
  dias: number[]
}

/** W04 · Rutinas, recurrencias y excepciones · ESPECIFICACION_WEB.md § 5.4. */
export function RoutinesScreen() {
  const [rutinas, setRutinas] = useState<Rutina[]>(rutinasIniciales as Rutina[])
  const [rutinaEnEdicion, setRutinaEnEdicion] = useState<number | null>(null)
  const [excepcionAnadida, setExcepcionAnadida] = useState(false)

  const diasActivos = rutinaEnEdicion === null
    ? rutinas[0]?.dias ?? Array(7).fill(0)
    : rutinas[rutinaEnEdicion]?.dias ?? Array(7).fill(0)

  const alternarDia = (indiceDia: number) => {
    if (rutinaEnEdicion === null) return

    setRutinas((actuales) =>
      actuales.map((rutina, indiceRutina) =>
        indiceRutina === rutinaEnEdicion
          ? {
              ...rutina,
              dias: rutina.dias.map((activo, indice) =>
                indice === indiceDia ? Number(!activo) : activo,
              ),
            }
          : rutina,
      ),
    )
  }

  const eliminarRutina = () => {
    if (rutinaEnEdicion === null) return
    setRutinas((actuales) =>
      actuales.filter((_, indice) => indice !== rutinaEnEdicion),
    )
    setRutinaEnEdicion(null)
  }

  return (
    <main className={styles.pantalla}>
      <h1 className="headline-medium">{titulos[appRoutes.routines]}</h1>

      <div className={styles.subnav}>
        <SubNav juego="planificacion" activa="Rutinas" />
      </div>

      {rutinas.length === 0 ? (
        <Card tipo="superficie" className={styles.estadoVacio}>
          <span className={styles.iconoVacio}>
            <Icon nombre="event_repeat" size={24} />
          </span>
          <h2 className="title-large">{textos.vacio}</h2>
          <p className="body-medium">{textos.vacioAyuda}</p>
          <Button tipo="primario" icono="add" to={appRoutes.createAlert}>
            {textos.nueva}
          </Button>
        </Card>
      ) : (
        <>
          <div className={styles.paneles}>
            <Card tipo="superficie" className={styles.listaRutinas}>
              <h2 className="title-large">{textos.rutinas}</h2>
              <div className={styles.filasRutinas}>
                {rutinas.map((rutina, indice) => (
                  <button
                    key={rutina.titulo}
                    type="button"
                    className={styles.rutina}
                    aria-pressed={rutinaEnEdicion === indice}
                    onClick={() => setRutinaEnEdicion(indice)}
                  >
                    <ListRow
                      titulo={rutina.titulo}
                      desc={rutina.desc}
                      estado={rutina.estado}
                      icono="event_repeat"
                      className={`${styles.filaRutina} ${
                        rutina.estado === 'activa' ? styles.estadoActivo : ''
                      }`}
                    />
                  </button>
                ))}
              </div>

              {rutinaEnEdicion !== null && (
                <button
                  type="button"
                  className={`label-large ${styles.eliminar}`}
                  onClick={eliminarRutina}
                >
                  {textos.eliminar}
                </button>
              )}
            </Card>

            <Card tipo="tarjeta" className={styles.calendario}>
              <h2 className="title-large">{textos.calendario}</h2>
              <div className={styles.dias}>
                {diasSemana.map((dia, indice) => {
                  const activo = Boolean(diasActivos[indice])
                  return (
                    <div key={dia} className={styles.dia}>
                      <span className="label-medium">{dia}</span>
                      <button
                        type="button"
                        className={`${styles.selectorDia} ${
                          activo ? styles.selectorDiaActivo : ''
                        }`}
                        aria-label={`${dia}: ${activo ? 'activo' : 'inactivo'}`}
                        aria-pressed={activo}
                        disabled={rutinaEnEdicion === null}
                        onClick={() => alternarDia(indice)}
                      >
                        {activo && <Icon nombre="check" size={20} />}
                      </button>
                    </div>
                  )
                })}
              </div>
            </Card>
          </div>

          <Card tipo="tarjeta" className={styles.excepciones}>
            <h2 className="title-large">
              {excepcionAnadida ? textos.excepcionAnadida : textos.excepciones}
            </h2>
            <p className="body-medium">{excepciones[0].texto}</p>
            <Button
              tipo="secundario"
              className={styles.agregarExcepcion}
              onClick={() => setExcepcionAnadida(true)}
            >
              {textos.agregar}
            </Button>
          </Card>

          {rutinaEnEdicion !== null && (
            <Card tipo="aviso" className={styles.avisoEdicion}>
              <div>
                <h2 className="title-medium">{textos.editar}</h2>
                <p className="body-medium">{textos.editarAyuda}</p>
              </div>
              <Button tipo="primario" onClick={() => setRutinaEnEdicion(null)}>
                {textos.guardar}
              </Button>
            </Card>
          )}
        </>
      )}
    </main>
  )
}
