// TAPÓN · lo escribe Óscar (§ 4.2), borrar al mergear.
// Sólo sostiene la geometría del marco: 64 de alto, fijo arriba.
import { marca } from '../../data/textos'

export default function AppBar() {
  return (
    <header
      className="title-large"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        height: 'var(--appbar-h)',
        padding: '0 var(--sp-6)',
        color: 'var(--md-sys-color-primary)',
        background: 'var(--md-sys-color-surface-container-lowest)',
        boxShadow: 'var(--e-2)',
      }}
    >
      {marca}
    </header>
  )
}
