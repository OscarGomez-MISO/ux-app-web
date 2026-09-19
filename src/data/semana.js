// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const rango = '12 - 18 de mayo, 2026';
export const controles = { anterior: 'Anterior', siguiente: 'Siguiente', hoy: 'Hoy' };

export const dias  = ['Lun 12', 'Mar 13', 'Mié 14', 'Jue 15', 'Vie 16', 'Sáb 17', 'Dom 18'];
export const horas = ['07:00', '09:00', '11:00', '13:00', '15:00', '17:00', '19:00'];

// dia: índice en `dias`. hora: índice en `horas`.
export const bloques = [
  { titulo: 'Clases',   dia: 0, hora: 0 },
  { titulo: 'Taller',   dia: 1, hora: 1 },
  { titulo: 'Proyecto', dia: 3, hora: 3 },
  { titulo: 'Reunión',  dia: 4, hora: 4 },
  { titulo: 'Estudio',  dia: 2, hora: 6 },
];

export const compromisos = [
  { titulo: 'Enviar reporte',   desc: '15/05 · 09:00' },
  { titulo: 'Pagar luz',        desc: '15/05 · 09:00' },
  { titulo: 'Biblioteca',       desc: '15/05 · 09:00' },
  { titulo: 'Tomar medicina',   desc: '15/05 · 09:00' },
  { titulo: 'Recoger paquete',  desc: 'Al llegar a Casa' },
];

export const tituloCompromisos = 'Compromisos de la semana';
export const nuevaAlerta = 'Nueva alerta';
