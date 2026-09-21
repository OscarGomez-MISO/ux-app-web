import Icon, { type IconName } from '../Icon'
import styles from './StatusLabel.module.css'

export type Estado =
  | 'pendiente'
  | 'critica'
  | 'completada'
  | 'reprogramada'
  | 'noRealizada'
  | 'sinUso'
  | 'sincronizado'
  | 'noConectado'
  | 'alDia'
  | 'activa'

/** Icono y palabra de cada estado · § 4.11. Los textos son literales: no se reescriben. */
const estados: Record<Estado, { icono: IconName; palabra: string }> = {
  pendiente: { icono: 'schedule', palabra: 'Pendiente' },
  critica: { icono: 'priority_high', palabra: 'Crítica' },
  completada: { icono: 'check', palabra: 'Completada' },
  reprogramada: { icono: 'event_repeat', palabra: 'Reprogramada' },
  noRealizada: { icono: 'close', palabra: 'No realizada' },
  sinUso: { icono: 'info', palabra: 'Sin uso' },
  sincronizado: { icono: 'check', palabra: 'Sincronizado' },
  noConectado: { icono: 'close', palabra: 'No conectado' },
  alDia: { icono: 'check', palabra: 'Al día' },
  activa: { icono: 'check', palabra: 'Activa' },
}

type StatusLabelProps = {
  estado: Estado
  className?: string
}

/** Etiqueta de estado · § 4.11. Nunca sólo color: siempre icono y palabra. */
export default function StatusLabel({ estado, className }: StatusLabelProps) {
  const { icono, palabra } = estados[estado]
  const clases = ['label-medium', styles.etiqueta, styles[estado], className]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={clases}>
      <Icon nombre={icono} size={16} />
      {palabra}
    </span>
  )
}
