import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Project from '../Utils/Project/project';
import Helmet from '../Utils/SEO/helmet';
import './projects.scss';

type Project = {
  id: string;
  title: string;
  description: string;
  github?: string;
  github2?: string;
  live?: string;
  stack: string;
  isPrivate: boolean;
  isLive: boolean;
};

type Prop = {
  menu?: string[];
  activeMenu: (arg: number) => void;
};

const projects: Project[] = [
  {
    id: uuid(),
    title: 'Bumpa Website',
    description: 'Official Bumpa website showcasing innovative e-commerce solutions for businesses.',
    github: '',
    live: 'https://www.getbumpa.com/',
    stack: 'Nextjs + TailwindCSS',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Welisten Feedback App',
    description: 'A responsive web app for collecting and managing user feedback with upvoting and status tracking.',
    github: 'https://github.com/felabel/welisten-ai',
    live: 'https://welisten-feedback-ai.vercel.app/',
    stack: 'React + TypeScript',
    isPrivate: false,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Welisten Feedback Backend',
    description: 'Backend API for Welisten feedback app with MongoDB, Mongoose and AI integration.',
    github: 'https://github.com/felabel/welisten-ai-backend',
    live: '',
    stack: 'Node.js + MongoDB + Mongoose',
    isPrivate: false,
    isLive: false,
  },
  {
    id: uuid(),
    title: 'CrossPay Borderless',
    description: 'Borderless payment platform for seamless cross-border transactions and payments.',
    github: '',
    live: 'https://crosspay-borderless.vercel.app/dashboard',
    stack: 'Nextjs + TailwindCSS',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'WishWeaver',
    description: 'An online platform for creating group appreciation cards with contributions from multiple people.',
    github: '',
    live: 'https://mywishweaver.com',
    stack: 'Nextjs + TailwindCSS + Redux',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Bumpa E-commerce Webapp',
    description: 'A business management app that helps entrepreneurs manage sales, inventory & operations.',
    github: '',
    live: 'https://app.getbumpa.com',
    stack: 'React + TypeScript + Redux',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Lareine Gold',
    description: 'Africa-focused consulting firm supporting professional  firms with marketing and business development strategies.',
    github: '',
    live: 'https://www.lareinegold.com',
    stack: 'React + TypeScript',
    isPrivate: true,
    isLive: true,
  },
 
  {
    id: uuid(),
    title: 'Bumpa Industry Report',
    description: 'Data-driven microsite showcasing Nigeria\'s e-commerce trends based on 347,479+ orders.',
    github: '',
    live: 'https://www.getbumpa.com/e-commerce-reports-2024',
    stack: 'NextJS',
    isPrivate: true,
    isLive: true,
  },


  {
    id: uuid(),
    title: 'Aruwa Capital Website',
    description: 'Modern platform showcasing the firm\'s investment philosophy, portfolio, and thought leadership.',
    github: '',
    live: 'https://aruwacapital.com',
    stack: 'NextJs + TailwindCSS',
    isPrivate: true,
    isLive: true,
  },
];

export default function Projects(props: Prop) {
  useEffect(() => {
    props.activeMenu(1);
  }, []);

  return (
    <div className="project">
      <Helmet title="My Projects" name="Selected Projects" content="Selected Felicity Abel's Projects" />
      <div className="group portfolio_showcase">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>

      <div className="go_button_container">
        <Link to="/">
          <button>
            <b>➜ </b> Home
          </button>
        </Link>
        <Link to="/resume">
          <button>Résumé ➜ </button>
        </Link>
      </div>
    </div>
  );
}
