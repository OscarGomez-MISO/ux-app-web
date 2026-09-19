// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const chips = ['Todas', 'Completadas', 'Reprogramadas', 'No realizadas'];
export const periodo = 'Últimos 30 días';

export const columnas = ['TÍTULO', 'TIPO', 'ÚLTIMA ACTIVACIÓN', 'VECES POSPUESTA', 'ESTADO'];

// CW-04. La columna «Veces pospuesta» es la corrección: sin ella no había forma
// de saber cuántas veces se había reprogramado una alerta.
export const filas = [
  { titulo: 'Pagar administración',      tipo: 'Hora exacta',        activacion: '14/04/2026 · 6:00 p. m.',  pospuesta: 0, estado: 'completada' },
  { titulo: 'Tomar medicamento',         tipo: 'Cada cierto tiempo', activacion: 'Hoy · 8:00 a. m.',         pospuesta: 0, estado: 'completada' },
  { titulo: 'Entrega de proyecto',       tipo: 'Antes de un evento', activacion: '12/05/2026 · 10:15 a. m.', pospuesta: 2, estado: 'reprogramada' },
  { titulo: 'Recoger paquete',           tipo: 'Al llegar a un lugar', activacion: 'Al llegar a Casa',       pospuesta: 1, estado: 'pendiente' },
  { titulo: 'Cita con el tutor',         tipo: 'Antes de un evento', activacion: '09/05/2026 · 3:00 p. m.',  pospuesta: 3, estado: 'noRealizada' },
  { titulo: 'Renovar la póliza',         tipo: 'Hora exacta',        activacion: '18/05/2026 · 9:00 a. m.',  pospuesta: 0, estado: 'pendiente' },
  { titulo: 'Enviar el reporte',         tipo: 'Hora exacta',        activacion: '15/05/2026 · 9:00 a. m.',  pospuesta: 1, estado: 'completada' },
  { titulo: 'Llamar a la administración',tipo: 'Sin momento fijo',   activacion: '—',                        pospuesta: 0, estado: 'pendiente' },
];

export const paginacion = {
  texto: 'Mostrando 8 de 24 registros',
  anterior: 'Anterior',
  siguiente: 'Siguiente',
};

export const cumplimiento = {
  titulo: 'Cumplimiento de los últimos 30 días',
  nota: '24 registros en total',
  columnas: [
    { cifra: '14 completadas',   porcentaje: '58 % del total', desc: 'A tiempo o antes' },
    { cifra: '5 reprogramadas',  porcentaje: '21 % del total', desc: 'Pospuestas al menos una vez' },
    { cifra: '3 no realizadas',  porcentaje: '12 % del total', desc: 'Vencidas sin respuesta' },
    { cifra: '2 pendientes',     porcentaje: '9 % del total',  desc: 'Aún dentro del plazo' },
  ],
};

export const verDetalle = 'Ver detalle';
