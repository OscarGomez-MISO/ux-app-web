import { useEffect, useId, useRef, useState } from 'react'
import Icon from '../Icon'
import styles from './Dropdown.module.css'

export type DropdownOption = {
  value: string
  description?: string
}

type DropdownProps = {
  label: string
  value: string
  options: DropdownOption[]
  onChange: (value: string) => void
  className?: string
}

/** Lista desplegable · ESPECIFICACION_WEB.md § 4.7. */
export default function Dropdown({
  label,
  value,
  options,
  onChange,
  className,
}: DropdownProps) {
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    const closeOutside = (event: MouseEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', closeOutside)
    document.addEventListener('keydown', closeWithEscape)
    return () => {
      document.removeEventListener('mousedown', closeOutside)
      document.removeEventListener('keydown', closeWithEscape)
    }
  }, [])

  return (
    <div ref={root} className={[styles.campo, className].filter(Boolean).join(' ')}>
      <span id={`${id}-label`} className={`label-medium ${styles.etiqueta}`}>
        {label}
      </span>
      <button
        type="button"
        className={`body-medium ${styles.control}`}
        aria-labelledby={`${id}-label`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((visible) => !visible)}
      >
        <span>{value}</span>
        <Icon nombre="keyboard_arrow_down" size={20} />
      </button>

      <div className={`${styles.despliegue} ${open ? styles.abierto : ''}`}>
        <div className={styles.recorte}>
          <div className={styles.lista} role="listbox" aria-labelledby={`${id}-label`}>
            {options.map((option) => {
              const selected = option.value === value
              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`${styles.opcion} ${selected ? styles.seleccionada : ''} ${
                    option.description ? styles.conDescripcion : ''
                  }`}
                  onClick={() => {
                    onChange(option.value)
                    setOpen(false)
                  }}
                >
                  <Icon
                    nombre={selected ? 'radio_button_checked' : 'radio_button_unchecked'}
                    size={18}
                  />
                  <span className={styles.textoOpcion}>
                    <span className="title-small">{option.value}</span>
                    {option.description && (
                      <span className={`body-small ${styles.descripcion}`}>
                        {option.description}
                      </span>
                    )}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
