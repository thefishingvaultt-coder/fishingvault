

## Landing Page: "The Clandestine Fishing Manual"

A dark, brutalist-style sales landing page for a fishing manual ebook, with scroll-triggered animations and a moody, confidential aesthetic.

### Design & Style
- **Dark obsidian background** (#0A0B0A) with bone-colored text
- **Grainy noise texture overlay** for raw, analog feel
- **Playfair Display serif font** for headings, Inter sans-serif for body
- **Minimalist, editorial layout** — single column, max-width 640px
- **Brutalist design elements**: corner markers, thin borders, monospaced metadata
- Custom scrollbar and selection colors

### Sections (Top to Bottom)
1. **Confidential Header** — Fixed top bar with "Confidential // Manual 01" label
2. **Hero** — Large serif headline, subtitle, ebook cover image with grayscale-to-color hover effect, and "Access the Manual" CTA button
3. **The Contrast** — Bold statement challenging the gear-buying mindset
4. **The Problem** — Numbered list of pain points (01–04)
5. **The Biological Command** — Revelation about fish biology triggers
6. **What This Manual Is** — Brief description of old techniques
7. **Not For Everyone** — Exclusion list filtering the audience
8. **The Syllabus** — Dark card with crosshair icons listing what's inside, plus a warning
9. **Social Proof** — Three understated blockquotes
10. **The Offer** — Double-bordered card with price ($9), format details, and final CTA button
11. **Footer** — Closing statement with anchor icon

### Animations
- **Character-by-character text reveal** on headings triggered by scroll
- **Fade-in-up** animations on content blocks as they enter the viewport
- Smooth scroll behavior for anchor links

### Technical Notes
- Single-page React component using Tailwind for all styling
- Custom CSS variables for the dark color palette
- Lucide React icons (Crosshair, Anchor)
- Scroll animations using CSS + intersection observer (lightweight approach)
- Google Fonts (Playfair Display + Inter) loaded via index.html or CSS import
- Fully responsive (mobile-first, scales to desktop)

