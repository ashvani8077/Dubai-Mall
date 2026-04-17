# The Dubai Mall — A Global Destination

A high-end, interactive sales deck and promotional platform for The Dubai Mall, designed to drive commercial leasing, sponsorship, and event bookings through a premium digital experience.

---

## Tech Stack

- **Frontend**: [React 18](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS for custom animations
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Custom scroll reveal hooks and CSS transitions
- **Deployment**: Optimized for standard web hosting environments

---

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## Design Decisions

- **Luxury Aesthetic**: A sophisticated palette of **Eerie Black**, **Rich Gold**, and **Pure White** to mirror the mall's physical prestige.
- **Cinematic Experience**: Heavy use of high-quality imagery combined with scroll-linked animations to create an immersive, story-telling flow.
- **Typography**: Dual-type approach using clean sans-serif for readability and *Playfair Display* (italicized) for headings to evoke a luxury editorial feel.
- **Micro-interactions**: 
  - **Custom Cursor**: Enhances the premium feel and assists in non-linear navigation.
  - **Glassmorphism**: Subtle use of blurred backgrounds and radial gradients for UI depth.
  - **Reveal Animations**: Sequential content entry to guide the user's attention through the brand story.

---

## AI Tools Used

This project was crafted using advanced AI workflows to ensure a state-of-the-art result:

- **Antigravity AI**: Core architectural decisions, component engineering, and design system implementation.
- **Generative Media**: Custom assets generated for a unique, "wow-factor" visual identity.
- **AI-Powered Refactoring**: Used for optimizing performance and ensuring TypeScript type safety across the application.

---

## Project Structure

- `src/components`: Reusable UI elements (Navigation, Custom Cursor, etc.)
- `src/sections`: Main content blocks (Hero, Retail, Events Platform, etc.)
- `src/hooks`: Custom React hooks for animations and interactivity.
- `src/data`: Centralized configuration for easy content updates.
- `src/styles`: Design tokens and global CSS patterns.
