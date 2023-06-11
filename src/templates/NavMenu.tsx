import { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

export type Page = {
  path: string;
  element: ReactNode;
  name: string;
};

export interface PropsnavPage {
  page: Page;
}

export interface PropsNavMenu {
  name: string;
  pages: Page[];
}

export function NavMenuPage({ page }: PropsnavPage) {
  return (
    <Link className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" to={page.path}>
      {page.name}
    </Link>
  );
}

export function NavMenuHeader({ name, pages }: PropsNavMenu) {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-lg space-y-2">
      <Link to="/" className="flex space-x-4">
        <img src="" className="object-scale-down h-20 w-20 rounded-full"></img>
        <div className="dark:text-white flex flex-col text-gray-900 space-y-2">
          <a>nome do usuario</a>
          <a>email</a>
        </div>
      </Link>


      <nav className="space-y-2 font-medium">
        {pages.map((page) => (
          <NavMenuPage page={page} />
        ))}
      </nav>
    </div>
  );
}

export default function NavMenu({ name, pages }: PropsNavMenu) {
  return (
    <>
      <aside className="m-5 top-0 left-0 z-40 w-1/5 h-screen transition-transform -translate-x-full sm:translate-x-0 ">
        <NavMenuHeader name={name} pages={pages} />
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}
