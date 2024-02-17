import React, { useContext, useState } from "react";
import { Context } from '../../store/appContext';
import { useNavigate } from "react-router-dom";


import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "../../context";




export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();

  const { store, actions } = useContext(Context);


  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const isTokenPresent = localStorage.getItem("token");

  const logout = async () => {
    await actions.clearToken();
    window.location.reload();
  }

  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${fixedNavbar
        ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
        : "px-0 py-1"
        }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${fixedNavbar ? "mt-1" : ""
              }`}
          >
            <Link to={`/home`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                StarWars
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {page === "home" ? "Inicio" : page === "profile" ? "Perfil" : page === "chathomefix" ? "Mensajes" : page === "about" ? "Acerca de" : page === "politicaprivacidad" ? "Politica de Privacidad" : page === "Contact" ? "Contacto" : page === "questions" ? "Preguntas y Respuestas" : page === "filter" ? "Categorias" : page === "test" ? "Detalle Publicación" : page === "notifications" ? "Nueva Publicación" : "Dashboard"}



            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page === "home" ? "Inicio" : page === "profile" ? "Perfil" : page === "chathomefix" ? "Mensajes" : page === "about" ? "Acerca de" : page === "politicaprivacidad" ? "Politica de Privacidad" : page === "Contact" ? "Contacto" : page === "questions" ? "Preguntas y Respuestas" : page === "filter" ? "Categorias" : page === "test" ? "Detalle Publicación" : page === "notifications" ? "Nueva Publicación" : "Dashboard"}
          </Typography>
        </div>
        <div className="flex items-center">
          {/* <div className="mr-auto md:mr-4 md:w-56">
            <Input label="Search" />
          </div> */}
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>

          {!isTokenPresent && (
            <div>
              <Menu>
                <MenuHandler>
                  <IconButton variant="text" color="blue-gray">
                    <HeartIcon className="h-5 w-5 text-blue-gray-500" />
                  </IconButton>
                </MenuHandler>
                <MenuList className="w-max border-0">
                
                  {store.favorites.map((favorite, index) => (
                    <MenuItem key={index}>
                      {favorite.title}

                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>

            </div>
          )}


          {isTokenPresent && (


            <div>
              <Menu>
                <MenuHandler>
                  <IconButton variant="text" color="blue-gray">
                    <BellIcon className="h-5 w-5 text-blue-gray-500" />
                  </IconButton>
                </MenuHandler>
                <MenuList className="w-max border-0">
                  <MenuItem className="flex items-center gap-3">
                    <Avatar
                      src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
                      alt="item-1"
                      size="sm"
                      variant="circular"
                    />
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-1 font-normal"
                      >
                        <strong>New message</strong> from Laur
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="flex items-center gap-1 text-xs font-normal opacity-60"
                      >
                        <ClockIcon className="h-3.5 w-3.5" /> 13 minutes ago
                      </Typography>
                    </div>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-4">
                    <Avatar
                      src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg"
                      alt="item-1"
                      size="sm"
                      variant="circular"
                    />
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-1 font-normal"
                      >
                        <strong>New album</strong> by Travis Scott
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="flex items-center gap-1 text-xs font-normal opacity-60"
                      >
                        <ClockIcon className="h-3.5 w-3.5" /> 1 day ago
                      </Typography>
                    </div>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-4">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
                      <CreditCardIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-1 font-normal"
                      >
                        Payment successfully completed
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="flex items-center gap-1 text-xs font-normal opacity-60"
                      >
                        <ClockIcon className="h-3.5 w-3.5" /> 2 days ago
                      </Typography>
                    </div>
                  </MenuItem>
                </MenuList>
              </Menu>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={() => setOpenConfigurator(dispatch, true)}
              >
                <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
              </IconButton>
            </div>




          )}


          {isTokenPresent && (

            <Menu>
              <MenuHandler>
                <Avatar
                  variant="circular"
                  alt="tania andrew"
                  className="cursor-pointer w-10 h-10"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </MenuHandler>
              <MenuList>
                <Link to="/dashboard/profile">
                  <MenuItem className="flex items-center gap-2">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM10 5C10 5.53043 9.78929 6.03914 9.41421 6.41421C9.03914 6.78929 8.53043 7 8 7C7.46957 7 6.96086 6.78929 6.58579 6.41421C6.21071 6.03914 6 5.53043 6 5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3C8.53043 3 9.03914 3.21071 9.41421 3.58579C9.78929 3.96086 10 4.46957 10 5ZM8 9C7.0426 8.99981 6.10528 9.27449 5.29942 9.7914C4.49356 10.3083 3.85304 11.0457 3.454 11.916C4.01668 12.5706 4.71427 13.0958 5.49894 13.4555C6.28362 13.8152 7.13681 14.0009 8 14C8.86319 14.0009 9.71638 13.8152 10.5011 13.4555C11.2857 13.0958 11.9833 12.5706 12.546 11.916C12.147 11.0457 11.5064 10.3083 10.7006 9.7914C9.89472 9.27449 8.9574 8.99981 8 9Z"
                        fill="#90A4AE"
                      />
                    </svg>

                    <Typography variant="small" className="font-medium">
                      Mi Perfil
                    </Typography>
                  </MenuItem>
                </Link>


                <Link to="/dashboard/chathomefix/:user_id">
                  <MenuItem className="flex items-center gap-2">


                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0H2ZM2 2H12V9H10L9 11H5L4 9H2V2Z"
                        fill="#90A4AE"
                      />
                    </svg>

                    <Typography variant="small" className="font-medium">
                      Buzón
                    </Typography>
                  </MenuItem>
                </Link>


                <hr className="my-2 border-blue-gray-50" />
                <Link onClick={logout} to="/dashboard/home">
                  <MenuItem className="flex items-center gap-2 ">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                        fill="#90A4AE"
                      />
                    </svg>
                    <Typography variant="small" className="font-medium">
                      Desconectar
                    </Typography>
                  </MenuItem>
                </Link>


              </MenuList>
            </Menu>
          )}





          {/* <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray">
                <BellIcon className="h-5 w-5 text-blue-gray-500" />
              </IconButton>
            </MenuHandler>
            <MenuList className="w-max border-0">
              <MenuItem className="flex items-center gap-3">
                <Avatar
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>New message</strong> from Laur
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 13 minutes ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <Avatar
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>New album</strong> by Travis Scott
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 1 day ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
                  <CreditCardIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    Payment successfully completed
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 2 days ago
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu> */}
          {/* <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
          </IconButton> */}
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
