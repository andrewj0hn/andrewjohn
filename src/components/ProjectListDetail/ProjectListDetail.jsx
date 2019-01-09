// @flow
import React from 'react';
import './ProjectListDetail.css';

type Props = {
  title: string,
  text: string,
  skills: Array<string>,
  links: Array<string>,
};

const ProjectListDetail = ({ title, links, text, skills }: Props) => (
  <div className="ProjectListDetail">
    <div className="Title">
      <h2>{title}</h2>
    </div>
    <p>{text}</p>
    <div className="Skills">
      <h4>Skills</h4>
      <ul>
        { skills.length > 0 && skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
    <div className="links">
      <h4>Links</h4>
      <ul>
        { links.length > 0 && links.map(link => (
          <li key={link}>
            <a href={link} target="_blank">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProjectListDetail;
