import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Playground } from "./components/Playground";
import LandPage from "./pages/LandPage";
import UserConfig from "./pages/UserConfig";
import UserNotification from "./pages/UserNotification";
import Services from "./pages/Services";

import Navigation, { Page } from "./components/Navigation";

const pagesRoutes: Page[] = [
  {
    path: "/notifications",
    element: <UserNotification/>,
    name: "Notificações"
  },
  {
    path: "/userconfig",
    element: <UserConfig />,
    name: "Configurações"
  },
  {
    path: "/services",
    element: <Services />,
    name: "Serviços"
  },
];

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Playground />,
  },
  {
    path: "/",
    element: <Navigation pages={pagesRoutes} />,
    children: pagesRoutes,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
