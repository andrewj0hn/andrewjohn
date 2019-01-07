// @flow
import React from 'react';
import './ProjectListDetail.css';

type Props = {
  title: string,
  links: Array<string>,
};

const ProjectListDetail = ({ title, links }: Props) => (
  <div className="ProjectListDetail">
    <div className="Title">
      <h2>{title}</h2>
    </div>
    <ul>
      { links.length > 0 && links.map(link => (
        <li key={link}>
          <a href="{link}">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectListDetail;
