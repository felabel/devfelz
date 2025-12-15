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
  bio: string[];
  workExperiences: WorkExperience[];
  skills: Skill[];
  educations: Education[];
  certifications: Certification[];
  languages: Language[];
  hobbies: string[];
};

const name = 'Felicity Abel';

const bio = [
  'Frontend engineer with 5 years of experience delivering optimized, user-focused web applications in e-commerce and fintech. Skilled in React.js, TypeScript, and automated testing. Increased grocery store sales by 20% through rebuilding an online grocery store at Pricepally. Contributed to ₦1 billion in sales in a month at Bumpa. Adept at collaborating with cross-functional teams to deliver scalable, accessible applications.',
  'I am passionate about building clean, efficient, and user-focused software solutions. With a commitment to innovation and attention to detail, I strive to create applications that not only perform seamlessly but also deliver exceptional user experiences.',
  'I am excited to continue learning and growing as a software engineer, and I am eager to apply my skills and knowledge to tackle challenging problems and make a positive impact on the world.',
];

const workExperiences: WorkExperience[] = [
  // {
  //   company: 'WishWeaver',
  //   role: 'Frontend Developer - Freelance',
  //   startDate: 'AUG 2025',
  //   endDate: 'PRESENT',
  //   achievements: [
  //     'Developed and maintained the frontend of WishWeaver, an online platform for creating group appreciation cards with contributions from multiple people.',
  //     'Built responsive, user-friendly interfaces using React, TypeScript, and modern web technologies.',
  //     'Implemented features for card customization, collaborative contributions, and multimedia messaging (text, photos, videos, GIFs).',
  //     'Collaborated with designers and backend engineers to deliver seamless user experiences across all devices.',
  //     'Optimized application performance and ensured accessibility standards compliance.',
  //   ],
  // },
  {
    company: 'Bumpa',
    role: 'Software Engineer',
    startDate: 'MAR 2023',
    endDate: 'PRESENT',
    achievements: [
      'Played a key engineering role in helping Bumpa reach ₦1 billion in sales within a month by delivering scalable and high-performing frontend features using React, Redux, and TypeScript.',
      'Led development of mission-critical features: CRM dashboards, multi-location management, POS systems, and Google/Facebook ad integrations.',
      'Architected and shipped responsive UI components with strong emphasis on WCAG accessibility, SEO, and performance optimization.',
      'Wrote modular, reusable code using component-driven design systems and collaborated with product, design, and backend engineers to align with business needs. Developed E-commerce Solutions: Delivered key features such as multi-location management, CRM tools, point-of-sale software, and ad integrations (Google/Facebook) to streamline business operations.',
      'Cross-functional collaboration: Partnered with product, design, and backend teams to scope features, plan sprints, and ensure scalable, user-centric solutions through thorough handovers and iterations.',
      'Mentored a frontend intern, guiding them through modern JavaScript, React, and development best practices — contributing to team capacity and skill growth.',
    ],
  },
  {
    company: 'Regxta',
    role: 'Frontend Engineer',
    startDate: 'SEP 2022',
    endDate: 'MAR 2023',
    achievements: [
      'Led the frontend team in developing a robust fintech web application, providing tools for managing loans, agents, customers, transactions, and expenses.',
      'Architected and implemented a comprehensive Admin Dashboard with full CRUD functionality, reducing manual workflows by over 70%.',
      'Collaborated cross-functionally with product managers, designers, and backend developers to ensure alignment with business goals and user needs.',
      'Championed clean code practices, reusable components, and performance-optimized architecture using React.js and TypeScript.',
    ],
  },
  {
    company: 'Pricepally',
    role: 'Frontend Engineer',
    startDate: 'SEP 2022',
    endDate: 'MAR 2023',
    achievements: [
      'Rebuilt the company\'s online grocery platform by migrating from plain JavaScript to a fully optimized React.js + Redux web application.',
      'Enhanced platform performance, responsiveness, and user experience, resulting in a 20% increase in online sales.',
      'Collaborated with UI/UX designers, product managers, and backend engineers to translate business goals into scalable, maintainable code.',
      'Implemented component-based architecture and ensured cross-browser/mobile compatibility across key pages and flows.',
    ],
  },
  {
    company: 'Taquatech',
    role: 'Frontend Engineer',
    startDate: 'JAN 2020',
    endDate: 'MAY 2021',
    achievements: [
      'Worked as a Frontend Engineer to design and develop an e-learning solution tailored for high schools and universities, enhancing their ability to deliver digital education effectively.',
      'Led a 6-month coaching program for a class of 5 interns, teaching HTML, CSS, and JavaScript, which resulted in a 30% increase in intern retention rate.',
      'Actively participated in software development projects and collaborated with cross-functional teams to ensure timely delivery of solutions.',
    ],
  },
];

const skills: Skill[] = [
  {
    title: 'Frontend',
    body: ['ReactJS', 'TypeScript', 'NextJS', 'React Query (RTK)', 'Redux', 'Context API', 'Web Accessibility & Performance optimization', 'Apollo/GraphQL'],
  },
  {
    title: 'Testing/Debugging',
    body: ['Jest', 'Cypress', 'React Testing Library', 'Vitest'],
  },
  {
    title: 'Backend',
    body: ['NodeJS', 'Express', 'MongoDB', 'Supabase'],
  },
  {
    title: 'Tooling and Workflow',
    body: ['Git', 'Clickup', 'Agile Methodologies'],
  },
];

const educations: Education[] = [
  {
    title: 'Software Engineering Training at ALX Africa',
    endDate: 'OCTOBER 2024',
    relevant: [
      'Frontend Development Specialization: Mastered modern JavaScript (ES6), TypeScript, React.js, Redux, advanced HTML/CSS, and responsive design. Completed a Capstone Thesis on "Technological Advancements within the current Mechatronics Industry".',
      'Backend Development Specialization: Developed skills in Node.js, Python, MySQL, NoSQL, Redis, and authentication systems. Implemented solutions for pagination, caching, queuing, and data management, with a strong focus on unit and integration testing.',
    ],
  },
  {
    title: 'B.Sc. Home Economics at University of Uyo, Nigeria',
    startDate: 'MAY 2014',
    endDate: 'MAY 2016',
    relevant: [],
  },
];

const certifications: Certification[] = [
  {
    title: 'Software Engineering certificate, ALX Africa',
    date: 'OCTOBER 2024',
  },
];

const languages: Language[] = [
  {
    name: 'English',
    level: 'NATIVE',
  },
];

const hobbies = ['Learning', 'Reading', 'Coding', 'Exploring new technologies'];

export const resume: Resume = {
  name,
  bio,
  workExperiences,
  skills,
  educations,
  certifications,
  languages,
  hobbies,
};
