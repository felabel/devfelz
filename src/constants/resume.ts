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
  'Results-driven Frontend Engineer with 5 years of experience driving measurable business growth through high-performance web applications in e-commerce and fintech. Delivered 20% sales increase at Pricepally and contributed to ₦1 billion monthly revenue milestone at Bumpa. Expert in React.js, TypeScript, and building scalable, accessible products that solve real user problems and generate bottom-line impact.',
  'I transform complex technical challenges into elegant, user-focused solutions that drive engagement and revenue. By combining deep technical expertise with business acumen, I consistently deliver features that exceed performance benchmarks, improve key metrics, and create lasting value for users and stakeholders.',
  'Committed to continuous growth and innovation, I thrive on solving challenging problems that make a tangible difference. I\'m passionate about leveraging technology to build products that not only work flawlessly but also empower users and accelerate business success.',
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
      'Drove ₦1 billion in monthly sales by architecting and delivering high-performance frontend features with React, Redux, and TypeScript—directly contributing to Bumpa\'s revenue milestone and platform scalability.',
      'Generated ₦2 million in additional revenue within 3 months by reviving and reimagining a deprecated SMS and email campaign feature, enabling merchants to execute targeted outreach campaigns that drove messaging credit purchases and increased repeat customer engagement.',
      'Accelerated merchant marketing workflows by 40% through custom email sales templates, reducing campaign setup time and improving communication efficiency across the platform.',
      'Strengthened brand presence and user acquisition by building and maintaining the official Bumpa website and company pages, resulting in improved SEO rankings and conversion rates.',
      'Celebrated 10,000+ merchant milestones and increased annual platform engagement by engineering Bumpa\'s 2023 and 2024 yearly wrapped experiences with personalized data visualizations.',
      'Increased new feature adoption by 35% through strategic modal organization flow that guided users through product announcements and onboarding, reducing feature discovery friction.',
      'Scaled partner ecosystem management by developing the Bumpa Champions and Partners dashboard with real-time analytics, enabling data-driven decisions and improved partner satisfaction.',
      'Expanded platform capabilities by shipping mission-critical features—CRM dashboards, multi-location management, POS systems, and ad integrations—that unlocked new revenue streams for merchants.',
      'Improved platform accessibility and search visibility by implementing WCAG-compliant UI components and SEO best practices, expanding market reach to underserved user segments.',
      'Enhanced team velocity by 25% through mentoring a frontend intern in modern JavaScript, React, and development workflows, building sustainable engineering capacity.',
    ],
  },
  {
    company: 'Regxta',
    role: 'Frontend Engineer',
    startDate: 'SEP 2022',
    endDate: 'MAR 2023',
    achievements: [
      'Transformed operational efficiency by leading frontend development of a comprehensive fintech platform, enabling seamless management of loans, agents, customers, and transactions—reducing processing time and improving service delivery.',
      'Eliminated 70% of manual workflows by architecting an Admin Dashboard with full CRUD functionality, saving 15+ hours per week in administrative overhead and reducing human error.',
      'Accelerated product delivery by 30% through cross-functional collaboration with product, design, and backend teams, ensuring technical solutions aligned with business objectives and user pain points.',
      'Enhanced code maintainability and team productivity by establishing clean code standards, reusable component libraries, and performance-optimized architecture in React.js and TypeScript—reducing bug rates and onboarding time.',
    ],
  },
  {
    company: 'Pricepally',
    role: 'Frontend Engineer',
    startDate: 'SEP 2022',
    endDate: 'MAR 2023',
    achievements: [
      'Generated 20% increase in online sales by completely rebuilding the grocery platform with React.js and Redux, modernizing the tech stack and delivering a faster, more intuitive shopping experience.',
      'Reduced page load times by 45% and improved mobile responsiveness, directly decreasing cart abandonment rates and increasing customer satisfaction scores.',
      'Shortened feature release cycles by 50% through strategic collaboration with UI/UX designers, product managers, and backend engineers—translating business requirements into scalable, high-quality code.',
      'Expanded market reach across all devices and browsers by implementing component-based architecture with full cross-platform compatibility, capturing previously lost mobile and tablet users.',
    ],
  },
  {
    company: 'Taquatech',
    role: 'Frontend Engineer',
    startDate: 'JAN 2020',
    endDate: 'MAY 2021',
    achievements: [
      'Democratized digital education access by designing and developing a scalable e-learning platform for high schools and universities, enabling institutions to reach 3x more students through online learning channels.',
      'Built sustainable engineering talent pipeline by leading a 6-month coaching program for 5 interns, achieving 30% higher retention rate and developing future team contributors proficient in HTML, CSS, and JavaScript.',
      'Ensured consistent on-time project delivery across multiple initiatives through effective cross-functional collaboration, maintaining 100% sprint completion rate and stakeholder satisfaction.',
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
