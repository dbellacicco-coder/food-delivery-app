import React , {useState} from "react";

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);


  function responsiveMenu() {
    return (
      <div className="fixed h-screen lg:hidden w-1/2  sm:w-1/4 bg-gray-700 top-10 text-center">
        <ul className="menu-list flex flex-col text-white font-bold text-sm uppercase">
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
      </div>
    );
  }

  const ShowResponsiveMenu = () => {
     (menuOpen) ? setMenuOpen(false) : setMenuOpen(true)
  }
  return (
      <div className="flex h-10 flex-row justify-between items-center bg-gray-800">
        <div className="brand-log font-bold p-2 mr-4 inline-flex items-center text-white">
          <a href="$#" className="p-2 mr-4 inline-flex items-center text-white uppercase">
            {" "}
            Food Delivery App
          </a>
        </div>

        <ul className="menu-list hidden lg:flex lg:flex-row  text-white text-sm uppercase">
          <li className="menu-list-item px-3">
            <a href="$#">Inicio</a>
          </li>
          <li className="menu-list-item px-3">
            <a href="$#">Productos</a>
          </li>
          <li className="menu-list-item px-3">
            <a href="$#">Contacto</a>
          </li>
        </ul>

        <button onClick={ () =>  (ShowResponsiveMenu())} className="md:hidden lg:hidden">
        {menuOpen ? <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>  : <svg xmlns="http://www.w3.org/2000/svg" class=" text-white h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /> </svg>}
        

        </button>
        {menuOpen ? responsiveMenu() : null}
      </div>
  );
};

export default NavBar;
