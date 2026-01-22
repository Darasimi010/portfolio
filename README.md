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
│   ├── globals.css      # Global styles and custom utilities
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   ├── layouts/
│   │   ├── Navbar.tsx   # Navigation component
│   │   └── Footer.tsx   # Footer component
│   ├── sections/
│   │   ├── Hero.tsx     # Hero/landing section
│   │   ├── About.tsx    # About me section
│   │   ├── Skills.tsx   # Technical skills
│   │   ├── Experience.tsx # Work experience
│   │   ├── Projects.tsx # Featured projects
│   │   └── Contact.tsx  # Contact form
│   └── ui/
│       ├── Button.tsx   # Reusable button component
│       ├── Icons.tsx    # SVG icon components
│       └── sections.tsx # Section wrapper components
├── public/
│   └── projects/        # Project screenshots
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

## Customization

### Update Personal Information

- **Hero Section**: Edit `components/sections/Hero.tsx` to update your name and tagline
- **Projects**: Modify the `projects` array in `components/sections/Projects.tsx`
- **Skills**: Update skills in `components/sections/Skills.tsx`
- **Experience**: Edit work history in `components/sections/Experience.tsx`
- **Contact Info**: Update email and location in `components/sections/Contact.tsx`

### Styling

The global styles are defined in `app/globals.css`. The design uses a purple/cyan color palette with glassmorphism effects. Key custom utilities include:

- `.glass-card` - Frosted glass effect for cards
- `.grid-pattern` - Background grid pattern
- `.animate-float` - Floating animation for decorative elements

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

Built with ❤️ by Oluwadarasimi Omojola
