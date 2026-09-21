import styles from './Switch.module.css'

type SwitchProps = {
  on: boolean
  onChange: (on: boolean) => void
  /** Obligatorio cuando el interruptor no va dentro de una etiqueta visible. */
  'aria-label'?: string
  'aria-labelledby'?: string
  disabled?: boolean
  className?: string
}

/** Interruptor · § 4.9. No guarda nada: el estado vive en la pantalla. */
export default function Switch({
  on,
  onChange,
  disabled,
  className,
  ...rest
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      disabled={disabled}
      onClick={() => onChange(!on)}
      className={[styles.control, className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span
        className={`${styles.pista} ${on ? styles.encendido : styles.apagado}`}
      >
        <span className={styles.pulgar} />
      </span>
    </button>
  )
}
