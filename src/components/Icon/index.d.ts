// Tipos de Icon · index.jsx y paths.js vienen del pack y no se editan.
import type { ReactElement, SVGProps } from 'react'
import type { paths } from './paths'

/** Los 52 nombres válidos. Un nombre inventado (`help_outline`, `expand_more`, `place`) no compila. */
export type IconName = keyof typeof paths

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  nombre: IconName
  /** 16 ayuda · 18 botón · 20 campo · 24 lista y menú */
  size?: 16 | 18 | 20 | 24
  /** Por defecto hereda el color del texto. */
  color?: string
}

export default function Icon(props: IconProps): ReactElement | null
