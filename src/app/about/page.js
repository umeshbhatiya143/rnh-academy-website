'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { LightBulbIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

// Timeline Data
const timeline = [
  { year: '2017', event: 'School Founded with 50 Students', image: '/images/journey-2017.jpg' },
  { year: '2019', event: 'CBSE Affiliation Granted', image: '/images/journey-2019.jpg' },
  { year: '2021', event: 'STEAM Lab Established', image: '/images/journey-2021.jpg' },
  { year: '2023', event: 'Expanded to Class X', image: '/images/journey-2023.jpg' },
];

const faculty = [
  {
    name: 'Anita Sharma',
    role: 'Principal',
    qual: 'M.Ed, Ph.D in Education',
    img: '/images/gallery/FB_IMG_1739204147110.jpg',
    bio: 'Passionate educator with 15+ years of leadership in holistic child development.'
  },
  {
    name: 'Rahul Verma',
    role: 'Mathematics Teacher',
    qual: 'M.Sc, B.Ed',
    img: '/images/gallery/FB_IMG_1739204065378.jpg',
    bio: 'Expert in advanced math techniques and Olympiad coaching.'
  },
  {
    name: 'Sneha Kapoor',
    role: 'Science Teacher',
    qual: 'M.Sc, B.Ed',
    img: '/images/gallery/FB_IMG_1739203512280.jpg',
    bio: 'STEAM enthusiast inspiring curiosity and critical thinking in science.'
  },
  // Add more faculty members as needed...
];


export default function AboutPage() {
  const [activeYear, setActiveYear] = useState(timeline[0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with subtle overlay pattern */}
      <section className="relative h-64 md:h-96 bg-gradient-to-b from-red-50 to-white overflow-hidden">
        <Image
          src="/images/gallery/FB_IMG_1739204386397.jpg" // Replace with a relevant hero image
          alt="Serene Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl lg:text-6xl text-white font-serif font-bold text-center drop-shadow-xl px-4"
          >
            Empowering Young Minds at R.N.H Academy
          </motion.h1>
        </div>
      </section>

      {/* About the Academy */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Heading Container */}
            <div className="flex flex-col items-center mb-4">
              <h2 className="text-[26px] sm:text-3xl md:text-4xl font-serif font-bold text-[#DC2626] leading-snug">
                Our Legacy of Excellence
              </h2>
            </div>

            {/* Animated Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              className="h-1 bg-gradient-to-r from to-red-600 mx-auto rounded-full mb-6
                   w-full max-w-[10rem] sm:max-w-[12rem] md:max-w-[14rem]"
            />

            {/* Description Paragraph */}
            <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto px-4">
              Nestled in a serene environment near Danopur, Deoria, R.N.H Academy stands as a beacon
              of excellence in education. With a rich legacy of 8+ years, we’ve grown from humble
              beginnings into a thriving community of learners while providing personalized attention
              to each student.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Our Journey Timeline with Decorative Line */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-red-50 to-white relative">
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
              <span className="bg-gradient-to-r from-red-100 to-red-600 bg-clip-text text-transparent">
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

          {/* Timeline & Enhanced Left Card */}
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
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500"
                />
                {/* Darker gradient overlay for readability */}
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
              {/* Vertical Line */}
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
             transition-shadow duration-300">
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

      {/* Campus & Infrastructure */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-red-50 relative border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8">
          {/* Left Column: Text & Heading */}
          <div className="w-full md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif font-bold text-[#DC2626] mb-2"
            >
              Campus and Infrastructure
            </motion.h2>

            {/* Decorative Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              className="h-1 bg-gradient-to-r from-[#DC2626] to-red-600 w-32 rounded-full mb-4"
            />

            <p className="text-gray-700 text-lg max-w-xl">
              Our campus offers a peaceful and conducive learning environment with modern
              infrastructure and state-of-the-art facilities. Carefully designed classrooms
              and activity areas ensure a holistic development experience for our students.
            </p>
          </div>

          {/* Right Column: Image with Hover Zoom */}
          <motion.div
            className="w-full md:w-1/2 relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/gallery/FB_IMG_1739203583968.jpg" // Replace with your campus image
              alt="Campus and Infrastructure"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Education and Beyond */}
      {/* Comprehensive Education and Beyond */}
      <section className="relative py-12 md:py-16 bg-white">
        {/* Optional subtle background pattern */}
        <div className="absolute inset-0 bg-[url('/images/patterns/dot-pattern.svg')] opacity-5 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold text-[#DC2626] mb-2"
          >
            Comprehensive Education and Beyond
          </motion.h2>

          {/* Animated Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="h-1 bg-gradient-to-r from to-red-600 w-48 mx-auto rounded-full mb-6"
          />

          <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg">
            At R.N.H Academy, we offer a well-rounded education that goes beyond academics to build character, foster creativity, and prepare our students for the future.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-lg border border-red-100 relative overflow-hidden">
              {/* Decorative Icon Top-Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-2 right-2 text-red-200"
              >
                <AcademicCapIcon className="h-10 w-10" />
              </motion.div>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 relative z-10">
                <li>Stream-based comprehensive education</li>
                <li>Modern teaching methods with audio-visual aids</li>
                <li>Focus on skill enhancement and foundational learning</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-red-100 relative overflow-hidden">
              {/* Decorative Icon Top-Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-2 right-2 text-red-200"
              >
                <BookOpenIcon className="h-10 w-10" />
              </motion.div>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 relative z-10">
                <li>Participation in ASSET exams and Olympiads</li>
                <li>Activities: Music, Dance, Public Speaking, Holistic Development</li>
                <li>Personalized attention and growth opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-white to-red-50">
        {/* Optional subtle background pattern */}
        <div className="absolute inset-0 bg-[url('/images/patterns/dot-pattern.svg')] opacity-5 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold text-[#DC2626] mb-2"
          >
            Our Guiding Principles
          </motion.h2>

          {/* Animated Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="h-1 bg-gradient-to-r from to-red-600 w-48 mx-auto rounded-full mb-6"
          />

          <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg">
            We believe in providing a well-rounded education that nurtures academic excellence, creativity, and character development within a supportive and inclusive environment.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
            <div className="p-6 bg-white rounded-xl shadow-lg border border-red-100 relative overflow-hidden">
              {/* Decorative Icon Top-Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-2 right-2 text-red-200"
              >
                <LightBulbIcon className="h-10 w-10" />
              </motion.div>

              <h3 className="text-xl font-semibold text-[#DC2626] mb-2">Academic Excellence</h3>
              <p className="text-gray-700">
                Our curriculum focuses on building strong conceptual foundations and critical thinking skills.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg border border-red-100 relative overflow-hidden">
              {/* Decorative Icon Top-Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-2 right-2 text-red-200"
              >
                <UserGroupIcon className="h-10 w-10" />
              </motion.div>

              <h3 className="text-xl font-semibold text-[#DC2626] mb-2">Character Development</h3>
              <p className="text-gray-700">
                We emphasize values, ethics, and personal growth alongside academic achievement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Desk */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/gallery/principal.jpg" // Replace with your principal's image
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
            <h2 className="text-2xl md:text-3xl font-serif text-[#DC2626]">
              From the Principal&apos;s Desk
            </h2>

            <p className="text-gray-700 text-lg">
              "At R.N.H Academy, we blend traditional values with modern teaching methodologies to create an environment where every child can thrive. Our focus on holistic development ensures students grow into confident, compassionate individuals ready to face future challenges."
            </p>
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace YOUR_VIDEO_ID with the actual video ID
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Principal's Message"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif text-[#DC2626] text-center mb-8"
          >
            Meet Our Faculty
          </motion.h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Hover Gradient Border */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-[#DC2626] group-hover:to-red-600 transition-colors duration-300" />

                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Sliding Overlay from Bottom */}
                  <motion.div
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 flex items-end pointer-events-none 
                             h-0 group-hover:h-full transition-all duration-300"
                  >
                    <p className="text-sm">
                      {member.bio}
                    </p>
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-bold text-[#DC2626]">{member.name}</h3>
                  <p className="text-sm text-red-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.qual}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Affiliations */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-[#DC2626] mb-8 text-center">
            Accreditations & Affiliations
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Image
              src="/images/gallery/cbse-logo.png" // Replace with your CBSE logo
              alt="CBSE"
              width={120}
              height={120}
              className="h-16 w-auto object-contain"
            />
            <Image
              src="/images/gallery/icse-logo.gif" // Replace with your ICSE logo
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

      <section className="relative py-12 md:py-16 bg-red-600 text-white overflow-hidden">
        {/* Animated White Overlay */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 3,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-transparent via-white/50 to-transparent"
        />

        {/* CTA Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
          >
            Join the R.N.H Academy Family
          </motion.h2>
          <p className="mb-8 text-base md:text-lg">
            If you're looking for a school that provides a nurturing environment,
            academic excellence, and opportunities for growth, we invite you to join our community.
            Get in touch with us to schedule a visit.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#DC2626] to-red-600 text-white font-semibold rounded-full shadow-xl transition-colors"
          >
            Schedule a Visit →
          </motion.a>
        </div>
      </section>
    </div>
  );
}
