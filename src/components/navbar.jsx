import "../styles/navbar.css";
import React, { useRef } from "react";
import { TextTitle, TextParagraphNormalSmall} from "./texts";
import { ButtonCommon } from "./buttons";
import { Link } from "react-router-dom";
import { getIsLoggedIn, getName } from "../services/auth";
import { useAuth } from "../services/authProvider";

const Navbar = () => {
  /* is Logined */
  const isAuthenticated = getIsLoggedIn();

  // Utiliza useRef para obtener referencias a los elementos del DOM
  const toggleBtnRef = useRef(null);
  const toggleBtnIconRef = useRef(null);
  const dropDownMenuRef = useRef(null);

  // Manejador del evento click para el botón de alternancia
  const handleToggle = () => {
    const dropDownMenu = dropDownMenuRef.current;
    if (dropDownMenu) {
      dropDownMenu.classList.toggle("open");
      const isOpen = dropDownMenu.classList.contains("open");
      const toggleBtnIcon = toggleBtnIconRef.current;
      if (toggleBtnIcon) {
        // Actualizar la clase según el estado del menú desplegable
        toggleBtnIcon.className = isOpen
          ? "fa-solid fa-xmark"
          : "fa-solid fa-bars";
      }
    }
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src="/img/logo.png" alt="Logo"></img>
          <TextTitle>Trabook</TextTitle>
        </div>

        <ul className="links">
          <li>
            <Link activeClass="active" smooth spy to="/">
              Home
            </Link>
          </li>

          <li>
            <Link activeClass="active" smooth spy to="about">
              About
            </Link>
          </li>

          <li>
            <Link activeClass="active" smooth spy to="skills">
              Destination
            </Link>
          </li>

          <li>
            <Link activeClass="active" smooth spy to="projects">
              Tour
            </Link>
          </li>

          <li>
            <Link activeClass="active" smooth spy to="/loginsignup">
              Blog
            </Link>
          </li>
        </ul>
        <div className="action_btn">
          {!isAuthenticated ? (
            <>
             <Link activeClass="active" smooth spy to="/loginsignup">
             <ButtonCommon text={"Login"} typeForm={"outline"}></ButtonCommon>
           </Link>
           <Link activeClass="active" smooth spy to="/loginsignup">
             <ButtonCommon text={"Sign Up"} typeForm={"fill"}></ButtonCommon>
           </Link>
           </>
          ) : (
            <Link activeClass="active" smooth spy to="/profile">
             <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <TextParagraphNormalSmall style={{color: "#222"}}>{getName()}</TextParagraphNormalSmall>
            <img src="/img/avatar-people-about.png" style={{width: '40px', height: '40px', borderRadius: '50%'}} ></img>
            </div>
            </Link>
           
          )}
         
        </div>

        <div className="toggle_btn" ref={toggleBtnRef} onClick={handleToggle}>
          <i className="fa-solid fa-bars" ref={toggleBtnIconRef}></i>
        </div>
      </div>

      <div className="dropdown_menu" ref={dropDownMenuRef}>
        <li>
          <Link activeClass="active" smooth spy to="home">
            Home
          </Link>
        </li>

        <li>
          <Link activeClass="active" smooth spy to="about">
            About
          </Link>
        </li>

        <li>
          <Link activeClass="active" smooth spy to="skills">
            Destination
          </Link>
        </li>

        <li>
          <Link activeClass="active" smooth spy to="projects">
            Tour
          </Link>
        </li>

        <li>
          <Link activeClass="active" smooth spy to="projects">
            Blog
          </Link>
        </li>
        <div className="action_btn">
        {!isAuthenticated  ? (
            <>
             <Link activeClass="active" smooth spy to="/loginsignup">
             <ButtonCommon text={"Login"} typeForm={"outline"}></ButtonCommon>
           </Link>
           <Link activeClass="active" smooth spy to="/loginsignup">
             <ButtonCommon text={"Sign Up"} typeForm={"fill"}></ButtonCommon>
           </Link>
           </>
          ) : (
            <Link activeClass="active" smooth spy to="/profile">
             <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <TextParagraphNormalSmall style={{color: "#222"}}>{getName()}</TextParagraphNormalSmall>
            <img src="/img/avatar-people-about.png" style={{width: '40px', height: '40px', borderRadius: '50%'}} ></img>
            </div>
            </Link>
           
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
