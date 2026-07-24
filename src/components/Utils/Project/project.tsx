import React, { useEffect, useRef, useState } from 'react';
import './project.scss';

interface IProject {
  id: string;
  title: string;
  description: string;
  github?: string;
  github2?: string;
  live?: string;
  stack: string;
  isPrivate: boolean;
  isLive: boolean;
}

function ProjectLinks({
  isLive,
  live,
  isPrivate,
  github,
  github2,
}: Pick<IProject, 'isLive' | 'live' | 'isPrivate' | 'github' | 'github2'>) {
  return (
    <>
      {isLive ? (
        <small>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <i className="far fa-eye"></i> Live
          </a>
        </small>
      ) : null}

      {!isPrivate && (
        <span>
          <small>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-code-branch"></i> {github2 ? 'FE Code' : 'Code'}
            </a>
          </small>
          {github2 ? (
            <small>
              <a href={github2} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-code-branch"></i> BE Code
              </a>
            </small>
          ) : null}
        </span>
      )}
    </>
  );
}

export default function Project(props: IProject) {
  const { title, description, github, live, stack, isPrivate, isLive, github2 } = props;
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const element = descriptionRef.current;
    if (!element) return;

    const checkTruncation = () => {
      setIsTruncated(element.scrollHeight > element.clientHeight + 1);
    };

    checkTruncation();
    window.addEventListener('resize', checkTruncation);

    return () => window.removeEventListener('resize', checkTruncation);
  }, [description]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsModalOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="box_container md:hover:shadow-xs md:hover:z-50">
        <div className="box">
          <div className="project_details">
            <h3>{title}</h3>

            <p ref={descriptionRef} className="project_description">
              {description}
            </p>

            {isTruncated && (
              <button type="button" className="see_more_btn" onClick={() => setIsModalOpen(true)}>
                See more
              </button>
            )}

            <small className="project_stack">{stack}</small>
          </div>

          <div className="project_links">
            <ProjectLinks
              isLive={isLive}
              live={live}
              isPrivate={isPrivate}
              github={github}
              github2={github2}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="project_modal_overlay" onClick={() => setIsModalOpen(false)} role="presentation">
          <div
            className="project_modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-modal-title-${props.id}`}
          >
            <button
              type="button"
              className="project_modal_close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close project details"
            >
              ×
            </button>

            <h3 id={`project-modal-title-${props.id}`}>{title}</h3>
            <p>{description}</p>
            <small className="project_stack">{stack}</small>

            <div className="project_links">
              <ProjectLinks
                isLive={isLive}
                live={live}
                isPrivate={isPrivate}
                github={github}
                github2={github2}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
