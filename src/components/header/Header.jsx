import { useState } from "react";
import { motion } from "framer-motion";
import city from "../../assets/city.webp";
import { RiAlignJustify, RiCloseLine } from "react-icons/ri";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative min-h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center z-0 min-h-screen"
                style={{ backgroundImage: `url(${city})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            ></div>
            <div className="relative z-10 flex flex-col items-center min-h-screen">
                <div className="fixed top-0 left-0 w-full flex items-center justify-between py-5 pl-5 pr-5 md:pl-24 md:pr-24 bg-black bg-opacity-70 border-b border-white border-opacity-20">
                    <h1 className="text-2xl font-extrabold text-white">
                        <a href="#header">BrandVision</a>
                    </h1>
                    <nav className="hidden md:flex">
                        <ul className="flex gap-10 font-bold text-gray-300">
                            <li><a href="#aboutUs" className="hover:text-white">Sobre nosotros</a></li>
                            <li>|</li>
                            <li><a href="#services" className="hover:text-white">Servicios</a></li>
                            <li>|</li>
                            <li><a href="#proyects" className="hover:text-white">Proyectos</a></li>
                            <li>|</li>
                            <li><a href="#contact" className="hover:text-white">Contacto</a></li>
                        </ul>
                    </nav>
                    <div className="flex md:hidden">
                        <button className="font-bold text-2xl text-gray-300 hover:text-white" onClick={toggleMenu}>
                            {isMenuOpen ? <RiCloseLine /> : <RiAlignJustify />}
                        </button>
                    </div>
                </div>
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: isMenuOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden fixed top-[72.5px] left-0 w-full bg-black bg-opacity-70 border-b border-white border-opacity-20 z-20 md:hidden"
                >
                    {isMenuOpen && (
                        <ul className="flex flex-col gap-5 p-5 font-bold text-gray-300">
                            <li><a href="#aboutUs" className="hover:text-white" onClick={toggleMenu}>Sobre nosotros</a></li>
                            <li><a href="#services" className="hover:text-white" onClick={toggleMenu}>Servicios</a></li>
                            <li><a href="#proyects" className="hover:text-white" onClick={toggleMenu}>Proyectos</a></li>
                            <li><a href="#contact" className="hover:text-white" onClick={toggleMenu}>Contacto</a></li>
                        </ul>
                    )}
                </motion.div>
                <div className="flex-1"></div> {/* Spacer to push the content to the top */}
            </div>
        </div>
    );
};

export default Header;
