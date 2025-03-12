// app/academics/page.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  BookOpenIcon,
  BeakerIcon,
  CalculatorIcon,
  SwatchIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function AcademicsPage() {
  const themeColor = '#DC2626'; // Primary color
  const accentColor = '#FEE2E2'; // Light red for backgrounds

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 bg-gradient-to-br from-primary to-[#B91C1C]">
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <AcademicCapIcon className="h-16 w-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl text-white font-serif mb-4">
              Academic Excellence
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Nurturing Minds Through Innovative Learning Approaches
            </p>
          </motion.div>
        </div>
      </section>

      {/* Playgroup Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-white to-[#FEE2E2] rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-primary/10 rounded-xl">
              <BookOpenIcon className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-serif text-primary">Playgroup Program</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-primary pb-2">
                Daily Schedule
              </h3>
              <div className="space-y-4">
                {[
                  { time: '9:00 - 9:30 AM', activity: 'Arrival & Free Play' },
                  { time: '9:30 - 10:00 AM', activity: 'Circle Time' },
                  { time: '10:00 - 10:45 AM', activity: 'Learning Activity' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm"
                  >
                    <span className="text-gray-600">{item.time}</span>
                    <span className="font-medium text-primary">{item.activity}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-primary pb-2">
                Learning Goals
              </h3>
              <ul className="space-y-4">
                {[
                  'Social Skills Development',
                  'Fine Motor Skills Enhancement',
                  'Foundational Concept Introduction'
                ].map((goal, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary">✓</span>
                    </div>
                    <span className="text-gray-600">{goal}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Primary School Section */}
      <section className="py-16 bg-primary/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-6xl mx-auto px-4"
        >
          <div className="bg-gradient-to-r from-primary to-[#B91C1C] rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-white/10 rounded-xl">
                <CalculatorIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-serif text-white">Primary (I - V)</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white/90 border-b-2 border-white/30 pb-2">
                  Core Curriculum
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Mathematics', 'English', 'Science', 'Social Studies', 'Hindi', 'Computer Basics'].map((subject) => (
                    <motion.div
                      key={subject}
                      whileHover={{ scale: 1.05 }}
                      className="p-3 bg-white/10 rounded-lg text-center text-white hover:bg-white/20 transition-colors"
                    >
                      {subject}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white/90 border-b-2 border-white/30 pb-2">
                  Special Programs
                </h3>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-4 bg-white/10 rounded-lg"
                  >
                    <h4 className="font-semibold text-white mb-2">Literacy Program</h4>
                    <p className="text-white/80">Daily reading sessions with leveled readers</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-4 bg-white/10 rounded-lg"
                  >
                    <h4 className="font-semibold text-white mb-2">Math Lab</h4>
                    <p className="text-white/80">Hands-on conceptual learning activities</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Middle School Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 border-2 border-primary/10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-primary/10 rounded-xl">
              <BeakerIcon className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-serif text-primary">Middle School (VI - VIII)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-primary pb-2">
                Lab Facilities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Computer Lab'].map((lab) => (
                  <motion.div
                    key={lab}
                    whileHover={{ scale: 1.03 }}
                    className="p-4 bg-primary/5 rounded-lg text-center hover:bg-primary/10 transition-colors"
                  >
                    <BeakerIcon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <span className="text-gray-700">{lab}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-primary pb-2">
                Competitive Edge
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'SOF Olympiads',
                    content: 'Weekly sessions for IMO, NSO, IEO'
                  },
                  {
                    title: 'NTSE Foundation',
                    content: 'Structured preparation from Class VI'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary"
                  >
                    <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Class X Preview Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-6xl mx-auto px-4"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-primary/10 rounded-xl">
                <SwatchIcon className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-serif text-primary">Class X Preview</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-primary pb-2">
                  Subject Portfolio
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Mathematics', 'Science', 'Social Science', 'English', 'Hindi', 'Computer Applications'].map((subject) => (
                    <motion.div
                      key={subject}
                      whileHover={{ scale: 1.03 }}
                      className="p-3 bg-primary/5 rounded-lg text-center hover:bg-primary/10 transition-colors"
                    >
                      {subject}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-primary pb-2">
                  Exam Preparation
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Monthly Tests', desc: 'Full-length practice exams' },
                    { step: '2', title: 'Doubt Classes', desc: 'Weekly Q&A sessions' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg"
                    >
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}