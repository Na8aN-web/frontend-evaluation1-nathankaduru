# Form+Fun Recreation Project

A pixel-perfect recreation of the Form+Fun studio homepage, demonstrating advanced frontend development skills with smooth animations, responsive design, and clean code architecture.

## 🎯 Project Overview

This project is a comprehensive recreation of [Form+Fun's homepage](https://www.formandfun.co/) built as a technical assessment to showcase frontend development capabilities. The implementation focuses on precise design matching, performant animations, and responsive behavior across all devices.

## ✨ Features

### Design Implementation
- **Pixel-perfect accuracy** matching the original design
- **Typography precision** - exact font sizes, weights, and spacing
- **Color accuracy** - precise color matching and visual hierarchy
- **Layout fidelity** - identical proportions and spacing

### Animations & Interactions
- **Page load animations** with staggered timing
- **Scroll-triggered animations** using Intersection Observer
- **Smooth hover effects** and micro-interactions
- **60fps performance** optimized animations
- **Custom easing curves** matching the original site

### Responsive Design
- **Desktop** (1920px+) - Full feature experience
- **Laptop** (1024px - 1919px) - Optimized layout
- **Tablet** (768px - 1023px) - Touch-friendly adaptations
- **Mobile** (320px - 767px) - Mobile-first considerations

### Customizations
- **Studio branding** updated to your creative agency name
- **Project showcases** featuring your own work
- **Updated contact information** and social links
- **Modified copy** while maintaining original structure

## 🛠 Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: CSS transitions and transforms, Framer Motion
- **Icons**: Custom SVG implementations
- **Build Tool**: Vite for fast development and optimized builds
- **Deployment**: Vercel for CI/CD

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/formandfun-recreation.git

# Navigate to project directory
cd formandfun-recreation

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

```bash
# Run in development mode with hot reload
npm run dev

# Run with specific port
npm run dev -- --port 3000
```

## 🎨 Design System

### Typography Scale
- **Headings**: 64px - 120px (responsive)
- **Body Text**: 16px - 18px
- **Navigation**: 14px - 16px
- **Footer**: 12px - 14px

### Color Palette
- **Primary Black**: #000000
- **Secondary Gray**: #9CA3AF
- **Background White**: #FFFFFF
- **Accent Colors**: Brand-specific gradients

### Spacing System
- **Base Unit**: 4px
- **Section Padding**: 80px - 160px (responsive)
- **Component Margins**: 16px - 64px
- **Grid Gaps**: 24px - 48px

## 🔧 Key Implementation Details


### Responsive Breakpoints
```css
/* Tailwind CSS breakpoints */
sm: 640px    /* Mobile */
md: 768px    /* Tablet */
lg: 1024px   /* Laptop */
xl: 1280px   /* Desktop */
2xl: 1536px  /* Large Desktop */
```

### Performance Optimizations
- **Image optimization** with cloudinary 
- **Code splitting** for lazy loading
- **CSS purging** in production
- **Bundle analysis** and optimization

## 🎯 Challenges & Solutions

### Challenge 1: Pixel-Perfect Design Matching
**Solution**: Implemented precise measurement tools and custom CSS variables to maintain exact spacing and proportions across breakpoints.

### Challenge 2: Smooth Scroll Animations
**Solution**: Used Intersection Observer API with custom thresholds and root margins for natural trigger points, combined with CSS hardware acceleration.

### Challenge 3: Responsive Typography
**Solution**: Created fluid typography scale using CSS clamp() function and custom breakpoints for seamless scaling.


## 🚀 Deployment

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build project
npm run build

# Deploy dist folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created for educational and assessment purposes. The original design belongs to Form+Fun studio.


## 🙏 Acknowledgments

- Form+Fun for the original design inspiration
- React and Tailwind CSS communities
- Modern frontend development tools and practices

---

**Note**: This project was created as a technical assessment to demonstrate frontend development skills including pixel-perfect implementation, animation expertise, and responsive design capabilities.
