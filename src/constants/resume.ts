export type WorkExperience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};

export type Skill = {
  title: string;
  body: string[];
};

export type Education = {
  title: string;
  startDate?: string;
  endDate: string;
  relevant: string[];
};

export type Certification = {
  title: string;
  date: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Resume = {
  name: string;
  title: string;
  bio: string[];
  workExperiences: WorkExperience[];
  skills: Skill[];
  educations: Education[];
  certifications: Certification[];
  languages: Language[];
  hobbies: string[];
};

const name = 'Felicity Abel';

const title = 'Product-Minded Frontend Engineer | React · TypeScript · AI-Native Products';

const bio = [
  'Frontend engineer with 5 years of experience owning product experiences end-to-end, from architecture through shipped, measurable outcomes — including a launch that contributed to ₦1 billion in monthly sales at Bumpa and a rebuild that cut manual workflows by 70% at Regxta. Deep React/TypeScript expertise paired with growing hands-on experience in Next.js, React Native, and PWAs, plus early exploration of AI-native product patterns (RAG-based workflows, Node.js backend integration). Comfortable building in ambiguity, moving fast in early-stage environments, and translating complex functionality into simple, intuitive interfaces.',
];

const workExperiences: WorkExperience[] = [
  {
    company: 'Bumpa',
    role: 'Software Engineer (Frontend)',
    startDate: 'MAR 2023',
    endDate: 'PRESENT',
    achievements: [
      'Delivered scalable, high-performing frontend features in React, Redux, and TypeScript that helped Bumpa reach ₦1 billion in sales within a single month.',
      'Led development of mission-critical tools including CRM dashboards, multi-location management, POS systems, and Google/Facebook ad integrations.',
      'Architected and shipped responsive UI components with a strong emphasis on WCAG accessibility, SEO, and performance optimization.',
      'Wrote modular, reusable code using component-driven design systems; partnered closely with product and backend engineers to scope features, plan sprints, and align on business needs.',
      'Mentored a frontend intern on modern JavaScript, React, and engineering best practices, contributing to overall team capacity.',
    ],
  },
  {
    company: 'Regxta',
    role: 'Frontend Engineer (Team Lead)',
    startDate: 'SEP 2022',
    endDate: 'MAR 2023',
    achievements: [
      'Led the frontend team in building a fintech web application supporting loan, agent, customer, and expense management.',
      'Architected and implemented a comprehensive Admin Dashboard with full CRUD functionality, cutting manual workflows by over 70%.',
      'Collaborated cross-functionally with product managers, designers, and backend developers to align delivery with business goals and user needs.',
      'Championed clean code practices, reusable components, and performance-optimized architecture using React.js and TypeScript.',
    ],
  },
  {
    company: 'Taquatech',
    role: 'Frontend Engineer',
    startDate: 'JAN 2020',
    endDate: 'MAY 2021',
    achievements: [
      'Designed and developed an e-learning solution for high schools and universities, improving digital education delivery.',
      'Led a 6-month coaching program for a class of 5 interns covering HTML, CSS, and JavaScript, driving a 30% increase in intern retention.',
      'Collaborated with cross-functional teams to ensure timely delivery of software solutions.',
    ],
  },
];

const skills: Skill[] = [
  {
    title: 'Frontend',
    body: ['React.js', 'TypeScript', 'Next.js', 'React Native', 'Redux', 'React Query', 'Context API', 'Apollo/GraphQL'],
  },
  {
    title: 'Mobile & Cross-Platform',
    body: ['React Native', 'Progressive Web Apps (PWAs)'],
  },
  {
    title: 'AI-Native Product Work',
    body: ['RAG-based workflows (exploratory)', 'designing UI for AI-powered features', 'Node.js integration'],
  },
  {
    title: 'Quality & Testing',
    body: ['Jest', 'Cypress', 'React Testing Library', 'code review', 'CI-driven QA'],
  },
  {
    title: 'Practice',
    body: ['Web accessibility (WCAG)', 'performance optimization', 'SEO', 'component-driven design systems'],
  },
  {
    title: 'Also comfortable with',
    body: ['Node.js', 'Express', 'MongoDB', 'Supabase'],
  },
  {
    title: 'Tooling',
    body: ['Git/GitHub', 'ClickUp', 'Agile/Scrum'],
  },
];

const educations: Education[] = [
  {
    title: 'Software Engineering Training — ALX Africa',
    endDate: 'OCT 2024',
    relevant: [
      'Frontend specialization: modern JavaScript (ES6), TypeScript, React.js, Redux, advanced HTML/CSS, responsive design.',
      'Backend specialization: Node.js, Python, MySQL, NoSQL, Redis, authentication, caching, and queuing systems.',
    ],
  },
  {
    title: 'BSc. Home Economics — University of Uyo, Nigeria',
    startDate: 'MAY 2015',
    endDate: 'MAY 2021',
    relevant: [],
  },
];

const certifications: Certification[] = [
  {
    title: 'Software Engineering Certificate, ALX Africa',
    date: 'OCT 2024',
  },
];

const languages: Language[] = [
  {
    name: 'English',
    level: 'Native',
  },
  {
    name: 'French',
    level: 'A2',
  },
];

const hobbies = ['Learning', 'Reading', 'Coding', 'Exploring new technologies'];

export const resume: Resume = {
  name,
  title,
  bio,
  workExperiences,
  skills,
  educations,
  certifications,
  languages,
  hobbies,
};
