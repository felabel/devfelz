import { resume } from '@/constants/resume';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../Utils/SEO/helmet';
import resumePDF from '@/assets/files/01Felicity_resume.pdf';
import './resume.scss';

type ResumeProp = {
  menu?: string[];
  activeMenu: (arg: number) => void;
};

export default function Resume(props: ResumeProp) {
  useEffect(() => {
    props.activeMenu(0);
  }, []);

  return (
    <div className="resume">
      <Helmet title="My Resume" name="Felicity Abel Resume" content="Felicity Abel - Product-Minded Frontend Engineer Resume" />
      <div className="resume_container">
        <div className="top_row">
          <div>
            <h2>{resume.name}</h2>
            <p className="subheading">{resume.title}</p>
          </div>
          <div className="buttons">
            <a
              href={resumePDF}
              download="01Felicity_resume.pdf"
              rel="noopener noreferrer"
            >
              <small>
                <i className="fas fa-download"></i> <span>Download </span>
              </small>
            </a>
          </div>
        </div>

        <div className="summary">
          {resume.bio.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
          ))}
        </div>

        <div className="divider">
          <p>Skills</p>
          <span></span>
        </div>

        <div className="skills">
          {resume.skills.map((skill, key) => (
            <p key={`skill-${key}`} className="">
              <span className="pr-2 font-bold text-white">{skill.title}: </span>{' '}
              {skill.body.map((val, i) => `${val}, `)}
            </p>
          ))}
        </div>

        <div className="divider">
          <p>Experience</p>
          <span></span>
        </div>

        <div className="exp_container">
          {resume.workExperiences.map((experience, key) => (
            <section className="experience" key={key}>
              <p className="title">
                {experience.company} - {experience.role}
                <span>
                  <br /> {experience.startDate} - {experience.endDate ? experience.endDate : 'CURRENT'}
                </span>
              </p>
              <article className="description">
                {experience.achievements.map((achievement, i) => (
                  <p key={`achievement-${i}`}>
                    <span>&#8594;</span>
                    {achievement}
                  </p>
                ))}
              </article>
            </section>
          ))}
        </div>

        <div className="divider">
          <p>Education & Certifications</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            {resume.educations.map((education, key) => (
              <div key={`education-${key}`}>
                <p className="title">
                  {education.title}
                  <br />
                  <span>
                    {education.startDate ? `${education.startDate} - ` : ''} {education.endDate}
                  </span>
                </p>
                {education.relevant.length > 0 && (
                  <article className="description">
                    {education.relevant.map((item, i) => (
                      <p key={`education-detail-${i}`}>
                        <span>&#8594;</span>
                        {item}
                      </p>
                    ))}
                  </article>
                )}
              </div>
            ))}
            {resume.certifications.map((certification, key) => (
              <p key={`certification-${key}`} className="title">
                {certification.title} <br />
                <span>{certification.date}</span>
              </p>
            ))}
          </section>
        </div>

        <div className="divider">
          <p>Languages</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            {resume.languages.map((language, key) => (
              <p key={key} className="title">
                {language.name} — <span>{language.level}</span>
              </p>
            ))}
          </section>
        </div>

        <div className="divider">
          <p>Hobbies</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            <article className="description">
              <p>
                {resume.hobbies.map((hobby, key) => (
                  <span key={key}>{hobby}{key < resume.hobbies.length - 1 ? ', ' : ''}</span>
                ))}
              </p>
            </article>
          </section>
        </div>
      </div>

      <div className="go_button_container">
        <Link to="/projects">
          <button>
            <b>➜ </b> Projects
          </button>
        </Link>
        <Link to="/contact">
          <button>Contact ➜ </button>
        </Link>
      </div>
    </div>
  );
}
