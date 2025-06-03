import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import contactImage from '../../assets/images/jersyimage.jpg';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            'service_pskhc3n',
            'template_6rbf9k4',
            form.current,
            'bVylr36BWxkpWZglD'
        )
        .then((result) => {
            setSubmitStatus('success');
            form.current.reset();
        }, (error) => {
            setSubmitStatus('error');
        })
        .finally(() => {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        });
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={contactImage} 
                        alt="Contact Us" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                </div>
                <div className="relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-200 text-lg max-w-2xl mx-auto px-4"
                    >
                        Get in touch with us for any questions or inquiries
                    </motion.p>
                </div>
            </section>

            {/* Contact Form and Map Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-black">
                <div className="container mx-auto relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl hover:bg-white/10 transition-colors duration-300">
                            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                <div>
                                    <input 
                                        type="text" 
                                        name="user_name"
                                        placeholder="Your Name"
                                        required
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400 border border-white/10 hover:border-white/30 transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="email" 
                                        name="user_email"
                                        placeholder="Your Email"
                                        required
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400 border border-white/10 hover:border-white/30 transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <textarea 
                                        name="message"
                                        placeholder="Your Message"
                                        rows="5"
                                        required
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400 border border-white/10 hover:border-white/30 transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                                
                                {submitStatus === 'success' && (
                                    <div className="text-green-400 text-center font-medium">Message sent successfully!</div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="text-red-400 text-center font-medium">Failed to send message. Please try again.</div>
                                )}
                            </form>
                        </div>

                        {/* Map and Info */}
                        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl hover:bg-white/10 transition-colors duration-300">
                            <h2 className="text-2xl font-bold text-white mb-6">Find Us</h2>
                            <div className="h-[300px] rounded-lg overflow-hidden border border-white/10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1839901106506!2d-74.00610288459418!3d40.71278427933168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedaf85%3A0x2cb2ddf003b5ae01!2sLower%20Manhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1646416820000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Store Location"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
