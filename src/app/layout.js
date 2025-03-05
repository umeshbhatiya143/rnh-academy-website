// src/app/layout.js
import React from 'react'
import '@/styles/globals.css'
// src/app/layout.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}