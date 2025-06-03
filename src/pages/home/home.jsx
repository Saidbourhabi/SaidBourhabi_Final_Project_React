import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

// Import jersey images
import jerseyImage from '../../assets/images/jersyimage.jpg';
import inter from '../../assets/images/inter.jpg';
import brazil from '../../assets/images/brazil.jpg';
import dush2 from '../../assets/images/dush2.jpg';
import spain2 from '../../assets/images/spain2.jpg';
import dush from '../../assets/images/dush.jpg';



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

const collectionData = [
    {
        image: spain2,
        title: "Classic Collection",
        description: "Vintage football jerseys from legendary teams",
        category: "Classic"
    },
    {
        image: dush,
        title: "Modern Editions",
        description: "Contemporary designs with premium quality",
        category: "Modern"
    },
    {
        image: brazil,
        title: "National Teams",
        description: "Iconic national team jerseys from around the world",
        category: "National"
    },
    {
        image: dush2,
        title: "Limited Edition",
        description: "Rare and exclusive football jerseys for collectors",
        category: "Limited"
    }
];

const featuredProducts = [
    {
        image: jerseyImage,
        title: "Classic Vintage Jersey",
        price: "300DHS",
        status: "Limited Edition"
    },
    {
        image: spain2,
        title: "Spain Retro Edition",
        price: "130DHS",
        status: "Limited Edition"
    },
    {
        image: brazil,
        title: "Brazil Classic Kit",
        price: "200DHS",
        status: "Limited Edition"
    },
    {
        image: dush,
        title: "Modern Collection",
        price: "180DHS",
        status: "Limited Edition"
    },
    {
        image: dush2,
        title: "Premium Edition",
        price: "199DHS",
        status: "Limited Edition"
    },
    {
        image: inter,
        title: "Inter Milan Classic",
        price: "159DHS",
        status: "Limited Edition"
    },
    {
        image: spain2,
        title: "Special Edition Kit",
        price: "179DHS",
        status: "Limited Edition"
    },
    {
        image: brazil,
        title: "Collector's Edition",
        price: "220DHS",
        status: "Limited Edition"
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

    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 50
        },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2,
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        })
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
                    modules={[Autoplay, EffectFade, Navigation]}
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
            {/* **-----------------------------------------------------------------------** */}
            {/* Cards Shop  */}
            <section>
                
            </section>

            {/* Collection Cards Section */}
            <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Collections</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover our exclusive range of football jerseys from classic vintage to modern designs</p>
                    </motion.div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                        {collectionData.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Card Image Container */}
                                <div className="aspect-[4/5] overflow-hidden">
                                    <motion.img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Card Content */}
                                <motion.div 
                                    className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300"
                                >
                                    <span className="text-sm font-medium text-red-600 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-bold mb-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                        {item.description}
                                    </p>
                                    <Link
                                        to="/shop"
                                        className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white text-sm font-medium 
                                        transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200
                                        hover:bg-white hover:text-black"
                                    >
                                        Explore Collection
                                    </Link>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* --------------------------------------------------------------------- */}
            {/*  Featured products Section  */}
            <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Featured Products</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore our handpicked selection of premium football jerseys</p>
                    </motion.div>

                    {/* Products Carousel */}
                    <div className="relative px-4">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={24}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {featuredProducts.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    >
                                        {/* Product Image Container */}
                                        <div className="aspect-[4/5] overflow-hidden">
                                            <motion.img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        {/* Product Info */}
                                        <motion.div 
                                            className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300"
                                        >
                                            <span className="text-sm font-medium text-red-600 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {product.status}
                                            </span>
                                            <h3 className="text-xl font-bold mb-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                                {product.title}
                                            </h3>
                                            <div className="flex justify-between items-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                                <span className="text-white text-lg font-semibold">{product.price}</span>
                                                <span className="text-sm text-green-500 font-medium">In Stock</span>
                                            </div>

                                            <Link
                                                to="/shop"
                                                className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white text-sm font-medium 
                                                transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200
                                                hover:bg-white hover:text-black"
                                            >
                                                Add to Cart
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;