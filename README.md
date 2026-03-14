# Suprathik Narendra — Spotify-Style Portfolio

A lightweight, multi-page portfolio inspired by Spotify’s UI. Each project is presented like a track, with a minimal preview panel and a clear call-to-action that opens the full case study.

## Stack
- HTML / CSS / Vanilla JavaScript (no framework)
- GitHub Pages for hosting
- Google Fonts (Montserrat)

## Structure
```
/
  index.html                  # Home (landing)
  styles.css                  # Global UI styles
  script.js                   # Projects logic and navigation helpers
  home.js                     # Landing page interactions
  /showcase
    projects.html             # Spotify-style projects view
    me.html                   # About me
    hobbies.html              # Recreation
    leadership.html           # Leadership
    skills.html               # Skills & tools
    resume.html               # Resume viewer
  /assets
    casestudy_danielceasar.png
    resume-exact.png
```

## Key UI Patterns
- **Projects as tracks**: Click a row to preview, then open the full case study.
- **Minimalist detail panel**: Short preview + clear CTA.
- **Spotify-like visual system**: dark theme, album art, track tables, and subtle motion.

## Deployment (GitHub Pages)
- Repo Settings → Pages
- Source: `main` branch, `/root`
- Optional: add custom domain

---

If you want changes or new sections, open a PR or update the relevant file in `/showcase/`.
