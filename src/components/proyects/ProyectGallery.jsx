import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cuchillos from "../../assets/cuchillos.webp";
import coche from "../../assets/coche.webp";

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
        <div className="pl-[20%] pr-[20%] pt-40">
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
                    slidesPerView={3}
                    navigation
                    grabCursor={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <img src={cuchillos} alt="" className="cursor-pointer"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={coche} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={coche} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={coche} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={coche} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={coche} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={coche} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={coche} alt="" />
                    </SwiperSlide>
                </Swiper>
            </motion.div>
        </div>
    );
}

export default ProyectGallery;
