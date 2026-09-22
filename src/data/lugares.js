// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const lugares = [
  { nombre: 'Casa',        dir: 'Carrera 45 # 12-30', icono: 'home' },
  { nombre: 'Trabajo',     dir: 'Calle 100 # 8-20',   icono: 'work' },
  { nombre: 'Universidad', dir: 'Campus central',     icono: 'location_on' },
];

// CW-03. Las reglas de llegada y salida están a la vista, no escondidas.
export const reglas = [
  { titulo: 'Al llegar a Casa', desc: 'Permanencia mínima: 5 minutos' },
  { titulo: 'Al salir de Casa', desc: 'Avisar al abandonar la zona' },
];

export const titulos = {
  lugares: 'Lugares',
  mapa: 'Mapa de lugares guardados',
  mapaVacio: 'Sin ubicaciones guardadas',
  agregar: 'Agregar lugar',
  reglas: 'Reglas del lugar seleccionado',
  eliminar: 'Eliminar este lugar',
  vacioAyuda: 'Agrega Casa, Trabajo u otro lugar frecuente.',
  dialogo: 'Nueva regla de ubicación',
  lugar: 'Lugar',
  momento: 'Momento',
  permanencia: 'Permanencia mínima',
  cancelar: 'Cancelar',
  guardar: 'Guardar',
};

export const opcionesRegla = {
  momento: ['Al llegar', 'Al salir', 'Permanecer cerca'],
  permanencia: ['5 minutos', '10 minutos', '30 minutos'],
};
