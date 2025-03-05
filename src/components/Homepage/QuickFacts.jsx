'use client';
import { motion } from 'framer-motion';

const facts = [
  "10+ Years of Excellence",
  "98% Parent Satisfaction",
  "500+ Happy Learners"
];

export default function QuickFacts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-red-600 text-white py-8 rounded-xl text-center shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-bold">{fact}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
