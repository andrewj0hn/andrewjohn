// @flow
import React from 'react';
import './Main.css';
import ProjectListDetail from '../ProjectListDetail';

const projects = [
  {
    id: 1,
    title: 'Voetbalprimeur',
    links: ['https://voetbalprimeur.nl'],
  },
  {
    id: 2,
    title: 'GPBlog',
    links: ['https://gpblog.com'],
  },
  {
    id: 3,
    title: 'Chepicap',
    links: ['https://chepicap.com'],
  },
  {
    id: 4,
    title: 'Haringvliet',
    links: [],
  },
  {
    id: 5,
    title: 'BabyBytes App',
    links: [
      'https://play.google.com/store/apps/details?id=com.de.babybytesvoeding',
      'https://itunes.apple.com/nl/app/zwangerschaps-voedingswijzer/id1248716004?mt=8',
    ],
  },
];

const Main = () => (
  <div className="Main">
    { projects.map(project => (
      <ProjectListDetail key={project.id} {...project} />
    ))}
  </div>
);

export default Main;
