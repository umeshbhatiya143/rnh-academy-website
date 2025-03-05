'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

// Hero Images (Replace with your actual images)
import HeroImage1 from '/public/images/homepage/FB_IMG_1739203153164.jpg';
import HeroImage2 from '/public/images/homepage/FB_IMG_1739203223596.jpg';
import HeroSlider from '@/components/Homepage/HeroSlider';
import Features from '@/components/Homepage/Features';
import Activities from '@/components/Homepage/Activities';
import ClassUpgradationBanner from '@/components/Homepage/ClassUpgradationBanner';
import TestimonialsCarousel from '@/components/Homepage/TestimonialsCarousel';
import UpcomingEvents from '@/components/Homepage/UpcomingEvents';
import QuickFacts from '@/components/Homepage/QuickFacts';

export default function Home() {
  const features = [
    {
      icon: '🧪',
      title: "STEAM Education",
      description: "Integrated Science, Technology, Engineering, Arts & Math curriculum"
    },
    {
      icon: '📚',
      title: "Modern Teaching",
      description: "Audio-visual smart classes with interactive learning"
    },
    {
      icon: '🏆',
      title: "Competitions",
      description: "ASSET exams, Olympiads, and inter-school events"
    }
  ];

  const activities = [
    { name: "Music & Dance", icon: '🎵' },
    { name: "Public Speaking", icon: '🎤' },
    { name: "Art & Craft", icon: '🎨' },
    { name: "Sports", icon: '⚽' }
  ];

  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <HeroSlider />

      {/* Features Section */}
      <Features/>

      {/* Activities Section */}
      <Activities/>

      {/* Upgradation Banner */}
      <ClassUpgradationBanner />

      <TestimonialsCarousel />

      <UpcomingEvents />

      <QuickFacts/>
      
    </main>
  );
}