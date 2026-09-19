// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const marca = 'Alarmas';

export const menu = [
  { id: 'inicio',        label: 'Inicio',        icono: 'home',                   ruta: '/' },
  { id: 'recordatorios', label: 'Recordatorios', icono: 'notification_important', ruta: '/crear-alerta' },
  { id: 'planificacion', label: 'Planificación', icono: 'event_note',             ruta: '/planificacion' },
  { id: 'integraciones', label: 'Integraciones', icono: 'sync',                   ruta: '/integraciones' },
  { id: 'configuracion', label: 'Configuración', icono: 'settings',               ruta: '/privacidad' },
];

// Qué entrada del menú se ve activa en cada ruta.
export const seccionDeRuta = {
  '/': 'inicio',
  '/crear-alerta': 'recordatorios',
  '/historico': 'recordatorios',
  '/depuracion': 'recordatorios',
  '/planificacion': 'planificacion',
  '/rutinas': 'planificacion',
  '/lugares': 'planificacion',
  '/plantillas': 'planificacion',
  '/integraciones': 'integraciones',
  '/privacidad': 'configuracion',
};

export const subnav = {
  planificacion: [
    { label: 'Semana',     ruta: '/planificacion' },
    { label: 'Rutinas',    ruta: '/rutinas' },
    { label: 'Lugares',    ruta: '/lugares' },
    { label: 'Plantillas', ruta: '/plantillas' },
  ],
  recordatorios: [
    { label: 'Crear alerta',             ruta: '/crear-alerta' },
    { label: 'Histórico y cumplimiento', ruta: '/historico' },
    { label: 'Depuración',               ruta: '/depuracion' },
  ],
};

export const titulos = {
  '/': 'Inicio',
  '/planificacion': 'Planificación semanal',
  '/crear-alerta': 'Crear alerta',
  '/rutinas': 'Rutinas y recurrencias',
  '/lugares': 'Ubicaciones guardadas',
  '/integraciones': 'Integraciones y dispositivos',
  '/historico': 'Histórico y cumplimiento',
  '/depuracion': 'Depuración de alarmas',
  '/privacidad': 'Privacidad y permisos',
  '/plantillas': 'Plantillas y cápsulas reutilizables',
};

export const sincronizacion = 'Sincronizado hace 3 min';

// CW-01. Permanente, no se puede cerrar.
export const franjaRoles =
  'La web planifica, organiza y depura. El móvil recibe la alerta y confirma que se cumplió.';
