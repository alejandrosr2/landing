import { useEffect, useState } from 'react';
import "./hero.css";

const Hero = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`bg-[#121212] relative w-full md:w-[60%] max-w-full md:max-w-[60%] p-2 md:p-5 md:left-[20%] text-center transition-all duration-500 ${scrolled ? 'scrolled' : ''} hero`}>
            <h1 className="text-3xl p-2 ">
                <span >EL PODER DE</span>
                <span className="font-bold block text-4xl">la Imagen</span>
            </h1>
            <h2 className="block font-bold p-2 text-xl ">Fotografía y vídeo como arte creativo</h2>
            <p className="p-2 text-lg text-center">
                Atrevidos, diferentes y emocionantes. A través de la creación de contenido audiovisual, contamos historias que conectan a tu cliente con tu marca. Comunicamos los valores y la identidad de tu empresa con fotografía y vídeo personalizados, capturando la esencia de lo que quieres transmitir y multiplicando su impacto. Nuestro trabajo transforma tu imagen corporativa, haciendo que destaque y atraiga más público. Permítenos potenciar tu presencia visual y llevar tu mensaje más lejos que nunca.
            </p>
            <button className='bg-white text-black font-bold p-4 mt-5'>
                <a href="#contact">¿Empezamos?</a>
            </button>
        </div>
    );
}

export default Hero;
