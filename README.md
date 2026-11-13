# Daksh Sharma: Portfolio (React + Tailwind + Lucide)

Vite + React 18 + Tailwind CSS 3 + lucide-react. Responsive, dark/light theme, scroll animations.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # serve the production build
```

## Where to edit
Everything lives in **`src/data/profile.js`**:
- `links`: GitHub, LinkedIn, **email (placeholder)**, **resume (placeholder)**, FirstDraft link
- `projects[].links`: GitHub / live demo / paper URLs, all `'#'` placeholders for now
- `internships`: add verified dates and responsibilities; set `show: true` on Khichad Consultancy once confirmed
- Skills, research numbers, achievements and leadership entries

Other spots:
- Colours and themes: CSS variables at the top of `src/index.css`
- Profile photo: replace the initials block in `src/components/Hero.jsx` (marked TODO)
- Resume: put `resume.pdf` in a `public/` folder and set `links.resume` to `'./resume.pdf'`

## Deploy
- **GitHub Pages / any static host:** run `npm run build` and upload `dist/` (the config uses `base: './'`).
- **Vercel / Netlify:** import the repo; build command `npm run build`, output `dist`.

## Structure
```
src/
  App.jsx
  index.css
  data/        profile.js, accents.js
  hooks/       useInView.js, useTyped.js
  components/  Navbar, Hero, About, Education, Skills, Projects, Research,
               Internships, Achievements, Leadership, Contact, Footer,
               Section, Card, Reveal
```


## Resume and contact form

- The downloadable resume is served from `public/resume.pdf` and linked from the hero and contact sections.
- The contact form sends messages through FormSubmit's AJAX endpoint to `dakshsharmarj2007@gmail.com`. On the first test submission, open the FormSubmit activation email sent to that inbox and confirm the form. After activation, submissions are delivered there.
