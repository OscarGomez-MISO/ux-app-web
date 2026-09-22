// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const semanaActual = 1;

export const semanas = [
  {
    rango: '5 - 11 de mayo, 2026',
    dias: ['Lun 5', 'Mar 6', 'Mié 7', 'Jue 8', 'Vie 9', 'Sáb 10', 'Dom 11'],
  },
  {
    rango: '12 - 18 de mayo, 2026',
    dias: ['Lun 12', 'Mar 13', 'Mié 14', 'Jue 15', 'Vie 16', 'Sáb 17', 'Dom 18'],
  },
  {
    rango: '19 - 25 de mayo, 2026',
    dias: ['Lun 19', 'Mar 20', 'Mié 21', 'Jue 22', 'Vie 23', 'Sáb 24', 'Dom 25'],
  },
];

export const rango = semanas[semanaActual].rango;
export const controles = { anterior: 'Anterior', siguiente: 'Siguiente', hoy: 'Hoy' };

export const dias = semanas[semanaActual].dias;
export const horas = ['07:00', '09:00', '11:00', '13:00', '15:00', '17:00', '19:00'];

// dia: índice en `dias`. hora: índice en `horas`.
export const bloques = [
  { titulo: 'Clases',   dia: 0, hora: 0, tono: 'primario' },
  { titulo: 'Taller',   dia: 1, hora: 1, tono: 'neutro' },
  { titulo: 'Proyecto', dia: 3, hora: 3, tono: 'primario' },
  { titulo: 'Reunión',  dia: 4, hora: 4, tono: 'error' },
  { titulo: 'Estudio',  dia: 2, hora: 6, tono: 'exito' },
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
