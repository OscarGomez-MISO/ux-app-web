import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { appRoutes } from '../../app/routes'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Checkbox from '../../components/Checkbox'
import Dropdown, { type DropdownOption } from '../../components/Dropdown'
import Icon from '../../components/Icon'
import TextField from '../../components/TextField'
import {
  aplica,
  canales,
  confirmacionDescartar,
  disparadores,
  ejemplo,
  guardado,
  nuevoPaso,
  opciones,
  selectorFecha,
  selectorHora,
  textoNoAplica,
  textosFormulario,
  ubicacion as datosUbicacion,
} from '../../data/alerta'
import { titulos } from '../../data/textos'
import styles from './CreateAlertScreen.module.css'

type Disparador = (typeof disparadores)[number]['valor']
type Aplicabilidad = { fecha: boolean; hora: boolean; lugar: boolean }
type Canal = { label: string; activo: boolean }

type DatePickerProps = {
  onCancel: () => void
  onAccept: (value: string) => void
}

function DatePicker({ onCancel, onAccept }: DatePickerProps) {
  const [month, setMonth] = useState(4)
  const [year, setYear] = useState(2026)
  const [selectedDay, setSelectedDay] = useState(18)
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
  const firstDay = (new Date(Date.UTC(year, month, 1)).getUTCDay() + 6) % 7

  const changeMonth = (direction: -1 | 1) => {
    const next = month + direction
    if (next < 0) {
      setMonth(11)
      setYear((value) => value - 1)
    } else if (next > 11) {
      setMonth(0)
      setYear((value) => value + 1)
    } else {
      setMonth(next)
    }
    setSelectedDay(1)
  }

  const accept = () => {
    const day = String(selectedDay).padStart(2, '0')
    const selectedMonth = String(month + 1).padStart(2, '0')
    onAccept(`${day}/${selectedMonth}/${year}`)
  }

  return (
    <div className={styles.scrim} onMouseDown={onCancel}>
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="selector-fecha-titulo"
        className={`${styles.dialogo} ${styles.dialogoFecha}`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <h2 id="selector-fecha-titulo" className="title-large">
          {selectorFecha.titulo}
        </h2>
        <div className={styles.mesSelector}>
          <span className="title-medium">{selectorFecha.meses[month]} {year}</span>
          <div className={styles.mesAcciones}>
            <button type="button" aria-label={selectorFecha.anterior} onClick={() => changeMonth(-1)}>
              <Icon nombre="chevron_left" size={20} />
            </button>
            <button type="button" aria-label={selectorFecha.siguiente} onClick={() => changeMonth(1)}>
              <Icon nombre="chevron_right" size={20} />
            </button>
          </div>
        </div>
        <div className={styles.calendarioMes}>
          {selectorFecha.diasSemana.map((day) => (
            <span key={day} className={`label-medium ${styles.diaSemana}`}>{day}</span>
          ))}
          {Array.from({ length: firstDay }, (_, index) => (
            <span key={`empty-${index}`} />
          ))}
          {Array.from({ length: daysInMonth }, (_, index) => index + 1).map((day) => (
            <button
              key={day}
              type="button"
              className={`body-medium ${styles.diaMes} ${
                day === selectedDay ? styles.diaMesSeleccionado : ''
              }`}
              aria-pressed={day === selectedDay}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
        <div className={styles.dialogoAcciones}>
          <Button tipo="terciario" onClick={onCancel}>{selectorFecha.cancelar}</Button>
          <Button tipo="terciario" onClick={accept}>{selectorFecha.aceptar}</Button>
        </div>
      </section>
    </div>
  )
}

type TimePickerProps = {
  onCancel: () => void
  onAccept: (value: string) => void
}

function TimePicker({ onCancel, onAccept }: TimePickerProps) {
  const [time, setTime] = useState(selectorHora.valor)
  const [period, setPeriod] = useState(selectorHora.periodo)

  return (
    <div className={styles.scrim} onMouseDown={onCancel}>
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="selector-hora-titulo"
        className={`${styles.dialogo} ${styles.dialogoHora}`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <h2 id="selector-hora-titulo" className="title-large">{selectorHora.titulo}</h2>
        <div className={styles.horaElegida}>
          <span className="display-small">{time}</span>
          <button
            type="button"
            className={`label-large ${styles.periodo}`}
            onClick={() => setPeriod((value) => (value === 'p. m.' ? 'a. m.' : 'p. m.'))}
          >
            {period}
          </button>
        </div>
        <button
          type="button"
          className={styles.reloj}
          aria-label={selectorHora.cambiarMinutos}
          onClick={() => setTime((value) => (value === '6:30' ? '6:00' : '6:30'))}
        >
          <span className={styles.puntoReloj} />
          <span className={`${styles.manecilla} ${time === '6:00' ? styles.enPunto : ''}`} />
          <Icon nombre="schedule" size={24} />
        </button>
        <div className={styles.dialogoAcciones}>
          <Button tipo="terciario" onClick={onCancel}>{selectorHora.cancelar}</Button>
          <Button tipo="terciario" onClick={() => onAccept(`${time} ${period}`)}>
            {selectorHora.aceptar}
          </Button>
        </div>
      </section>
    </div>
  )
}

/** W03 · Crear alerta · ESPECIFICACION_WEB.md § 5.3. */
export function CreateAlertScreen() {
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState(ejemplo.titulo)
  const [queHacer, setQueHacer] = useState(ejemplo.queHacer)
  const [disparador, setDisparador] = useState<Disparador>(ejemplo.disparador)
  const [fecha, setFecha] = useState(ejemplo.fecha)
  const [hora, setHora] = useState(ejemplo.hora)
  const [lugar, setLugar] = useState(datosUbicacion.nombre)
  const [mensaje, setMensaje] = useState('')
  const [pasos, setPasos] = useState<string[]>(ejemplo.pasos)
  const [canalesActivos, setCanalesActivos] = useState(
    (canales as Canal[]).map((channel) => channel.activo),
  )
  const [repeticion, setRepeticion] = useState(ejemplo.repeticion)
  const [criticidad, setCriticidad] = useState(ejemplo.criticidad)
  const [fechaAbierta, setFechaAbierta] = useState(false)
  const [horaAbierta, setHoraAbierta] = useState(false)
  const [descartarAbierto, setDescartarAbierto] = useState(false)
  const [errorTitulo, setErrorTitulo] = useState(false)
  const [snackbarVisible, setSnackbarVisible] = useState(false)

  const aplicabilidad = (aplica as Record<Disparador, Aplicabilidad>)[disparador]
  const opcionesDisparador: DropdownOption[] = disparadores.map((item) => ({ value: item.valor }))
  const opcionesRepeticion: DropdownOption[] = opciones.repeticion.map((value) => ({ value }))
  const opcionesCriticidad: DropdownOption[] = opciones.criticidad.map((value) => ({ value }))

  useEffect(() => {
    const closeDialogs = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setFechaAbierta(false)
      setHoraAbierta(false)
      setDescartarAbierto(false)
    }
    document.addEventListener('keydown', closeDialogs)
    return () => document.removeEventListener('keydown', closeDialogs)
  }, [])

  const selectTrigger = (value: string) => setDisparador(value as Disparador)
  const addStep = () => {
    setPasos((current) => current.includes(nuevoPaso) ? current : [...current, nuevoPaso])
  }
  const save = () => {
    if (!titulo.trim()) {
      setErrorTitulo(true)
      return
    }
    setErrorTitulo(false)
    setSnackbarVisible(true)
    window.setTimeout(() => navigate(appRoutes.dashboard), 1400)
  }

  const previewMoment = disparador === 'Al llegar a un lugar'
    ? datosUbicacion.regla
    : disparador === 'Sin momento fijo'
      ? textosFormulario.pendiente
      : `Vence hoy · ${hora}`

  return (
    <main className={styles.pantalla}>
      <h1 className="headline-medium">{titulos[appRoutes.createAlert]}</h1>
      <div className={styles.formulario}>
        <Card tipo="tarjeta" className={styles.formCard}>
          <h2 className="title-large">{textosFormulario.seccionProgramacion}</h2>
          <TextField
            label={textosFormulario.titulo}
            value={titulo}
            onChange={(value) => {
              setTitulo(value)
              if (value.trim()) setErrorTitulo(false)
            }}
            estado={errorTitulo ? 'error' : 'normal'}
            ayuda={errorTitulo ? textosFormulario.errorTitulo : undefined}
            className={styles.titleField}
          />
          <TextField
            label={textosFormulario.queHacer}
            value={queHacer}
            onChange={setQueHacer}
            className={styles.todoField}
          />
          <Dropdown
            label={textosFormulario.disparador}
            value={disparador}
            options={opcionesDisparador}
            onChange={selectTrigger}
            className={styles.triggerField}
          />
          <p className={`label-small versales ${styles.condicional}`}>
            {textosFormulario.condicional}
          </p>
          <div className={styles.fechaHora}>
            <TextField
              label={textosFormulario.fecha}
              value={aplicabilidad.fecha ? fecha : textoNoAplica(disparador)}
              estado={aplicabilidad.fecha ? 'normal' : 'noAplica'}
              readOnly
              onClick={() => aplicabilidad.fecha && setFechaAbierta(true)}
            />
            <TextField
              label={textosFormulario.hora}
              value={aplicabilidad.hora ? hora : textoNoAplica(disparador)}
              estado={aplicabilidad.hora ? 'normal' : 'noAplica'}
              readOnly
              onClick={() => aplicabilidad.hora && setHoraAbierta(true)}
            />
          </div>
          <TextField
            label={textosFormulario.lugar}
            value={aplicabilidad.lugar ? lugar : textoNoAplica(disparador)}
            onChange={setLugar}
            estado={aplicabilidad.lugar ? 'normal' : 'noAplica'}
            onClick={() => !aplicabilidad.lugar && selectTrigger('Al llegar a un lugar')}
            className={styles.placeField}
          />
          {aplicabilidad.lugar && (
            <div className={styles.reglaLugar}>
              <Icon nombre="location_on" size={20} />
              <div>
                <p className="title-small">{datosUbicacion.regla}</p>
                <p className={`body-small ${styles.detalleLugar}`}>{datosUbicacion.detalle}</p>
              </div>
              <Link to={appRoutes.locations} className={`label-medium ${styles.gestionar}`}>
                {datosUbicacion.accion}
              </Link>
            </div>
          )}
        </Card>

        <Card
          tipo="tarjeta"
          className={`${styles.formCard} ${
            pasos.length > ejemplo.pasos.length ? styles.rightCardExtended : ''
          }`}
        >
          <h2 className="title-large">{textosFormulario.seccionContexto}</h2>
          <TextField
            label={textosFormulario.mensajeGuiado}
            value={mensaje}
            placeholder={ejemplo.mensajeGuiado}
            onChange={setMensaje}
            className={styles.messageField}
          />
          <p className={`label-medium ${styles.stepsLabel}`}>{textosFormulario.listaPasos}</p>
          <div className={styles.stepsList}>
            {pasos.map((step) => (
              <div key={step} className={`body-medium ${styles.step}`}>{step}</div>
            ))}
            <button type="button" className={`body-medium ${styles.step}`} onClick={addStep}>
              {ejemplo.agregarPaso}
            </button>
          </div>
          <p className={`label-medium ${styles.channelsLabel}`}>{textosFormulario.canales}</p>
          <div className={styles.channelsGrid}>
            {(canales as Canal[]).map((channel, index) => (
              <Checkbox
                key={channel.label}
                checked={canalesActivos[index]}
                label={channel.label}
                onChange={(checked) =>
                  setCanalesActivos((current) =>
                    current.map((value, currentIndex) => currentIndex === index ? checked : value),
                  )
                }
              />
            ))}
          </div>
          <div className={styles.bottomDropdowns}>
            <Dropdown
              label={textosFormulario.repeticion}
              value={repeticion}
              options={opcionesRepeticion}
              onChange={setRepeticion}
            />
            <Dropdown
              label={textosFormulario.criticidad}
              value={criticidad}
              options={opcionesCriticidad}
              onChange={setCriticidad}
            />
          </div>
        </Card>
      </div>

      <div className={styles.actions}>
        <Button tipo="primario" onClick={save}>{textosFormulario.guardar}</Button>
        <Button tipo="secundario" onClick={() => setDescartarAbierto(true)}>
          {textosFormulario.cancelar}
        </Button>
      </div>
      <Card tipo="aviso" className={styles.preview}>
        <h2 className="title-medium">{textosFormulario.vistaPrevia}</h2>
        <p className="body-medium">
          {titulo || textosFormulario.titulo} · {previewMoment} · {criticidad}
        </p>
      </Card>

      {fechaAbierta && (
        <DatePicker
          onCancel={() => setFechaAbierta(false)}
          onAccept={(value) => {
            setFecha(value)
            setFechaAbierta(false)
          }}
        />
      )}
      {horaAbierta && (
        <TimePicker
          onCancel={() => setHoraAbierta(false)}
          onAccept={(value) => {
            setHora(value)
            setHoraAbierta(false)
          }}
        />
      )}
      {descartarAbierto && (
        <div className={styles.scrim} onMouseDown={() => setDescartarAbierto(false)}>
          <section
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="descartar-titulo"
            className={`${styles.dialogo} ${styles.dialogoDescartar}`}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <h2 id="descartar-titulo" className="title-large">
              {confirmacionDescartar.titulo}
            </h2>
            <p className={`body-medium ${styles.descartarDetalle}`}>
              {confirmacionDescartar.detalle}
            </p>
            <p className={`body-small ${styles.descartarNota}`}>
              {confirmacionDescartar.nota}
            </p>
            <div className={styles.dialogoAcciones}>
              <Button tipo="secundario" onClick={() => setDescartarAbierto(false)}>
                {confirmacionDescartar.seguir}
              </Button>
              <Button tipo="destructivo" onClick={() => navigate(appRoutes.dashboard)}>
                {confirmacionDescartar.descartar}
              </Button>
            </div>
          </section>
        </div>
      )}
      {snackbarVisible && (
        <div role="status" className={`body-medium ${styles.snackbar}`}>{guardado}</div>
      )}
    </main>
  )
}
