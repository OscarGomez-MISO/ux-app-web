// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const entradilla =
  'Conecta los servicios que ya usas. La alerta llega igual aunque no conectes ninguno.';

export const servicios = [
  { icono: 'notification_important', nombre: 'Teléfono',             detalle: 'Android 14 · este dispositivo', estado: 'sincronizado', acciones: ['Desconectar'] },
  { icono: 'schedule',               nombre: 'Reloj conectado',      detalle: 'Galaxy Watch 6',                estado: 'sincronizado', acciones: ['Desconectar'] },
  { icono: 'calendar_today',         nombre: 'Calendario',           detalle: 'Google Calendar',               estado: 'sincronizado', acciones: ['Desconectar'] },
  { icono: 'notes',                  nombre: 'Correo',               detalle: 'Gmail',                         estado: 'sincronizado', acciones: ['Desconectar'] },
  { icono: 'task_alt',               nombre: 'Aplicación de tareas', detalle: 'Google Tasks',                  estado: 'noConectado',  acciones: ['Conectar'] },
  { icono: 'sync',                   nombre: 'Copia en la nube',     detalle: 'Google Drive',                  estado: 'alDia',        acciones: ['Desconectar'] },
];

export const sincronizacion = {
  texto: 'Última sincronización: hoy a las 10:30 a. m.',
  accion: 'Sincronizar ahora',
};

export const permisos = {
  titulo: 'Qué permiso pide cada conexión',
  nota: 'Puedes revocarlos en Privacidad y permisos',
  filas: [
    { servicio: 'Calendario',      pide: 'Leer los eventos del día',      noHace: 'No escribe ni modifica nada' },
    { servicio: 'Correo',          pide: 'Enviar el aviso a tu bandeja',  noHace: 'No lee tus mensajes' },
    { servicio: 'Reloj conectado', pide: 'Vibrar y mostrar la alerta',    noHace: 'No accede a datos de salud' },
    { servicio: 'Copia en la nube',pide: 'Guardar alertas e historial',   noHace: 'No comparte con terceros' },
  ],
};

export const notas = [
  'Si no conectas ningún servicio, la aplicación sigue funcionando: la alerta llega igual al teléfono.',
  'Desconectar un servicio no borra las alertas que ya creaste con él.',
];
