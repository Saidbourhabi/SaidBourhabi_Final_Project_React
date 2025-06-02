import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../constant/images';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { RiShoppingBasketLine, RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [cartItems, setCartItems] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
                setIsMenuOpen(false); // Close menu when scrolling
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.4,
                ease: "easeInOut",
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeInOut",
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const linkVariants = {
        closed: {
            opacity: 0,
            y: 20
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <div className="fixed w-full z-50">
            {/* Top Navigation - Only visible when not scrolled */}
            <div className={`bg-black/80 backdrop-blur-md text-white transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'h-10'}`}>
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <p className="text-sm font-medium truncate"> Free Shipping Limited Offer 50% OFF</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-red-500 transition-colors"><FaInstagram /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaFacebook /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <img className="w-[5rem]" src={images.retroYankees} alt="Logo" />
                        </div>
                        
                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className={`hover:text-red-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Home</Link>
                            <Link to="/about" className={`hover:text-red-600 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>About</Link>
                            <Link to="/contact" className={`hover:text-red-600 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Contact</Link>
                            <Link to="/shop" className={`hover:text-red-600 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Shop</Link>
                            <Link to="/blog" className={`hover:text-red-600 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Blog</Link>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Cart Icon */}
                            <div className="relative">
                                <Link to="/cart" className={`hover:text-red-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                                    <RiShoppingBasketLine className="text-2xl" />
                                    {cartItems > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                            {cartItems}
                                        </span>
                                    )}
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'} transition-colors`}
                            >
                                {isMenuOpen ? (
                                    <RiCloseLine className="text-2xl" />
                                ) : (
                                    <RiMenu4Line className="text-2xl" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        
                        {/* Menu Content */}
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="fixed inset-y-0 right-0 w-full bg-white/30 backdrop-blur-md shadow-xl md:hidden flex flex-col"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex justify-end p-6">
                                    <button 
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                                    >
                                        <RiCloseLine className="text-2xl" />
                                    </button>
                                </div>

                                {/* Centered Links Container */}
                                <div className="flex-1 flex flex-col items-center justify-center space-y-8 p-6">
                                    <motion.div variants={linkVariants}>
                                        <Link 
                                            to="/" 
                                            className="text-3xl font-medium text-black hover:text-red-600 transition-all hover:scale-110 block"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Home
                                        </Link>
                                    </motion.div>
                                    <motion.div variants={linkVariants}>
                                        <Link 
                                            to="/about" 
                                            className="text-3xl font-medium text-black hover:text-red-600 transition-all hover:scale-110 block"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            About
                                        </Link>
                                    </motion.div>
                                    <motion.div variants={linkVariants}>
                                        <Link 
                                            to="/contact" 
                                            className="text-3xl font-medium text-black hover:text-red-600 transition-all hover:scale-110 block"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Contact
                                        </Link>
                                    </motion.div>
                                    <motion.div variants={linkVariants}>
                                        <Link 
                                            to="/shop" 
                                            className="text-3xl font-medium text-black hover:text-red-600 transition-all hover:scale-110 block"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Shop
                                        </Link>
                                    </motion.div>
                                    <motion.div variants={linkVariants}>
                                        <Link 
                                            to="/blog" 
                                            className="text-3xl font-medium text-black hover:text-red-600 transition-all hover:scale-110 block"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Blog
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* Social Icons */}
                                <div className="p-6 border-t border-black/5 backdrop-blur-md">
                                    <div className="flex gap-8 justify-center">
                                        <a href="#" className="text-gray-600 hover:text-red-600 transition-all hover:scale-125 text-2xl">
                                            <FaInstagram />
                                        </a>
                                        <a href="#" className="text-gray-600 hover:text-red-600 transition-all hover:scale-125 text-2xl">
                                            <FaFacebook />
                                        </a>
                                        <a href="#" className="text-gray-600 hover:text-red-600 transition-all hover:scale-125 text-2xl">
                                            <FaTwitter />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;