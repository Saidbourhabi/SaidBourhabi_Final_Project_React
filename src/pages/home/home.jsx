import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// Import jersey images
import jerseyImage from '../../assets/images/jersyimage.jpg';
import inter from '../../assets/images/inter.jpg';
import brazil from '../../assets/images/brazil.jpg';

const heroSlides = [
    {
        image: jerseyImage,
        title: 'Classic Collection',
        subtitle: 'Discover our authentic vintage jerseys',
        position: 'center',
        buttonText: 'Explore Collection'
    },
    {
        image: inter,
        title: 'Vintage Editions',
        subtitle: 'Limited edition retro jerseys',
        position: 'center',
        buttonText: 'Shop Vintage'
    },
    {
        image: brazil,
        title: 'Pro Jerseys',
        subtitle: 'Iconic designs from football history',
        position: 'center',
        buttonText: 'View Collection'
    }
];

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState('next');
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Preload images
    React.useEffect(() => {
        const loadImage = (src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        };

        Promise.all(heroSlides.map(slide => loadImage(slide.image)))
            .then(() => setImagesLoaded(true))
            .catch(err => console.error('Error preloading images:', err));
    }, []);

    const handleSlideChange = (swiper) => {
        const newIndex = swiper.realIndex;
        setDirection(newIndex > activeIndex ? 'next' : 'prev');
        setActiveIndex(newIndex);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction === 'next' ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction === 'next' ? -1000 : 1000,
            opacity: 0
        })
    };

    const textVariants = {
        initial: {
            y: 20,
            opacity: 0
        },
        animate: (custom) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }),
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <>
            <section className="relative h-[100vh] w-full overflow-hidden">
                {!imagesLoaded && (
                    <div className="absolute inset-0 bg-black flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    speed={1000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    loop={true}
                    className="h-full w-full"
                    onSlideChange={handleSlideChange}
                    fadeEffect={{ crossFade: true }}
                >
                    {heroSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    className="relative h-full w-full"
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    custom={direction}
                                >
                                    {/* Background Image with Parallax Effect */}
                                    <motion.div 
                                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                        style={{
                                            backgroundImage: `url(${slide.image})`,
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.5 }
                                        }}
                                    >
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
                                    </motion.div>
                                    
                                    {/* Content */}
                                    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8">
                                        <div className="text-white text-center max-w-xl mx-auto">
                                            <motion.h1 
                                                custom={1}
                                                variants={textVariants}
                                                initial="initial"
                                                animate="animate"
                                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4 tracking-tight"
                                            >
                                                {slide.title}
                                            </motion.h1>
                                            <motion.p
                                                custom={2}
                                                variants={textVariants}
                                                initial="initial"
                                                animate="animate"
                                                className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 text-gray-200 px-4"
                                            >
                                                {slide.subtitle}
                                            </motion.p>
                                            <motion.div
                                                custom={3}
                                                variants={textVariants}
                                                initial="initial"
                                                animate="animate"
                                                whileHover="hover"
                                                className="px-4"
                                            >
                                                <Link 
                                                    to="/shop"
                                                    className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold border-2 border-white/30 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                                                >
                                                    {slide.buttonText}
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default Home;