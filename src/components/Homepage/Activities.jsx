'use client';
import { useState, useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    AcademicCapIcon,
    PaintBrushIcon,
    MusicalNoteIcon,
    TrophyIcon,
    UsersIcon,
    HeartIcon,
    ChevronLeftIcon,
    ChevronRightIcon
} from '@heroicons/react/24/outline';

// Activities List
const activities = [
    { name: "Music & Dance", icon: <MusicalNoteIcon className="h-8 w-8 text-red-600" /> },
    { name: "Art & Craft", icon: <PaintBrushIcon className="h-8 w-8 text-blue-600" /> },
    { name: "Sports & Games", icon: <TrophyIcon className="h-8 w-8 text-green-600" /> },
    { name: "Social Service", icon: <HeartIcon className="h-8 w-8 text-pink-600" /> },
    { name: "Public Speaking", icon: <UsersIcon className="h-8 w-8 text-purple-600" /> },
    { name: "Skill Development", icon: <AcademicCapIcon className="h-8 w-8 text-orange-600" /> }
];

// Slider Images and Corresponding Text
const activitySlides = [
    {
        image: "/images/gallery/FB_IMG_1739203227330.jpg",
        text: "Our students explore music and dance, nurturing creativity and expression."
    },
    {
        image: "/images/gallery/FB_IMG_1739203231196.jpg",
        text: "Art & Craft programs foster innovation, imagination, and fine motor skills."
    },
    {
        image: "/images/gallery/FB_IMG_1739203440525.jpg",
        text: "Sports and games develop teamwork, leadership, and a competitive spirit."
    },
    {
        image: "/images/gallery/FB_IMG_1739203651708.jpg",
        text: "Public speaking workshops build confidence and leadership in young minds."
    }
];

export default function Activities() {
    const sliderRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    // Slider Settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        arrows: false,
        beforeChange: (_, next) => setActiveSlide(next),
    };

    return (
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-red-50 to-white overflow-hidden">
            {/* Floating Decorative Elements */}
            <div className="absolute top-6 left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-red-100 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="absolute bottom-12 right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-purple-100 rounded-full blur-xl opacity-50 animate-bounce" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
                        <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                            Our Activities
                        </span>
                    </h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1 }}
                        className="h-1 bg-gradient-to-r from-primary to-red-600 w-48 mx-auto mt-2"
                    />
                    <p className="text-base md:text-lg text-gray-700 mt-4 md:mt-6 max-w-2xl mx-auto px-2">
                        Unlock creativity, teamwork, and confidence through a variety of extracurricular programs.
                    </p>
                </motion.div>

                {/* Main Grid: Left Side (Activity List & Extra Content) | Right Side (Slider) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Side */}
                    <div className="space-y-8">
                        {/* Activities Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {activities.map((activity, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1, rotate: -2 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    className="flex flex-col items-center space-y-2 p-5 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: 3 }}
                                        transition={{ duration: 0.3 }}
                                        className="p-3 rounded-full bg-gradient-to-br from-red-100 to-red-50 shadow-md"
                                    >
                                        {activity.icon}
                                    </motion.div>
                                    <span className="text-gray-800 font-semibold text-sm md:text-base text-center">
                                        {activity.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                        {/* Additional Left Side Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-primary"
                        >
                            <p className="text-gray-700 text-base md:text-lg mb-4">
                                At R.N.H Academy, our extracurricular programs nurture well-rounded personalities.
                                They promote creativity, discipline, and teamwork, ensuring every student finds their passion.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2 bg-gradient-to-r from-primary to-red-600 text-white font-semibold rounded-full shadow-lg hover:from-red-600 hover:to-primary transition-all duration-300"
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right Side: Slider with Auto-scroll Text and Manual Navigation */}
                    <div className="relative h-80 md:h-[450px] w-full rounded-xl overflow-hidden shadow-lg group">
                        <Slider {...settings} ref={sliderRef}>
                            {activitySlides.map((slide, index) => (
                                <div key={index} className="relative h-80 md:h-[450px] w-full">
                                    <Image
                                        src={slide.image}
                                        alt={`Activity ${index + 1}`}
                                        fill
                                        className="object-cover rounded-xl"
                                        priority={index === 0}
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                                </div>
                            ))}
                        </Slider>

                        {/* Auto-scroll Text */}
                        <motion.div
                            key={activeSlide}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white bg-black/50 px-6 py-3 rounded-md shadow-lg backdrop-blur-md"
                        >
                            <p className="text-xs md:text-sm font-medium">
                                {activitySlides[activeSlide].text}
                            </p>
                        </motion.div>

                        {/* Manual Navigation Buttons */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => sliderRef.current.slickPrev()}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-r from-primary to-red-600 shadow-lg"
                        >
                            <ChevronLeftIcon className="w-6 h-6 text-white" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => sliderRef.current.slickNext()}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-r from-primary to-red-600 shadow-lg"
                        >
                            <ChevronRightIcon className="w-6 h-6 text-white" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
