// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const recuentos = [
  { cifra: '127', nombre: 'Antiguas',  desc: 'sin sonar hace más de 6 meses' },
  { cifra: '18',  nombre: 'Duplicadas', desc: 'agrupadas en 9 pares' },
  { cifra: '53',  nombre: 'Sin uso',    desc: 'creadas y nunca activadas' },
  { cifra: '84',  nombre: 'Archivadas', desc: 'fuera de circulación' },
];

export const verLista = 'Ver lista';
export const tituloSeleccion = 'Seleccionar las 53 alarmas sin uso';
export const contador = (n) => `${n} seleccionadas`;

export const alarmas = [
  { nombre: 'Alarma 6:30',  desc: 'Sin nombre · última vez hace 8 meses',  estado: 'sinUso' },
  { nombre: 'Despertador',  desc: 'Sin nombre · última vez hace 11 meses', estado: 'sinUso' },
  { nombre: 'Recordatorio', desc: 'Sin propósito · creada en 2024',        estado: 'sinUso' },
  { nombre: 'Alarma 7:15',  desc: 'Sin nombre · nunca activada',           estado: 'sinUso' },
];

export const acciones = ['Unificar', 'Archivar', 'Reactivar', 'Eliminar'];

// CW-05. El aviso de irreversibilidad es la corrección de la sesión de testeo.
export const avisoDestructivo =
  'Revisa la lista completa antes de eliminar: la acción no se puede deshacer.';

export const explicacion = {
  titulo: 'Qué hace cada acción sobre la selección',
  nota: 'Solo «Eliminar» es irreversible',
  columnas: [
    { accion: 'Unificar',  l1: 'Deja una alerta y descarta',  l2: 'las repetidas del grupo' },
    { accion: 'Archivar',  l1: 'La saca de circulación',      l2: 'y se puede recuperar' },
    { accion: 'Reactivar', l1: 'Vuelve a la lista activa',    l2: 'con su configuración' },
    { accion: 'Eliminar',  l1: 'Borra la alerta y su',        l2: 'historial. No se deshace' },
  ],
};
