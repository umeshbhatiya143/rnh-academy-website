'use client';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/gallery/FB_IMG_1739204147110.jpg', caption: 'Art Exhibition', width: 500, height: 400 }, // Reduced height
  { src: '/images/gallery/FB_IMG_1739204065378.jpg', caption: 'Science Fair', width: 600, height: 400 },
  { src: '/images/gallery/FB_IMG_1739203166804.jpg', caption: 'Sports Day', width: 400, height: 400 },
  { src: '/images/gallery/FB_IMG_1739203486107.jpg', caption: 'Cultural Fest', width: 500, height: 500 },
  { src: '/images/gallery/FB_IMG_1739203559677.jpg', caption: 'Classroom Activities', width: 500, height: 600 },
  { src: '/images/gallery/FB_IMG_1739203583968.jpg', caption: 'Library Visit', width: 400, height: 400 },
  { src: '/images/gallery/FB_IMG_1739203231196.jpg', caption: 'Field Trip', width: 400, height: 500 },
  { src: '/images/gallery/FB_IMG_1739203153164.jpg', caption: 'Music Recital', width: 600, height: 400 },
  { src: '/images/gallery/FB_IMG_1739203694074.jpg', caption: 'Workshop', width: 500, height: 600 },
];

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  500: 1,
};

export default function PhotoGalleryPreview() {
  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary">
            <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
              Glimpses of Joyful Learning
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="h-1 bg-gradient-to-r from-primary to-red-600 w-48 mx-auto mt-2 rounded-full"
          />
          <p className="text-base md:text-lg text-gray-700 mt-4 max-w-2xl mx-auto px-2">
            Experience vibrant moments of creativity and learning captured from our campus.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4 my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-xl shadow-lg mb-4"
            >
              <Image
                src={item.src}
                alt={item.caption}
                layout="responsive"
                width={item.width}
                height={item.height}
                className="object-cover transition-transform duration-500"
              />
              {/* Caption Overlay with reduced opacity */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}  // Reduced from 0.4 to 0.2
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black transition-colors duration-300 flex items-end justify-center p-2"
              >
                <p className="text-white text-sm font-medium">{item.caption}</p>
              </motion.div>
            </motion.div>
          ))}
        </Masonry>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-red-600 text-white text-lg font-semibold rounded-full shadow-xl transition-colors"
          >
            Explore Full Gallery →
          </motion.a>
        </div>
      </div>
      <style jsx>{`
        .my-masonry-grid {
          display: flex;
          margin-left: -16px;
          width: auto;
        }
        .my-masonry-grid_column {
          padding-left: 16px;
          background-clip: padding-box;
        }
        .my-masonry-grid_column > div {
          margin-bottom: 16px;
        }
      `}</style>
    </section>
  );
}
