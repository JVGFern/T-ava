import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

export type Page = {
  path: string;
  element: ReactNode;
  name: string;
};

export default function Navigation() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}
