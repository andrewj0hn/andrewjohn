// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import './ProjectListDetail.css';

type Props = {
  id: number,
  title: string,
  text: string,
  images: Array<string>,
};

const ProjectListDetail = ({ id, title, text, images }: Props) => (
  <Link to={`${ROUTES.DETAIL}/${id}`} className="ProjectListDetail">
    <div className="Title">
      <h2>{title}</h2>
    </div>
    <div className="Image" style={{ gridTemplateColumns: `repeat(${images.length}, 1fr)` }}>
      { images.map(image => (
        <img src={image} alt={title} key={image} />
      )) }
    </div>
  </Link>
);

export default ProjectListDetail;
