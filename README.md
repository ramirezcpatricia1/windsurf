# FutbolApp ⚽ (React Native)

Aplicación móvil desarrollada con **React Native** para seguir partidos de fútbol, equipos, ligas y estadísticas en tiempo real.

## 🎯 Objetivo

Ofrecer a los aficionados al fútbol una forma rápida y atractiva de:

- Ver los partidos del día (en vivo, próximos y finalizados).
- Consultar resultados y estadísticas clave.
- Seguir sus equipos y ligas favoritas.

## 🧑‍💻 Tech Stack

- **Framework:** React Native (recomendado con Expo)
- **Navegación:** `@react-navigation/native` + Bottom Tabs + Stack
- **Gestión de estado:** React Context + Hooks (con opción futura a Zustand/Redux)
- **HTTP Client:** `axios` o `fetch` nativo
- **Almacenamiento local:** `@react-native-async-storage/async-storage`
- **Estilos / UI:**
  - `styled-components` o
  - `react-native-paper` / `nativewind` (Tailwind para RN)
- **API de datos de fútbol:** proveedor externo (por ejemplo, API-Football o similar)

## 📱 Funcionalidades (MVP)

- **Home**
  - Lista de partidos del día.
  - Estado del partido: en vivo, próximo, finalizado.
- **Detalle de partido**
  - Marcador y tiempo.
  - Alineaciones.
  - Eventos: goles, tarjetas, cambios.
  - Estadísticas básicas.
- **Ligas y equipos**
  - Listado de ligas disponibles.
  - Detalle de liga: tabla de posiciones básica (si la API lo permite).
  - Detalle de equipo: escudo, plantilla, últimos resultados.
- **Favoritos**
  - Marcar equipos y ligas como favoritos.
  - Ver un feed filtrado solo por favoritos.
- **Perfil**
  - Ajustes de idioma.
  - Tema claro/oscuro.
  - Preferencias generales.

## 🗂 Estructura de carpetas propuesta

```bash
src/
  components/
    MatchCard.tsx
    TeamCard.tsx
    LeagueCard.tsx
    StatRow.tsx
  screens/
    HomeScreen.tsx
    MatchDetailScreen.tsx
    LeaguesScreen.tsx
    LeagueDetailScreen.tsx
    TeamDetailScreen.tsx
    FavoritesScreen.tsx
    ProfileScreen.tsx
  navigation/
    BottomTabs.tsx
    RootStack.tsx
  services/
    apiClient.ts
    matchesService.ts
    teamsService.ts
    leaguesService.ts
  context/
    FavoritesContext.tsx
    SettingsContext.tsx
  theme/
    colors.ts
    spacing.ts
    typography.ts
  utils/
    formatDate.ts
    formatScore.ts
```

## 🚀 Primeros pasos (con Expo)

```bash
# Crear el proyecto
npx create-expo-app futbol-app
cd futbol-app

# Instalar navegación
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context

# (Opcional) Instalar styled-components
npm install styled-components
npm install --save-dev @types/styled-components-react-native
```

Luego, crea dentro de `src/` las carpetas descritas y empieza por:

- Configurar `navigation/RootStack.tsx` y `navigation/BottomTabs.tsx`.
- Implementar `HomeScreen.tsx` con datos simulados (mock) antes de conectar la API.
- Crear `services/apiClient.ts` para centralizar las llamadas HTTP.

## 📌 Roadmap

- **v0.1.0 (MVP):**
  - Listado de partidos, detalle de partido, ligas, equipos y favoritos.
- **v0.2.0:**
  - Notificaciones push (goles, inicio/fin).
  - Estadísticas avanzadas y filtros.
- **v1.0.0:**
  - Sección social / comunidad.
  - Modo predicciones / quinielas.

---

## 📄 Licencia

Este proyecto puede usar la licencia que prefieras (MIT, Apache-2.0, etc.). Ajusta esta sección según tus necesidades.

