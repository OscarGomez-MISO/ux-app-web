// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const entradilla =
  'Aquí se controla qué datos usa la aplicación y qué dispositivos tienen acceso a tus alertas.';

export const filas = [
  { titulo: 'Permisos concedidos',         desc: 'Ubicación, notificaciones y micrófono',        accion: 'Revisar' },
  { titulo: 'Uso de la ubicación',         desc: 'Solo mientras la aplicación está en uso',      accion: 'Cambiar' },
  { titulo: 'Dispositivos vinculados',     desc: '3 dispositivos activos · gestionar en Integraciones', accion: 'Ir a Integraciones', ruta: '/integraciones' },
  { titulo: 'Datos guardados en la nube',  desc: 'Alertas, historial y reglas de repetición',    accion: 'Ver detalle' },
  { titulo: 'Compartir datos con terceros',desc: 'No se comparte ningún dato con terceros',      switch: false },
];

export const zonaDestructiva = {
  titulo: 'Eliminar la cuenta y todos los datos',
  desc: 'Se borran las alertas, el historial y las reglas. Esta acción no se puede deshacer.',
  accion: 'Eliminar',
};

export const retencion = {
  titulo: 'Qué datos se guardan y por cuánto tiempo',
  nota: 'Todo se borra al eliminar la cuenta',
  filas: [
    { dato: 'Alertas y reglas de repetición',    plazo: 'Mientras la alerta exista', nota: 'Se puede exportar' },
    { dato: 'Historial de cumplimiento',         plazo: '24 meses',                  nota: 'Se puede exportar' },
    { dato: 'Lugares guardados',                 plazo: 'Mientras el lugar exista',  nota: 'No sale del dispositivo' },
    { dato: 'Grabaciones de mensaje guiado',     plazo: 'Mientras la alerta exista', nota: 'Se puede borrar una a una' },
  ],
};
