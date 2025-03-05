'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    BeakerIcon,
    PresentationChartBarIcon,
    MusicalNoteIcon,
    ShieldCheckIcon,
    BookOpenIcon,
    UsersIcon,
    MicrophoneIcon,
    HeartIcon
} from '@heroicons/react/24/outline';

const features = [
    {
        icon: <BeakerIcon className="h-8 w-8" />,
        title: "STEAM Education",
        stats: "10+ Labs | 5 Specialized Courses",
        description: "Integrated Science, Tech, Engineering, Arts & Math curriculum",
        image: "/images/gallery/FB_IMG_1739203231196.jpg",
        elements: [<BookOpenIcon key="book" className="h-6 w-6 text-blue-400" />, '📊']
    },
    {
        icon: <PresentationChartBarIcon className="h-8 w-8" />,
        title: "Smart Classes",
        stats: "100% Digital Classrooms",
        description: "Interactive digital boards with AR/VR integration",
        image: "/images/gallery/FB_IMG_1739203440525.jpg",
        elements: ['💻', <UsersIcon key="users" className="h-6 w-6 text-purple-400" />]
    },
    {
        icon: <MusicalNoteIcon className="h-8 w-8" />,
        title: "Creative Arts",
        stats: "15+ Performing Arts Programs",
        description: "Music, Dance, Drama & Visual Arts studios",
        image: "/images/gallery/FB_IMG_1739203651708.jpg",
        elements: [<MicrophoneIcon key="mic" className="h-6 w-6 text-pink-400" />, '🎨']
    },
    {
        icon: <ShieldCheckIcon className="h-8 w-8" />,
        title: "Safety First",
        stats: "24/7 Surveillance | Medical Staff",
        description: "CCTV monitored campus with emergency response",
        image: "/images/gallery/FB_IMG_1739203651708.jpg",
        elements: ['🚑', <HeartIcon key="heart" className="h-6 w-6 text-red-400" />]
    }
];

export default function Features() {
    return (
        <section className="py-12 md:py-20 bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-5 md:opacity-10 z-0">
                <div className="pattern-dots pattern-primary pattern-size-3 md:pattern-size-4 pattern-opacity-15 md:pattern-opacity-20 w-full h-full" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Enhanced Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <div className="inline-block relative">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-3 md:mb-4">
                            <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                                Why Choose Us?
                            </span>
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1 }}
                            className="h-1 bg-gradient-to-r from-primary to-red-600 w-54 mx-auto mt-2"
                        />
                        <div className="absolute -left-4 md:-left-8 top-1/2 w-8 h-8 md:w-16 md:h-16 bg-primary/10 rounded-full" />
                        <div className="absolute -right-4 md:-right-8 top-1/2 w-8 h-8 md:w-16 md:h-16 bg-primary/10 rounded-full" />
                    </div>
                    <p className="text-base md:text-lg text-gray-600 mt-4 md:mt-6 max-w-2xl mx-auto px-2">
                        Discover the pillars of excellence that make R.N.H Academy the preferred choice for holistic education
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover="hover"
                            initial="initial"
                            className="group relative bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Card Background Elements */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-12 h-12 md:w-20 md:h-20 bg-primary/10 rounded-full blur-lg md:blur-xl" />
                                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 bg-primary/10 rounded-full blur-lg md:blur-xl" />
                            </div>

                            <div className="p-4 md:p-6 text-center relative z-10">
                                {/* Animated Icon Container */}
                                <motion.div
                                    variants={{
                                        initial: { scale: 1 },
                                        hover: { scale: 1.05, rotate: -3 }
                                    }}
                                    className="inline-block bg-gradient-to-br from-primary to-red-600 p-3 md:p-4 rounded-xl md:rounded-2xl mb-4 md:mb-6"
                                >
                                    <div className="text-white text-2xl md:text-3xl">
                                        {feature.icon}
                                    </div>
                                </motion.div>

                                {/* Floating Elements (Mobile Hidden) */}
                                <div className="hidden md:flex absolute top-2 right-2 md:top-4 md:right-4 flex-col gap-1 md:gap-2">
                                    {feature.elements.map((element, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ delay: i * 0.1 + 0.3 }}
                                            className="p-1 md:p-2 bg-white/80 backdrop-blur-sm rounded md:rounded-lg shadow-xs md:shadow-sm"
                                        >
                                            {element}
                                        </motion.div>
                                    ))}
                                </div>

                                <h3 className="text-xl md:text-2xl font-serif font-semibold mb-1 md:mb-2 text-gray-800">
                                    <span className="text-red-600">
                                        {feature.title}
                                    </span>
                                </h3>
                                <p className="text-xs md:text-sm font-medium text-primary mb-1 md:mb-2">
                                    {feature.stats}
                                </p>
                                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                                    {feature.description}
                                </p>

                                {/* Image Container */}
                                <motion.div
                                    variants={{
                                        initial: { scale: 1 },
                                        hover: { scale: 1.03 }
                                    }}
                                    className="relative h-40 md:h-48 rounded-lg md:rounded-xl overflow-hidden"
                                >
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 25vw"
                                        priority={index < 2}
                                    />
                                    
                                    {/* Gradient Overlay */}
                                    <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                                    
                                    {/* Hover Text */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute z-20 bottom-0 left-0 right-0 p-2 md:p-4 text-center"
                                    >
                                        <p className="text-white text-xs md:text-sm font-medium drop-shadow-md">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Hover Border Animation */}
                            <motion.div
                                variants={{
                                    initial: { opacity: 0 },
                                    hover: { opacity: 1 }
                                }}
                                className="absolute inset-0 border-2 border-primary/20 rounded-xl md:rounded-2xl pointer-events-none"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}