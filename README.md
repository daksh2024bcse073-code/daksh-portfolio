# Daksh Sharma | Personal Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

<p align="center">
  <strong>A modern, responsive portfolio showcasing my journey in Software Engineering, Artificial Intelligence, Machine Learning and Research.</strong>
</p>

<p align="center">
  <a href="mailto:dakshsharmarj2007@gmail.com">Email</a> •
  <a href="https://www.linkedin.com/company/your-first-draft/">FirstDraft</a> •
  <a href="https://github.com/daksh2024bcse073-code/">GitHub</a>
</p>

---

## About

Hi, I'm **Daksh Sharma**, a Computer Science and Engineering undergraduate at the **National Institute of Technology Srinagar (NIT Srinagar)**.

I'm passionate about building intelligent applications, exploring emerging technologies and developing solutions to real-world problems.

My interests include:

- Artificial Intelligence & Machine Learning
- Natural Language Processing
- Software Engineering
- Full-Stack Web Development
- Data Science & Analytics
- Generative AI
- FinTech and Fraud Detection
- Workflow Automation

This portfolio brings together my technical projects, research experience, internships, achievements, leadership activities and entrepreneurial journey.

---

## Highlights

- Modern and responsive user interface.
- Premium pure-black and burnt-orange visual theme.
- Animated technical backgrounds and interactive elements.
- Custom developer-inspired introduction with terminal aesthetics.
- Dark and light theme support.
- Smooth scrolling and section reveal animations.
- Dedicated sections for projects, research, internships and achievements.
- Interactive contact form powered by FormSubmit.
- Direct downloadable PDF resume.
- Responsive navigation for desktop and mobile devices.

---

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React 18, JavaScript, HTML5, CSS3 |
| Styling | Tailwind CSS 3, Custom CSS |
| Build Tool | Vite |
| Icons | Lucide React |
| Animations | CSS Animations, Scroll Animations |
| Contact Integration | FormSubmit |
| Version Control | Git, GitHub |

---

## Featured Projects

### 1. AI Risk Manager — Fraud & Chargeback Detection

An intelligent financial fraud detection system designed to identify suspicious transactions, analyse transaction risk and detect potential fraud rings using machine learning.

**Key Highlights:**
- Synthetic fintech dataset containing approximately 110,000 transactions.
- 45 planted fraud rings.
- Fraud detection models using XGBoost and Scikit-learn.
- FastAPI backend with PostgreSQL and SQLAlchemy.
- React and TypeScript frontend.
- Docker-based containerisation.

**Technologies:** Python, XGBoost, Scikit-learn, Pandas, FastAPI, PostgreSQL, React, TypeScript, Docker.

### 2. FauxHate — Hindi-English Code-Mixed Hate Speech Detection

An NLP research project focused on detecting fake and hate-related content in Hindi-English code-mixed social media comments.

**Key Highlights:**
- Dataset containing 24,963 augmented comments.
- Multi-task classification architecture.
- Fake content, hate speech, target and severity classification.
- XLM-RoBERTa-based architecture.
- Fake detection F1-score of approximately 0.92.

**Technologies:** Python, NLP, Transformers, TensorFlow, BERT, mBERT, DeBERTa-v3, XLM-RoBERTa.

---

## Experience & Research

| Organisation | Position | Duration |
|---|---|---|
| Delhi Technological University | Research Intern – NLP | Dec 2025 – May 2026 |
| InAmigos Foundation | AI Intern | Aug – Sep 2026 |
| Khichad Technologies | Python Developer Intern | Oct – Nov 2026 |
| Homzyy | AI/ML Intern | Oct – Dec 2026 |

### Research Focus
- Multilingual Natural Language Processing.
- Hindi-English code-mixed text classification.
- Fake content and hate speech detection.
- Transformer-based architectures.
- Multi-task learning and dataset augmentation.

---

## Leadership & Entrepreneurship

### Business Club — NIT Srinagar
**Student Executive**

- Organising business-oriented events and competitions.
- Contributing to FinTech Fusion and financial awareness activities.
- Conducting business logo challenges and company identification quizzes.
- Involvement in Case Clash and other student activities.

### Technology Club — NIT Srinagar

- Participating in technology-oriented college activities.
- Contributing to collaborative technical initiatives.

### FirstDraft — Entrepreneurial Venture

Building a digital product venture focused on creative resources, templates and digital assets.

---

## Education

**Bachelor of Technology — Computer Science and Engineering**

National Institute of Technology Srinagar

2024 – 2028 (Expected)

---

## Getting Started

Follow these steps to run the portfolio locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/daksh2024bcse073-code/daksh-portfolio.git
```

### 2. Navigate to the project directory

```bash
cd daksh-portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local development URL:

```text
http://localhost:5173
```

---

## Project Structure

```text
daksh-portfolio/
│
├── public/
│   └── resume.pdf
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Research.jsx
│   │   ├── Internships.jsx
│   │   ├── Achievements.jsx
│   │   ├── Leadership.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Section.jsx
│   │   ├── Card.jsx
│   │   └── Reveal.jsx
│   │
│   ├── data/
│   │   ├── profile.js
│   │   └── accents.js
│   │
│   ├── hooks/
│   │   ├── useInView.js
│   │   └── useTyped.js
│   │
│   ├── App.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md
```

---

## Customisation

Most portfolio content can be modified from a single file:

```text
src/data/profile.js
```

This file contains:

- Personal information.
- Social and professional links.
- Education details.
- Skills and technologies.
- Projects and research.
- Internship experience.
- Achievements.
- Leadership activities.
- Contact information.

### Theme Customisation

The website's colours and theme variables are defined in:

```text
src/index.css
```

### Resume Integration

Place your resume inside:

```text
public/resume.pdf
```

Update the resume link in `profile.js`:

```javascript
links: {
  resume: './resume.pdf'
}
```

The resume is accessible through the download buttons in the introduction and contact sections.

---

## Contact Form

The portfolio uses **FormSubmit** to handle contact form submissions.

Messages are delivered to:

**dakshsharmarj2007@gmail.com**

The first submission requires email activation through the confirmation email sent by FormSubmit.

Once activated, visitors can send messages directly through the portfolio without opening their email application.

---

## Production Build

To generate an optimised production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The portfolio can be deployed using:

| Platform | Build Command | Output Directory |
|---|---|---|
| Vercel | `npm run build` | `dist` |
| Netlify | `npm run build` | `dist` |
| GitHub Pages | `npm run build` | `dist` |

For Vercel or Netlify, connect the GitHub repository and configure the build settings.

For GitHub Pages, ensure the Vite base path is configured correctly for your repository.

---

## Connect With Me

I'm always interested in connecting with developers, researchers, recruiters and people working on innovative ideas.

<p align="center">
  <a href="mailto:dakshsharmarj2007@gmail.com">
    <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/daksh-sharma-2455b2423/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://github.com/daksh2024bcse073-code/">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</p>

---

<p align="center">
  Designed & Developed by <strong>Daksh Sharma</strong>
  <br/>
  <sub>Software Engineering • Artificial Intelligence • Innovation</sub>
</p>

<p align="center">
  <strong>Building ideas. Engineering solutions. Creating impact.</strong>
</p>