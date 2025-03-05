'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "My child’s confidence soared after joining the public speaking club!",
    author: "Parent of Class IV",
    image: "/images/testimonials/parent1.jpg" // Replace with actual image path
  },
  {
    quote: "The STEAM projects made learning science fun!",
    author: "Class VII Student",
    image: "/images/testimonials/student1.jpg" // Replace with actual image path
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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-serif font-bold text-primary mb-10"
        >
          What Our Community Says
        </motion.h2>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="flex justify-center px-4">
              <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl flex flex-col md:flex-row items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden border-4 border-primary mr-4 mb-4 md:mb-0">
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-lg md:text-xl font-medium text-gray-800 mb-2">
                    “{item.quote}”
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    – {item.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
