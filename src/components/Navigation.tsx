import { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { GoGear, GoBell, GoSignOut, GoBook} from "react-icons/go";

import ReactLogo from "../assets/react.svg";

export type Page = {
  path: string;
  element: ReactNode;
  name: string;
};

export interface PropsNavigation {
  pages: Page[];
}

export default function NavMenu({ pages }: PropsNavigation) {
  return (
    <div className="flex">
      <Sidebar>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem icon={<img src={ReactLogo} className="logo react" alt="React logo" />}> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <Outlet />
    </div>
  );
}
