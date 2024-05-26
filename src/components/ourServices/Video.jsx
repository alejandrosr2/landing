import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import video from "../../assets/video.webp";

const Video = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const textVariants = {
        hidden: { opacity: 0, y: 20  },
        visible: { opacity: 1, y: 0,  transition: { duration: 1.5 } },
        exit: { opacity: 0, y: 20, transition: { duration: 1.5 } }
    };

    const imageVariants = {
        hidden: { opacity: 0, y: -20  },
        visible: { opacity: 1, y: 0,  transition: { duration: 1.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 1.5 } }
    };

    return (
        <div ref={ref}>
            <div className="flex flex-col-reverse md:flex-row gap-4 pl-[5%] pr-[5%] md:pl-[20%] md:pr-[20%] pt-40">
                <motion.div
                    className="flex-1"
                    initial="hidden"
                    animate={controls}
                    exit="exit"
                    variants={textVariants}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1 className="text-4xl font-bold pb-4">VÍDEO</h1>
                    <div className="border-b border-white mr-[90%] md:mr-[95%]"></div>
                    <h2 className="pt-4 font-bold pb-4 text-2xl">Imágenes impactantes para evocar deseos.</h2>
                    <p className="text-lg md:text-right">
                        ¿Qué hace realmente tu empresa? ¿Cómo lo hace? Nosotros lo mostramos a tus clientes de la manera más efectiva, permitiéndote destacarte de la competencia. A través del diseño, la edición y la producción de campañas publicitarias, vídeos de producto, eventos y contenidos para redes sociales, te ayudamos a comunicar visualmente con la máxima eficacia.
                    </p>
                    <div className="flex md:justify-end mt-5">
                        <button className='bg-white text-black font-bold p-4'>
                            <a href="#contact">¿Empezamos?</a>
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    className="flex-1 flex justify-center"
                    initial="hidden"
                    animate={controls}
                    exit="exit"
                    variants={imageVariants}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <img src={video} alt="" className="h-auto w-full md:h-[90%]" />
                </motion.div>
            </div>
        </div>
    );
}

export default Video;
