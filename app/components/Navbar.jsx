"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from "@/app/components/MenuOverlay";

{/* Navbar Setup */}
const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact"
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > prevScrollPos && showNavbar) {
                setShowNavbar(false); // Ocultar a barra de navegação quando rolar para baixo
            } else if (currentScrollPos < prevScrollPos && !showNavbar) {
                setShowNavbar(true); // Mostrar a barra de navegação quando rolar para cima
            }
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, showNavbar]);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
        setShowNavbar(!showNavbar);
    };

    return (
        <nav
            className={`fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95 transition-all duration-300 ${
                showNavbar ? "" : "-translate-y-full"
            }`}
        >
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4">
                <Link href={'/'} className="text-lg md:text-5xl text-white font-semibold">LOGO</Link>
                <div className="mobile-menu block md:hidden">
                    <button
                        onClick={toggleNavbar}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                    >
                        {navbarOpen ? (
                            <XMarkIcon className="h-5 w-5" />
                        ) : (
                            <Bars3Icon className="h-5 w-5" />
                        )}
                    </button>
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:pd-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    );
};

export default Navbar;