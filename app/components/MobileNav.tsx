'use client'

import { useState, useEffect, useRef } from 'react'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`mobile-menu-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`} onClick={handleLinkClick}>
        <nav 
          ref={menuRef}
          className={`mobile-menu ${isOpen ? 'active' : ''}`} 
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-menu-header">
            <h3>Menu</h3>
            <button 
              className="mobile-menu-close"
              onClick={handleLinkClick}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <ul className="mobile-nav-links">
            <li>
              <a href="#home" onClick={handleLinkClick}>
                <span className="nav-icon">🏠</span>
                <span className="nav-text">Home</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick}>
                <span className="nav-icon">ℹ️</span>
                <span className="nav-text">About</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
            <li>
              <a href="#products" onClick={handleLinkClick}>
                <span className="nav-icon">🛍️</span>
                <span className="nav-text">Products</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
            <li>
              <a href="#photos" onClick={handleLinkClick}>
                <span className="nav-icon">📸</span>
                <span className="nav-text">Photos</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
            <li>
              <a href="#location" onClick={handleLinkClick}>
                <span className="nav-icon">📍</span>
                <span className="nav-text">Location</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
            <li>
              <a href="#deals" onClick={handleLinkClick}>
                <span className="nav-icon">🎉</span>
                <span className="nav-text">Weekly Deals</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
