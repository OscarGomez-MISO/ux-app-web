// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const plantillas = [
  { nombre: 'Trabajo',  l1: 'Reuniones, entregas y',  l2: 'seguimiento de tareas', cuenta: '8 alertas' },
  { nombre: 'Salud',    l1: 'Medicamentos, citas y',  l2: 'hábitos diarios',       cuenta: '6 alertas' },
  { nombre: 'Pagos',    l1: 'Servicios, tarjetas y',  l2: 'cuotas mensuales',      cuenta: '5 alertas' },
  { nombre: 'Personal', l1: 'Compromisos del día a día', l2: '',                   cuenta: '7 alertas' },
];

export const usarPlantilla = 'Usar plantilla';
export const crearPlantilla = 'Crear plantilla desde cero';

export const capsulas = [
  { nombre: 'Pago de administración', contenido: 'Nota + lista de 4 pasos',       categoria: 'Finanzas' },
  { nombre: 'Rutina de medicamento',  contenido: 'Lista de 3 pasos',              categoria: 'Salud' },
  { nombre: 'Salir a tiempo',         contenido: 'Mensaje guiado de 6 segundos',  categoria: 'Personal' },
  { nombre: 'Preparar la reunión',    contenido: 'Nota + enlace al acta',         categoria: 'Trabajo' },
];

export const titulos = {
  capsulas: 'Cápsulas de acción guardadas',
  notaCapsulas: 'Se reutilizan al crear una alerta',
  nuevaCapsula: 'Nueva cápsula',
  usar: 'Usar',
};

export const comoSeCombinan = {
  titulo: 'Cómo se combinan las plantillas y las cápsulas',
  nota: 'Ahorra pasos al crear una alerta',
  pasos: [
    { titulo: '1 · Eliges una plantilla',    l1: 'Trae varias alertas ya',  l2: 'configuradas por categoría' },
    { titulo: '2 · Ajustas fecha y lugar',   l1: 'Solo cambias lo que',     l2: 'es propio de tu caso' },
    { titulo: '3 · Añades una cápsula',      l1: 'Le pegas la nota, la lista', l2: 'de pasos o el mensaje guiado' },
  ],
};

export const notaFinal =
  'Las plantillas y las cápsulas se editan solo desde la web; el móvil las usa tal como quedaron guardadas.';
