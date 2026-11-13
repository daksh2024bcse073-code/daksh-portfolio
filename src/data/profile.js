// ============================================================================
//  EDIT HERE. Everything shown on the site comes from this file.
//  Items marked TODO are placeholders for you to replace.
// ============================================================================
import {
  ShieldCheck,
  Languages,
  Radar,
  LayoutGrid,
  Code2,
  Monitor,
  Server,
  Database,
  BarChart3,
  Brain,
  Wrench,
  BookOpen,
  Briefcase,
  Microscope,
  Users,
  Cpu,
  Trophy,
  GraduationCap,
  Rocket,
  Swords,
  PartyPopper,
} from 'lucide-react'

export const PLACEHOLDER = '#' // TODO: replace any "#" link below with a real URL

export const links = {
  github: 'https://github.com/daksh2024bcse073-code/',
  linkedin: 'https://www.linkedin.com/in/daksh-sharma-2455b2423/',
  email: 'dakshsharmarj2007@gmail.com',
  resume: '/resume.pdf',
  firstdraft: 'https://www.linkedin.com/company/your-first-draft/'
}

export const person = {
  name: 'Daksh Sharma',
  initials: 'DS',
  roles: ['Software Developer', 'AI/ML Enthusiast', 'NLP Researcher', 'Entrepreneur'],
  tagline: 'Building Intelligent Solutions. Exploring Technology. Creating Impact.',
  intro:
    'Computer Science and Engineering student at NIT Srinagar, passionate about building technology-driven solutions that solve real-world problems.',
  location: 'India',
  hometown: 'Sikar, Rajasthan',
  college: 'NIT Srinagar',
  branch: 'B.Tech, Computer Science & Engineering',
  years: '2024 – 2028',
}

export const about = {
  paragraphs: [
    'I am a Computer Science and Engineering undergraduate at the National Institute of Technology Srinagar, passionate about building technology-driven solutions that solve real-world problems.',
    'I have worked on projects involving multilingual NLP research, intelligent financial fraud detection, AI-powered floor plan generation, and smart inspection systems. I also led a team at Smart India Hackathon 2026 and explore entrepreneurship through my digital product venture, FirstDraft.',
    'Beyond development, I enjoy organizing events, collaborating with teams, exploring business ideas, and turning concepts into practical products. I believe in continuous learning, experimentation and creating technology that makes a meaningful impact.',
  ],
  interests: [
    'Artificial Intelligence & Machine Learning',
    'Natural Language Processing',
    'Software Engineering',
    'Full-Stack Web Development',
    'Data Science & Analytics',
    'Generative AI',
    'FinTech',
    'Fraud Detection & Risk Management',
    'Entrepreneurship & Startups',
  ],
  objective:
    'To become a skilled software engineer capable of designing, developing and deploying intelligent solutions to real-world problems.',
}

export const education = [
  {
    title: 'Bachelor of Technology, Computer Science and Engineering',
    place: 'National Institute of Technology Srinagar',
    period: 'Aug 2024 – Jun 2028 (expected)',
    detail: 'CGPA 7.5/10 (latest reported)',
  },
  {
    title: 'Senior Secondary (Class 12)',
    place: 'Rajasthan Board of Secondary Education (RBSE)',
    period: '',
    detail: '87.20% · Coaching at PCP Institute, Sikar, Rajasthan',
  },
  {
    title: 'Secondary (Class 10)',
    place: 'Rajasthan Board of Secondary Education (RBSE)',
    period: '',
    detail: '95.33%',
  },
]

export const skills = [
  { title: 'Languages', icon: Code2, items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { title: 'Frontend', icon: Monitor, items: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS'] },
  { title: 'Backend', icon: Server, items: ['FastAPI', 'SQLAlchemy', 'REST APIs'] },
  { title: 'Databases', icon: Database, items: ['MySQL', 'PostgreSQL'] },
  {
    title: 'Data Science & ML',
    icon: BarChart3,
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'XGBoost', 'TensorFlow'],
  },
  {
    title: 'AI & NLP',
    icon: Brain,
    wide: true,
    items: [
      'Natural Language Processing',
      'Text Classification',
      'Multilingual NLP',
      'Hate Speech Detection',
      'TF-IDF',
      'Word2Vec',
      'FastText',
      'BERT',
      'mBERT',
      'HateBERT',
      'DeBERTa-v3',
      'XLM-RoBERTa',
      'Multi-task Learning',
      'RAG',
    ],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code', 'Google Colab', 'LaTeX', 'Canva'],
  },
  {
    title: 'Core CS',
    icon: BookOpen,
    items: [
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Software Development',
      'Machine Learning',
      'Data Analysis',
    ],
  },
]

export const projects = [
  {
    title: 'AI Risk Manager',
    subtitle: 'Fraud & Chargeback Detection',
    category: 'AI · Machine Learning · FinTech',
    icon: ShieldCheck,
    accent: 'accent4',
    description:
      'An intelligent financial fraud detection system designed to identify suspicious transactions, analyze transaction risk and detect potential fraud rings using machine learning.',
    highlights: [
      'Created a synthetic fintech dataset of approximately 110,000 transactions',
      'Incorporated 45 planted fraud rings into the dataset',
      'Built fraud detection models with XGBoost and Scikit-learn',
      'FastAPI backend with PostgreSQL and SQLAlchemy',
      'React, TypeScript and Tailwind CSS frontend, containerised with Docker',
    ],
    metrics: [
      { value: '~110K', label: 'transactions' },
      { value: '45', label: 'fraud rings' },
    ],
    tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'TypeScript', 'Tailwind CSS', 'Docker'],
    links: { github: PLACEHOLDER, live: PLACEHOLDER }, // TODO: add repo / demo URLs
  },
  {
    title: 'FauxHate',
    subtitle: 'Hindi-English Code-Mixed Hate Speech Detection',
    category: 'NLP · Research · Machine Learning',
    icon: Languages,
    accent: 'accent2',
    description:
      'An NLP research project on detecting fake hate-related content in Hindi-English code-mixed social media comments, using transformer-based architectures and a multi-task classification setup.',
    highlights: [
      'Four tasks: fake detection, hate detection, target detection and severity detection',
      'XLM-RoBERTa-based multi-task classification architecture',
      'Compared TF-IDF, Word2Vec, FastText, BERT, mBERT, HateBERT, DeBERTa-v3 and RAG approaches',
      'Dataset augmentation improved fake-detection F1 from about 0.67 to 0.92',
    ],
    metrics: [
      { value: '24,963', label: 'comments (augmented)' },
      { value: '~0.92', label: 'fake detection F1' },
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Hugging Face Transformers', 'XLM-RoBERTa'],
    links: { github: PLACEHOLDER, paper: PLACEHOLDER }, // TODO: add repo / paper URLs
  },
  {
    title: 'SmartInspect-AI',
    subtitle: 'Smart Real-Time Monitoring & Inspection',
    category: 'Smart India Hackathon 2026',
    icon: Radar,
    accent: 'accent3',
    description:
      'A technology-driven solution for real-time monitoring and inspection, built for a Ministry of Social Justice and Empowerment (MoSJE) problem statement at Smart India Hackathon 2026.',
    highlights: [
      'Team Leader for the project',
      'Problem Statement ID 26095: Smart Real-Time Monitoring & Inspection Mobile App',
      'Shortlisted during the college-level selection process',
      'Technical planning and project coordination',
    ],
    metrics: [
      { value: 'SIH 2026', label: 'team leader' },
      { value: '26095', label: 'problem statement' },
    ],
    tech: ['Leadership', 'Team Management', 'Project Planning', 'Problem Solving'],
    links: { github: PLACEHOLDER, live: PLACEHOLDER }, // TODO: add repo / demo URLs
  },
  {
    title: 'ResPlan',
    subtitle: 'AI-Based Floor Plan Generation',
    category: 'Generative Design · Machine Learning',
    icon: LayoutGrid,
    accent: 'accent',
    description:
      'An AI-based system that generates residential 1BHK floor plans from user-provided plot dimensions and spatial requirements.',
    highlights: [
      'Automatic room placement with connectivity and spatial constraints',
      'Geometric overlap checking and door placement logic',
      'Multiple layout variations, rendered as colour-coded floor plans',
      'Worked with the ResPlan dataset (CSV and pickle files)',
    ],
    metrics: [
      { value: '0.4835', label: 'overall MAE (reported)' },
      { value: '1BHK', label: 'layouts' },
    ],
    tech: ['Python', 'Machine Learning', 'Google Colab', 'Geometric Computation', 'Data Processing'],
    links: { github: PLACEHOLDER, live: PLACEHOLDER }, // TODO: add repo / demo URLs
  },
]

export const research = {
  title: 'FauxHate: Hindi-English Code-Mixed Hate Speech Detection',
  org: 'Delhi Technological University (DTU)',
  supervisor: 'Dr. Minni Jain',
  domain: 'AI · Machine Learning · Natural Language Processing',
  summary:
    'Research on detecting fake hate-related content in Hindi-English code-mixed social media comments using transformer-based models and multi-task learning.',
  work: [
    'Dataset preprocessing',
    'Data cleaning and augmentation',
    'Text classification',
    'Transformer-based NLP models',
    'Multi-task learning',
    'Model experimentation',
    'Performance evaluation',
  ],
  dataset: [
    { value: '21,011', label: 'original comments' },
    { value: '24,963', label: 'after augmentation' },
    { value: '1,907', label: 'fake (original)' },
    { value: '5,859', label: 'fake (augmented)' },
  ],
  split: '80% train · 10% validation · 10% test',
  tasks: [
    'Fake detection (binary)',
    'Hate detection (binary)',
    'Target detection (individual, organization, religion)',
    'Severity detection (low, medium, high)',
  ],
  models: ['TF-IDF', 'Word2Vec', 'FastText', 'BERT', 'mBERT', 'HateBERT', 'DeBERTa-v3', 'XLM-RoBERTa', 'RAG'],
  results: [
    { label: 'Fake detection', f1: 0.92, color: 'accent2' },
    { label: 'Hate detection', f1: 0.73, color: 'accent' },
    { label: 'Target detection', f1: 0.7, color: 'accent3' },
    { label: 'Severity detection', f1: 0.61, color: 'accent4' },
  ],
  auc: [
    { label: 'Fake detection ROC-AUC', value: '0.966' },
    { label: 'Hate detection ROC-AUC', value: '0.974' },
  ],
  finding: 'Dataset augmentation improved fake-detection F1 from approximately 0.67 to 0.92.',
}

// Experience entries: distinguish completed internships, research, and offers.
export const internships = [
  {
    role: 'Research Intern — Natural Language Processing',
    org: 'Delhi Technological University (DTU)',
    icon: Microscope,
    status: 'Research internship · Completed',
    period: 'Dec 2025 – May 2026',
    mentor: 'Under the guidance of Dr. Minni Jain',
    points: [
      'Worked on multilingual, Hindi–English code-mixed text analysis for fake-content and hate-speech detection.',
      'Contributed to dataset preparation and augmentation, and experimented with transformer-based NLP models.',
      'Explored a multi-task classification approach for fake content, hate speech, target identification, and severity prediction.',
    ],
    tags: ['NLP', 'Python', 'Transformers', 'XLM-RoBERTa'],
    show: true,
  },
  {
    role: 'AI Intern',
    org: 'InAmigos Foundation',
    icon: Brain,
    status: 'Internship · Completed',
    period: '22 Aug 2026 – 04 Sep 2026',
    mentor: '',
    points: [
      'Completed the Artificial Intelligence internship and its assigned AI-focused tasks.',
      'Gained exposure to AI concepts and their practical applications.',
    ],
    tags: ['Artificial Intelligence'],
    show: true,
  },
  {
    role: 'Python Developer Intern',
    org: 'Khichad Technologies',
    icon: Code2,
    status: 'Internship · Completed',
    period: '01 Oct 2026 – 15 Nov 2026',
    mentor: '',
    points: [
      'Built automation workflows using n8n and Python to streamline repetitive tasks and connect application processes.',
    ],
    tags: ['Python', 'n8n', 'Workflow Automation'],
    show: true,
  },
  {
    role: 'AI / ML Intern',
    org: 'Homzyy',
    icon: Brain,
    status: 'Internship · In progress',
    period: '01 Oct 2026 – 31 Dec 2026',
    mentor: '',
    points: [
      'Working on ResPlan, a project focused on AI-assisted floor plan generation from plot dimensions and spatial requirements.',
    ],
    tags: ['ResPlan', 'Python', 'AI/ML', 'Floor Plan Generation'],
    show: true,
  },
]

export const achievements = [
  {
    group: 'Academic',
    icon: GraduationCap,
    accent: 'accent2',
    items: [
      { value: '99.14', label: 'JEE Main percentile' },
      { value: 'AIR 13,800', label: 'JEE Main' },
      { value: 'AIR 13,667', label: 'JEE Advanced' },
      { value: '95.33%', label: 'Class 10' },
      { value: '87.20%', label: 'Class 12' },
    ],
  },
  {
    group: 'Technical',
    icon: Cpu,
    accent: 'accent',
    items: [
      { value: 'SIH 2026', label: 'College-level shortlist, SmartInspect-AI' },
      { value: 'NLP', label: 'Multilingual NLP research project at DTU' },
      { value: 'FinTech', label: 'AI-powered fraud detection system' },
    ],
  },
  {
    group: 'Leadership & Venture',
    icon: Trophy,
    accent: 'accent3',
    items: [
      { value: 'Team Lead', label: 'SmartInspect-AI' },
      { value: 'FinTech Fusion', label: 'Involved in organizing' },
      { value: 'FirstDraft', label: 'Initiated a digital product venture' },
    ],
  },
]

export const leadership = [
  {
    title: 'Business Club, NIT Srinagar',
    icon: Users,
    accent: 'accent',
    text: 'Serving as a Student Executive, contributing to the planning and execution of student-focused business events, competitions and learning activities. Collaborating with club members to coordinate event content and create engaging experiences for participants.',
    bullets: [
      'FinTech Fusion: helped organize a financial-awareness experience around “Spend Wisely”, alongside the FinTech Game Arena and FinTech Gauntlet.',
      'Designed and coordinated interactive activities including Spot the Scam and Guess the Company, helping students explore financial literacy, business models and technology companies.',
      'Supported a session introducing business, technology and career roles, connecting students with practical industry perspectives.',
      'Organized logo-based business quizzes featuring NVIDIA, Citadel, Jane Street, Two Sigma, Optiver, Razorpay, Zerodha, CRED, Oliver Wyman and Huawei.',
      'Case Clash: contributed to the organization of the case-based competition conducted under the Business Club, giving participants an opportunity to engage with business problems and structured thinking.',
    ],
  },
  {
    title: 'Technology Club, NIT Srinagar',
    icon: Cpu,
    accent: 'accent2',
    text: 'Contribute to the Technology Club’s student community through participation in technology-oriented college activities and collaborative initiatives. Interested in helping create opportunities for students to explore emerging technologies, share ideas and learn together.',
    bullets: [],
  },
]

export const firstdraft = {
  name: 'FirstDraft',
  icon: Rocket,
  description:
    'A digital product venture providing creative digital resources and ready-to-use assets, distributed through Beacon.',
  objective:
    'To create and distribute useful digital resources while exploring opportunities in the digital products industry.',
  products: ['Digital Templates', 'Canva Templates', 'Images', 'Videos', 'Creative Assets'],
  areas: [
    'Digital Product Creation',
    'Branding',
    'Creative Content',
    'Product Strategy',
    'Digital Marketing',
    'Online Business Development',
  ],
}

export const softSkills = [
  'Leadership',
  'Communication',
  'Team Management',
  'Problem Solving',
  'Critical Thinking',
  'Analytical Thinking',
  'Project Management',
  'Event Organization',
  'Presentation Skills',
  'Collaboration',
  'Adaptability',
  'Creative Thinking',
  'Entrepreneurial Mindset',
]

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'internships', label: 'Internships' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
]
