"use client"

import Link from "next/link"
import Image from "next/image"
import { FiLinkedin, FiInstagram, FiFacebook, FiGithub, FiMenu } from "react-icons/fi"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b shadow-lg' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left side with logo */}
     <div className="flex items-center">
  <Link href="/" className="flex items-center group">
    <div className="relative w-48 h-12 transition-transform duration-300 group-hover:scale-105">
      <Image
        src="/techfly-logo.png"
        alt="TECHFLY.CLOUD Logo"
        width={192}  // Increased from 160
        height={48}  // Increased from 40
        className="object-contain"
        priority
      />
    </div>
  </Link>
</div>

        {/* Center navigation links */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-gray-700 hover:text-[#5e4e99] transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5e4e99] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right side - Social icons and CTA */}
        <div className="flex items-center space-x-4">
          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-3 mr-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5 text-gray-600 hover:text-[#0077b5]" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <FiInstagram className="w-5 h-5 text-gray-600 hover:text-[#E4405F]" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <FiFacebook className="w-5 h-5 text-gray-600 hover:text-[#1877F2]" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5 text-gray-600 hover:text-black" />
            </a>
          </div>

          {/* CTA Button */}
        <Link href="/contact">
  <button
    className="hidden md:block px-6 py-2.5 bg-[#5e4e99] text-white font-medium rounded-lg hover:bg-[#4a3d7a] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
    onMouseEnter={() => {
      // Add your hover effects here
    }}
    onMouseLeave={() => {
      // Add your leave effects here
    }}
    onMouseDown={() => {
      // Add your click/press effects here
    }}
    onMouseUp={() => {
      // Add your release effects here
    }}
  >
    Get Started
  </button>
</Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FiMenu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile menu - conditionally rendered */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slideDown">
          <div className="px-4 py-3 space-y-3">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-[#5e4e99] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="pt-4 border-t flex justify-center space-x-4">
              {[
                { icon: FiLinkedin, color: "#0077b5", label: "LinkedIn" },
                { icon: FiInstagram, color: "#E4405F", label: "Instagram" },
                { icon: FiFacebook, color: "#1877F2", label: "Facebook" },
                { icon: FiGithub, color: "black", label: "GitHub" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={`https://${social.label.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label={social.label}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <social.icon className="w-5 h-5" style={{ color: social.color }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}