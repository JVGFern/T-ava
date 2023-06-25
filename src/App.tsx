import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import UserConfig from "./pages/UserConfig";
import UserNotification from "./pages/UserNotification";
import Services from "./pages/Services";

import Navigation from "./components/Navigation";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Sidebar />,
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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
