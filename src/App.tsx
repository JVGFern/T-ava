import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoGear, GoBell, GoSignOut,  GoBook} from "react-icons/go";


import LandPage from "./pages/LandPage";

import UserConfig from "./pages/UserConfig";
import UserNotification from "./pages/UserNotification";
import Services from "./pages/Services";

import NavMenu, { Page } from "./templates/NavMenu";

const pagesRoutes: Page[] = [
  {
    path: "/notifications",
    element: <UserNotification/>,
    name: "Notificações",
    icon: <GoBell className="float-left block"/>
  },
  {
    path: "/userconfig",
    element: <UserConfig />,
    name: "Configurações",
    icon: <GoGear className="float-left block"/>
  },
  {
    path: "/services",
    element: <Services />,
    name: "Serviços",
    icon: <GoBook className="float-left block"/>
  },
];

const router = createBrowserRouter([
  {
    path: "/test",
    element: <LandPage />,
  },
  {
    path: "/",
    element: <NavMenu name="T-AVA" pages={pagesRoutes} />,
    children: pagesRoutes,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
