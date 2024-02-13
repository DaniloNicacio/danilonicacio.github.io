"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";

const Navbar = () => {
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

    return (
        <nav
            className={`fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95 transition-all duration-300 ${
                showNavbar ? "" : "-translate-y-full"
            } md:block hidden`}
        >
            <div className="navbar bg-primary-100">
                <div className="flex-1">
                    <Link href={"/"} className="btn xl:ml-72 btn-ghost xl:text-xl sm:text-sm">DN</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu xl:mr-72 xl:gap-12 menu-horizontal px-1 xl:text-lg">
                        <li><Link href={"#about"}>About</Link></li>
                        <li><Link href={"#projects"}>Projects</Link></li>
                        <li><Link href={"#contact"}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
