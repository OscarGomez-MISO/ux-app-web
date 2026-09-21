import { paths } from './paths';

/**
 * Icono de Material Symbols Outlined, 24 dp, peso 400.
 * Hereda el color del texto salvo que se le pase `color`.
 * Tamaños del sistema: 16 ayuda · 18 botón · 20 campo · 24 lista y menú.
 */
export default function Icon({ nombre, size = 24, color = 'currentColor', ...rest }) {
  const d = paths[nombre];
  if (!d) {
    if (import.meta.env?.DEV) console.warn(`Icon: no existe "${nombre}"`);
    return null;
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -960 960 960"
      fill={color}
      aria-hidden="true"
      focusable="false"
      style={{ flexShrink: 0, display: 'block' }}
      {...rest}
    >
      <path d={d} />
    </svg>
  );
}
