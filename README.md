# Oluwadarasimi Omojola - Portfolio

A modern, responsive portfolio website showcasing my work as a Frontend Developer. Built with Next.js 16, React 19, and styled with Tailwind CSS featuring beautiful glassmorphism effects and smooth animations.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)

## Features

- **Modern UI Design** - Glassmorphism effects, gradient backgrounds, and floating animations
- **Responsive Layout** - Looks great on all devices from mobile to desktop
- **Smooth Animations** - Powered by Motion (Framer Motion) for fluid transitions
- **Contact Form** - Integrated with EmailJS for direct email functionality
- **Project Showcase** - Display featured projects with live demo and GitHub links
- **Skills Section** - Visual representation of technical skills
- **Experience Timeline** - Professional experience display
- **SEO Optimized** - Built with Next.js for optimal search engine visibility

## Tech Stack

| Category        | Technology              |
| --------------- | ----------------------- |
| Framework       | Next.js 16 (App Router) |
| Language        | TypeScript              |
| Styling         | Tailwind CSS 4          |
| Animations      | Motion (Framer Motion)  |
| Email Service   | EmailJS                 |
| Package Manager | npm                     |

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles, variables, and theme definitions
│   ├── layout.tsx           # Root layout with ThemeProvider and metadata
│   ├── page.tsx             # Home page assembling all primary sections
│   └── resume/page.tsx      # Interactive and printable resume page
│
├── components/
│   ├── layouts/
│   │   ├── Navbar.tsx       # Navigation bar with responsive drawer and theme toggle
│   │   └── Footer.tsx       # Footer with back-to-top and social links
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section and engineering snapshot
│   │   ├── AboutMe.tsx      # Engineering principles and methodology
│   │   ├── FeaturedWork.tsx # Featured project showpieces and prototypes
│   │   ├── WorkExperience.tsx # Professional engineering background
│   │   └── ContactSection.tsx # Contact form and direct communication channels
│   ├── theme/
│   │   ├── ThemeProvider.tsx # Client theme context provider (system/light/dark)
│   │   └── ThemeToggle.tsx   # Header toggle button for theme switching
│   └── ui/
│       └── Icons.tsx        # Brand SVG icons (Github, Linkedin)
├── public/
│   └── projects/        # Static assets
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Darasimi010/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy the example environment file:

   ```bash
   cp env.example .env
   ```

   Then fill in your EmailJS credentials:

   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   > Get your credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/)

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import the repository on Vercel
3. Add your environment variables
4. Deploy!

## Contact

- **Email**: omojoladarasimi9@gmail.com
- **GitHub**: [@Darasimi010](https://github.com/Darasimi010)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with care by Oluwadarasimi Omojola
