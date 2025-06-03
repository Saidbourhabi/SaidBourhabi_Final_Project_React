import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShippingFast, FaStore } from 'react-icons/fa';
import { TbTruckReturn } from 'react-icons/tb';
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
import messi from '../../assets/images/messi.jpg';



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
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Counter Effect
    React.useEffect(() => {
        // Set end date to 7 days from now
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 10);

        const timer = setInterval(() => {
            const now = new Date();
            const difference = endDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

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
            {/* ----------------------------------------------------------- */}
            {/* Special Cards Section */}
            <section className="py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                        {/* Messi Card with Counter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden group"
                        >
                            <div className="absolute inset-0">
                                <img 
                                    src={messi} 
                                    alt="Messi Special Edition" 
                                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                            </div>
                            
                            <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Messi Special Edition</h3>
                                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Limited time offer for our exclusive collection</p>
                                
                                {/* Counter */}
                                <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
                                    {[
                                        { label: 'Days', value: timeLeft.days },
                                        { label: 'Hours', value: timeLeft.hours },
                                        { label: 'Minutes', value: timeLeft.minutes },
                                        { label: 'Seconds', value: timeLeft.seconds }
                                    ].map((unit) => (
                                        <div key={unit.label} className="text-center">
                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                                                <span className="block text-lg sm:text-xl md:text-2xl font-bold text-white">
                                                    {String(unit.value).padStart(2, '0')}
                                                </span>
                                                <span className="text-xs sm:text-sm text-gray-300">{unit.label}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to="/shop"
                                    className="inline-flex items-center justify-center w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-sm sm:text-base font-medium 
                                    transition-all duration-300 hover:bg-white hover:text-black"
                                >
                                    Shop Collection
                                </Link>
                            </div>
                        </motion.div>

                        {/* Changing Images Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden"
                        >
                            <Swiper
                                modules={[Autoplay, EffectFade]}
                                effect="fade"
                                speed={1000}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                className="h-full w-full"
                            >
                                {[brazil, spain2, dush, inter].map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative h-full">
                                            <img 
                                                src={image} 
                                                alt={`Featured Jersey ${index + 1}`}
                                                className="w-full h-full object-cover object-center"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                            
                                            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="max-w-md"
                                                >
                                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Premium Collection</h3>
                                                    <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Discover our latest arrivals of premium football jerseys</p>
                                                    <Link
                                                        to="/shop"
                                                        className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-sm sm:text-base font-medium 
                                                        transition-all duration-300 hover:bg-white hover:text-black"
                                                    >
                                                        Explore More
                                                    </Link>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Free Delivery */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                    <FaShippingFast size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Free Delivery Worldwide</h3>
                                <p className="text-gray-600">Mirum est notare quam littera gothica</p>
                            </div>
                        </motion.div>

                        {/* 30 Days Return */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="group bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                    <TbTruckReturn size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">30 Days Return</h3>
                                <p className="text-gray-600">Simply return it within 30 days for an exchange.</p>
                            </div>
                        </motion.div>

                        {/* Store Opening */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="group bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                    <FaStore size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Store Opening</h3>
                                <p className="text-gray-600">Shop open from Monday to Sunday</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
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
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Latest Stories</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover the history and stories behind legendary football jerseys</p>
                    </motion.div>

                    {/* Blog Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Blog Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img 
                                    src={brazil} 
                                    alt="Brazil 1970 Jersey Story" 
                                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <div className="flex items-center mb-4">
                                    <span className="text-sm text-red-600 font-medium">History</span>
                                    <span className="mx-2 text-white/50">•</span>
                                    <span className="text-sm text-gray-300">5 min read</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-600 transition-colors duration-300">
                                    The Legendary Brazil 1970 Jersey: A Symbol of Beautiful Football
                                </h3>
                                <p className="text-gray-300 mb-4 line-clamp-2">
                                    Discover the story behind the iconic yellow jersey worn by Pelé and the Brazilian team during their triumphant 1970 World Cup campaign.
                                </p>
                                <Link
                                    to="/blog"
                                    className="inline-flex items-center text-white font-medium group-hover:text-red-600 transition-colors duration-300"
                                >
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                                        className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Blog Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img 
                                    src={spain2} 
                                    alt="Spain's Evolution Story" 
                                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <div className="flex items-center mb-4">
                                    <span className="text-sm text-red-600 font-medium">Design</span>
                                    <span className="mx-2 text-white/50">•</span>
                                    <span className="text-sm text-gray-300">4 min read</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-600 transition-colors duration-300">
                                    Evolution of Spain's National Team Jersey Design
                                </h3>
                                <p className="text-gray-300 mb-4 line-clamp-2">
                                    From traditional red to modern interpretations: How Spain's jersey design has evolved while maintaining its iconic status.
                                </p>
                                <Link
                                    to="/blog"
                                    className="inline-flex items-center text-white font-medium group-hover:text-red-600 transition-colors duration-300"
                                >
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                                        className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Blog Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img 
                                    src={inter} 
                                    alt="Inter Milan Classic" 
                                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <div className="flex items-center mb-4">
                                    <span className="text-sm text-red-600 font-medium">Classic</span>
                                    <span className="mx-2 text-white/50">•</span>
                                    <span className="text-sm text-gray-300">3 min read</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-600 transition-colors duration-300">
                                    Inter Milan's Iconic Stripes: A Design Legacy
                                </h3>
                                <p className="text-gray-300 mb-4 line-clamp-2">
                                    The story behind Inter Milan's legendary black and blue striped jersey and its significance in football history.
                                </p>
                                <Link
                                    to="/blog"
                                    className="inline-flex items-center text-white font-medium group-hover:text-red-600 transition-colors duration-300"
                                >
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                                        className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* View All Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-lg font-medium 
                            transition-all duration-300 hover:bg-white hover:text-black group"
                        >
                            View All Stories
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                                className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;