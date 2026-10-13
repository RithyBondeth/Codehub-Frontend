<div align="center">

# Codehub — Frontend

**A bilingual portfolio website for my freelance career, with courses, articles, and project showcases.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

</div>

---

## Overview

Codehub Frontend is the website for Codehub, my freelance portfolio. Visitors explore my work, services, courses, and articles, create an account to comment, and get in touch. It is available in English and Khmer and is powered by the [Codehub Backend](https://github.com/RithyBondeth/Codehub-Backend).

## Features

- **Home, About, and Work pages,** with project detail pages.
- **Courses and articles,** with Markdown-rendered content and comments.
- **Authentication:** sign-in, sign-up, forgot password, reset password, and protected routes.
- **Profile, contact, privacy, and terms pages.**
- **English and Khmer localization** with i18n.
- **Light and dark themes,** a navigation drawer, and dynamic page titles.
- **Animations** with GSAP, Framer Motion, and typing effects.
- **Data fetching** with SWR and Axios, and forms with React Hook Form and Zod.

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 18, React Router 6 |
| Language | TypeScript |
| Styling | Tailwind CSS, daisyUI, styled-components |
| State management | Zustand |
| Data | SWR, Axios |
| Forms | React Hook Form, Zod |
| Animation | GSAP, Framer Motion, Swiper |
| Content | react-markdown, remark-gfm, Chart.js |
| Build | Vite |

## Getting Started

### Prerequisites

- Node.js and npm
- A running [Codehub Backend](https://github.com/RithyBondeth/Codehub-Backend)

### Installation

```bash
git clone https://github.com/RithyBondeth/Codehub-Frontend.git
cd Codehub-Frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build |

## Project Structure

```text
Codehub-Frontend/
└── src/
    ├── pages/
    │   ├── auth/       # signin, signup, forgot and reset password
    │   ├── main/       # home, about, work, course, article
    │   └── sub/        # profile, contact, privacy, terms
    ├── components/     # Feature components
    ├── stores/         # Zustand stores: api, auth, drawer, language, theme
    ├── languages/      # English and Khmer translations
    ├── routers/        # Routes and protected routes
    └── constants/
```

## Related Repositories

- [Codehub-Backend](https://github.com/RithyBondeth/Codehub-Backend): the NestJS API

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
