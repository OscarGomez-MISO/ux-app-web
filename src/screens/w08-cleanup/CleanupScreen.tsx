import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Checkbox from '../../components/Checkbox'
import Icon, { type IconName } from '../../components/Icon'
import ListRow from '../../components/ListRow'
import MetricCard from '../../components/MetricCard'
import { type Estado } from '../../components/StatusLabel'
import SubNav from '../../components/SubNav'
import { appRoutes } from '../../app/routes'
import {
  acciones,
  alarmas,
  avisoDestructivo,
  contador,
  explicacion,
  recuentos,
  tituloSeleccion,
  verLista,
} from '../../data/alarmas'
import { titulos } from '../../data/textos'
import styles from './CleanupScreen.module.css'

type Alarma = { nombre: string; desc: string; estado: Estado }

/** Iconos de los recuentos, en el orden de la sección 5.8. El primero no lleva. */
const iconosRecuento: (IconName | undefined)[] = [
  undefined,
  'content_copy',
  'archive',
  'delete_sweep',
]

/**
 * W08 · Depuración de alarmas · § 5.8.
 * Los cuatro botones de acción no navegan: es el punto donde el prototipo se
 * detiene, porque las pantallas de confirmación no entran en las diez.
 */
export function CleanupScreen() {
  const lista = alarmas as Alarma[]

  // Las tres primeras llegan marcadas, como en la maqueta.
  const [seleccion, setSeleccion] = useState([0, 1, 2])

  const todas = seleccion.length === lista.length
  const algunas = seleccion.length > 0 && !todas

  const alternar = (indice: number) =>
    setSeleccion((previa) =>
      previa.includes(indice)
        ? previa.filter((i) => i !== indice)
        : [...previa, indice],
    )

  const alternarTodas = () =>
    setSeleccion(todas ? [] : lista.map((_, indice) => indice))

  return (
    <main className={styles.pantalla}>
      <h1 className="headline-medium">{titulos[appRoutes.cleanup]}</h1>

      <SubNav juego="recordatorios" activa="Depuración" />

      <div className={styles.recuentos}>
        {recuentos.map((recuento, indice) => (
          <MetricCard
            key={recuento.nombre}
            cifra={recuento.cifra}
            nombre={recuento.nombre}
            desc={recuento.desc}
            icono={iconosRecuento[indice]}
            accion={
              <Button tipo="secundario" to={appRoutes.history}>
                {verLista}
              </Button>
            }
          />
        ))}
      </div>

      <Card tipo="tarjeta">
        <div className={styles.seleccionCabecera}>
          <Checkbox
            checked={algunas ? 'indeterminada' : todas}
            onChange={alternarTodas}
          />
          <span className={`title-large ${styles.seleccionTitulo}`}>
            {tituloSeleccion}
          </span>
          <span className={`body-small ${styles.contador}`}>
            {contador(seleccion.length)}
          </span>
        </div>

        {lista.map((alarma, indice) => (
          <ListRow
            key={alarma.nombre}
            alto={64}
            delante={
              <Checkbox
                checked={seleccion.includes(indice)}
                onChange={() => alternar(indice)}
              />
            }
            titulo={alarma.nombre}
            desc={alarma.desc}
            estado={alarma.estado}
          />
        ))}
      </Card>

      {/* CW-05. Un solo botón destructivo por pantalla, y el aviso a la vista. */}
      <div className={styles.acciones}>
        {acciones.map((accion) => (
          <Button
            key={accion}
            tipo={accion === 'Eliminar' ? 'destructivo' : 'secundario'}
          >
            {accion}
          </Button>
        ))}

        <span className={`body-small ${styles.aviso}`}>
          <Icon nombre="error" size={16} />
          {avisoDestructivo}
        </span>
      </div>

      <Card tipo="superficie">
        <div className={styles.explicacionCabecera}>
          <h2 className="title-large">{explicacion.titulo}</h2>
          <span className={`body-small ${styles.explicacionNota}`}>
            {explicacion.nota}
          </span>
        </div>

        <div className={styles.explicacionColumnas}>
          {explicacion.columnas.map((columna) => (
            <div key={columna.accion}>
              <p className={`title-small ${styles.columnaTitulo}`}>
                {columna.accion}
              </p>
              <p className={`body-small ${styles.columnaTexto}`}>
                {columna.l1}
              </p>
              <p className={`body-small ${styles.columnaTexto}`}>
                {columna.l2}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </main>
  )
}
