'use client';
import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue, useAnimation } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const slides = [
  {
    id: 1,
    image: '/images/homepage/FB_IMG_1739203153164.jpg',
    title: "Nurturing Tomorrow's Leaders",
    subtitle: "Where Excellence Meets Innovation",
  },
  {
    id: 2,
    image: '/images/homepage/FB_IMG_1739203223596.jpg',
    title: "Holistic Development",
    subtitle: "Learning Beyond Classrooms",
  },
  {
    id: 3,
    image: '/images/homepage/FB_IMG_1739203227330.jpg',
    title: "STEAM Education",
    subtitle: "Igniting Young Minds Through Science & Technology",
  },
];

export default function HeroSlider() {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const progressControls = useAnimation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px, rgba(220,38,38,0.15) 0%, transparent 80%)`;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    beforeChange: (_, next) => setActiveSlide(next),
    appendDots: dots => (
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${i === activeSlide ? 'bg-primary' : 'bg-white/50'}`} />
    ),
  };

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    }),
  };

  // Reset and animate the progress bar each time the active slide changes.
  useEffect(() => {
    progressControls.set({ width: '0%' });
    progressControls.start({
      width: '100%',
      transition: { duration: 5, ease: 'linear' },
    });
  }, [activeSlide, progressControls]);

  return (
    <section
      className="w-full relative h-[70vh] min-h-[400px] md:h-[80vh] md:min-h-[600px] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {/* Dynamic gradient overlay */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[70vh] min-h-[400px] md:h-[80vh] md:min-h-[600px] w-full">
            {/* Layered background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-20" />

            <Image
              src={slide.image}
              alt=""
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Content container */}
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <div className="w-full px-4 md:px-8">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  className="max-w-4xl mx-auto text-center"
                >
                  {/* Decorative dividers */}
                  <motion.div
                    className="mb-4 md:mb-6 flex justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                  >
                    <div className="w-8 h-1 bg-primary rounded-full mx-1" />
                    <div className="w-8 h-1 bg-white rounded-full mx-1" />
                    <div className="w-8 h-1 bg-primary rounded-full mx-1" />
                  </motion.div>

                  {/* Animated main heading */}
                  <motion.h1
                    className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight"
                    style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}
                  >
                    {slide.title.split(' ').map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-2 last:mr-0"
                        custom={i}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h1>

                  {/* Subtitle with smooth fade-in */}
                  <motion.div
                    className="relative inline-block mb-6 md:mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <p className="text-base md:text-xl lg:text-2xl font-medium text-white/90 bg-black/20 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-lg border border-white/10">
                      {slide.subtitle}
                    </p>
                  </motion.div>

                  {/* Interactive timeline dots */}
                  <div className="flex justify-center space-x-3 md:space-x-4 mb-4 md:mb-8">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => sliderRef.current.slickGoTo(index)}
                        className={`h-1 rounded-full transition-all duration-300 ${index === activeSlide ? 'w-6 md:w-8 bg-primary' : 'w-3 md:w-4 bg-white/50'
                          }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Arrows */}
      <motion.button
        onClick={() => sliderRef.current.slickPrev()}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/30 shadow-lg hover:bg-primary/80 transition-all duration-300 z-30"
        whileHover={{ scale: 1.1 }}
      >
        <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </motion.button>

      <motion.button
        onClick={() => sliderRef.current.slickNext()}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/30 shadow-lg hover:bg-primary/80 transition-all duration-300 z-30"
        whileHover={{ scale: 1.1 }}
      >
        <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </motion.button>

      {/* Progress Indicator */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 w-32 md:w-48 h-1 bg-white/20 rounded-full z-30 overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          animate={progressControls}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute bg-primary/40 rounded-full ${i % 3 === 0 ? 'w-2 h-2' : 'w-3 h-3'
              }`}
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0
            }}
            animate={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </section>
  );
}