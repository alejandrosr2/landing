import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Description = () => {
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

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: 20, transition: { duration: 0.5 } }
    };

    return (
        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants}>
            <motion.div className="flex justify-center md:pl-[20%] md:pr-[20%] p-10 pt-20" variants={itemVariants}>
                <p className="text-4xl text-center">“Porque una imagen vende más que mil palabras”</p>
            </motion.div>
            <motion.div className="h-20 flex pl-[20%] pr-[20%]" variants={itemVariants}>
                <div className="flex-1 border-r border-white"></div>
                <div className="flex-1"></div>
            </motion.div>
            <motion.div className="flex justify-center p-10" variants={itemVariants}>
                <p className="text-center">
                    <span className="text-3xl">TU AGENCIA DE</span>
                    <span className="block font-bold text-4xl">Fotografía y Vídeo</span>
                </p>
            </motion.div>
            <motion.div className="ml-[45%] mr-[45%] border-b border-white" variants={itemVariants}></motion.div>
            <motion.div className="flex justify-center md:pl-[25%] md:pr-[25%] md:p-10 p-4 pt-7" variants={itemVariants}>
                <p className="text-center text-lg">El uso de la fotografía y del vídeo para ayudarte a conseguir más y mejores clientes. Captamos su atención y conquistamos sus corazones.</p>
            </motion.div>
        </motion.div>
    );
}

export default Description;
