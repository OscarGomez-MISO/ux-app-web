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
  criticidad: ['Normal', 'Alta', 'Crítica'],
};

export const textosFormulario = {
  seccionProgramacion: 'Qué y cuándo',
  seccionContexto: 'Contexto y aviso',
  titulo: 'Título',
  queHacer: '¿Qué debes hacer?',
  disparador: 'Disparador',
  condicional: 'SE MUESTRA SEGÚN EL DISPARADOR ELEGIDO',
  fecha: 'Fecha',
  hora: 'Hora',
  lugar: 'Lugar',
  mensajeGuiado: 'Mensaje guiado',
  listaPasos: 'Lista de pasos',
  canales: 'Canales de aviso',
  repeticion: 'Repetición',
  criticidad: 'Criticidad',
  guardar: 'Guardar',
  cancelar: 'Cancelar',
  vistaPrevia: 'Vista previa de la alerta en el teléfono',
  errorTitulo: 'El título es obligatorio',
  pendiente: 'Pendiente',
};

export const selectorFecha = {
  titulo: 'Seleccionar fecha',
  mes: 'Mayo 2026',
  meses: [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
  ],
  diasSemana: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
  anterior: 'Mes anterior',
  siguiente: 'Mes siguiente',
  cancelar: 'Cancelar',
  aceptar: 'Aceptar',
};

export const selectorHora = {
  titulo: 'Seleccionar hora',
  valor: '6:30',
  periodo: 'p. m.',
  cambiarMinutos: 'Cambiar minutos',
  cancelar: 'Cancelar',
  aceptar: 'Aceptar',
};

export const ubicacion = {
  nombre: 'Casa',
  regla: 'Al llegar a Casa',
  detalle: 'Permanencia mínima: 5 minutos',
  accion: 'Gestionar lugares...',
};

export const confirmacionDescartar = {
  titulo: '¿Descartar los cambios?',
  detalle:
    'La alerta «Pagar administración» no se ha guardado. Si sales ahora se pierde lo que llevas escrito.',
  nota: 'Guardar no la activa todavía: puedes seguir ajustándola después.',
  seguir: 'Seguir editando',
  descartar: 'Descartar',
};

export const guardado = 'Alerta creada para el 15/05 a las 6:00 p. m.';
export const nuevoPaso = 'Enviar el comprobante por correo';
