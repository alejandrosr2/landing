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
        <div className={`bg-[#121212] relative w-[60%] max-w-[60%] p-5 left-[20%] text-center transition-all duration-500 ${scrolled ? 'scrolled' : ''} hero`}>
            <h1 className="text-3xl p-2">
                <span>EL PODER DE</span>
                <span className="font-bold block text-4xl">la Imagen</span>
            </h1>
            <h2 className="block font-bold p-2 text-xl">Fotografía y vídeo como arte creativo</h2>
            <p className="p-2 text-lg">
                Atrevida, diferente, emocionante. A través de la creación de contenido audiovisual contamos historias que permitan a tu cliente conectar con tu marca. Comunicamos los valores de tu empresa y tu imagen corporativa a través de la fotografía y el vídeo más personal. Captamos la esencia de lo que quieres comunicar y multiplicamos su impacto.
            </p>
            <button className='bg-white text-black font-bold p-4 mt-5'>¿Empezamos?</button>
        </div>
    );
}

export default Hero;
