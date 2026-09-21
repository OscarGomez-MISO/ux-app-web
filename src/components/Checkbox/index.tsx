import { useEffect, useRef } from 'react'
import Icon from '../Icon'
import styles from './Checkbox.module.css'

type CheckboxProps = {
  /** `'indeterminada'` pinta la barra y marca `aria-checked="mixed"`. */
  checked: boolean | 'indeterminada'
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
  className?: string
}

/** Casilla · § 4.8. Todo el conjunto es pulsable porque va dentro de un <label>. */
export default function Checkbox({
  checked,
  onChange,
  label,
  disabled,
  className,
}: CheckboxProps) {
  const input = useRef<HTMLInputElement>(null)
  const indeterminada = checked === 'indeterminada'

  // `indeterminate` no es un atributo: sólo existe como propiedad del elemento.
  useEffect(() => {
    if (input.current) input.current.indeterminate = indeterminada
  }, [indeterminada])

  const clases = [
    styles.etiqueta,
    disabled && styles.deshabilitado,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const pintado = indeterminada || checked === true

  return (
    <label className={clases}>
      <input
        ref={input}
        type="checkbox"
        className={styles.input}
        checked={checked === true}
        disabled={disabled}
        onChange={(evento) => onChange(evento.target.checked)}
      />
      <span className={styles.area}>
        <span className={`${styles.cuadro} ${pintado ? styles.marcado : ''}`}>
          {indeterminada ? (
            <span className={`${styles.marca} ${styles.barra}`} />
          ) : (
            <Icon nombre="check" size={16} className={styles.marca} />
          )}
        </span>
      </span>
      {label && <span className={`body-medium ${styles.texto}`}>{label}</span>}
    </label>
  )
}
