import { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export type Page = {
  path: string;
  element: ReactNode;
  name: string;
  icon: ReactNode;
};

export interface PropsNavPage {
  page: Page;
  navOpen: boolean;
}

export interface PropsNavMenu {
  name: string;
  pages: Page[];
  navOpen: boolean;
}

export function NavMenuPage({ page, navOpen }: PropsNavPage) {
  return (
    <Link
      className="text-white text-1xl my-1 p-1 hover:bg-satc-menu-option rounded duration-250 inline-flex"
      to={page.path}
    >
      {page.icon}
      <a className={`${!navOpen && "scale-0"}`}>{page.name}</a>
    </Link>
  );
}

export function NavMenuHeader({ pages, navOpen }: PropsNavMenu) {
  return (
    <div className="flex flex-col mt-5">
      {/* <Link to="/" className="">
        <img src="" className="object-scale-down h-20 w-20 rounded-full"></img>
        <div className="">
          <a>nome do usuario</a>
          <a>email</a>
        </div>
      </Link> */}

      {pages.map((page, index) => (
        <NavMenuPage key={index} page={page} navOpen={navOpen} />
      ))}
    </div>
  );
}

//esse Componente serve mais como wrapper para a navegação
//com o conteudo em si doq como menu de navegação
// mudar o nome depois
export default function NavMenu({ name, pages }: PropsNavMenu) {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`bg-satc-green h-screen p-5 pt-8 
          ${navOpen ? "w-72" : "w-20"} duration-300`}
      >
        <div className="inline-flex text-white text-4xl space-x-5">
          <GiHamburgerMenu
            className="cursor-pointer hover:bg-white hover:text-satc-green 
              rounded duration-200 p-0.5 float-left block"
            onClick={() => setNavOpen(!navOpen)}
          />
          <a className={`${!navOpen && "scale-0"}`}>{name}</a>
        </div>
        <NavMenuHeader pages={pages} navOpen={navOpen} />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
