# MØC Coffee — Coffee • Mood • Music

MVP frontend de MØC, una experiencia digital que conecta café de especialidad, música y estados de ánimo. El proyecto incluye Mood Lab, catálogo, detalle configurable, carrito persistente y checkout simulado.

> Los productos, productores, precios, historias comerciales y disponibilidad son datos de demostración. No hay pagos, reservas ni envío de formularios reales.

## Estado

- Aplicación responsive en React + TypeScript.
- Carrito persistente mediante `localStorage`.
- Navegación compatible con GitHub Pages mediante `HashRouter`.
- Workflow de despliegue preparado para `main`.
- URL pública esperada: <https://musicoffeecol.github.io/moc-coffee/>

## Tecnologías

- Vite
- React
- TypeScript estricto
- React Router
- CSS convencional, sin framework visual
- GitHub Actions y GitHub Pages

## Requisitos

- Node.js 22 o una versión LTS compatible.
- npm 10 o superior.

## Instalación y desarrollo

```bash
npm install
npm run dev
```

## Validación y build

```bash
npm run lint
npm run build
npm run preview
```

Vite genera la salida en `dist/` y usa `base: '/moc-coffee/'` para resolver correctamente los activos bajo el subdirectorio de GitHub Pages.

## Despliegue

El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) se ejecuta al hacer push a `main` o manualmente. Instala con `pnpm install --frozen-lockfile`, ejecuta lint y build, sube `dist` y publica con las acciones oficiales de GitHub Pages.

El repositorio conserva `pnpm-lock.yaml` para instalaciones reproducibles en CI. Los comandos `npm` anteriores siguen siendo válidos para desarrollo local; el workflow usa `pnpm install --frozen-lockfile` porque el entorno inicial no incluía `package-lock.json`.

En la configuración del repositorio, GitHub Pages debe usar **GitHub Actions** como fuente. El workflow no utiliza una rama `gh-pages`.

## Estructura

```text
src/
├── cart/          Estado persistente del carrito
├── components/    Componentes reutilizables
├── data/          Productos, moods y contenido mock
├── pages/         Rutas principales y editoriales
├── App.tsx        Rutas y layout global
└── styles.css     Sistema visual y responsive
public/
└── brand/         Activos oficiales suministrados en Drive
```

## Limitaciones del MVP

- Sin backend, autenticación, inventario ni pagos.
- Los formularios no transmiten ni conservan datos personales.
- Las playlists enlazan a Spotify como demostración; no usan su API.
- Los visuales de producto son ilustraciones editoriales SVG, no fotografías definitivas.
- El carrito persiste solo en el navegador actual.

## Próximos pasos

1. Confirmar catálogo, productores, precios y disponibilidad.
2. Sustituir visuales demostrativos por fotografía optimizada con licencias verificadas.
3. Validar contenidos legales, privacidad y condiciones comerciales.
4. Integrar backend, inventario y pagos únicamente en una fase aprobada aparte.
5. Añadir pruebas automatizadas de UI y auditoría con Lighthouse/axe en CI.
