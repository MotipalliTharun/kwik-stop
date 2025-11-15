import PhotoGallery from './components/PhotoGallery'
import MikeyChatbot from './components/MikeyChatbot'
import HexagonStopSign from './components/HexagonStopSign'
import WeeklyDeals from './components/WeeklyDeals'
import StoreHours from './components/StoreHours'
import PaymentMethods from './components/PaymentMethods'
import MobileNav from './components/MobileNav'
import AnimatedSection from './components/AnimatedSection'

export default function Home() {
  // Store photos - Using actual storefront images from /public/images/
  const storePhotos = [
    {
      url: '/images/WhatsApp Image 2025-11-15 at 11.58.39.jpeg',
      alt: 'Kwik Stop Store Front - Discount Beverages',
      title: 'Kwik Stop Store Front',
      description: '530 Cheney Hwy - Your friendly neighborhood convenience store',
      fallback: 'https://via.placeholder.com/600x400/DC2626/FFFFFF?text=Kwik+Stop+Store'
    },
    {
      url: '/images/WhatsApp Image 2025-11-15 at 11.58.39 (1).jpeg',
      alt: 'Kwik Stop Store View',
      title: 'Store View',
      description: 'Visit us for discount beverages, beer, wine, cigs, and lotto',
      fallback: 'https://via.placeholder.com/600x400/DC2626/FFFFFF?text=Store+View'
    },
    {
      url: '/images/WhatsApp Image 2025-11-15 at 11.58.39 (2).jpeg',
      alt: 'Kwik Stop Exterior',
      title: 'Store Exterior',
      description: 'Bright red roof and welcoming storefront',
      fallback: 'https://via.placeholder.com/600x400/DC2626/FFFFFF?text=Store+Exterior'
    },
    {
      url: '/images/WhatsApp Image 2025-11-15 at 11.58.39 (3).jpeg',
      alt: 'Kwik Stop Store Details',
      title: 'Store Details',
      description: 'Well-stocked with all your convenience needs',
      fallback: 'https://via.placeholder.com/600x400/DC2626/FFFFFF?text=Store+Details'
    },
    {
      url: '/images/WhatsApp Image 2025-11-13 at 20.44.00 (2).jpeg',
      alt: 'Kwik Stop Store Photo',
      title: 'Store Interior',
      description: 'Well-stocked shelves with all your convenience needs',
      fallback: 'https://via.placeholder.com/600x400/DC2626/FFFFFF?text=Store+Interior'
    },
    {
      url: '/images/WhatsApp Image 2025-11-13 at 20.44.00 (4).jpeg',
      alt: 'Kwik Stop Store Photo',
      title: 'Store Exterior View',
      description: 'Visit us at 530 Cheney Hwy, Titusville',
      fallback: 'https://via.placeholder.com/600x400/DC2626/FFFFFF?text=Store+Exterior+View'
    },
    {
      url: '/images/WhatsApp Image 2025-11-13 at 20.44.00 (5).jpeg',
      alt: 'Kwik Stop Discount Beverages',
      title: 'Discount Beverages',
      description: 'Great deals on drinks and refreshments',
      fallback: 'https://via.placeholder.com/600x400/DC2626/FFFFFF?text=Discount+Beverages'
    }
  ]

  // Display photos - PhotoGallery component will automatically handle
  // loading local images first, then falling back to placeholders if not found
  const displayPhotos = storePhotos

  return (
    <>
      {/* Mobile-First Navigation Header */}
      <nav className="main-navbar">
        <div className="navbar-wrapper">
          <div className="container">
            <div className="navbar-content">
              {/* Logo Section */}
              <div className="navbar-logo">
                <HexagonStopSign size="small" className="nav-logo-icon" />
                <div className="navbar-brand">
                  <div className="brand-name">KWIK STOP</div>
                  <div className="brand-tagline">DISCOUNT BEVERAGES</div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <ul className="navbar-links desktop-only">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#photos">Photos</a></li>
                <li><a href="#location">Location</a></li>
              </ul>

              {/* Mobile Navigation Toggle */}
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Great Landing Page Hero Section */}
      <header className="landing-hero" id="home">
        <div className="hero-bg-image" style={{
          backgroundImage: `url('/images/WhatsApp Image 2025-11-15 at 11.58.39.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'left top',
          backgroundRepeat: 'no-repeat'
        }}></div>
        <div className="hero-bg-pattern"></div>
        <div className="hero-gradient-overlay"></div>
        
        <div className="container">
          <div className="hero-wrapper">
            {/* Hero Logo */}
            <div className="hero-logo-wrapper">
              <HexagonStopSign size="large" className="hero-stop-sign" />
            </div>

            {/* Hero Main Content */}
            <div className="hero-main-content">
              <h1 className="hero-main-title">
                <span className="hero-brand">KWIK STOP</span>
                <span className="hero-description">Your Family Neighborhood Store</span>
              </h1>
              
              <p className="hero-subtitle-text">DISCOUNT BEVERAGES & MORE</p>
              
              <div className="hero-badge-container">
                <span className="badge-item">LOTTO</span>
                <span className="badge-separator">•</span>
                <span className="badge-item">BEER</span>
                <span className="badge-separator">•</span>
                <span className="badge-item">WINE</span>
                <span className="badge-separator">•</span>
                <span className="badge-item">CIGS</span>
              </div>

              {/* Hero Features Grid */}
              <div className="hero-features-grid">
                <div className="hero-feature-card">
                  <div className="feature-icon-wrapper">🏪</div>
                  <div className="feature-label">Family Owned</div>
                </div>
                <div className="hero-feature-card">
                  <div className="feature-icon-wrapper">💰</div>
                  <div className="feature-label">Discount Prices</div>
                </div>
                <div className="hero-feature-card">
                  <div className="feature-icon-wrapper">😊</div>
                  <div className="feature-label">Friendly Service</div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="hero-actions">
                <a href="#location" className="hero-btn hero-btn-primary">
                  <span className="btn-icon">📍</span>
                  <span className="btn-text">Visit Us Today</span>
                </a>
                <a href="#products" className="hero-btn hero-btn-secondary">
                  <span className="btn-icon">🛍️</span>
                  <span className="btn-text">View Products</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-hint">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-arrow-down"></div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          {/* Welcome Section */}
          <AnimatedSection delay={100}>
            <section className="content-section welcome-section" id="about">
              <div className="section-title-wrapper">
                <HexagonStopSign size="small" />
                <h2 className="section-title">Welcome to Kwik Stop</h2>
              </div>
              <div className="welcome-section-content">
                <div className="welcome-text-block">
                  <h3 className="welcome-heading">Your Trusted Neighborhood Store</h3>
                  <div className="welcome-paragraphs">
                    <p>
                      Kwik Stop is a family-owned convenience store dedicated to serving our community 
                      with the best prices on beverages, beer, cigarettes, and more. We&apos;ve been 
                      your neighborhood destination for quality products at unbeatable discount prices.
                    </p>
                    <p>
                      Located at 530 Cheney Hwy in Titusville, Florida, we pride ourselves on friendly 
                      service, fair prices, and a welcoming atmosphere for families and neighbors alike. 
                      We also feature a CoinFlip Bitcoin ATM for your convenience.
                    </p>
                  </div>
                  <div className="welcome-badges">
                    <div className="welcome-badge">🏪 Family Owned</div>
                    <div className="welcome-badge">💰 Discount Prices</div>
                    <div className="welcome-badge">👥 Neighborhood Store</div>
                    <div className="welcome-badge">😊 Friendly Service</div>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Weekly Deals Section */}
          <AnimatedSection delay={200}>
            <section className="content-section" id="deals">
              <WeeklyDeals />
            </section>
          </AnimatedSection>

          {/* Products Section */}
          <AnimatedSection delay={150}>
            <section className="content-section" id="products">
              <div className="section-title-wrapper">
                <HexagonStopSign size="small" />
                <h2 className="section-title">Our Products</h2>
              </div>
              <div className="products-grid">
                <div className="product-card">
                  <h3>🥤 Discount Beverages</h3>
                  <p>Best prices on sodas, juices, water, energy drinks, and all your favorite beverages</p>
                </div>
                <div className="product-card">
                  <h3>🍺 Beer Selection</h3>
                  <p>Wide variety of beers and alcoholic beverages at competitive prices</p>
                </div>
                <div className="product-card">
                  <h3>🚬 Cigarettes</h3>
                  <p>All major cigarette brands available</p>
                </div>
                <div className="product-card">
                  <h3>🎫 Lotto Tickets</h3>
                  <p>Florida lottery tickets and scratch-offs available</p>
                </div>
                <div className="product-card">
                  <h3>🍫 Snacks & Food</h3>
                  <p>Convenience items, snacks, and quick meals for on-the-go</p>
                </div>
                <div className="product-card">
                  <h3>🏠 Household Items</h3>
                  <p>Essential items for your home and daily needs</p>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Store Information Section */}
          <AnimatedSection delay={100}>
            <section className="content-section" id="store-info">
              <div className="section-title-wrapper">
                <HexagonStopSign size="small" />
                <h2 className="section-title">Store Information</h2>
              </div>
              <div className="store-info-grid">
                <StoreHours />
                <PaymentMethods />
                <div className="info-card">
                  <h3>
                    <span className="card-icon">📍</span>
                    Address
                  </h3>
                  <p>
                    530 Cheney Hwy<br />
                    Titusville, FL 32780<br />
                    United States
                  </p>
                </div>
                <div className="info-card">
                  <h3>
                    <span className="card-icon">📞</span>
                    Phone
                  </h3>
                  <p>
                    <a href="tel:+13212693041" className="info-link">
                      (321) 269-3041
                    </a>
                  </p>
                </div>
                <div className="info-card">
                  <h3>
                    <span className="card-icon">💰</span>
                    Services
                  </h3>
                  <p>
                    CoinFlip Bitcoin ATM
                  </p>
                </div>
                <div className="info-card">
                  <h3>
                    <span className="card-icon">💬</span>
                    Chat with Mikey
                  </h3>
                  <p>
                    Have a question?<br />
                    Click the chat button in the bottom right<br />
                    <strong>Mikey is here to help!</strong>
                  </p>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Photo Gallery Section */}
          <AnimatedSection delay={200}>
            <section className="content-section" id="photos">
              <div className="section-title-wrapper">
                <HexagonStopSign size="small" />
                <h2 className="section-title">Store Photos</h2>
              </div>
              <p className="section-description">
                Take a virtual tour of our store! Visit us in person for the real experience.
              </p>
              <PhotoGallery photos={displayPhotos} />

            </section>
          </AnimatedSection>

          {/* Location Map Section */}
          <AnimatedSection delay={100}>
            <section className="content-section" id="location">
              <div className="section-title-wrapper">
                <HexagonStopSign size="small" />
                <h2 className="section-title">Find Us</h2>
              </div>
              <p className="section-description">
                530 Cheney Hwy, Titusville, FL 32780 • Your friendly neighborhood convenience store
              </p>
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.634971607099!2d-80.8096713!3d28.5580354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e0b2ada1a52337%3A0xc27592920c683cc1!2sK%20%26%20B%20Kwik%20Stop!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus&hl=en"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kwik Stop Location"
                ></iframe>
              </div>
            </section>
          </AnimatedSection>
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <HexagonStopSign size="small" className="footer-logo-icon" />
              <h3 className="footer-brand">Kwik Stop</h3>
              <p className="footer-tagline-text">Your Family Neighborhood Store</p>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Store Address</h4>
              <address className="footer-address-block">
                <p className="address-line">
                  <strong>Kwik Stop</strong><br />
                  530 Cheney Hwy<br />
                  Titusville, FL 32780<br />
                  United States
                </p>
                <p className="address-action">
                  <a href="tel:+13212693041" className="footer-link">
                    📞 (321) 269-3041
                  </a>
                </p>
              </address>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#photos">Photos</a></li>
                <li><a href="#location">Location</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Contact & Services</h4>
              <p className="footer-text">
                <strong>Phone:</strong> <a href="tel:+13212693041" className="footer-link">(321) 269-3041</a>
              </p>
              <p className="footer-text">
                <strong>Services:</strong> CoinFlip Bitcoin ATM
              </p>
              <p className="footer-text footer-emphasis">
                <strong>We&apos;re here to serve you!</strong>
              </p>
            </div>
          </div>
          
          <div className="footer-bottom-bar">
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Kwik Stop. All rights reserved.</p>
            <p className="footer-motto">Family Owned • Neighborhood Store • Serving Titusville, Florida</p>
          </div>
        </div>
      </footer>

      {/* Mikey Chatbot */}
      <MikeyChatbot />
    </>
  )
}
