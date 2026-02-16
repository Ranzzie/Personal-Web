# Rifat Raditya - Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases my work as a Network Engineer & System Administrator, featuring a unique pixel-art aesthetic and real-time Discord status integration.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop and mobile devices.
- **Modern UI/UX**:
  - **Pixel Art Aesthetic**: Custom pixel fonts and text shadows for a retro-tech vibe.
  - **Smooth Animations**: powered by [Framer Motion](https://www.framer.com/motion/) and CSS transitions.
  - **Dotted Background**: Custom interactive background pattern.
- **Real-time Integrations**:
  - **Discord Status**: Live status updates (Online, Idle, DND) and profile data fetched via the [Lanyard API](https://github.com/Phineas/lanyard).
- **Interactive Elements**:
  - Custom animated icons (Discord, GitHub, Instagram, etc.).
  - Smooth scrolling navigation.
  - Toast notifications for clipboard actions.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **State Management**: React Hooks & Context

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/rifat-portfolio.git
    cd rifat-portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist` directory.

## 📂 Project Structure

```
src/
├── components/         # React components
│   ├── icons/          # Custom animated SVG icons
│   ├── ui/             # Reusable UI components (buttons, cards, etc.)
│   ├── Hero.tsx        # Hero section with pixel art styling
│   ├── Contact.tsx     # Contact section with Discord integration
│   ├── Navigation.tsx  # Navbar with smooth scrolling
│   └── ...
├── lib/                # Utility functions (cn, etc.)
├── index.css           # Global styles and Tailwind directives
├── main.tsx            # Entry point
└── App.tsx             # Main application layout
```

## 🔌 APIs

- **Lanyard API**: Used to fetch real-time Discord presence information (status, activities, avatar).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
