// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const disparadores = [
  { valor: 'Hora exacta',          desc: 'Suena a una hora que tú eliges' },
  { valor: 'Al llegar a un lugar', desc: 'Suena cuando entras o sales de un sitio' },
  { valor: 'Antes de un evento',   desc: 'Se apoya en tu calendario conectado' },
  { valor: 'Cada cierto tiempo',   desc: 'Se repite en intervalos que tú defines' },
  { valor: 'Sin momento fijo',     desc: 'Queda en pendientes hasta que la atiendas' },
];

// CW-01. Qué campo aplica a qué disparador. Los que no aplican NO se ocultan:
// se atenúan y su texto nombra el disparador elegido.
export const aplica = {
  'Hora exacta':          { fecha: true,  hora: true,  lugar: false },
  'Al llegar a un lugar': { fecha: false, hora: false, lugar: true  },
  'Antes de un evento':   { fecha: true,  hora: false, lugar: false },
  'Cada cierto tiempo':   { fecha: false, hora: true,  lugar: false },
  'Sin momento fijo':     { fecha: false, hora: false, lugar: false },
};

export const textoNoAplica = (disparador) => `No aplica a "${disparador}"`;

export const ejemplo = {
  titulo: 'Pagar administración',
  queHacer: 'Abrir la plataforma y pagar la cuota de mayo',
  disparador: 'Hora exacta',
  fecha: '15/05/2026',
  hora: '6:00 p. m.',
  mensajeGuiado: 'Escribe la instrucción que verás al sonar',
  pasos: ['Abrir la plataforma', 'Consultar el saldo', 'Guardar el comprobante'],
  agregarPaso: 'Agregar paso',
  repeticion: 'Una vez',
  criticidad: 'Crítica',
  vistaPrevia: 'Pagar administración · Vence hoy · 6:00 p. m. · Crítica',
};

export const canales = [
  { label: 'Notificación en el móvil', activo: true },
  { label: 'Correo',                   activo: true },
  { label: 'Reloj conectado',          activo: true },
  { label: 'Sonido persistente',       activo: true },
];

export const opciones = {
  repeticion: ['Una vez', 'Todos los días', 'Cada 6 horas', 'Días laborales', 'Personalizada'],
  criticidad: ['Normal', 'Importante', 'Crítica'],
};
