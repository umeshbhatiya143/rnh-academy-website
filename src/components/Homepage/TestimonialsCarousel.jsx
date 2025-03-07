'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "My child’s confidence soared after joining the public speaking club!",
    author: "Parent of Class IV",
    image: "/images/gallery/FB_IMG_1739204738092.jpg" // Replace with your actual image path
  },
  {
    quote: "The STEAM projects made learning science fun!",
    author: "Class VII Student",
    image: "/images/gallery/FB_IMG_1739204065378.jpg" // Replace with your actual image path
  }
];

export default function TestimonialsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-serif font-bold text-primary mb-16"
        >
          What Our Community Says
        </motion.h2>
        <div className="testimonials-slider-container">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="flex items-center justify-center h-[350px] px-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white rounded-2xl p-8 shadow-2xl max-w-xl w-full flex flex-col items-center space-y-6"
                >
                  {/* Gradient Border Wrapper */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 p-1 rounded-full bg-gradient-to-r from-red-500 to-red-300 shadow-lg">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                      <Image
                        src={item.image}
                        alt={item.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-center text-lg md:text-xl font-medium text-gray-800 italic">
                    “{item.quote}”
                  </p>
                  <p className="text-center text-sm md:text-base text-gray-600 font-semibold">
                    – {item.author}
                  </p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style jsx global>{`
        .testimonials-slider-container .slick-slide {
          display: flex !important;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  );
}