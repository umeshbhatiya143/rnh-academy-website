'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Bars3Icon,
  XMarkIcon,
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  PhotoIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Define navigation items. Mark the active item based on pathname.
  const navigation = [
    { name: 'About', href: '/about', icon: <AcademicCapIcon className="w-5 h-5" />, current: pathname === '/about' },
    { name: 'Academics', href: '/academics', icon: <BookOpenIcon className="w-5 h-5" />, current: pathname === '/academics' },
    { name: 'Admissions', href: '/admissions', icon: <UserGroupIcon className="w-5 h-5" />, current: pathname === '/admissions' },
    { name: 'Facilities', href: '/facilities', icon: <BuildingLibraryIcon className="w-5 h-5" />, current: pathname === '/facilities' },
    { name: 'Gallery', href: '/gallery', icon: <PhotoIcon className="w-5 h-5" />, current: pathname === '/gallery' },
    { name: 'Contact', href: '/contact', icon: <ChatBubbleLeftIcon className="w-5 h-5" />, current: pathname === '/contact' },
  ];

  // Scroll effect fix
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hamburger menu animation variants
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: {
      opacity: 0,
      y: "-150%",
      transition: { duration: 0.2 }
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section wrapped in Link to homepage */}
          <Link href="/" legacyBehavior>
            <a className="flex items-center space-x-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-primary to-red-600 p-3 rounded-full shadow-lg"
              >
                <AcademicCapIcon className="h-6 w-6 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary font-serif">R.N.H Academy</span>
                <span className="text-xs text-gray-600 mt-[-4px]">
                  Reaching The New Horizon Academy
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item, index) => (
              <Link key={item.name} href={item.href} legacyBehavior>
                <a
                  className="flex items-center space-x-1 px-4 py-2 rounded-lg group relative"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 15 }} // Combined animations here
                    className="p-2 bg-primary/10 rounded-full transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-red-500"
                  >
                    {React.cloneElement(item.icon, {
                      className: "w-5 h-5 text-primary group-hover:text-white"
                    })}
                  </motion.div>
                  
                  <span className="text-gray-700 font-medium relative transition-colors duration-300 group-hover:text-primary">
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-red-500 transition-all duration-300 ${item.current ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    />
                  </span>
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            className="md:hidden p-2 text-gray-700 hover:text-primary z-50"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="md:hidden fixed w-full top-20 bg-white shadow-xl"
      >
        <div className="px-4 pt-4 pb-8 space-y-4">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} legacyBehavior>
              <a
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div className="relative">
                  {React.cloneElement(item.icon, { className: "w-5 h-5 text-primary" })}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-red-500 transition-all duration-300 ${item.current ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </div>
                <span className="text-gray-700">{item.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
