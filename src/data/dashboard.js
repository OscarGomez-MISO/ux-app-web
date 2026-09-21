// Textos literales del proyecto. Ninguna pantalla escribe cadenas sueltas en el JSX.
// Criterio de entrega: los textos son los reales del proyecto, no relleno.


export const bienvenida = {
  titulo: 'Bienvenido',
  desc: 'Empieza creando tu primera alerta o revisando las que ya tienes.',
  ocultar: 'Ocultar',
  accion: 'Nueva alerta',
};

export const metricas = [
  { cifra: '8',  nombre: 'Pendientes' },
  { cifra: '3',  nombre: 'Críticas' },
  { cifra: '24', nombre: 'Completadas' },
  { cifra: '12', nombre: 'Pospuestas' },
];

export const proximas = [
  { titulo: 'Tomar la medicación', desc: 'Hoy · 6:00 p. m. · Casa',                   estado: 'critica' },
  { titulo: 'Recoger receta',      desc: 'Al llegar a Farmacia',                      estado: 'pendiente' },
  { titulo: 'Beber agua',          desc: 'Cada 6 horas · pospuesta 2 veces',          estado: 'reprogramada' },
  { titulo: 'Llamar al médico',    desc: 'Mañana · antes de la cita de 4:00 p. m.',   estado: 'pendiente' },
];

export const resumen = {
  rotulo: 'CUMPLIMIENTO · 7 DÍAS',
  cifra: '82 %',
  desc: '24 de 29 alertas cumplidas a tiempo',
  avisoDepuracion: 'Tienes 14 alarmas sin usar desde hace más de 90 días.',
  accionDepuracion: 'Revisar en Depuración',
};

export const verPendientes = 'Ver pendientes';
