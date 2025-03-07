// app/academics/page.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  BookOpenIcon,
  BeakerIcon,
  CalculatorIcon,
  SwatchIcon // Changed from PaletteIcon to SwatchIcon
} from '@heroicons/react/24/outline'; // Ensure correct import path


export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 bg-gray-100">
        <Image
          src="/academics-hero.jpg"
          alt="Students in classroom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-serif text-center">
            Academic Excellence
          </h1>
        </div>
      </section>

      {/* Playgroup Section */}
      <section className="py-12 px-4 md:py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6 flex items-center gap-3">
              <BookOpenIcon className="h-8 w-8 text-primary" />
              Playgroup Program
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Daily Schedule</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between py-2 border-b">
                    <span>9:00 - 9:30 AM</span>
                    <span>Arrival & Free Play</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>9:30 - 10:00 AM</span>
                    <span>Circle Time</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>10:00 - 10:45 AM</span>
                    <span>Learning Activity</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Learning Goals</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Develop social skills through group activities
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Enhance fine motor skills with art & craft
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Introduction to basic concepts through play
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Primary School Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 flex items-center gap-3">
              <CalculatorIcon className="h-8 w-8 text-primary" />
              Primary (I - V)
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Core Subjects</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Mathematics', 'English', 'Science', 'Social Studies', 'Hindi', 'Computer Basics'].map((subject) => (
                    <div key={subject} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <span className="text-primary">•</span>
                      {subject}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Foundational Focus</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Literacy Program</h4>
                    <p className="text-gray-600">Daily reading sessions with leveled readers</p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Math Lab</h4>
                    <p className="text-gray-600">Hands-on activities for conceptual understanding</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Middle School Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 flex items-center gap-3">
              <BeakerIcon className="h-8 w-8 text-primary" />
              Middle School (VI - VIII)
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Lab Activities</h3>
                <div className="space-y-4">
                  {['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Computer Lab'].map((lab) => (
                    <div key={lab} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BeakerIcon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="font-medium">{lab}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Olympiad Prep</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold mb-2">SOF Olympiads</h4>
                    <p className="text-gray-600">Weekly practice sessions for IMO, NSO, IEO</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold mb-2">NTSE Foundation</h4>
                    <p className="text-gray-600">Stage-wise preparation from Class VI</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Class X Preview */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 flex items-center gap-3">
              <SwatchIcon  className="h-8 w-8 text-primary" />
              Class X Preview
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Subjects Offered</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Mathematics', 'Science', 'Social Science', 'English', 'Hindi', 'Computer Applications'].map((subject) => (
                    <div key={subject} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <span className="text-primary">•</span>
                      {subject}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Board Exam Strategy</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="font-semibold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Monthly Tests</h4>
                      <p className="text-gray-600">Full-length practice exams</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="font-semibold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Doubt Classes</h4>
                      <p className="text-gray-600">Weekly Q&A sessions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}