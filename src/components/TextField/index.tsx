import { useId, type InputHTMLAttributes } from 'react'
import Icon from '../Icon'
import styles from './TextField.module.css'

export type TextFieldEstado = 'normal' | 'error' | 'noAplica'

type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
> & {
  label: string
  value: string
  onChange?: (value: string) => void
  estado?: TextFieldEstado
  ayuda?: string
  className?: string
}

/** Campo de texto · ESPECIFICACION_WEB.md § 4.6. */
export default function TextField({
  label,
  value,
  onChange,
  estado = 'normal',
  ayuda,
  className,
  id,
  readOnly,
  ...rest
}: TextFieldProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const helpId = ayuda ? `${inputId}-ayuda` : undefined

  return (
    <label
      htmlFor={inputId}
      className={[styles.campo, styles[estado], className].filter(Boolean).join(' ')}
    >
      <span className={`label-medium ${styles.etiqueta}`}>{label}</span>
      <span className={styles.caja}>
        <input
          id={inputId}
          value={value}
          readOnly={readOnly || estado === 'noAplica'}
          aria-disabled={estado === 'noAplica' || undefined}
          aria-invalid={estado === 'error' || undefined}
          aria-describedby={helpId}
          onChange={(evento) => onChange?.(evento.target.value)}
          className={`body-medium ${styles.input}`}
          {...rest}
        />
        {estado === 'error' && <Icon nombre="error" size={20} />}
      </span>
      {ayuda && (
        <span id={helpId} className={`body-small ${styles.ayuda}`}>
          {ayuda}
        </span>
      )}
    </label>
  )
}
