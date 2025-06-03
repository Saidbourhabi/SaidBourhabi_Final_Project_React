import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Discover our exclusive collection of authentic football jerseys. 
                            From vintage classics to modern designs, we bring you the best 
                            in football fashion.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                                <FaFacebookF className="text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                                <FaTwitter className="text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                                <FaInstagram className="text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                                <FaYoutube className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors duration-300">Shop</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3 text-gray-400">
                                <FaMapMarkerAlt className="text-white" />
                                <span>123 Football Street, Jersey City, 10001</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <FaPhone className="text-white" />
                                <span>+1 234 567 890</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <FaEnvelope className="text-white" />
                                <span>info@jerseysstore.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to our newsletter and get 10% off your first purchase
                        </p>
                        <form className="space-y-3">
                            <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="Your email address"
                                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400 border border-white/20 hover:border-white/40 transition-all duration-300"
                                />
                            </div>
                            <button 
                                type="submit"
                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 text-white"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 Jersey Store. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;