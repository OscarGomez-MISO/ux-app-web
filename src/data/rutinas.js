// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const diasSemana = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

export const rutinas = [
  { titulo: 'Días laborales',           desc: 'lunes a viernes · 6:30 a. m.',  estado: 'activa',       dias: [1,1,1,1,1,0,0] },
  { titulo: 'Medicamento cada 6 horas', desc: 'próxima a las 2:00 p. m.',      estado: 'reprogramada', dias: [1,1,1,1,1,1,1] },
  { titulo: 'Estudio nocturno',         desc: 'lunes a viernes · 6:30 a. m.',  estado: 'activa',       dias: [1,1,1,1,1,0,0] },
];

export const excepciones = [
  { texto: 'No sonar el festivo · 20/07/2026' },
];

export const titulos = {
  rutinas: 'Rutinas',
  calendario: 'Calendario de aplicación',
  excepciones: 'Excepciones y suspensiones',
  agregar: 'Agregar excepción',
};
