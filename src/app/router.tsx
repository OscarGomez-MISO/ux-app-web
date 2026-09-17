import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { appRoutes } from './routes'
import { CleanupScreen } from '../screens/w08-cleanup/CleanupScreen'
import { CreateAlertScreen } from '../screens/w03-create-alert/CreateAlertScreen'
import { DashboardScreen } from '../screens/w01-dashboard/DashboardScreen'
import { HistoryScreen } from '../screens/w07-history/HistoryScreen'
import { IntegrationsScreen } from '../screens/w06-integrations/IntegrationsScreen'
import { LocationsScreen } from '../screens/w05-locations/LocationsScreen'
import { NotFoundScreen } from '../screens/not-found/NotFoundScreen'
import { PlanningScreen } from '../screens/w02-planning/PlanningScreen'
import { RoutinesScreen } from '../screens/w04-routines/RoutinesScreen'
import { SettingsScreen } from '../screens/w09-settings/SettingsScreen'
import { TemplatesScreen } from '../screens/w10-templates/TemplatesScreen'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: appRoutes.dashboard, element: <DashboardScreen /> },
      { path: appRoutes.planning, element: <PlanningScreen /> },
      { path: appRoutes.createAlert, element: <CreateAlertScreen /> },
      { path: appRoutes.routines, element: <RoutinesScreen /> },
      { path: appRoutes.locations, element: <LocationsScreen /> },
      { path: appRoutes.integrations, element: <IntegrationsScreen /> },
      { path: appRoutes.history, element: <HistoryScreen /> },
      { path: appRoutes.cleanup, element: <CleanupScreen /> },
      { path: appRoutes.settings, element: <SettingsScreen /> },
      { path: appRoutes.templates, element: <TemplatesScreen /> },
      { path: '*', element: <NotFoundScreen /> },
    ],
  },
])
