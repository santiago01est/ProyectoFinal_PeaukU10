import '../styles/navbar.css';
import React, { useRef } from 'react';
import { Link } from "react-scroll";
import { TextTitle } from './texts';
import { ButtonCommon } from './buttons';
const Navbar = () => {

    // Utiliza useRef para obtener referencias a los elementos del DOM
    const toggleBtnRef = useRef(null);
    const toggleBtnIconRef = useRef(null);
    const dropDownMenuRef = useRef(null);

    // Manejador del evento click para el botón de alternancia
    const handleToggle = () => {
        const dropDownMenu = dropDownMenuRef.current;
        if (dropDownMenu) {
            dropDownMenu.classList.toggle('open');
            const isOpen = dropDownMenu.classList.contains('open');
            const toggleBtnIcon = toggleBtnIconRef.current;
            if (toggleBtnIcon) {
                // Actualizar la clase según el estado del menú desplegable
                toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
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
                    <li><Link activeClass="active" smooth spy to="home">
                        Home
                    </Link></li>

                    <li><Link activeClass="active" smooth spy to="about">
                        About
                    </Link></li>

                    <li><Link activeClass="active" smooth spy to="skills">
                    Destination
                    </Link></li>

                    <li><Link activeClass="active" smooth spy to="projects">
                        Tour
                    </Link></li>

                    <li><Link activeClass="active" smooth spy to="projects">
                        Blog
                    </Link></li>

                </ul>
                <div className="action_btn">
                <ButtonCommon text={'Login'} type={'outline'}><Link activeClass="active" smooth spy to="">
                </Link></ButtonCommon>
                <ButtonCommon text={'Sign Up'} type={'fill'}><Link activeClass="active" smooth spy to="">
                </Link></ButtonCommon>
                </div>
                

                <div className="toggle_btn" ref={toggleBtnRef} onClick={handleToggle}>
                    <i className="fa-solid fa-bars" ref={toggleBtnIconRef}></i>
                </div>
            </div>

            <div className="dropdown_menu" ref={dropDownMenuRef}>
                <li><Link activeClass="active" smooth spy to="home">
                    Home
                </Link></li>

                <li><Link activeClass="active" smooth spy to="about">
                    About me
                </Link></li>

                <li><Link activeClass="active" smooth spy to="skills">
                    Skills
                </Link></li>

                <li><Link activeClass="active" smooth spy to="projects">
                    Projects
                </Link></li>
                <div className="action_btn">
                <ButtonCommon text={'Login'} type={'outline'}><Link activeClass="active" smooth spy to="">
                </Link></ButtonCommon>
                <ButtonCommon text={'Sign Up'} type={'fill'}><Link activeClass="active" smooth spy to="">
                </Link></ButtonCommon>
                </div>
            </div>
        </header>
    )
}

export default Navbar