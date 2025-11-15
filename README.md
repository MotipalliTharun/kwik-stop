# Kwik Stop - Convenience Store Website

A modern, responsive website for Kwik Stop convenience store built with Next.js 14, TypeScript, and CSS animations.

## Features

- 🏪 **Responsive Design**: Mobile-first approach with a beautiful hamburger menu navigation
- 🎨 **Modern UI/UX**: Professional design with smooth animations and transitions
- 📱 **Mobile Optimized**: Fully responsive navigation and layout
- 🎯 **Interactive Elements**: Animated sections, hover effects, and smooth scrolling
- 🖼️ **Image Support**: Uses PNG images for stop sign with SVG fallback
- 💬 **Chatbot Integration**: Mikey chatbot for customer support
- 📍 **Google Maps Integration**: Interactive map showing store location

## Setup Instructions

### 1. Add Stop Sign Image

Place your stop sign PNG image in the `public/images/` directory:

```
public/
  images/
    stop-sign.png
```

The component will automatically use this image. If the image is not found, it will fall back to an SVG stop sign.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Environment Variables

No environment variables are required for basic functionality.

## Project Structure

```
kwik-stop/
├── app/
│   ├── components/
│   │   ├── AnimatedSection.tsx    # Scroll-triggered animations
│   │   ├── HexagonStopSign.tsx    # Stop sign component (uses PNG/SVG)
│   │   ├── MobileNav.tsx          # Mobile hamburger menu
│   │   ├── PhotoGallery.tsx       # Photo gallery component
│   │   ├── MikeyChatbot.tsx       # Chatbot component
│   │   └── ...                    # Other components
│   ├── globals.css                # Global styles and animations
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Home page
├── public/
│   └── images/
│       └── stop-sign.png          # Stop sign image (add this)
└── package.json
```

## Key Components

### HexagonStopSign
- Uses PNG image from `/public/images/stop-sign.png`
- Falls back to SVG if image not found
- Responsive sizing (small, medium, large)
- Smooth animations on hover

### MobileNav
- Hamburger menu for mobile devices
- Slide-in navigation panel
- Smooth animations and transitions
- Prevents body scroll when open

### AnimatedSection
- Intersection Observer-based animations
- Fade-in and slide-up effects
- Configurable delays

## Mobile Responsiveness

The website is fully responsive with:
- Mobile navigation menu (hamburger)
- Responsive typography
- Touch-friendly buttons
- Optimized images
- Mobile-optimized layouts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **CSS3**: Custom animations and responsive design
- **Next/Image**: Optimized image loading

## License

Private project for Kwik Stop convenience store.
# kwik-stop
# kwik-stop
