import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavBar = ( {links}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  function responsiveMenu() {
    return (
      <div className="container fixed h-full lg:hidden w-full   bg-gray-700 top-10 text-center">
        <ul className="menu-list flex flex-col text-white gap-7 font-bold text-sm uppercase">
          <li className="menu-list-item px-3 py-3 hover:bg-gray-800">
            <a href="$#">Inicio</a>
          </li>
          <li className="menu-list-item px-3 py-3  hover:bg-gray-800">
            <a href="$#">Productos</a>
          </li>
          <li className="menu-list-item px-3 py-3 hover:bg-gray-800">
            <a href="$#">Contacto</a>
          </li>
        </ul>
        <button className="bg-green-500 hover:bg-green-800 mt-4 p-1 text-sm font-bold text-white rounded-md mr-1">
          Sing Up
        </button>
      </div>
    );
  }

  const ShowResponsiveMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };
  return (
    <div className="flex h-10 flex-row justify-between items-center bg-slate-200">
      <div className="brand-log font-bold p-2 mr-4 inline-flex items-center text-white">
        <a href="$#" className="p-2 mr-4 inline-flex items-center text-black">
          {" "}
          <span className="font-bold  text-green-500">Quick</span>ToGo
        </a>
      </div>

      <div className="hidden lg:flex lg:flex-row items-center ">
        <ul className="menu-list lg:flex lg:flex-row  text-black text-sm font-bold  ">
         
         {links.map(linkName => {
           return <li className="menu-list-item px-3 hover:text-gray-600">
        <Link to={"/"+linkName}>{linkName} </Link>
          </li>
         })}
         
        </ul>

        <button className="bg-green-500 hover:bg-green-800 p-1 text-sm font-bold text-white rounded-md mr-1">
          Sing Up
        </button>
      </div>

      <button
        onClick={() => ShowResponsiveMenu()}
        className="lg:hidden"
      >
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-black h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" text-black h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />{" "}
          </svg>
        )}
      </button>
      {menuOpen ? responsiveMenu() : null}
    </div>
  );
};

export default NavBar;
