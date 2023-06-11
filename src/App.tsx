import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandPage from "./pages/LandPage";

import UserConfig from "./pages/UserConfig";
import UserNotification from "./pages/UserNotification";
import Services from "./pages/Services";

import NavMenu, { Page } from "./templates/NavMenu";

const pagesRoutes: Page[] = [
  {
    path: "/notifications",
    element: <UserNotification />,
    name: "Notificações",
  },
  {
    path: "/userconfig",
    element: <UserConfig />,
    name: "Configurações",
  },
  {
    path: "/services",
    element: <Services />,
    name: "Serviços",
  },
];

const router = createBrowserRouter([
  {
    path: "/test",
    element: <LandPage />,
  },
  {
    path: "/",
    element: <NavMenu name="T-ava" pages={pagesRoutes} />,
    children: pagesRoutes,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
