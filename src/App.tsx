import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import UserConfig from "./pages/UserConfig";
import UserNotification from "./pages/UserNotification";
import Services from "./pages/Services";

import Navigation from "./components/Navigation";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Test from "./pages/Test";
import TestOpen from "./pages/TestOpen";

const router = createBrowserRouter([
  //remover esse primeiro depois
  {
    path: "/testing",
    element: <Sidebar />,
  },
  {
    path: "*",
    element: <Navigate to="/portal/home" />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/portal",
    element: <Navigation />,
    children: [
      {
        path: "/portal/home",
        element: <Home />,
      },
      {
        path: "/portal/notifications",
        element: <UserNotification />,
      },
      {
        path: "/portal/userconfig",
        element: <UserConfig />,
      },
      {
        path: "/portal/services",
        element: <Services />,
      },
      //dependendo do usuario ao abrir o teste seja na pagina inicial(Test) ou na pagina de visualizacao (TestOpen)
      //o prova/teste vai se moldar primeiro checando se o usuario eh um aluno ou um professor e depois se ele tem permisao ou nao para
      //ver, acessar, modificar, responder a prova/teste
      {
        path: "/portal/test/:testeid",
        element: <Test />,
      },
      {
        path: "/portal/test/:testeid/open",
        element: <TestOpen />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
