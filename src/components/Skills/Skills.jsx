// @flow
import React from 'react';
import './Skills.css';

type Props = {
  skills: Array<string>,
}

const Skills = ({ skills }: Props) => (
  <ul className="Skills">
    { skills.map(skill => (
      <li>{skill}</li>
    ))}
  </ul>
);

export default Skills;
