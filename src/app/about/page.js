// app/about/page.js
'use client'; // Add this directive at the top

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline';

// Sample data
const timeline = [
  { year: '2017', event: 'School Founded with 50 Students' },
  { year: '2019', event: 'CBSE Affiliation Granted' },
  { year: '2021', event: 'STEAM Lab Established' },
  { year: '2023', event: 'Expanded to Class X' },
];

const faculty = [
  { 
    name: 'Anita Sharma', 
    role: 'Principal', 
    qual: 'M.Ed, Ph.D in Education', 
    img: '/faculty/principal.jpg' 
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 bg-gray-100">
        <Image
          src="/about-hero.jpg"
          alt="School Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-serif text-center">
            About R.N.H Academy
          </h1>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-12 px-4 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 text-center">
            Our Journey Since 2017
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 w-1 bg-gray-200 h-full -translate-x-1/2" />
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative mb-8 md:mb-12 flex justify-between items-center"
                viewport={{ once: true }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'order-1' : 'order-3'}`}>
                  {index % 2 !== 0 && (
                    <div className="p-4 md:p-6 bg-white shadow-md rounded-lg">
                      <h3 className="text-lg font-semibold">{item.year}</h3>
                      <p className="text-sm md:text-base">{item.event}</p>
                    </div>
                  )}
                </div>

                <div className="w-2/12 order-2 flex justify-center">
                  <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white">
                    {item.year}
                  </div>
                </div>

                <div className={`w-5/12 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
                  {index % 2 === 0 && (
                    <div className="p-4 md:p-6 bg-white shadow-md rounded-lg">
                      <h3 className="text-lg font-semibold">{item.year}</h3>
                      <p className="text-sm md:text-base">{item.event}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <AcademicCapIcon className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-serif text-primary mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To empower students with STEAM-based education that fosters innovation, 
              critical thinking, and lifelong learning.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <BookOpenIcon className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-serif text-primary mb-3">Our Mission</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide industry-aligned STEAM curriculum</li>
              <li>Nurture creativity and problem-solving skills</li>
              <li>Develop socially responsible global citizens</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Principal's Desk */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-64 md:h-96 rounded-xl overflow-hidden"
          >
            <Image
              src="/principal.jpg"
              alt="Principal"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-primary">
              From the Principal's Desk
            </h2>
            <p className="text-gray-600">
              "At R.N.H Academy, we blend traditional values with modern teaching 
              methodologies to create an environment where every child can thrive. 
              Our focus on holistic development ensures students grow into confident, 
              compassionate individuals ready to face future challenges."
            </p>
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 text-center">
            Meet Our Faculty
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative h-48 md:h-64">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.qual}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 text-center">
            Accreditations & Affiliations
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Image
              src="/cbse-logo.png"
              alt="CBSE"
              width={120}
              height={120}
              className="h-16 w-auto object-contain"
            />
            <Image
              src="/icse-logo.png"
              alt="ICSE"
              width={120}
              height={120}
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="mt-8 text-center text-gray-600 space-y-2">
            <p>Affiliation No.: 1930281</p>
            <p>NOC No.: 567/S/2019</p>
            <p>UDISE Code: 09123456789</p>
          </div>
        </div>
      </section>
    </div>
  );
}