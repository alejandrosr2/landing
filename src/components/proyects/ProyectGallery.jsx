import "./gallery.css";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cuchillos from "../../assets/cuchillos.webp";
import coche from "../../assets/coche.webp";
import interior from "../../assets/interior.webp";
import reloj from "../../assets/reloj.webp";
import ropa from "../../assets/ropa.webp";
import hombre from "../../assets/hombre.webp";
import zapatillas from "../../assets/zapatillas.webp";

import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

const ProyectGallery = () => {
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

    const swiperVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        exit: { opacity: 0, y: 20, transition: { duration: 1 } }
    };

    return (
        <div className="md:pl-[20%] md:pr-[20%] pt-40">
            <div>
                <h1 className="text-center p-10">
                    <span className="font-bold text-3xl">PROYECTOS</span>
                    <span className="block text-4xl">Experiencias Vividas</span>
                </h1>
            </div>
            <div className="border-b border-white mb-10 ml-[45%] mr-[45%]"></div>
            <motion.div ref={ref} initial="hidden" animate={controls} variants={swiperVariants} exit="exit">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1} // Show only one slide at a time
                    breakpoints={{
                        768: {
                            slidesPerView: 3 // Show three slides at a time on larger screens
                        }
                    }}
                    navigation
                    grabCursor={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <img src={cuchillos} alt="" className="cursor-pointer"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={coche} alt="" className="cursor-pointer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={reloj} alt="" className="cursor-pointer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={hombre} alt="" className="cursor-pointer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={interior} alt="" className="cursor-pointer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ropa} alt="" className="cursor-pointer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={zapatillas} alt="" className="cursor-pointer" />
                    </SwiperSlide>
                </Swiper>
            </motion.div>
        </div>
    );
}

export default ProyectGallery;
