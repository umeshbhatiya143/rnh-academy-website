// app/gallery/page.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TrophyIcon, FilmIcon, PhotoIcon } from '@heroicons/react/24/outline';

const categories = ['all', 'events', 'classrooms', 'competitions', 'festivals'];
const videos = ['dQw4w9WgXcQ', 'yPYZpwSpKmA', 'mLJugkrQe8E']; // YouTube video IDs

const images = [
  { id: 1, category: 'events', src: '/gallery/event1.jpg', caption: 'Annual Day 2023', size: 'tall' },
  { id: 2, category: 'classrooms', src: '/gallery/class1.jpg', caption: 'Smart Classroom', size: 'wide' },
  { id: 3, category: 'competitions', src: '/gallery/comp1.jpg', caption: 'Science Fair', size: 'tall' },
  { id: 4, category: 'festivals', src: '/gallery/fest1.jpg', caption: 'Diwali Celebration', size: 'wide' },
  // Add more images...
];

const achievements = [
  { id: 1, src: '/achievements/olympiad1.jpg', caption: 'National Math Olympiad Winners' },
  { id: 2, src: '/achievements/olympiad2.jpg', caption: 'Science Talent Search' },
  // Add more achievements...
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-48 md:h-64 bg-gray-100">
        <Image
          src="/gallery-hero.jpg"
          alt="Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl text-white font-serif">Our Gallery</h1>
        </div>
      </section>

      {/* Filter Tabs */}
      <nav className="sticky top-0 bg-white z-10 border-b">
        <div className="container mx-auto px-4 py-4 flex overflow-x-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 mx-2 rounded-full capitalize ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      {/* Masonry Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`relative group ${
                image.size === 'tall' ? 'row-span-2' : 'row-span-1'
              }`}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-medium">
                    {image.caption}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Wall */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 flex items-center gap-2">
            <TrophyIcon className="h-8 w-8" />
            Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="relative group">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={achievement.src}
                    alt={achievement.caption}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <span className="text-white text-sm font-medium">
                      {achievement.caption}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 flex items-center gap-2">
            <FilmIcon className="h-8 w-8" />
            Video Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((videoId) => (
              <div key={videoId} className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}