import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import camera from "../../assets/camera.png";
import { useMediaQuery } from 'react-responsive';

const Quote = () => {
    const { scrollY } = useScroll();
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const yPos = useTransform(scrollY, [0, isMobile ? 30000 : 3000], [isMobile ? 1000 : 3000, isMobile ? -6500 : 0]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div className="flex flex-col items-center mt-40 relative">
            <div ref={ref} className="flex w-full">
                <div className="hidden md:block w-[50%] h-80 bg-[#1E1E1E]"></div>
                <motion.div 
                    className="w-full md:w-[50%] h-80 flex items-center justify-center"
                    style={{ y: yPos }}
                >
                    <img src={camera} alt="Camera" className=" w-full h-auto md:h-[80%] md:w-[70%] " />
                </motion.div>
            </div>
            {isInView && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute top-1/2 transform -translate-y-1/2 text-4xl p-4 whitespace-pre-line text-center text-white"
                >
                    <span className="block">“La creatividad es el</span>
                    <span className="block">resultado de un duro</span>
                    <span className="block">y sistemático trabajo”</span>
                </motion.div>
            )}
        </div>
    );
};

export default Quote;
