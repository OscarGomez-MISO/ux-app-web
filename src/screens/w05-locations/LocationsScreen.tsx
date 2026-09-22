import { useState } from 'react'
import { appRoutes } from '../../app/routes'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Dropdown, { type DropdownOption } from '../../components/Dropdown'
import Icon from '../../components/Icon'
import MapPreview from '../../components/MapPreview'
import SubNav from '../../components/SubNav'
import Switch from '../../components/Switch'
import {
  lugares as lugaresIniciales,
  opcionesRegla,
  reglas as reglasIniciales,
  titulos as textos,
} from '../../data/lugares'
import { titulos } from '../../data/textos'
import styles from './LocationsScreen.module.css'

type Lugar = (typeof lugaresIniciales)[number]
type Regla = { titulo: string; desc: string; activa: boolean }

function reglasPara(nombre: string): Regla[] {
  return reglasIniciales.map((regla) => ({
    ...regla,
    titulo: regla.titulo.replace('Casa', nombre),
    activa: true,
  }))
}

export function LocationsScreen() {
  const [lugares, setLugares] = useState<Lugar[]>(lugaresIniciales)
  const [seleccionado, setSeleccionado] = useState(0)
  const [reglasPorLugar, setReglasPorLugar] = useState<Record<string, Regla[]>>(
    Object.fromEntries(lugaresIniciales.map((lugar) => [lugar.nombre, reglasPara(lugar.nombre)])),
  )
  const [dialogoAbierto, setDialogoAbierto] = useState(false)
  const [lugarRegla, setLugarRegla] = useState(lugaresIniciales[0].nombre)
  const [momento, setMomento] = useState(opcionesRegla.momento[0])
  const [permanencia, setPermanencia] = useState(opcionesRegla.permanencia[0])
  const [permitirEliminar, setPermitirEliminar] = useState(false)

  const lugarSeleccionado = lugares[seleccionado]
  const reglas = lugarSeleccionado ? reglasPorLugar[lugarSeleccionado.nombre] ?? [] : []
  const opcionesLugares: DropdownOption[] = lugaresIniciales.map((lugar) => ({
    value: lugar.nombre,
    description: lugar.dir,
  }))
  const opcionesMomento: DropdownOption[] = opcionesRegla.momento.map((value) => ({ value }))
  const opcionesPermanencia: DropdownOption[] = opcionesRegla.permanencia.map((value) => ({ value }))

  const abrirDialogo = () => {
    setLugarRegla(lugarSeleccionado?.nombre ?? lugaresIniciales[0].nombre)
    setDialogoAbierto(true)
  }

  const guardarRegla = () => {
    const indiceExistente = lugares.findIndex((lugar) => lugar.nombre === lugarRegla)
    let siguienteIndice = indiceExistente

    if (indiceExistente === -1) {
      const lugar = lugaresIniciales.find((item) => item.nombre === lugarRegla)
      if (lugar) {
        siguienteIndice = lugares.length
        setLugares((actuales) => [...actuales, lugar])
      }
    }

    const descripcion = momento === 'Al salir'
      ? reglasIniciales[1].desc
      : `${textos.permanencia}: ${permanencia}`
    const nuevaRegla: Regla = {
      titulo: `${momento} a ${lugarRegla}`,
      desc: descripcion,
      activa: true,
    }

    setReglasPorLugar((actuales) => ({
      ...actuales,
      [lugarRegla]: [...(actuales[lugarRegla] ?? []), nuevaRegla],
    }))
    setSeleccionado(Math.max(siguienteIndice, 0))
    setPermitirEliminar(true)
    setDialogoAbierto(false)
  }

  const eliminarLugar = () => {
    if (!lugarSeleccionado) return
    setLugares((actuales) => actuales.filter((lugar) => lugar.nombre !== lugarSeleccionado.nombre))
    setSeleccionado(0)
  }

  const alternarRegla = (indice: number, activa: boolean) => {
    if (!lugarSeleccionado) return
    setReglasPorLugar((actuales) => ({
      ...actuales,
      [lugarSeleccionado.nombre]: reglas.map((regla, indiceRegla) =>
        indiceRegla === indice ? { ...regla, activa } : regla,
      ),
    }))
  }

  return (
    <main className={styles.pantalla}>
      <h1 className="headline-medium">{titulos[appRoutes.locations]}</h1>
      <div className={styles.subnav}>
        <SubNav juego="planificacion" activa="Lugares" />
      </div>

      <div className={styles.contenido}>
        <MapPreview label={lugares.length ? textos.mapa : textos.mapaVacio} />

        <div className={styles.columnaDerecha}>
          <Card tipo="superficie" className={styles.lugaresCard}>
            <h2 className="title-large">{textos.lugares}</h2>
            {lugares.length ? (
              <div className={styles.listaLugares}>
                {lugares.map((lugar, indice) => (
                  <button
                    key={lugar.nombre}
                    type="button"
                    className={`${styles.lugar} ${
                      seleccionado === indice ? styles.lugarActivo : ''
                    }`}
                    aria-pressed={seleccionado === indice}
                    onClick={() => setSeleccionado(indice)}
                  >
                    <span>
                      <span className="title-medium">{lugar.nombre}</span>
                      <span className="body-small">{lugar.dir}</span>
                    </span>
                    <Icon nombre="location_on" size={24} />
                  </button>
                ))}
              </div>
            ) : (
              <p className={`body-medium ${styles.ayudaVacio}`}>{textos.vacioAyuda}</p>
            )}
          </Card>

          <div className={styles.accionesLugar}>
            {permitirEliminar && lugarSeleccionado && (
              <button type="button" className={`label-large ${styles.eliminar}`} onClick={eliminarLugar}>
                {textos.eliminar}
              </button>
            )}
            <Button
              tipo={lugares.length ? 'secundario' : 'primario'}
              icono="add"
              onClick={abrirDialogo}
            >
              {textos.agregar}
            </Button>
          </div>

          {lugarSeleccionado && (
            <Card tipo="tarjeta" className={styles.reglasCard}>
              <h2 className="title-large">{textos.reglas}</h2>
              <div className={styles.listaReglas}>
                {reglas.map((regla, indice) => (
                  <div key={`${regla.titulo}-${indice}`} className={styles.regla}>
                    <span>
                      <span className="title-medium">{regla.titulo}</span>
                      <span className="body-small">{regla.desc}</span>
                    </span>
                    <Switch
                      on={regla.activa}
                      onChange={(activa) => alternarRegla(indice, activa)}
                      aria-label={regla.titulo}
                      compacto
                    />
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>

      {dialogoAbierto && (
        <div className={styles.scrim} onMouseDown={() => setDialogoAbierto(false)}>
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-dialogo-lugar"
            className={styles.dialogo}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <h2 id="titulo-dialogo-lugar" className="title-large">{textos.dialogo}</h2>
            <Dropdown
              label={textos.lugar}
              value={lugarRegla}
              options={opcionesLugares}
              onChange={setLugarRegla}
              className={styles.dropdownLugar}
            />
            <Dropdown
              label={textos.momento}
              value={momento}
              options={opcionesMomento}
              onChange={setMomento}
              className={styles.dropdownMomento}
            />
            <Dropdown
              label={textos.permanencia}
              value={permanencia}
              options={opcionesPermanencia}
              onChange={setPermanencia}
              className={styles.dropdownPermanencia}
            />
            <div className={styles.accionesDialogo}>
              <Button tipo="secundario" onClick={() => setDialogoAbierto(false)}>
                {textos.cancelar}
              </Button>
              <Button tipo="primario" onClick={guardarRegla}>{textos.guardar}</Button>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}
