'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image'


// Timeline Data
const timeline = [
    { year: '2017', event: 'School Founded with 50 Students', image: '/images/journey-2017.jpg' },
    { year: '2019', event: 'CBSE Affiliation Granted', image: '/images/journey-2019.jpg' },
    { year: '2021', event: 'STEAM Lab Established', image: '/images/journey-2021.jpg' },
    { year: '2023', event: 'Expanded to Class X', image: '/images/journey-2023.jpg' },
];

export default function Header() {
    const [activeYear, setActiveYear] = useState(timeline[0]);
    return (

        <section className="py-12 md:py-16 bg-gradient-to-b from-red-50 to-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#DC2626]">
                        <span className="bg-gradient-to-r from-[#DC2626] to-red-600 bg-clip-text text-transparent">
                            Our Journey Since 2017
                        </span>
                    </h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1 }}
                        className="h-1 bg-gradient-to-r from to-red-600 w-48 mx-auto mt-2 rounded-full"
                    />
                    <p className="text-base md:text-lg text-gray-700 mt-4 md:mt-6 max-w-2xl mx-auto px-2">
                        Witness our transformation from humble beginnings to a thriving center of learning.
                    </p>
                </motion.div>

                {/* Timeline & Left Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Enhanced Milestone Card */}
                    <div className="relative w-full h-80 md:h-[450px] rounded-xl overflow-hidden shadow-lg">
                        <motion.div
                            key={activeYear.year}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full absolute top-0 left-0"
                        >
                            <Image
                                src={activeYear.image}
                                alt={activeYear.year}
                                fill
                                className="object-cover transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                        </motion.div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-yellow-300 drop-shadow-lg">
                                {activeYear.year}
                            </h3>
                            <p className="text-lg md:text-xl text-white mt-4 text-center drop-shadow-md">
                                {activeYear.event}
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Timeline List */}
                    <div className="relative w-full">
                        <div className="absolute left-4 md:left-6 w-1 bg-gray-300 h-full"></div>
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative flex items-center space-x-6 mb-10 cursor-pointer"
                                onMouseEnter={() => setActiveYear(item)}
                            >
                                {/* Timeline Year Dot */}
                                <div className="w-8 h-8 md:w-10 md:h-10 
                      bg-[#DC2626] rounded-full 
                      flex items-center justify-center 
                      text-white font-bold 
                      shadow-[0_4px_10px_rgba(220,38,38,0.4)] 
                      transition-shadow duration-300"
                                >
                                    {item.year}
                                </div>
                                {/* Event Description */}
                                <div className="bg-white shadow-md p-4 md:p-6 rounded-lg border-l-4 border-red-600 max-w-sm">
                                    <h3 className="text-lg font-semibold text-gray-800">{item.event}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}