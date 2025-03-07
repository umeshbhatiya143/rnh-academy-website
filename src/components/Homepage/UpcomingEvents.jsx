'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';

const events = [
  {
    title: "Annual Sports Day",
    date: "October 15, 2025",
    image: "/images/gallery/FB_IMG_1739203227330.jpg" // Replace with your event image
  },
  {
    title: "Parent-Teacher Meeting",
    date: "November 5, 2025",
    image: "/images/gallery/FB_IMG_1739203227330.jpg" // Replace with your event image
  },
  {
    title: "ASSET Exam Schedule",
    date: "December 1, 2025",
    image: "/images/gallery/FB_IMG_1739203227330.jpg" // Replace with your event image
  }
];

export default function UpcomingEvents() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3, // Show 3 events at once on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
    arrows: false,
  };

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
              What’s Happening?
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="h-1 bg-gradient-to-r from-primary to-red-600 w-48 mx-auto mt-2"
          />
          <p className="text-base md:text-lg text-gray-700 mt-4 md:mt-6 max-w-2xl mx-auto px-2">
            Stay updated on our latest events and activities.
          </p>
        </motion.div>
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="px-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                  <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
        {/* <div className="text-center mt-10">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition-colors"
          >
            View Calendar →
          </motion.a>
        </div> */}
      </div>
    </section>
  );
}