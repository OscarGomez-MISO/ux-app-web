import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Card from '../../components/Card'
import SubNav from '../../components/SubNav'
import Table from '../../components/Table'
import { appRoutes } from '../../app/routes'
import {
  capsulas,
  comoSeCombinan,
  crearPlantilla,
  notaFinal,
  plantillas,
  titulos as rotulos,
  usarPlantilla,
} from '../../data/plantillas'
import { titulos } from '../../data/textos'
import styles from './TemplatesScreen.module.css'

/**
 * W10 · Plantillas y cápsulas reutilizables · § 5.10.
 * Usar plantilla, Crear plantilla desde cero y Usar llevan a /crear-alerta.
 * Nueva cápsula no navega.
 */
export function TemplatesScreen() {
  return (
    <main className={styles.pantalla}>
      <h1 className="headline-medium">{titulos[appRoutes.templates]}</h1>

      <SubNav juego="planificacion" activa="Plantillas" />

      <div className={styles.plantillas}>
        <div className={styles.rejilla}>
          {/* La quinta tarjeta, de borde discontinuo, es la de crear desde cero */}
          {plantillas.map((plantilla) => (
            <Card
              key={plantilla.nombre}
              tipo="tarjeta"
              className={styles.plantilla}
            >
              <span className="title-medium">{plantilla.nombre}</span>
              <span className={`body-small ${styles.descripcion}`}>
                {plantilla.l1}
              </span>
              {plantilla.l2 && (
                <span className={`body-small ${styles.descripcion}`}>
                  {plantilla.l2}
                </span>
              )}
              <span className={`body-small ${styles.cuenta}`}>
                {plantilla.cuenta}
              </span>
              <div className={styles.usar}>
                <Button tipo="secundario" to={appRoutes.createAlert}>
                  {usarPlantilla}
                </Button>
              </div>
            </Card>
          ))}

          <Link to={appRoutes.createAlert} className={styles.crear}>
            <span className="body-medium">{crearPlantilla}</span>
          </Link>
        </div>
      </div>

      <Card tipo="tarjeta">
        <div className={styles.cabecera}>
          <h2 className="title-large">{rotulos.capsulas}</h2>
          <span className={`body-small ${styles.nota}`}>
            {rotulos.notaCapsulas}
          </span>
        </div>

        <Table
          columnas={[
            { id: 'nombre', label: '', ancho: 376 },
            { id: 'contenido', label: '', ancho: 360 },
            { id: 'categoria', label: '' },
            { id: 'accion', label: '', alineacion: 'derecha' },
          ]}
          filas={capsulas.map((capsula) => ({
            id: capsula.nombre,
            nombre: capsula.nombre,
            contenido: capsula.contenido,
            categoria: capsula.categoria,
            accion: (
              <Button tipo="terciario" to={appRoutes.createAlert}>
                {rotulos.usar}
              </Button>
            ),
          }))}
        />

      </Card>

      {/* Fuera de la tarjeta y sin navegación: crear una cápsula no entra en
          las diez pantallas */}
      <div className={styles.pie}>
        <Button tipo="secundario">{rotulos.nuevaCapsula}</Button>
      </div>

      <Card tipo="superficie">
        <div className={styles.cabecera}>
          <h2 className="title-large">{comoSeCombinan.titulo}</h2>
          <span className={`body-small ${styles.nota}`}>
            {comoSeCombinan.nota}
          </span>
        </div>

        <div className={styles.pasos}>
          {comoSeCombinan.pasos.map((paso) => (
            <div key={paso.titulo}>
              <p className={`title-small ${styles.pasoTitulo}`}>
                {paso.titulo}
              </p>
              <p className={`body-small ${styles.pasoTexto}`}>{paso.l1}</p>
              <p className={`body-small ${styles.pasoTexto}`}>{paso.l2}</p>
            </div>
          ))}
        </div>

        <p className={`body-small ${styles.notaFinal}`}>{notaFinal}</p>
      </Card>
    </main>
  )
}
