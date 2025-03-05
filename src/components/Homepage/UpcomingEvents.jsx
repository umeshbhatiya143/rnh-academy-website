'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-serif font-bold text-primary mb-10"
        >
          What’s Happening?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut nulla nunc.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition-colors"
          >
            View Calendar →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
