import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fotografo from "../../assets/fotografo.webp";

const Services = () => {
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
            <div className="flex flex-col md:flex-row gap-4 pl-[5%] pr-[5%] md:pl-[20%] md:pr-[20%] pt-40">
                <motion.div
                    className="flex-1 flex justify-center"
                    initial="hidden"
                    animate={controls}
                    exit="exit"
                    variants={imageVariants}
                >
                    <img src={fotografo} alt="" className="h-auto w-full md:h-[90%]" />
                </motion.div>
                <motion.div
                    className="flex-1"
                    initial="hidden"
                    animate={controls}
                    exit="exit"
                    variants={textVariants}
                >
                    <h1 className="text-4xl font-bold pb-4">FOTOGRAFÍA</h1>
                    <div className="border-b border-white mr-[90%] md:mr-[95%]"></div>
                    <h2 className="pt-4 font-bold pb-4 text-2xl">Haz tus productos irresistibles.</h2>
                    <p className="text-lg">
                        Capturamos el momento, la idea y el concepto exactos para que tu proyecto hable sin palabras, solo a través de la imagen. Optimizamos el valor de tu marca y tus productos, haciéndolos irresistibles. Nuestra fotografía transmite ese valor único que te diferencia de la competencia.
                    </p>
                    <button className='bg-white text-black font-bold p-4 mt-5'>
                        <a href="#contact">¿Empezamos?</a>
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

export default Services;
