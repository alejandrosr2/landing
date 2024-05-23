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
        hidden: { opacity: 0, x: "100vw" },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        exit: { opacity: 0, x: "100vw", transition: { duration: 1 } }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: "-100vw" },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        exit: { opacity: 0, x: "-100vw", transition: { duration: 1 } }
    };

    return (
        <div ref={ref}>
            <div className="flex gap-4 pl-[20%] pr-[20%] pt-40">
                <motion.div
                    className="flex-1"
                    initial="hidden"
                    animate={controls}
                    exit="exit"
                    variants={textVariants}
                >
                    <h1 className="text-4xl font-bold pb-4">VÍDEO</h1>
                    <div className="border-b border-white mr-[95%]"></div>
                    <h2 className="pt-4 font-bold pb-4 text-2xl">Imágenes impactantes para evocar deseos.</h2>
                    <p className="text-lg">
                        ¿Qué hace realmente tu empresa? ¿Y cómo lo hace? Vamos a enseñárselo a todos tus clientes para que así puedas diferenciarte del resto a través de la comunicación visual más eficaz. En forma de diseño, edición y producción de campañas publicitarias, videos de producto, eventos y videos pensados para redes sociales.
                    </p>
                </motion.div>
                <motion.div
                    className="flex-1 flex justify-center"
                    initial="hidden"
                    animate={controls}
                    exit="exit"
                    variants={imageVariants}
                >
                    <img src={video} alt="" className="h-[90%]" />
                </motion.div>
            </div>
        </div>
    );
}

export default Video;