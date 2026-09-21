// TAPÓN · lo escribe Óscar (§ 4.3), borrar al mergear.
// Sólo sostiene la geometría del marco: 240 de ancho desde y=64, y la navegación.
import { Link } from 'react-router-dom'
import Icon, { type IconName } from '../Icon'
import { menu, sincronizacion } from '../../data/textos'

type SideMenuProps = { activa: string }

export default function SideMenu({ activa }: SideMenuProps) {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 'var(--appbar-h)',
        bottom: 0,
        left: 0,
        width: 'var(--menu-w)',
        padding: 'var(--sp-6) 0',
        background: 'var(--md-sys-color-surface-container-low)',
      }}
    >
      {menu.map((entrada) => (
        <Link
          key={entrada.id}
          to={entrada.ruta}
          className="body-medium"
          aria-current={entrada.id === activa ? 'page' : undefined}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--sp-3)',
            height: 44,
            padding: '0 var(--sp-4)',
            color:
              entrada.id === activa
                ? 'var(--md-sys-color-on-secondary-container)'
                : 'var(--md-sys-color-on-surface-variant)',
            background:
              entrada.id === activa
                ? 'var(--md-sys-color-secondary-container)'
                : 'transparent',
            textDecoration: 'none',
          }}
        >
          <Icon nombre={entrada.icono as IconName} size={24} />
          {entrada.label}
        </Link>
      ))}
      <p
        className="body-small"
        style={{
          position: 'absolute',
          bottom: 'var(--sp-6)',
          left: 'var(--sp-6)',
          color: 'var(--md-sys-color-on-surface-variant)',
        }}
      >
        {sincronizacion}
      </p>
    </nav>
  )
}
