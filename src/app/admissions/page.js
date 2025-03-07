// app/admissions/page.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { DocumentArrowDownIcon, CurrencyDollarIcon, QuestionMarkCircleIcon, UserPlusIcon } from '@heroicons/react/24/outline';

export default function AdmissionsPage() {
  const processSteps = [
    { title: 'Inquiry', desc: 'Submit online query or visit campus' },
    { title: 'Form', desc: 'Complete application details' },
    { title: 'Interview', desc: 'Student/parent interaction' },
    { title: 'Fee', desc: 'Payment & enrollment' },
  ];

  const feeStructure = [
    { category: 'Playgroup', admissionFee: '₹15,000', annualFee: '₹75,000', transport: '₹1,200/month' },
    { category: 'Primary', admissionFee: '₹18,000', annualFee: '₹85,000', transport: '₹1,500/month' },
    { category: 'Middle School', admissionFee: '₹22,000', annualFee: '₹95,000', transport: '₹1,800/month' },
  ];

  const faqs = [
    { question: 'Age Criteria for Playgroup?', answer: 'Child must be 2.5-3.5 years as of 1st April' },
    { question: 'Transportation Routes?', answer: 'Covers major areas within 15km radius' },
    { question: 'Document Requirements?', answer: 'Birth certificate, Aadhar, Previous school reports' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 bg-gray-100">
        <Image
          src="/admissions-hero.jpg"
          alt="Happy students"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-serif text-center">
            Admissions Made Simple
          </h1>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-4 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 text-center">
            4-Step Admission Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 text-center">
            Fee Structure (2024-25)
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4">Admission Fee</th>
                  <th className="p-4">Annual Fee</th>
                  <th className="p-4">Transport</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={index % 2 === 0 ? 'bg-gray-50' : ''}
                  >
                    <td className="p-4 font-medium">{fee.category}</td>
                    <td className="p-4 text-center">{fee.admissionFee}</td>
                    <td className="p-4 text-center">{fee.annualFee}</td>
                    <td className="p-4 text-center">{fee.transport}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="mt-6 text-gray-600 text-center">
            * Includes tuition, books, and uniform | Payment plans available
          </p>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 text-center">
            Admission Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.a
              href="/admission-form.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-lg flex items-center gap-4 hover:bg-gray-50"
            >
              <DocumentArrowDownIcon className="h-12 w-12 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Admission Form</h3>
                <p className="text-gray-600">PDF Document (356 KB)</p>
              </div>
            </motion.a>
            
            <motion.a
              href="/school-brochure.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-lg flex items-center gap-4 hover:bg-gray-50"
            >
              <CurrencyDollarIcon className="h-12 w-12 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">School Brochure</h3>
                <p className="text-gray-600">PDF Document (1.2 MB)</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 text-center">
            Admission FAQs
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <QuestionMarkCircleIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="bg-primary/10 p-8 rounded-2xl"
          >
            <UserPlusIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-gray-600 mb-8">
              Schedule a campus tour or begin your application
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold"
              >
                Apply Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold"
              >
                Book Tour
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}