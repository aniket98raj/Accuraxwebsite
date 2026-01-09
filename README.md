# AccuraX - Algorithmic Trading Platform

A professional algorithmic trading platform built with React, TypeScript, and Tailwind CSS. AccuraX features a distinctive X logo and enables traders to build, backtest, and deploy automated trading strategies without writing code.

![AccuraX](https://img.shields.io/badge/AccuraX-Trading%20Platform-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

- **Multi-Page Application** with React Router
- **Custom X Logo** with blue-to-purple gradient
- **Pure Black Dark Theme** (#000000)
- **Responsive Design** - Mobile, Tablet, Desktop
- **Modern UI Components** - Built with Radix UI & shadcn/ui
- **Trading Platform Features**:
  - Strategy Marketplace
  - Backtesting Engine
  - Visual Strategy Builder
  - Real-time Analytics
  - Broker Integrations
  - Pricing Plans
  - Contact Forms
  - User Authentication UI

## 📄 Pages

1. **Home** (`/`) - Landing page with hero, features, stats, and CTAs
2. **About** (`/about`) - Company mission, vision, and team
3. **Pricing** (`/pricing`) - Three pricing tiers with features
4. **Contact** (`/contact`) - Contact form and information
5. **Login** (`/login`) - User authentication interface

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open browser**:
   ```
   http://localhost:5173
   ```

## 🛠️ Build for Production

Build the application for production deployment:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📦 Project Structure

```
AccuraX/
├── public/                 # Public assets
│   └── vite.svg           # Favicon
├── src/
│   ├── app/
│   │   ├── components/    # React components
│   │   │   ├── ui/       # UI components (buttons, cards, etc.)
│   │   │   ├── home/     # Home page components
│   │   │   └── ...       # Other components
│   │   ├── pages/        # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Login.tsx
│   │   └── App.tsx       # Main app component
│   ├── styles/           # CSS files
│   │   ├── index.css
│   │   ├── theme.css
│   │   └── tailwind.css
│   └── main.tsx          # Application entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── package.json          # Dependencies
├── .htaccess            # Apache config for Hostinger
├── DEPLOYMENT_GUIDE.md  # Detailed deployment guide
└── QUICK_DEPLOY.md      # Quick deployment guide
```

## 🎨 Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **React Router** - Client-side routing

### Styling
- **Tailwind CSS 4.0** - Utility-first CSS
- **Radix UI** - Headless UI components
- **shadcn/ui** - Pre-built components
- **Lucide React** - Icon library

### Additional Libraries
- **Motion** (Framer Motion) - Animations
- **React Hook Form** - Form handling
- **Recharts** - Charts & graphs
- **Sonner** - Toast notifications

## 🌐 Deployment to Hostinger

### Quick Deploy (5 minutes)

1. **Build the app**:
   ```bash
   npm run build
   ```

2. **Upload to Hostinger**:
   - Login to Hostinger hPanel
   - Open File Manager → `public_html`
   - Upload ALL files from `dist` folder
   - Upload `.htaccess` from project root

3. **Test your website** ✅

### Detailed Instructions

See comprehensive deployment guides:
- 📘 [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) - 5-minute quick start
- 📗 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Complete guide with troubleshooting

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 🎯 Key Components

### Home Page Components
- **NewHero** - Hero section with CTA
- **Stats** - Key metrics display
- **HowItWorks** - 4-step process
- **StrategyMarketplace** - Pre-built strategies
- **PlatformFeatures** - Tabbed features showcase
- **Integrations** - Broker connections
- **Pricing** - Pricing tiers
- **Testimonials** - Customer reviews
- **CTA** - Call-to-action section

### Shared Components
- **Header** - Navigation bar
- **Footer** - Site footer
- **Button** - Custom button component
- **Card** - Card container
- **Input** - Form inputs
- **Tabs** - Tabbed interface

## 🎨 Design System

### Colors
- **Background**: Pure Black (#000000)
- **Primary**: Blue to Purple gradient
- **Text**: White (#FFFFFF)
- **Muted**: Gray shades
- **Accent**: Blue (#3B82F6) & Purple (#9333EA)

### Typography
- **Font Family**: System fonts (sans-serif)
- **Headings**: Bold, large sizes
- **Body**: Regular weight, readable sizes

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Important Files for Deployment

1. **`.htaccess`** - Required for React Router to work on Apache servers
2. **`index.html`** - Main HTML file
3. **`dist/`** folder - Contains all production files after build

## 📧 Contact Information

- **Email**: support@accurax.in, sales@accurax.in
- **Website**: [Your Domain Here]

## 📝 License

This project is private and proprietary.

## 🤝 Support

For deployment issues:
- Check [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- Contact Hostinger 24/7 support
- Review browser console for errors

## 🎉 Credits

Built with modern web technologies and best practices for optimal performance and user experience.

---

**Made with ❤️ for algorithmic traders**