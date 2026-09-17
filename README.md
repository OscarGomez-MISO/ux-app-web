# UXAlarma Web

Base frontend en React para implementar los mockups web del proyecto
**UXAlarma-Oscar-Jose**. El repositorio contiene la estructura, las rutas y los
estilos globales mínimos; las pantallas están preparadas como placeholders para
desarrollarlas de forma incremental a partir de Figma.

## Tecnologías

- React
- TypeScript
- Vite
- React Router
- ESLint

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Ejecución local

```bash
npm install
npm run dev
```

La aplicación estará disponible, por defecto, en <http://localhost:5173>.

## Comandos disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Comprueba tipos y genera la versión de producción
npm run lint     # Ejecuta el análisis estático
npm run preview  # Sirve localmente la versión compilada
```

## Estructura

```text
src/
|-- app/          # Configuración de la aplicación y rutas
|-- components/   # Componentes compartidos
|-- screens/      # Pantallas W01-W10, una carpeta por pantalla
`-- styles/       # Variables de diseño y estilos globales
```

Las rutas públicas se declaran en `src/app/routes.ts` y su asociación con cada
pantalla se realiza en `src/app/router.tsx`. Esta separación permite repartir
las pantallas entre integrantes sin duplicar rutas ni modificar el arranque de
la aplicación.

## Referencia de diseño

Los mockups se encuentran en el archivo de Figma
[UXAlarma-Oscar-Jose](https://www.figma.com/design/btnoEDsUZrWU97NXOGIO41/UXAlarma-Oscar-Jose?node-id=331-4457&t=6IZlufviAY9zYL8x-1).

Antes de abrir un pull request se recomienda ejecutar:

```bash
npm run lint
npm run build
```
