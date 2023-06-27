import React, { useEffect } from "react";
import {
  Sidebar as LibSidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
  MenuItemStyles,
} from "react-pro-sidebar";
import { GoGear, GoBell, GoSignOut, GoBook } from "react-icons/go";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarUser } from "./SidebarUser";
import { Badge } from "./Badge";
import { Typography } from "./Typography";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../data/User";
type Theme = "light" | "dark";

const themes = {
  light: {
    LibSidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    LibSidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default function Sidebar() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>("light");

  const userDataJson = localStorage.getItem("userdata");
  let userData: UserData = JSON.parse(userDataJson!);
  useEffect(() => {
    if (userData === null) {
      navigate("/login");      
    }
  });
  const handleOpenNotification = () => {
    navigate("/portal/notifications");
  };

  const handleOpenServices = () => {
    navigate("/portal/services");
  };
  const handleOpenUserconfig = () => {
    navigate("/portal/userconfig");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleOpenTest = (id: number) => {
    navigate(`/portal/test/${id}`);
  };

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes[theme].menu.menuContent, 1)
          : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, 1),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div style={{ display: "flex", height: "100%", direction: "ltr" }}>
      <LibSidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        breakPoint="md"
        backgroundColor={hexToRgba(themes[theme].LibSidebar.backgroundColor, 1)}
        rootStyles={{
          color: themes[theme].LibSidebar.color,
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <SidebarHeader
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            style={{ marginBottom: "5px", marginTop: "16px" }}
          />
          <SidebarUser
            username={userData.username === null ? "" : userData.username}
            userEmail={userData.userEmail === null ? "" : userData.userEmail}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            style={{ marginBottom: "24px", marginTop: "5px" }}
          />
          <div style={{ flex: 1, marginBottom: "32px" }}>
            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem
                icon={<GoBell />}
                onClick={handleOpenNotification}
                suffix={
                  <Badge variant="danger" shape="circle">
                    6
                  </Badge>
                }
              >
                Notificações
              </MenuItem>

              <MenuItem icon={<GoBook />} onClick={handleOpenServices}>
                Serviços
              </MenuItem>

              <MenuItem icon={<GoGear />} onClick={handleOpenUserconfig}>
                Configurações
              </MenuItem>

              <MenuItem icon={<GoSignOut />} onClick={handleLogout}>
                Sair
              </MenuItem>
            </Menu>
            <div
              style={{
                padding: "0 24px",
                marginBottom: "8px",
                marginTop: "32px",
              }}
            >
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
              >
                Materias
              </Typography>
            </div>
            {/* parte gerada automaticamente*/}
            <Menu menuItemStyles={menuItemStyles}>
              <SubMenu
                label="materia"
                icon={""}
                suffix={
                  <Badge variant="danger" shape="circle">
                    6
                  </Badge>
                }
              >
                <MenuItem onClick={() => handleOpenTest(1)}>
                  {" "}
                  Criar Prova{" "}
                </MenuItem>
                <MenuItem onClick={() => handleOpenTest(2)}>
                  {" "}
                  Fazer Prova{" "}
                </MenuItem>
              </SubMenu>
            </Menu>
          </div>
        </div>
      </LibSidebar>
    </div>
  );
}
