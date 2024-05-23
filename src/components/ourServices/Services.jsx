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

    const imageVariants = {
        hidden: { opacity: 0, x: "100vw" },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        exit: { opacity: 0, x: "100vw", transition: { duration: 1 } }
    };

    const textVariants = {
        hidden: { opacity: 0, x: "-100vw" },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        exit: { opacity: 0, x: "-100vw", transition: { duration: 1 } }
    };

    return (
        <div ref={ref}>
            <div className="flex gap-4 pl-[20%] pr-[20%] pt-40">
                <motion.div
                    className="flex-1 flex justify-center"
                    initial="hidden"
                    animate={controls}
                    exit="exit"
                    variants={imageVariants}
                >
                    <img src={fotografo} alt="" className="h-[90%]" />
                </motion.div>
                <motion.div
                    className="flex-1"
                    initial="hidden"
                    animate={controls}
                    exit="exit"
                    variants={textVariants}
                >
                    <h1 className="text-4xl font-bold pb-4">FOTOGRAFÍA</h1>
                    <div className="border-b border-white mr-[95%]"></div>
                    <h2 className="pt-4 font-bold pb-4 text-2xl">Haz tus productos irresistibles.</h2>
                    <p className="text-lg">
                        El momento, la idea y el concepto exactos para que tu proyecto hable sin palabras. Solo a través de la imagen. Mientras optimizas el valor de tu marca y de tus productos haciéndolos irresistibles. Logrando transmitir, con la misma fotografía, ese valor que te hará diferente frente a la competencia.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Services;
