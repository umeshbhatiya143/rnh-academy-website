// app/facilities/page.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { VideoCameraIcon, BookOpenIcon, ShieldCheckIcon, TruckIcon, FireIcon } from '@heroicons/react/24/outline';

export default function FacilitiesPage() {
  const sportsEquipment = [
    'Football Field', 'Basketball Court', 'Cricket Pitch', 'Athletics Track', 
    'Indoor Badminton', 'Table Tennis', 'Gymnastics Equipment'
  ];

  const transportRoutes = [
    { route: 'Route 1', areas: 'Sector 1-5, Downtown', time: '7:30 AM' },
    { route: 'Route 2', areas: 'Green Valley, Hillside', time: '7:45 AM' },
    { route: 'Route 3', areas: 'Riverfront, Suburbs', time: '8:00 AM' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 bg-gray-100">
        <Image
          src="/facilities-hero.jpg"
          alt="School campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-serif text-center">
            World-Class Facilities
          </h1>
        </div>
      </section>

      {/* Smart Classrooms */}
      <section className="py-12 px-4 md:py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/smart-class.jpg"
                alt="Smart classroom"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif text-primary flex items-center gap-3">
                <VideoCameraIcon className="h-8 w-8 text-primary" />
                Smart Classrooms
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary">▹</span>
                  4K Interactive Smart Boards
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▹</span>
                  High-Speed WiFi (1Gbps)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▹</span>
                  Digital Attendance System
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▹</span>
                  AR/VR Learning Kits
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Library Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif text-primary flex items-center gap-3">
                <BookOpenIcon className="h-8 w-8 text-primary" />
                Digital Library
              </h2>
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/xyz123"
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              <button className="bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2">
                Start 360° Tour
              </button>
            </div>
            
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/library.jpg"
                alt="School library"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sports Facilities */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 text-center">
            Sports & Recreation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[1,2,3,4].map((i) => (
                <div key={i} className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src={`/sports-${i}.jpg`}
                    alt={`Sports facility ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Facilities Include:</h3>
              <ul className="grid grid-cols-2 gap-4">
                {sportsEquipment.map((item) => (
                  <li key={item} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <span className="text-primary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 text-center">
            Safety First
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <ShieldCheckIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security Systems</h3>
              <ul className="text-gray-600 space-y-2">
                <li>200+ CCTV Cameras</li>
                <li>Biometric Access</li>
                <li>24/7 Security Staff</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <FireIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency Prep</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Monthly Fire Drills</li>
                <li>First Aid Rooms</li>
                <li>Earthquake Resistant</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <TruckIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transport Safety</h3>
              <ul className="text-gray-600 space-y-2">
                <li>GPS Tracking</li>
                <li>Female Attendants</li>
                <li>Speed Governors</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 text-center">
            Transport Network
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left">Route</th>
                    <th className="p-4 text-left">Areas Covered</th>
                    <th className="p-4">Pickup Time</th>
                  </tr>
                </thead>
                <tbody>
                  {transportRoutes.map((route) => (
                    <tr key={route.route} className="border-t">
                      <td className="p-4 font-medium">{route.route}</td>
                      <td className="p-4">{route.areas}</td>
                      <td className="p-4 text-center">{route.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-6 bg-primary/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Live Bus Tracking</h3>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Bus TN-05-AB-1234</p>
                  <div className="animate-pulse text-primary">
                    <div className="h-8 w-8 mx-auto mb-2">📍</div>
                    <p>Moving towards School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}