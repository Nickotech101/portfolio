# Nikita Mishra — Portfolio

A production-ready React portfolio built from a Figma design.

## Stack

- **React 18** + **TypeScript**
- **Vite** for bundling
- **Tailwind CSS v4** for utility styling
- **Motion (Framer Motion v12)** for animations
- **Lucide React** for icons

## Color Palette (from Figma)

| Token | Hex | Usage |
|---|---|---|
| Background | `#F6EEE8` | Page background, light sections |
| Primary | `#4A0013` | Main text, dark elements |
| Accent | `#6B0F1A` | Accent text, icons, lines |
| Secondary | `#A26769` | Secondary text |
| Muted | `#D8B4A0` | Muted text, on dark bg |

## Fonts

- **Playfair Display** — headings & display
- **Cormorant Garamond** — editorial body text
- **Inter** — UI labels, body text

## Sections

1. **IntroScreen** — animated letter-by-letter name reveal
2. **Navbar** — floating, scroll-aware, GitHub CTA
3. **Hero** — parallax image, mouse-tracked motion, animated typography
4. **About** — split layout, stats, animated tags
5. **Projects** — alternating grid with mouse glow effect
6. **Skills** — icon grid + marquee ticker
7. **Resume** — education, experience, certifications timeline
8. **Footer** — contact CTA + social links

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Customization

Update your personal info in each component:
- `HeroSection.tsx` — name, titles
- `AboutSection.tsx` — bio text, stats
- `ProjectsSection.tsx` — project data
- `SkillsSection.tsx` — skill categories
- `ResumeSection.tsx` — education, experience, certifications
- `Footer.tsx` — email, GitHub, LinkedIn links
