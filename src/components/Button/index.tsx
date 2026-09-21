import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Icon, { type IconName } from '../Icon'
import styles from './Button.module.css'

export type ButtonTipo = 'primario' | 'secundario' | 'terciario' | 'destructivo'

type ButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'children'> & {
  tipo: ButtonTipo
  icono?: IconName
  /** Ruta de destino. Si se pasa, se pinta como <Link>: la navegación nunca va en un <button>. */
  to?: string
  children: ReactNode
}

/**
 * Botón del sistema · § 4.5.
 * Para un control que lleva fuera de las diez pantallas, pasar `aria-disabled="true"`
 * y ningún `onClick`: queda inerte con `cursor: default`.
 */
export default function Button({
  tipo,
  icono,
  to,
  disabled,
  type = 'button',
  className,
  children,
  ...rest
}: ButtonProps) {
  const clases = [
    'label-large',
    styles.boton,
    styles[tipo],
    icono && styles.conIcono,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const contenido = (
    <>
      {icono && <Icon nombre={icono} size={18} />}
      {children}
    </>
  )

  if (to && !disabled) {
    return (
      <Link to={to} className={clases}>
        {contenido}
      </Link>
    )
  }

  return (
    <button type={type} disabled={disabled} className={clases} {...rest}>
      {contenido}
    </button>
  )
}
